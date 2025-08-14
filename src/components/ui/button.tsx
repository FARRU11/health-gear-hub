import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-gradient text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-spring",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border border-border bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground hover:shadow-md transition-elegant",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md transition-elegant",
        ghost: "hover:bg-secondary hover:text-secondary-foreground transition-elegant",
        link: "text-primary underline-offset-4 hover:underline transition-elegant",
        hero: "bg-primary-gradient text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-spring font-semibold",
        accent: "bg-accent-gradient text-accent-foreground shadow-md hover:shadow-lg hover:scale-105 transition-spring",
        glass: "glass-card text-foreground hover:bg-white/80 hover:shadow-lg transition-elegant",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-13 rounded-lg px-10 text-base font-semibold",
        icon: "h-11 w-11",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
