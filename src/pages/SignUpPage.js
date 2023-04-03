import React, { useState } from "react";
import AuthenticationLayout from "layout/AuthenticationLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Label from "components/label/Label";
import Input from "components/input/Input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("This field is required!"),
  email: yup
    .string()
    .required("This field is required!")
    .email("Invalid email address!"),
  password: yup
    .string()
    .required("This field is required!")
    .min(8, "Password must be more than 8 character"),
});

const SignUpPage = () => {
  const [acceptTerm, setAcceptTerm] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const handleSignUp = (values) => {
    console.log("🚀 ~ file: SignUpPage.js:17 ~ SignUpPage ~ values:", values);
  };

  const handleToggleAcceptTerm = () => {
    setAcceptTerm(!acceptTerm);
  };

  return (
    <AuthenticationLayout heading={"Sign Up"}>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold gap-x-3 border-stroke rounded-xl text-text2">
        <img alt="google" srcSet="icon-google.png 2x" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="John Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            error={errors.password?.message}
          ></Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleAcceptTerm}
          >
            <div className="flex-1 text-sm text-text2">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </div>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </AuthenticationLayout>
  );
};

export default SignUpPage;
