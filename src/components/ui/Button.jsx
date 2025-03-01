export default function Button({ variant = "primary", children, ...props }) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}
