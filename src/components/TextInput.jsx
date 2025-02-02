import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        "rounded-lg p-2 border-none bg-gray-100 shadow-sm focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none" +
        className
      }
      ref={localRef}
    />
  );
});
