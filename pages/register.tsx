import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputController from "./shared/components/input-controller";
import { auth, storage } from "./firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "toastify-js";
import { SUCCUSSTOAST, DANGERTOAST } from "./shared/Constants/toatsTypes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import Btn from "./shared/components/Btn";

const schema = yup.object().shape({
  user_name: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
});

const dangerToast = (e: any) =>
  toast({
    text: e?.message,
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
function Register() {
  const router = useRouter();
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const [imageAsFile, setImageAsFile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = async () => {
    const imageRef = ref(storage, `products/${auth.currentUser?.uid}`);

    uploadBytes(imageRef, imageAsFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            updateProfile(auth.currentUser!, { photoURL: url });
          })
          .catch((error) => {
            dangerToast(error);
          });
      })
      .catch((error) => {
        dangerToast(error);
      });
  };
  const handleRegister = async (user: any) => {
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (result)
        await updateProfile(auth.currentUser!, { displayName: user.user_name });
      await handleChange();
      toast({
        text: `welcome ${result?.user.displayName}`,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          color: ' theme("colors.primary")',

          background: SUCCUSSTOAST,
        },
      }).showToast();

      router.push("/dashboard");
    } catch (err: any) {
      dangerToast(err);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className=" space-y-3 flex flex-col justify-center items-center h-full text-center"
    >
      <InputController
        labelClassName="text-black border-2 w-1/2  rounded-md  border-primary"
        control={control}
        name="user_name"
        label="user name"
        placeholder="user name"
      />

      <InputController
        labelClassName="text-black border-2 rounded-md  w-1/2 border-primary"
        control={control}
        name="email"
        label="email address"
        placeholder="email address"
      />
      <InputController
        labelClassName="text-black border-2 rounded-md  w-1/2 border-primary"
        control={control}
        name="password"
        placeholder=" password"
        label="password"
      />
      <InputController
        label="Image"
        control={control}
        name="image"
        labelClassName="dark:text-white"
        type="file"
        onChange={(e: any) => {
          setImageAsFile(e.target.files[0]);
        }}
      />
      <Btn className="btn" isLoading={isLoading} type="submit">
        Sign Up
      </Btn>
    </form>
  );
}

export default Register;
