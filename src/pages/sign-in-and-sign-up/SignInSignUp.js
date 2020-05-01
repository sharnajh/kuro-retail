import React from "react";
import "./css/SignInSignUp.css";
// Components
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInSignUp = () => (
    <div className="sign-in-sign-up-container">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;