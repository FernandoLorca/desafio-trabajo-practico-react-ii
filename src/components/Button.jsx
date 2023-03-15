import { Link } from 'react-router-dom';

const Button = ({ bgColor, text, clickFunction, id }) => {
  return (
    <Link to={`/pizza/${id}`}>
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
