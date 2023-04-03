import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGoogle } from "components/button";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import Input from "components/input/Input";
import { Label } from "components/label";
import useToggleValue from "hooks/useToggleValue";
import AuthenticationLayout from "layout/AuthenticationLayout";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("").email("Invalid email address!"),
  password: yup
    .string()
    .required("This field is required!")
    .min(8, "Password must be more than 8 character"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const handleSignIn = (values) => {
    console.log("🚀 ~ file: SignInPage.js:28 ~ handleSignIn ~ values:", values);
  };

  return (
    <AuthenticationLayout heading={"Welcome Back"}>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Don't have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
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
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-primary">Forgot Password</span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full text-sm font-medium bg-primary">
          Sign In
        </Button>
      </form>
    </AuthenticationLayout>
  );
};

export default SignInPage;
