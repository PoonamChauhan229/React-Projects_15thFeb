const Button = ({ text, btnClass,onClick }) => {
  return (
    <>
      <button type="button" 
      className={`btn ${btnClass}`}
      onClick={onClick}
      >
        {!text ? "BtnText" : text}
      </button>
    </>
  );
};
export default Button;
