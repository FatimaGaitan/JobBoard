using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobBoard.Models.ViewModels
{
    public class JobVM
    {
        public int Job_ID { get; set; }
        public string Job_Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}