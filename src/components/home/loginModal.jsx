import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "../common/inputGroup";
import RegisterModal from "./registerModal";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://10.10.10.115:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        // const errorMessage = await response.text();
        // console.log("Failed to login");
        const data = await response.json();
        console.log(data);
        Cookies.set("user", data, { expires: 7 });
        navigate("/dashboard");
      } else {
        console.log("errorMessage");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex bg-white rounded-lg">
      <div className="flex w-1/2">
        <img
          src="https://wallpaperaccess.com/full/1209519.jpg"
          alt="Register"
          className="w-[100%] h-[100%] object-cover rounded-lg border-l border"
        />
      </div>
      <div className="w-1/2 p-5 px-16 my-10 rounded-lg">
        <div className="py-10 text-center">
          <p className="text-3xl font-bold">
            College
            <span className="text-[#3689C7]">Hunt</span>
          </p>
        </div>

        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pt-6 pr-5">
            {showPassword ? (
              <FaEyeSlash
                onClick={handleClickShowPassword}
                className="cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={handleClickShowPassword}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <p className="pr-2 text-sm text-right ">Forgot Password?</p>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleLogin}
            className="bg-[#20a6f3] active:bg-[#2c759f] h-10 w-[50%] text-white rounded-lg items-center justify-center"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center text-sm">
          <span className="flex items-center">
            Are you new? <RegisterModal />
          </span>
        </div>
      </div>
    </div>
  );
}
