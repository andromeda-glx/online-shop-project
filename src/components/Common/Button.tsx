type ButtonProps = {
  text: string;
  //   onClick: () => void;
};

const Button = ({text}: ButtonProps) => {
  return (
    <button className="text-xl bg-white text-secondary-theme px-8 py-1 rounded-3xl cursor-pointer hover:scale-102 transition-transform">
      {text}
    </button>
  );
}

export default Button;