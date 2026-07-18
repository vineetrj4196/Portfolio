"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/lib/use-in-view";

const HIDDEN = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-95",
  fade: "opacity-0",
};

export function Reveal({ children, className, direction = "up", delay = 0, as: Tag = "div" }) {
  const { ref, inView } = useInView();
  const style = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN[direction],
        className
      )}
    >
      {children}
    </Tag>
  );
}
