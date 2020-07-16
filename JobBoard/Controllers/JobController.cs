using JobBoard.Models;
using JobBoard.Models.ViewModels;
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

        public ActionResult _AddJob()
        {
            return PartialView();
        }

        public ActionResult SaveJob(JobVM form)
        {
            try
            {
                Job model = new Job();
                model.Job_Title = form.Job_Title;
                model.Description = form.Description;
                model.CreatedAt = DateTime.Now;
                model.ExpiresAt = form.ExpiresAt;
                db.Job.Add(model);
                db.SaveChanges();
                return Json(new { e = 1, msj = "Job saved sucessfully" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json(new { e = 0, msj = "Job not saved, something went wrong." }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}