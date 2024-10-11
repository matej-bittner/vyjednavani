const Button = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit" | "button";
}) => {
  return (
    <button
      type={type}
      className="h-8 sm:h-9 bg-black px-8 text-white rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
