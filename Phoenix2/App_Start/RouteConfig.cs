using Phoenix2.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Phoenix2
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            // This is a catch-all for when no other routes matched. Let the Angular 2 router take care of it
            routes.MapRoute(
                name: "default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                // Set a constraint to only use this for routes identified as server-side routes
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    {
                        return url.PathAndQuery.StartsWith("/Home",
                            StringComparison.InvariantCultureIgnoreCase);
                    })
                }
            );

            routes.MapRoute(
                name: "angular",
                url: "{*.}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            

        }
    }
}
