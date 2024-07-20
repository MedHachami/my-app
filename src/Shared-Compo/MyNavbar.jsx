import { Navbar, Typography, Button, IconButton, Collapse } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import img from '../assets/Home/MilonMela.png'
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  let { user, Logout } = useAuth();
  let [isAdmin] = useAdmin()
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <nav
      id="navbarCollapse"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white dark:bg-dark-2 py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent dark:lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
    >
      <ul className="block lg:flex 2xl:ml-20">
        <Typography as="li" variant="h6" className="relative group">
          <Link
            to="/"
            className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6"
          >
            Home
          </Link>
        </Typography>
        <Typography as="li" variant="h6" className="relative group">
          <Link
            to="/biodatas"
            className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
          >
            Biodatas
          </Link>
        </Typography>
        <Typography as="li" variant="h6" className="relative group">
          <Link
            to="/about-us"
            className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
          >
            About Us
          </Link>
        </Typography>
        <Typography as="li" variant="h6" className="relative group">
          <Link
            to="/contact-us"
            className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
          >
            Contact Us
          </Link>
        </Typography>

        {user && isAdmin && (
          <Typography as="li" variant="h6" className="relative group">
            <Link
              to="/dashboard/admin-home"
              className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
            >
              Dashboard
            </Link>
          </Typography>
        )}

        {user && !isAdmin && (
          <Typography as="li" variant="h6" className="relative group">
            <Link
              to="/dashboard/edit-biodata"
              className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
            >
              Dashboard
            </Link>
          </Typography>
        )}

        {user ? (
          <Typography as="li" variant="h6" className="relative group">
            <Button
              onClick={() => Logout().then().catch()}
              className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
            >
              Sign Out
            </Button>
          </Typography>
        ) : (
          <Typography as="li" variant="h6" className="relative group">
            <Link
              to="/login"
              className="flex py-2 mx-8 text-base font-medium text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10"
            >
              Login
            </Link>
          </Typography>
        )}
      </ul>
    </nav>
  );


  return (
    <div class="absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header">
      <div class="container">
        <div class="relative flex items-center justify-between -mx-4">
          <div class="max-w-full px-4 w-60">
            <a href="index.html" class="block w-full py-5 navbar-logo">
              <img src="assets/images/logo/logo.svg" alt="logo" class="w-full dark:hidden" />
              <img src="assets/images/logo/logo-white.svg" alt="logo" class="hidden w-full dark:block" />
            </a>
          </div>
          <div class="flex items-center justify-between w-full px-4">
            <div>
              <button id="navbarToggler"
                class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
                <span class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
              </button>
              <nav id="navbarCollapse"
                class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white dark:bg-dark-2 py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent dark:lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
                <ul class="blcok lg:flex 2xl:ml-20">
                  <li class="relative group">
                    <a href="#home"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6">
                      Home
                    </a>
                  </li>
                  <li class="relative group">
                    <a href="/#about"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10">
                      About
                    </a>
                  </li>
                  <li class="relative group">
                    <a href="/#pricing"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10">
                      Pricing
                    </a>
                  </li>
                  <li class="relative group">
                    <a href="/#team"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10">
                      Team
                    </a>
                  </li>
                  <li class="relative group">
                    <a href="/#contact"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10">
                      Contact
                    </a>
                  </li>
                  <li class="relative group">
                    <a href="blog-grids.html"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark dark:text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-body-color dark:lg:text-dark-6 xl:ml-10">
                      Blog
                    </a>
                  </li>
                  <li class="relative submenu-item group">
                    <a href="javascript:void(0)"
                      class="relative flex items-center justify-between py-2 mx-8 text-base font-medium text-primary group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 xl:ml-10">
                      Pages

                      <svg class="ml-2 fill-current" width="16" height="20" viewBox="0 0 16 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                      </svg>
                    </a>
                    <div
                      class="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white dark:bg-dark-2 p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                      <a href="about.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        About Page
                      </a>
                      <a href="pricing.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        Pricing Page
                      </a>
                      <a href="contact.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        Contact Page
                      </a>
                      <a href="blog-grids.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        Blog Grid Page
                      </a>
                      <a href="blog-details.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        Blog Details Page
                      </a>

                      <a href="signup.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        Sign Up Page
                      </a>
                      <a href="signin.html"
                        class="block rounded py-[10px] px-4 text-sm text-primary hover:text-primary dark:hover:text-primary">
                        Sign In Page
                      </a>
                      <a href="404.html"
                        class="block rounded py-[10px] px-4 text-sm text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary">
                        404 Page
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="flex items-center justify-end pr-16 lg:pr-0">
              
              <div class="hidden sm:flex">
                {user ? (
                  <Link
                    onClick={() => Logout().then().catch()}
                    class="px-6 py-2 text-base font-medium text-white duration-300 ease-in-out rounded-md signUpBtn bg-primary hover:bg-blue-dark">
                    Sign Out
                  </Link>
                ) : (
                  <div className="flex gap-4">
                    <Link
                      to="/login"
                      class="px-6 py-2 text-base font-medium text-white duration-300 ease-in-out rounded-md signUpBtn bg-primary hover:bg-blue-dark">
                      Login
                    </Link>
                    <Link
                      to="/register"
                      class="px-6 py-2 text-base font-medium text-white duration-300 ease-in-out rounded-md signUpBtn bg-primary hover:bg-blue-dark">
                      Register
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyNavbar;