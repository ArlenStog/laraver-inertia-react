import { cn } from "@/lib/utils";
import * as React from "react";

interface InputErrorProps
    extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

const InputError = ({ message, className, ...props }: InputErrorProps) => {
    if (!message) return null;

    return (
        <p className={cn("text-red-500 text-sm mt-1", className)} {...props}>
            {message}
        </p>
    );
};

export default InputError;
