import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import InputController from "./shared/components/input-controller";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";
import signIn from "./firebase/signin";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
});

function SignIn() {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  const handleRegister = async (user: any) => {
    await signIn(user.email, user.password);
    router.push("/dashboard");
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className=" space-y-3 flex flex-col justify-center items-center h-full text-center"
    >
      <InputController
        labelClassName="text-black border-2 w-1/2   border-primary"
        control={control}
        name="username"
        label="user name"
        placeholder="user name"
      />
      <InputController
        labelClassName="text-black border-2 w-1/2 border-primary"
        control={control}
        name="email"
        label="email address"
        placeholder="email address"
      />{" "}
      <InputController
        labelClassName="text-black border-2 w-1/2 border-primary"
        control={control}
        name="password"
        placeholder=" password"
        label="password"
      />
      <button
        className="p-2 bg-secondary rounded-md text-primary w-1/3"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}

export default SignIn;
