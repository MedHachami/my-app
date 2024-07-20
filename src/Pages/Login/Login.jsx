import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Lottie from "lottie-react";
import Swal from 'sweetalert2';

import animation from '../../assets/Login/loginAnimation.json'
import { Helmet } from "react-helmet-async";
import Social_Login from "../../Shared-Compo/Social_Login";
import useAuth from "../../Hooks/useAuth";
import { Button } from "@material-tailwind/react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { SignInUser, setLoading } = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let axiosPublic = useAxiosPublic();

    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        SignInUser(email, password)
            .then(result => {
                let userInfo = {
                    email: email
                }
                if (result.user) {
                    axiosPublic.post('/jwt', userInfo)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem('access-token', res.data.token);
                                setLoading(false);
                            }
                        })
                }
                e.target.reset();
                Swal.fire({
                    title: 'Success!',
                    text: `Welcome Back ${result.user?.displayName}`,
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }


    return (
        // <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-5 px-4 mt-5">
        //     <Helmet>
        //         <title>Milon Mela | Login</title>
        //     </Helmet>
        //     <div className="bg-gray-400 w-full md:w-4/12 md:pr-10 text-center p-10 rounded-lg">
        //         <h2 className="text-3xl font-bold">Login Now!</h2>
        //         <form onSubmit={handleLogin}>
        //             <div className="relative">
        //                 <p className="text-left text-lg font-semibold">User Email</p>
        //                 <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
        //                 <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
        //                     type="email"
        //                     name="email"
        //                     placeholder="Type your email"
        //                     required />
        //             </div>
        //             <hr className="my-3" />
        //             <div className="relative">
        //                 <p className="text-left text-lg font-semibold">Password</p>
        //                 <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
        //                 <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
        //                     type={showPassword ? 'text' : 'password'}
        //                     name="password"
        //                     placeholder="Type your password"
        //                 />
        //                 <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
        //             </div>
        //             <hr className="my-3" />

        //             <Button className=" btn btn-outline w-full" type="submit">
        //                 Login</Button>

        //         </form>

        //         <Social_Login></Social_Login>
        //         <div className="flex gap-3 justify-center mt-8">
        //             <p>New to this site?</p>
        //             <Link className="underline text-lg text-blue-600" to='/register'>Sign Up</Link>
        //         </div>
        //     </div>
        //     <div className="">
        //         <Lottie className="h-[630px] w-full md:w-10/12 " animationData={animation} loop={false}></Lottie>
        //     </div>
        // </div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div class="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] dark:bg-dark">
            <div
                class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0">
            </div>
            <div class="container">
                <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full px-4">
                        <div class="text-center">
                            <h1 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                Sign In Page</h1>
                            <p class="mb-5 text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available.
                            </p>

                            <ul class="flex items-center justify-center gap-[10px]">
                                <li>
                                    <a href="index.html"
                                        class="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="flex items-center gap-[10px] text-base font-medium text-body-color">
                                        <span class="text-body-color dark:text-dark-6"> / </span>
                                        Sign In
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <section class="bg-[#F4F7FF] py-14 lg:py-20 dark:bg-dark">
                <div class="container">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <div
                                class="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-14 px-8 text-center sm:px-12 md:px-[60px]"
                                data-wow-delay=".15s">
                                <div class="mb-10 text-center">
                                    <a href="javascript:void(0)" class="mx-auto inline-block max-w-[160px]">
                                        <img src="assets/images/logo/logo.svg" alt="logo" class="dark:hidden" />
                                        <img src="assets/images/logo/logo-white.svg" alt="logo" class="hidden dark:block" />
                                    </a>
                                </div>
                                <form onSubmit={handleLogin}>
                                    <div class="mb-[22px]">
                                        <input type="email"
                                         name="email" placeholder="Email"
                                            class="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div class="mb-[22px]">
                                        <input type="password" placeholder="Password" name="password"
                                            class="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none" />
                                    </div>
                                    <div class="mb-9">
                                        <input type="submit" value="Sign In"
                                            class="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark" />
                                    </div>
                                </form>
                               
                                <a href="javascript:void(0)" class="inline-block mb-2 text-base text-dark dark:text-white hover:text-primary dark:hover:text-primary">
                                    Forget Password?
                                </a>
                                <p class="text-base text-body-secondary">
                                    Not a member yet?
                                    <a href="signup.html" class="text-primary hover:underline">
                                        Sign Up
                                    </a>
                                </p>
                                <Social_Login></Social_Login>
                                <div>
                                    <span class="absolute top-1 right-1">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.39737" cy="38.6026" r="1.39737" transform="rotate(-90 1.39737 38.6026)"
                                                fill="#3056D3" />
                                            <circle cx="1.39737" cy="1.99122" r="1.39737" transform="rotate(-90 1.39737 1.99122)"
                                                fill="#3056D3" />
                                            <circle cx="13.6943" cy="38.6026" r="1.39737" transform="rotate(-90 13.6943 38.6026)"
                                                fill="#3056D3" />
                                            <circle cx="13.6943" cy="1.99122" r="1.39737" transform="rotate(-90 13.6943 1.99122)"
                                                fill="#3056D3" />
                                            <circle cx="25.9911" cy="38.6026" r="1.39737" transform="rotate(-90 25.9911 38.6026)"
                                                fill="#3056D3" />
                                            <circle cx="25.9911" cy="1.99122" r="1.39737" transform="rotate(-90 25.9911 1.99122)"
                                                fill="#3056D3" />
                                            <circle cx="38.288" cy="38.6026" r="1.39737" transform="rotate(-90 38.288 38.6026)" fill="#3056D3" />
                                            <circle cx="38.288" cy="1.99122" r="1.39737" transform="rotate(-90 38.288 1.99122)" fill="#3056D3" />
                                            <circle cx="1.39737" cy="26.3057" r="1.39737" transform="rotate(-90 1.39737 26.3057)"
                                                fill="#3056D3" />
                                            <circle cx="13.6943" cy="26.3057" r="1.39737" transform="rotate(-90 13.6943 26.3057)"
                                                fill="#3056D3" />
                                            <circle cx="25.9911" cy="26.3057" r="1.39737" transform="rotate(-90 25.9911 26.3057)"
                                                fill="#3056D3" />
                                            <circle cx="38.288" cy="26.3057" r="1.39737" transform="rotate(-90 38.288 26.3057)" fill="#3056D3" />
                                            <circle cx="1.39737" cy="14.0086" r="1.39737" transform="rotate(-90 1.39737 14.0086)"
                                                fill="#3056D3" />
                                            <circle cx="13.6943" cy="14.0086" r="1.39737" transform="rotate(-90 13.6943 14.0086)"
                                                fill="#3056D3" />
                                            <circle cx="25.9911" cy="14.0086" r="1.39737" transform="rotate(-90 25.9911 14.0086)"
                                                fill="#3056D3" />
                                            <circle cx="38.288" cy="14.0086" r="1.39737" transform="rotate(-90 38.288 14.0086)" fill="#3056D3" />
                                        </svg>
                                    </span>
                                    <span class="absolute left-1 bottom-1">
                                        <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.288" cy="25.9912" r="1.39737" transform="rotate(-90 2.288 25.9912)" fill="#3056D3" />
                                            <circle cx="14.5849" cy="25.9911" r="1.39737" transform="rotate(-90 14.5849 25.9911)"
                                                fill="#3056D3" />
                                            <circle cx="26.7216" cy="25.9911" r="1.39737" transform="rotate(-90 26.7216 25.9911)"
                                                fill="#3056D3" />
                                            <circle cx="2.288" cy="13.6944" r="1.39737" transform="rotate(-90 2.288 13.6944)" fill="#3056D3" />
                                            <circle cx="14.5849" cy="13.6943" r="1.39737" transform="rotate(-90 14.5849 13.6943)"
                                                fill="#3056D3" />
                                            <circle cx="26.7216" cy="13.6943" r="1.39737" transform="rotate(-90 26.7216 13.6943)"
                                                fill="#3056D3" />
                                            <circle cx="2.288" cy="38.0087" r="1.39737" transform="rotate(-90 2.288 38.0087)" fill="#3056D3" />
                                            <circle cx="2.288" cy="1.39739" r="1.39737" transform="rotate(-90 2.288 1.39739)" fill="#3056D3" />
                                            <circle cx="14.5849" cy="38.0089" r="1.39737" transform="rotate(-90 14.5849 38.0089)"
                                                fill="#3056D3" />
                                            <circle cx="26.7216" cy="38.0089" r="1.39737" transform="rotate(-90 26.7216 38.0089)"
                                                fill="#3056D3" />
                                            <circle cx="14.5849" cy="1.39761" r="1.39737" transform="rotate(-90 14.5849 1.39761)"
                                                fill="#3056D3" />
                                            <circle cx="26.7216" cy="1.39761" r="1.39737" transform="rotate(-90 26.7216 1.39761)"
                                                fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;