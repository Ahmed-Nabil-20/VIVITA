using DataAccess_EF;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utility.Consts;

namespace Services.User_Service
{
    public class UserService: IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationDbContext _context;
        public UserService(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signInManager,
            ApplicationDbContext context)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }


        public async Task Initialize()
        {
            if (!await _roleManager.RoleExistsAsync(Roles.Admin))
            {
                await _roleManager.CreateAsync(new IdentityRole(Roles.Admin));
            }
            if (!await _roleManager.RoleExistsAsync(Roles.Doctor))
            {
                await _roleManager.CreateAsync(new IdentityRole(Roles.Doctor));
            }

            var adminEmail = "admin@admin.com";
            if (await _userManager.FindByEmailAsync(adminEmail) == null)
            {
                ApplicationUser user = new()
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    EmailConfirmed = true
                };

                await _userManager.CreateAsync(user, "Admin123");
                await _userManager.AddToRoleAsync(user, Roles.Admin);
                await _userManager.AddToRoleAsync(user, Roles.Doctor);
            }
        }

        public async Task<OperationResult> RegisterAsync(ApplicationUser user, string password)
        {
            try
            {
                var createUser = await _userManager.CreateAsync(user, password);
                if (createUser.Succeeded)
                {
                    return OperationResult.Succeeded("Register Successfully!");
                }
                else
                {
                    var errors = createUser.Errors.FirstOrDefault().Description;
                    return OperationResult.Error(errors);
                }
            }
            catch (Exception ex)
            {
                return OperationResult.Error(ex.Message);
            }
        }

        public async Task<OperationResult> LoginAsync(LoginVM model)
        {
            try
            {
                var existedUser = await _userManager.FindByEmailAsync(model.Email);
                if (existedUser == null)
                {
                    return OperationResult.Error("Invalid Email");
                }
                else if (existedUser.LockoutEnabled == false)
                {
                    return OperationResult.Error("This Account Has been Blocked");
                }
                else
                {
                    var result = await _signInManager.PasswordSignInAsync(existedUser.UserName, model.Password, true, true);
                    if (result.Succeeded)
                    {
                        return OperationResult.Succeeded("Login Successfully!");
                    }
                    else
                    {
                        return OperationResult.Error("Invalid Password");
                    }
                }
            }
            catch (Exception ex)
            {
                return OperationResult.Error(ex.Message);
            }


        }

        public async Task<OperationResult> UpdateUserPhotoAsync(ApplicationUser user, IFormFile myFile)
        {
            try
            {
                // Convert Photo from IFormFile to byte[]
                using var dataStream = new MemoryStream();
                await myFile.CopyToAsync(dataStream);

                user.Photo = dataStream.ToArray();
                await _userManager.UpdateAsync(user);

                return OperationResult.Succeeded("Update Photo Successfully!");
            }
            catch (Exception ex)
            {
                return OperationResult.Error(ex.Message);
            }
        }

        public async Task<OperationResult> UpdateUserInfoAsync(string userName, string fullName, ApplicationUser user)
        {
            try
            {
                var findUserByUsername = await _userManager.FindByNameAsync(userName);
                if (findUserByUsername != null && user.UserName != userName)
                {
                    return OperationResult.Error("This Username already Existing");
                }
                else
                {
                    user.UserName = userName;
                    if (!string.IsNullOrEmpty(fullName))
                    {
                        user.FullName = fullName;
                    }

                    var result = await _userManager.UpdateAsync(user);
                    if (result.Succeeded)
                        return OperationResult.Succeeded("Update Information Successfully!");
                    else
                        return OperationResult.Error(result.Errors.FirstOrDefault()!.Description);
                }
            }
            catch (Exception ex)
            {
                return OperationResult.Error(ex.Message);
            }
        }

        public IQueryable<UsersPageVM> GetAllUsers()
        {
            IQueryable<UsersPageVM> users =
                (from user in _context.Users
                 join userRole in _context.UserRoles
                 on user.Id equals userRole.UserId into gj
                 from x in gj.DefaultIfEmpty()
                 join role in _context.Roles
                 on x.RoleId equals role.Id into jj
                 from y in jj.DefaultIfEmpty()
                 select new UsersPageVM()
                 {
                     UserId = user.Id,
                     UserName = user.UserName,
                     Email = user.Email,
                     LockoutEnabled = user.LockoutEnabled,
                     Photo = user.Photo,
                     FullName = user.FullName,
                     RoleName = y.Name
                 });

            return users;
        }

        public IQueryable<UsersPageVM> GetBlockedUsers()
        {
            IQueryable<UsersPageVM> users =
                (from user in _context.Users
                 join userRole in _context.UserRoles
                 on user.Id equals userRole.UserId into gj
                 from x in gj.DefaultIfEmpty()
                 join role in _context.Roles
                 on x.RoleId equals role.Id into jj
                 from y in jj.DefaultIfEmpty()
                 select new UsersPageVM()
                 {
                     UserId = user.Id,
                     UserName = user.UserName,
                     Email = user.Email,
                     LockoutEnabled = user.LockoutEnabled,
                     Photo = user.Photo,
                     FullName = user.FullName,
                     RoleName = y.Name
                 })
                 .Where(a => a.LockoutEnabled == false);

            return users;
        }

        public async Task<int> UserRegistrationCount()
        {
            return await _context.Users.AsNoTracking().AsQueryable().CountAsync();
        }

        public async Task<OperationResult> ToggleBlockUserAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
                return OperationResult.Error("User Not Found");

            user.LockoutEnabled = !user.LockoutEnabled;

            if (user.LockoutEnabled == false)
                // LogOut User Who is Blocked
                await _userManager.UpdateSecurityStampAsync(user);

            _context.Update(user);
            await _context.SaveChangesAsync();

            return OperationResult.Succeeded("Update User Successfully!");
        }

        public async Task<OperationResult> DeleteUserAsync(string userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(a => a.Id == userId);
            if (user is not null)
            {
                await _userManager.DeleteAsync(user);
                await _context.SaveChangesAsync();

                return OperationResult.Succeeded("Delete User Successfully!");
            }
            else
            {
                return OperationResult.Error("Not Found User To Delete it");
            }
        }

        public async Task<int> SaveTotlaRegistrationsEveryDay()
        {
            int count = await _context.Users.AsQueryable().CountAsync();

            TbRegistrationRequests model = new()
            {
                TotalRegistrations = count,
            };

            await _context.TbRegistrationRequests.AddAsync(model);
            _context.SaveChanges();

            return count;
        }

    }
}
