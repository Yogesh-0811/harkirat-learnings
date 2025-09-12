import type { ReactNode } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick: ()=>void;
}

// type Variants = "primary" | "secondary"
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}

const sizeStyles = {
    "sm" : "p-2",
    "md" : "p-4",
    "lg" : "p-6"
}

const deafaultStyles = "rounded-md p-4"

export const Button = (props: ButtonProps) =>{

    return <button className={`${variantStyles[props.variant]} ${deafaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
}
