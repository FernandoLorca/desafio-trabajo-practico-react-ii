import { Link } from 'react-router-dom';

const Button = ({ bgColor, text, clickFunction, id, path }) => {
  return (
    <Link to={path}>
      <button
        className={`${bgColor} text-sm text-white p-2 rounded hover:opacity-75`}
        onClick={() => clickFunction(id)}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
