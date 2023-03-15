const Button = ({ bgColor, text }) => {
  return (
    <button
      className={`${bgColor} text-sm text-white p-2 rounded hover:opacity-75`}
    >
      {text}
    </button>
  );
};

export default Button;
