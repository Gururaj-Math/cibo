function CustomButton(props: {
  text: string;
  scrolled?: boolean;
  className?: string;
}) {
  const buttonStyle = {
    backgroundColor: props.scrolled ? "white" : "var(--primary-color)",
  };

  return (
    <button className={`custom-btn ${props.className}`} style={buttonStyle}>
      {props.text}
    </button>
  );
}

export default CustomButton;
