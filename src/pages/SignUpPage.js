import { Button, ButtonGoogle } from "components/button";
import { Checkbox } from "components/checkbox";
import { IconEyeToggle } from "components/icons";
import { Link, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthenticationLayout from "layout/AuthenticationLayout";
import FormGroup from "components/common/FormGroup";
import Input from "components/input/Input";
import Label from "components/label/Label";
import React from "react";
import useToggleValue from "hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { register } from "store/auth/auth-slice";
import { toast } from "react-toastify";

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
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    try {
      dispatch(register({ ...values, permissions: [] }));
      redirect("/login");
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  const { value: acceptTerm, handleToggleValue: handleToggleAcceptTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <AuthenticationLayout heading={"Sign Up"}>
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
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
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            name="term"
            checked={acceptTerm}
            onClick={handleToggleAcceptTerm}
          >
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </AuthenticationLayout>
  );
};

export default SignUpPage;
