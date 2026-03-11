export function Section({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className || ""}`} {...props}>
      {children}
    </section>
  );
}
