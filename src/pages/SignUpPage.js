import React from "react";
import AuthenticationLayout from "layout/AuthenticationLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Label from "components/label/Label";
import Input from "components/input/Input";

const SignUpPage = () => {
  const {
    // handleSubmit,
    control,
  } = useForm({});
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
      <form autoComplete="off">
        <div className="flex flex-col gap-y-3">
          <Label>Full Name *</Label>
          <Input control={control} name="fullName"></Input>
        </div>
      </form>
    </AuthenticationLayout>
  );
};

export default SignUpPage;
