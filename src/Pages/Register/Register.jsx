import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../SharedComp/Navbar/Navbar";
import login from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

  const {createUser, handleUpdateProfile} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, imageURL, email, password);
    if(password.length < 6){
      Swal.fire("Invalid!", "Password must should be 6 character", "error");
      return;
       
    }

    if(!/[A-Z]/.test(password)){
      Swal.fire("Invalid!", "Password must should be a 1 capital latter", "error");
      return;
    }

    if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      Swal.fire("Invalid!", "Password must should be a 1 Special latter", "error");
      return;
    }

    createUser(email, password)
      .then((res) => {
        handleUpdateProfile(name, imageURL)
        .then(() => {
          Swal.fire(
            'Welcome!',
            'Successfully complete registration!',
            'success'
          );
          navigate(location?.state ? location.state : '/');
        })
      })
      .catch((err) => {
        Swal.fire(
          'Invalid!',
          'Please provide valid user and password!',
          'error'
        );
      });
  }


  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center h-[70vh]">
      <div className="text-center lg:text-left w-1/2">
            <img src={login} alt="" />
        </div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSignUp} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Register Now!
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image URI
              </label>
              <input
                type="text"
                name="imageURL"
                id="imageURL"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="image url..."
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full btn btn-error text-white"
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
