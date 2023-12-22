
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import login from "../../assets/banner/login.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Logged in Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Incorrect Email. Please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          console.error(error.message);
          toast.warn(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully Login", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login | TaskFlow</title>
      </Helmet>
      <div className="xl:py-24 lg:py-20 md:py-16 py-10 ">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
          <div data-aos="fade-right" data-aos-delay="100" className="md:w-1/2 w-full ">
            <div className="w-full hover:border-brand-primary duration-300 max-w-sm mx-auto p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <img
                className="w-48 mx-auto mb-2"
                src={logo}
                alt="logo"
              />
              <h5 className="text-2xl mb-6 text-center font-rajdhani font-bold text-gray-900 ">
                Login to our platform
              </h5>
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full hover:scale-105 duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center  flex items-center justify-center"
                >
                  <BiLogIn className="mr-2 text-xl" />
                  Login to your account
                </button>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="w-full hover:scale-105 duration-300 mt-4 text-white bg-gradient-to-r from-pink-500 to-yellow-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center flex items-center justify-center"
              >
                <BsGoogle className="mr-2" />
                Continue with Google
              </button>
              <div className="text-sm mt-4 font-medium text-gray-500">
                Not registered?{" "}
                <Link
                  to="/register"
                  className="text-blue-700 hover:underline"
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden">
            <img className="w-full h-full object-contain" data-aos="fade-left" data-aos-delay="200" src={login} alt="login" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
