import type { ReactNode } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: ()=>void;
    fullWidth?: boolean;
    loading?: boolean;
}

// type Variants = "primary" | "secondary"
const variantStyles = {
    "primary": "bg-brandpurple-600 text-white",
    "secondary": "bg-brandpurple-400 text-brandpurple-600"
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const deafaultStyles = "rounded-md p-4 flex items-center cursor-pointer"

export const Button = (props: ButtonProps) =>{

    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${deafaultStyles} ${sizeStyles[props.size]} ${props.fullWidth?"w-full flex justify-center items-center":""} ${props.loading?"opacity-45":""}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null} 
        {props.text} 
        {props.endIcon ? <div className="pr-2">{props.endIcon}</div>:null}
    </button>
}
