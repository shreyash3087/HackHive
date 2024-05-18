import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LoginCard from "../components/LoginCard/LoginCard";
import HeadingSection from "../components/HeadingSection/HeadingSection";

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden h-screen bg-custom-background bg-no-repeat bg-right">
      <HeadingSection title={"Join the Amazing Hackathon Community"} />
      <LoginCard />
      <Link to="/" className="absolute top-4 right-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default Login;
