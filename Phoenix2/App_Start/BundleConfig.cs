using System.Web.Optimization;

namespace Phoenix2.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles").Include(
                       "~/bundles/runtime.*",
                       "~/bundles/zone.*",
                       "~/bundles/ployies.*",
                       "~/bundles/main.*"));
            bundles.Add(new StyleBundle("~/Content/Styles").Include("~/bundles/styles.*"));
        }
    }
}