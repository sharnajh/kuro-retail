import React, { useState } from "react";
import "./css/SignIn.css";
import { auth, signInWithGoogle } from "../../firebase/firebase";
//Components
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
//Assets
import { ReactComponent as GoogleIcon } from "./assets/google-icon.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email,password);
      setEmail("");
      setPassword("");
    } catch(error) {
      console.error(error)
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          handleChange={setEmail}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          handleChange={setPassword}
          required
        />
        <div className="button-group">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={signInWithGoogle}
          >
            <GoogleIcon />
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
