﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactShop.Controllers
{
    public class HomeController : Controller
    {
        [Route("home")]
        public IActionResult Index()
        {
            return View();
        }
    }
}