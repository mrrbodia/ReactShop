using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactShop.Entities;
using ReactShop.Services;

namespace ReactShop.Controllers
{
    public class ProductsController : Controller
    {
        private IProductRepository productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [Route("api/[controller]/create")]
        public bool Create(Product product)
        {
            productRepository.AddProduct(product);
            return productRepository.Save();
        }

        [Route("api/[controller]/get")]
        public JsonResult GetProducts()
        {
            var products = new List<Product>()
            {
                new Product
                {
                    Id = 1,
                    Name = "Product1",
                    Description = "Description1"
                },
                new Product
                {
                    Id = 2,
                    Name = "Product2",
                    Description = "Description2"
                }
            };
            return Json(products);
        }
    }
}