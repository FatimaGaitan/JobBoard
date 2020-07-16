using JobBoard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JobBoard.Controllers
{
    public class JobController : Controller
    {
        private JobDbContext db;

        public JobController()
        {
            db = new JobDbContext();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult _GetJobs()
        {
            List<Job> model = new List<Job>();
            model = db.Job.Select(x => x).ToList();
            return PartialView(model);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}