export default function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `inline-flex justify-center items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-widest active:scale-[0.90] transition-all duration-300 ease-in-out ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
