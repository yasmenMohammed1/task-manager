import toast from "toastify-js";

export default function resultToast(message: string, type: string) {
  return toast({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      color: ' theme("colors.primary")',

      background: type,
    },
  }).showToast();
}
