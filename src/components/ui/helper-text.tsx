import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Typography from "@/components/Typography";

export default function HelperText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex space-x-1">
      <Typography
        as="p"
        weight="regular"
        variant="label"
        className={cn("text-typo-main text-xs !leading-tight", className)}
      >
        {children}
      </Typography>
    </div>
  );
}
