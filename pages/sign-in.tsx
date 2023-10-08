import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputController from "./shared/components/input-controller";
import signIn, { googleSignIn } from "./firebase/signin";
import resultToast from "./shared/components/Toast";
import { DANGERTOAST } from "./shared/Constants/toatsTypes";
import Btn from "./shared/components/Btn";
import Google from "@public/google.png";

const schema = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().email().required(),
});

function SignIn() {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const [isSignInWithGoogle, setIsSignInWithGoogle] = useState(false);
  const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);

  const handleRegister = async (user: any) => {
    setIsSignInWithEmail(true);
    await signIn(user.email, user.password);
    setIsSignInWithEmail(false);
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className=" space-y-3 flex flex-col justify-center items-center h-full text-center"
    >
      <InputController
        labelClassName="text-black border-2 w-1/2 rounded-md border-primary"
        control={control}
        name="email"
        label="email address"
        placeholder="email address"
      />
      <InputController
        labelClassName="text-black border-2 rounded-md w-1/2 border-primary"
        control={control}
        name="password"
        placeholder=" password"
        label="password"
      />
      <Btn
        image={Google}
        isLoading={isSignInWithGoogle}
        className="btn"
        name="sign-with-google"
        onClick={async () => {
          setIsSignInWithGoogle(true);
          try {
            const result = await googleSignIn();
          } catch (error: any) {
            resultToast(error.message, DANGERTOAST);
          }
          setIsSignInWithGoogle(false);
        }}
        type="button"
      >
        sign in
      </Btn>
      <Btn
        name="sign-in-btn"
        isLoading={isSignInWithEmail}
        className="btn"
        type="submit"
      >
        submit
      </Btn>
    </form>
  );
}

export default SignIn;
