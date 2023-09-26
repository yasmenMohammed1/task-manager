import React from "react";
import { useForm } from "react-hook-form";
import InputController from "./shared/components/input-controller";
import { auth } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "toastify-js";
import { DANGERTOAST } from "./shared/Constants/toatsTypes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
type User = {
  username: string;
  password: string;
  email: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
});

function Register() {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = async (user: any) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
    } catch (err: any) {
      toast({
        text: err.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          color: ' theme("colors.primary")',

          background: DANGERTOAST,
        },
      }).showToast();
    }
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

export default Register;
