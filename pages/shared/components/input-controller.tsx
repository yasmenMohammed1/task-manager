import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Controller, Control } from "react-hook-form";

type InputControllerProps = {
  label: string;
  name: string;
  className?: string;
  control: Control<any, any>;
  iconClassName?: string;
  Icon?: React.ElementType;
  labelClassName?: string;
  onChange?: (value: any) => void;
};
function InputController({
  control,
  name,
  className,
  Icon,
  iconClassName,
  labelClassName,
  label,
  onChange: inputOnChange,
  ...props
}: InputControllerProps & React.HTMLProps<HTMLInputElement>) {
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({
        field: { onChange, value, ...otherRenderProps },
        fieldState: { error },
      }) => {
        return (
          <>
            <label className={`z-40 block relative ${labelClassName}`}>
              <input
                className={`text-black border-0 text-start w-full p-3 ${className}`}
                onChange={
                  inputOnChange
                    ? (e: any) => {
                        onChange(inputOnChange(e));
                      }
                    : (e: ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.value);
                      }
                }
                value={value}
                {...otherRenderProps}
                {...props}
              />
              {Icon && (
                <Icon
                  className={`absolute top-3 right-4  text-black ${iconClassName} `}
                />
              )}
              {error && <p className="text-red-600">{error.message} </p>}
            </label>
          </>
        );
      }}
    />
  );
}

export default InputController;
