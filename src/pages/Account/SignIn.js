import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="website">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

// import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { logoLight } from "../../assets/images";

const SignIn = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
//   // ============= Initial State Start here =============
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // ============= Initial State End here ===============
//   // ============= Error Msg Start here =================
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");

//   // ============= Error Msg End here ===================
//   const [successMsg, setSuccessMsg] = useState("");
//   // ============= Event Handler Start here =============
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   // ============= Event Handler End here ===============
//   const handleSignUp = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setErrEmail("Enter your email");
//     }

//     if (!password) {
//       setErrPassword("Create a password");
//     }
//     // ============== Getting the value ==============
//     if (email && password) {
//       setSuccessMsg(
//         `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
//       );
//       setEmail("");
//       setPassword("");
//     }
//   };
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
//         <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
//           <Link to="/">
//             <img src={logoLight} alt="logoImg" className="w-28" />
//           </Link>
//           <div className="flex flex-col gap-1 -mt-1">
//             <h1 className="font-titleFont text-xl font-medium">
//             Rester connecter pour plus
//             </h1>
//             <p className="text-base">Lorsque vous vous connectez, vous êtes avec nous !</p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//               Commencez rapidement avec New Tech Services
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur !
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//               Accédez à tous les services New Tech Services
//               </span>
//               <br />
//               sssssssssssssssssssssssssssssssssssssssssssssssss
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//               Faites confiance aux acheteurs en ligne
//               </span>
//               <br />
//              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
//             </p>
//           </div>
//           <div className="flex items-center justify-between mt-10">
//             <Link to="/">
//               <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//                 © NEW TECH SERVICES
//               </p>
//             </Link>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Terms
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Privacy
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Security
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full lgl:w-1/2 h-full">
//         {successMsg ? (
//           <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
//             <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
//               {successMsg}
//             </p>
//             <Link to="/signup">
//               <button
//                 className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
//             tracking-wide hover:bg-black hover:text-white duration-300"
//               >
//                 Se deconnecter
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
//             <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
//               <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
//                 se conecter
//               </h1>
//               <div className="flex flex-col gap-3">
//                 {/* Email */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Email
//                   </p>
//                   <input
//                     onChange={handleEmail}
//                     value={email}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="email"
//                     placeholder="john@workemail.com"
//                   />
//                   {errEmail && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errEmail}
//                     </p>
//                   )}
//                 </div>

//                 {/* Password */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Password
//                   </p>
//                   <input
//                     onChange={handlePassword}
//                     value={password}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="password"
//                     placeholder="Create password"
//                   />
//                   {errPassword && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPassword}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   onClick={handleSignUp}
//                   className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
//                 >
                  
//                 </button>
//                 <p className="text-sm text-center font-titleFont font-medium">
//                   Pas encore de compte?{" "}
//                   <Link to="/signup">
//                     <span className="hover:text-blue-600 duration-300">
//                       S'inscrire
//                     </span>
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
};

export default SignIn;
