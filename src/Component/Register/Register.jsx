import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle, setUser } = use(AuthContext);

  const handelGoogleSingIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIn Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        setUser(newUser);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after save data :", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
      <div className="card-body">
        <h1 className="text-5xl text-accent font-bold">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <h2>
            Already Have An Account ?{" "}
            <Link to="/login" className="text-bold text-accent text-[16px]">
              LogIn
            </Link>
          </h2>
          <button className="btn btn-outline btn-accent mt-4">Register</button>
          <h1 className="text-center font-bold">OR</h1>
          <div>
            <button
              onClick={handelGoogleSingIn}
              className="btn bg-white w-full text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
