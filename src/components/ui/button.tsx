import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        default: "btn-default",
        destructive: "btn-destructive",
        outline: "btn-outline",
        secondary: "btn-secondary",
        ghost: "btn-ghost",
        link: "btn-link",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "btn-sm",
        lg: "btn-lg",
        icon: "btn-icon",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
