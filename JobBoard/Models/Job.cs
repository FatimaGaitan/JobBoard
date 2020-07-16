using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobBoard.Models
{
    [Table("Job")]
    public class Job
    {
        [Key]
        public int Job_ID { get; set; }
        [Required]
        [StringLength(200)]
        public string Job_Title { get; set; }
        [Required]
        [StringLength(350)]
        public string Description { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public DateTime ExpiresAt { get; set; }
    }
}