import { Controller, Control } from "react-hook-form";

type InputControllerProps = {
  label: string;
  name: string;
  className?: string;
  control: Control<any, any>;
  iconClassName?: string;
  Icon?: React.ElementType;
  labelClassName?: string;
};
function InputController({
  control,
  name,
  className,
  Icon,
  iconClassName,
  labelClassName,
  label,
  ...props
}: InputControllerProps) {
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
          <label className={`relative ${labelClassName}`}>
            <input
              className={`text-black border-0 text-start w-full p-3 ${className}`}
              onChange={(e) => onChange(e.target.value)}
              value={value === null ? "" : value}
              {...otherRenderProps}
              {...props}
              {...props}
            />{" "}
            {Icon && (
              <Icon
                className={`absolute top-3 right-4  text-black ${iconClassName} `}
              />
            )}
          </label>
        );
      }}
    />
  );
}

export default InputController;
