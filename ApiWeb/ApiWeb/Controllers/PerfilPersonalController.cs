using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Web;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace ApiWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilPersonalController : ControllerBase
    {
        [HttpGet]
        public List<Beer> Get()
        {
            List<Beer> beers = new List<Beer>();

            List<SizesA> sizes1 = new List<SizesA>();
            sizes1.Add(new SizesA() { Sizes = 7, Amount = 33 });
            sizes1.Add(new SizesA() { Sizes = 7.5, Amount = 27 });
            sizes1.Add(new SizesA() { Sizes = 8, Amount = 7 });
            sizes1.Add(new SizesA() { Sizes = 8.5, Amount = 67 });
            sizes1.Add(new SizesA() { Sizes = 9, Amount = 25 });
            sizes1.Add(new SizesA() { Sizes = 9.5, Amount = 22 });
            sizes1.Add(new SizesA() { Sizes = 10, Amount = 16 });
            sizes1.Add(new SizesA() { Sizes = 10.5, Amount = 4 });
            sizes1.Add(new SizesA() { Sizes = 11, Amount = 23 });
            sizes1.Add(new SizesA() { Sizes = 11.5, Amount = 96 });
            sizes1.Add(new SizesA() { Sizes = 12, Amount = 35 });

            List<SizesA> sizes2 = new List<SizesA>();
            sizes2.Add(new SizesA() { Sizes = 7, Amount = 56 });
            sizes2.Add(new SizesA() { Sizes = 8, Amount = 209 });
            sizes2.Add(new SizesA() { Sizes = 8.5, Amount = 304 });
            sizes2.Add(new SizesA() { Sizes = 9, Amount = 63 });
            sizes2.Add(new SizesA() { Sizes = 9.5, Amount = 30 });
            sizes2.Add(new SizesA() { Sizes = 10, Amount = 188 });
            sizes2.Add(new SizesA() { Sizes = 10.5, Amount = 256 });
            sizes2.Add(new SizesA() { Sizes = 11, Amount = 232 });

            List<SizesA> sizes3 = new List<SizesA>();
            sizes3.Add(new SizesA() { Sizes = 8.5, Amount = 42 });
            sizes3.Add(new SizesA() { Sizes = 9, Amount = 394 });
            sizes3.Add(new SizesA() { Sizes = 9.5, Amount = 53 });
            sizes3.Add(new SizesA() { Sizes = 10, Amount = 83 });
            sizes3.Add(new SizesA() { Sizes = 11, Amount = 242 });
            sizes3.Add(new SizesA() { Sizes = 11.5, Amount = 532 });
            sizes3.Add(new SizesA() { Sizes = 12, Amount = 355 });

            List<SizesA> sizes4 = new List<SizesA>();
            sizes4.Add(new SizesA() { Sizes = 7, Amount = 362 });
            sizes4.Add(new SizesA() { Sizes = 7.5, Amount = 275 });
            sizes4.Add(new SizesA() { Sizes = 8, Amount = 752 });
            sizes4.Add(new SizesA() { Sizes = 8.5, Amount = 562 });
            sizes4.Add(new SizesA() { Sizes = 9, Amount = 253 });
            sizes4.Add(new SizesA() { Sizes = 9.5, Amount = 224 });
            sizes4.Add(new SizesA() { Sizes = 10, Amount = 162 });
            sizes4.Add(new SizesA() { Sizes = 10.5, Amount = 452 });

            List<SizesA> sizes5 = new List<SizesA>();
            sizes5.Add(new SizesA() { Sizes = 7, Amount = 524 });
            sizes5.Add(new SizesA() { Sizes = 7.5, Amount = 195 });
            sizes5.Add(new SizesA() { Sizes = 8, Amount = 742 });
            sizes5.Add(new SizesA() { Sizes = 8.5, Amount = 579 });
            sizes5.Add(new SizesA() { Sizes = 10, Amount = 123 });
            sizes5.Add(new SizesA() { Sizes = 10.5, Amount = 44 });
            sizes5.Add(new SizesA() { Sizes = 11.5, Amount = 325 });
            sizes5.Add(new SizesA() { Sizes = 12, Amount = 35 });

            List<SizesA> sizes6 = new List<SizesA>();
            sizes6.Add(new SizesA() { Sizes = 7, Amount = 533 });
            sizes6.Add(new SizesA() { Sizes = 7.5, Amount = 232 });
            sizes6.Add(new SizesA() { Sizes = 8, Amount = 774 });
            sizes6.Add(new SizesA() { Sizes = 8.5, Amount = 235 });
            sizes6.Add(new SizesA() { Sizes = 9, Amount = 228 });
            sizes6.Add(new SizesA() { Sizes = 9.5, Amount = 222 });
            sizes6.Add(new SizesA() { Sizes = 10, Amount = 161 });

            List<SizesA> sizes7 = new List<SizesA>();
            sizes7.Add(new SizesA() { Sizes = 7, Amount = 23 });
            sizes7.Add(new SizesA() { Sizes = 7.5, Amount = 270 });
            sizes7.Add(new SizesA() { Sizes = 8, Amount = 353 });
            sizes7.Add(new SizesA() { Sizes = 8.5, Amount = 235 });
            sizes7.Add(new SizesA() { Sizes = 9, Amount = 67 });
            sizes7.Add(new SizesA() { Sizes = 9.5, Amount = 54 });
            sizes7.Add(new SizesA() { Sizes = 10, Amount = 163 });
            sizes7.Add(new SizesA() { Sizes = 10.5, Amount = 435 });
            sizes7.Add(new SizesA() { Sizes = 11, Amount = 233 });
            sizes7.Add(new SizesA() { Sizes = 11.5, Amount = 532});
            sizes7.Add(new SizesA() { Sizes = 12, Amount = 352 });

            List<SizesA> sizes8 = new List<SizesA>();
            sizes8.Add(new SizesA() { Sizes = 7, Amount = 325 });
            sizes8.Add(new SizesA() { Sizes = 7.5, Amount = 257 });
            sizes8.Add(new SizesA() { Sizes = 8, Amount = 12 });
            sizes8.Add(new SizesA() { Sizes = 8.5, Amount = 593 });
            sizes8.Add(new SizesA() { Sizes = 9, Amount = 197 });
            sizes8.Add(new SizesA() { Sizes = 9.5, Amount = 294 });
            sizes8.Add(new SizesA() { Sizes = 10, Amount = 97 });
            sizes8.Add(new SizesA() { Sizes = 10.5, Amount = 372 });
            sizes8.Add(new SizesA() { Sizes = 11, Amount = 92 });
            sizes8.Add(new SizesA() { Sizes = 11.5, Amount = 423 });
            sizes8.Add(new SizesA() { Sizes = 12, Amount = 285 });

            List<SizesA> sizes9 = new List<SizesA>();
            sizes9.Add(new SizesA() { Sizes = 7, Amount = 523 });
            sizes9.Add(new SizesA() { Sizes = 7.5, Amount = 242 });
            sizes9.Add(new SizesA() { Sizes = 8, Amount = 533 });
            sizes9.Add(new SizesA() { Sizes = 8.5, Amount = 62 });
            sizes9.Add(new SizesA() { Sizes = 11, Amount = 24 });
            sizes9.Add(new SizesA() { Sizes = 11.5, Amount = 66 });
            sizes9.Add(new SizesA() { Sizes = 12, Amount = 352 });

            List<SizesA> sizes10 = new List<SizesA>();
            sizes10.Add(new SizesA() { Sizes = 7, Amount = 243 });
            sizes10.Add(new SizesA() { Sizes = 8.5, Amount = 63 });
            sizes10.Add(new SizesA() { Sizes = 9, Amount = 252 });
            sizes10.Add(new SizesA() { Sizes = 9.5, Amount = 345 });
            sizes10.Add(new SizesA() { Sizes = 10, Amount = 127 });
            sizes10.Add(new SizesA() { Sizes = 10.5, Amount = 423 });
            sizes10.Add(new SizesA() { Sizes = 11, Amount = 525 });
            sizes10.Add(new SizesA() { Sizes = 11.5, Amount = 232 });
            sizes10.Add(new SizesA() { Sizes = 12, Amount = 232 });

            List<SizesA> sizes11 = new List<SizesA>();
            sizes11.Add(new SizesA() { Sizes = 7, Amount = 242 });
            sizes11.Add(new SizesA() { Sizes = 7.5, Amount = 353 });
            sizes11.Add(new SizesA() { Sizes = 8, Amount = 242 });
            sizes11.Add(new SizesA() { Sizes = 8.5, Amount = 535 });
            sizes11.Add(new SizesA() { Sizes = 9, Amount = 253 });
            sizes11.Add(new SizesA() { Sizes = 9.5, Amount = 644 });
            sizes11.Add(new SizesA() { Sizes = 10, Amount = 232 });
            sizes11.Add(new SizesA() { Sizes = 10.5, Amount = 434 });
            sizes11.Add(new SizesA() { Sizes = 11, Amount = 233 });

            beers.Add(new Beer()
            {
                Id = 1,
                Brand = "Nike",
                Model = "Nike LD Waffle Sacai Black Nylon",
                Price = 401,
                Date = "2022-01-12",
                Image = "https://images.stockx.com/images/Nike-LD-Waffle-Sacai-Black-Nylon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321430",
                SizesAmount = sizes1
            });            
            beers.Add(new Beer()
            {
                Id = 2,
                Brand = "Nike",
                Model = "Nike Dunk Low Off-White Pine Green",
                Price = 526,
                Date = "2022-06-02",
                Image = "https://images.stockx.com/images/Nike-Dunk-Low-Off-White-Pine-Green-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606319825",
                SizesAmount = sizes2
            });
            beers.Add(new Beer()
            {
                Id = 3,
                Brand = "Nike",
                Model = "Nike Air Force 1 Low Supreme Black",
                Price = 385,
                Date = "2023-05-15",
                Image = "https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606325289",
                SizesAmount = sizes3
            });
            beers.Add(new Beer()
            {
                Id = 4,
                Brand = "Nike",
                Model = "Nike LD Waffle Sacai White Nylon",
                Price = 423,
                Date = "2022-07-25",
                Image = "https://images.stockx.com/images/Nike-LD-Waffle-Sacai-White-Nylon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606325338",
                SizesAmount = sizes4
            });
            beers.Add(new Beer()
            {
                Id = 5,
                Brand = "Nike",
                Model = "Nike Dunk Low SP Kentucky (2021)",
                Price = 584,
                Date = "2023-02-01",
                Image = "https://images.stockx.com/images/Nike-Dunk-Low-SP-Kentucky_Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322330",
                SizesAmount = sizes5
            });
            beers.Add(new Beer()
            {
                Id = 6,
                Brand = "Nike",
                Model = "Nike Dunk Low Off-White University",
                Price = 398,
                Date = "2023-03-26",
                Image = "https://images.stockx.com/images/Nike-Dunk-Low-Off-White-University-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321824",
                SizesAmount = sizes6
            });
            beers.Add(new Beer()
            {
                Id = 7,
                Brand = "Nike",
                Model = "Nike Air Max 2 Light Atmos",
                Price = 480,
                Date = "2022-04-17",
                Image = "https://cdn.flightclub.com/TEMPLATE/138235/1.jpg",
                SizesAmount = sizes7
            });
            beers.Add(new Beer()
            {
                Id = 8,
                Brand = "Nike",
                Model = "Nike Air Force 1 Low CLOT Blue Silk",
                Price = 385,
                Date = "2022-06-22",
                Image = "https://images.stockx.com/images/Nike-Air-Force-1-Low-Clot-Blue-Silk-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606325265",
                SizesAmount = sizes8
            });
            beers.Add(new Beer()
            {
                Id = 9,
                Brand = "Nike",
                Model = "Nike Air Max 90 OG Volt (2020)",
                Price = 545,
                Date = "2021-12-04",
                Image = "https://images.stockx.com/images/Nike-Air-Max-90-30th-Anniversary-White-Particle-Grey-Volt-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606323250",
                SizesAmount = sizes9
            });
            beers.Add(new Beer()
            {
                Id = 10,
                Brand = "Nike",
                Model = "Nike Dunk High Varsity Maize",
                Price = 329,
                Date = "2022-07-30",
                Image = "https://images.stockx.com/images/Nike-Dunk-High-Black-Varsity-Maize-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1609445259",
                SizesAmount = sizes10
            });
            beers.Add(new Beer()
            {
                Id = 11,
                Brand = "Nike",
                Model = "Nike Air Rubber Dunk Off-White UNC",
                Price = 392,
                Date = "2022-06-12",
                Image = "https://images.stockx.com/images/Nike-Air-Rubber-Dunk-Off-White-UNC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1609438911",
                SizesAmount = sizes11
            });

            return beers;
        }
    }

    public class Beer
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public double Price { get; set; }
        public string Date { get; set; }
        public string Image { get; set; }
        public List<SizesA> SizesAmount { get; set; }
    }

    public class SizesA
    {
        public double Sizes { get; set; }
        public int Amount { get; set; }
    }
}
