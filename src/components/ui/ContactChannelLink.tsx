import type { AnchorHTMLAttributes, ReactNode } from "react";

export function ContactChannelLink({
  href,
  icon,
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon: ReactNode;
  children?: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {icon}
      {children}
    </a>
  );
}
