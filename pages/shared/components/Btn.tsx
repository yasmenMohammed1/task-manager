import { ButtonHTMLAttributes } from "react";
import CircularProgress from "./CircularProgress";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: Boolean;

  image?: string | StaticImport | undefined;
}

export function Btn({ isLoading = false, image, ...props }: ButtonProps) {
  const { children } = props;
  return (
    <button className="btn" {...props}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="flex items-center justify-center gap-3">
          {children}
          {image && (
            <Image
              width={30}
              className="rounded-lg"
              height={10}
              src={image}
              alt="google logo"
            />
          )}
        </div>
      )}
    </button>
  );
}

export default Btn;
