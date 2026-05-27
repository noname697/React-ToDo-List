import "./button.styles.css";

export const Button = ({ children, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
};
