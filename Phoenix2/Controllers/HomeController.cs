using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Mvc;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace Phoenix2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Session["Bookmarks"] = new List<dynamic>();
            return View();
        }

        // Save repository item in session
        [HttpPost]
        public JsonResult Bookmark([FromBody]dynamic param)
        {
            try
            {
                List<dynamic> bookmarks = (List<dynamic>)(Session["Bookmarks"]);
                bookmarks = bookmarks == null ? new List<dynamic>() : bookmarks;
                bookmarks.Add(param);
                return Json(new HttpResponseMessage((HttpStatusCode.OK)));
            }
            catch
            {
                return Json(new HttpResponseMessage((HttpStatusCode.InternalServerError)));
            }

        }
    }
}