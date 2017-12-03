using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net;
using System.Text;

namespace xanServant.Controllers
{
    [Produces("application/json")]
    [Route("api/Alert")]
    public class AlertController : Controller
    {
        private static Dictionary<string, Alert> _alerts = new Dictionary<string, Alert>();

        // GET: api/Alert
        [HttpGet]
        public IActionResult Get()
        {
            return new ObjectResult(_alerts.Values);
        }

        // GET: api/Alert/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(string id)
        {
            return new ObjectResult(_alerts[id]);
        }
        
        // POST: api/Alert
        [HttpPost]
        public HttpResponseMessage Post(HttpRequestMessage request, [FromBody]Alert value)
        {
            String UUID = Guid.NewGuid().ToString();
            value.id = UUID;

            if (value.creationDate == null)
            {
                value.creationDate = DateTime.Now;
            }

            _alerts[value.id] = value;

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.Created);
            response.Headers.Location = new Uri(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + value.id);
            response.Headers.Add("id", value.id);

            return response;
        }
        
        // PUT: api/Alert/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]Alert value)
        {
            _alerts[id] = value;
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _alerts.Remove(id);
        }
    }

    public class Alert
    {
        public string id { get; set; }

        public string name { get; set; }

        public string alertAbstract { get; set; }

        public string description { get; set; }

        public DateTime creationDate { get; set; }

        public DateTime publicationDate { get; set; }

        public string[] tags { get; set; }

        public string[] attachedFiles { get; set; }

    }
}
