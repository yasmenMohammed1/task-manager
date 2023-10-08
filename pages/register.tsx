import React, { HTMLInputTypeAttribute, useState } from "react";
import { useForm } from "react-hook-form";
import InputController from "./shared/components/input-controller";
import { auth, db, storage } from "./firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "toastify-js";
import { SUCCUSSTOAST, DANGERTOAST } from "./shared/Constants/toatsTypes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { updateMetadata } from "firebase/storage";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const schema = yup.object().shape({
  user_name: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email().required(),
});

function Register() {
  const router = useRouter();
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const [imageAsFile, setImageAsFile] = useState<any>(null);
  const handleChange = async () => {
    const imageRef = ref(storage, `products/${auth.currentUser?.uid}`);

    uploadBytes(imageRef, imageAsFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            updateProfile(auth.currentUser!, { photoURL: url });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = async (user: any) => {
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
        labelClassName="text-black border-2 w-1/2  rounded-md  border-primary"
        control={control}
        name="user_name"
        label="user name"
        placeholder="user name"
      />
      <InputController
        label="Image"
        control={control}
        name="image"
        labelClassName="text-white"
        placeholder="Choose image"
        accept="image/png,image/jpeg"
        type="file"
        onChange={(e: any) => {
          setImageAsFile(e.target.files[0]);
          console.log("first", imageAsFile);
        }}
      />
      <InputController
        labelClassName="text-black border-2 rounded-md  w-1/2 border-primary"
        control={control}
        name="email"
        label="email address"
        placeholder="email address"
      />{" "}
      <InputController
        labelClassName="text-black border-2 rounded-md  w-1/2 border-primary"
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
