type IconBtnProps={
    label: string;
    name: string;
    className?: string;
    type:'button'|'submit'|'reset',
    iconClassName?: string;
    Icon: React.ReactNode;
    onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined,
    labelClassName?: string;}

function IconBtn({Icon,label,iconClassName,className,type,onClick}:IconBtnProps) {
  return (
    <button 
    type={type}
    onClick={onClick}
    className={`rounded-full bg-gray-200  p-4 ${className}`}
    title={label}>
{ Icon}
    </button>
  )
}

export default IconBtn