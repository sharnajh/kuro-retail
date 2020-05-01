import React, { useState } from "react";
import "./css/SignUp.css";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
//Components
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      <form className="submit-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="name"
          value={displayName}
          handleChange={setDisplayName}
        />
        <FormInput
          type="email"
          label="email"
          value={email}
          handleChange={setEmail}
        />
        <FormInput
          type="password"
          label="password"
          value={password}
          handleChange={setPassword}
        />
        <FormInput
          type="password"
          label="confirm password"
          value={confirmPassword}
          handleChange={setConfirmPassword}
        />
        <CustomButton type="submit">sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
