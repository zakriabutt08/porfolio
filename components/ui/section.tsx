import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("scroll-mt-20 py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
