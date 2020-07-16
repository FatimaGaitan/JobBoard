using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace JobBoard.Models
{
    public class JobDbContext: DbContext
    {
        public JobDbContext(): base("JobBoardConnection")
        {
        }
        public DbSet<Job> Job { get; set; }
    }
}