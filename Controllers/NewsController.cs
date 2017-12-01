using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace xanServant.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
        private static NewsSummary[] _summaries = new NewsSummary[]
        {
            new NewsSummary{ newsNumber = "#543", type = NewsType.Private, name = "name1", date = new DateTime(2000,2,27)},
            new NewsSummary{ newsNumber = "#1543", type = NewsType.Private, name = "name2", date = new DateTime(2009,5,23)},
            new NewsSummary{ newsNumber = "#3543", type = NewsType.Private, name = "name3", date = new DateTime(2001,6,13)},
            new NewsSummary{ newsNumber = "#5543", type = NewsType.Private, name = "name4", date = new DateTime(2002,7,14)},
            new NewsSummary{ newsNumber = "#76543", type = NewsType.Private, name = "name5", date = new DateTime(2008,9,1)},
            new NewsSummary{ newsNumber = "#3", type = NewsType.Public, name = "name6", date = new DateTime(2005,10,25)},
            new NewsSummary{ newsNumber = "#3443", type = NewsType.Private, name = "name7", date = new DateTime(2004,12,2)},
            new NewsSummary{ newsNumber = "#653", type = NewsType.Private, name = "name8", date = new DateTime(2017,11,4)}
        };

        [HttpGet("[action]")]
        public IActionResult GetNewsSummaries()
        {
            return new ObjectResult(_summaries);
        }

    }

    public enum NewsType
    {
        Private, Public
    }

    public class NewsSummary
    {
        public string newsNumber { get; set; }
        public NewsType type { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
    }
}
