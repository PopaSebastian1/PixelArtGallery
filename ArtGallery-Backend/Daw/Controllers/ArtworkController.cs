using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Daw.DataLayer.DataBaseConenction;
using Daw.DataLayer.Models;
using Daw.DataLayer.Repositories;
using Daw.DataLayer.Services;

namespace Daw.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArtworkController : Controller
    {
        private readonly ArtworkService _artworkService;
        public ArtworkController(ArtworkService artworkService)
        {
            _artworkService = artworkService;
        }
        [HttpGet("getArtwork", Name = "GetArtwork")]
        public async Task<IActionResult> GetProducts()
        {
            var products= await _artworkService.GetAllArtworksAsync();
            return Ok(products);
        }
        [HttpPost("addArtwork", Name = "AddArtwork")]
        public async Task<IActionResult> AddProduct(Artwork product)
        {
           await _artworkService.AddArtworkAsync(product);
            return Ok();
        }
        [HttpPut("updateArtwork", Name = "UpdateArtwork")]
        public async Task<IActionResult> UpdateProduct(string name, Artwork product)
        {
          await _artworkService.UpdateArtworkAsync(product);
            return Ok();
        }
        [HttpDelete("deleteArtwork", Name = "DeleteArtwork")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
           await _artworkService.DeleteArtworkAsync(id);
            return Ok();
        }
        [HttpGet("getArtworkByCategory", Name = "GetArtworkByCategory")]
        public async Task<IActionResult> GetArtworkByCategory(string category)
        {
            var products = await _artworkService.GetAllArtworksByCategoryAsync(category);
            return Ok(products);
        }
        [HttpGet("getArtworkByName", Name = "GetArtworkByName")]
        public async Task<IActionResult> GetArtworkByName(string name)
        {
            var products = await _artworkService.GetArtworkByNameAsync(name);
            return Ok(products);
        }
        [HttpGet("getArtworkById", Name = "GetArtworkById")]
        public async Task<IActionResult> GetArtworkById(int id)
        {
            var products = await _artworkService.GetArtworkByIdAsync(id);
            return Ok(products);
        }
    }
}
