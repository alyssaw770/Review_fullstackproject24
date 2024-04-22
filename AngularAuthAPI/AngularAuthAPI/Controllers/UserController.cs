using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authContext;
        public UserController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            //check if userObj is null
            if (userObj == null)
                return BadRequest();
            //check if user exists
            var user = await _authContext.Users
            .FirstOrDefaultAsync(x => x.Username == userObj.Username && x.Password == userObj.Password);
            //not matching
            if (user == null)
                return NotFound(new { message = "User Not Found!" });
            //matching
            return Ok(new
            {
                Message = "Login Success!"
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            //body is empty
            if (userObj == null)
            return BadRequest();

            //body not empty check for details;
            await _authContext.Users.AddAsync(userObj);
            //save to database
            await _authContext.SaveChangesAsync();

            //return success message
            return Ok(new
            {
                Message = "User Registered!"
            });
        }
    }
}
