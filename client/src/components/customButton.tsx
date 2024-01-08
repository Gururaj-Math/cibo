function CustomButton(props: { text: string; scrolled?: boolean }) {
  const buttonStyle = {
    backgroundColor: props.scrolled ? "white" : "var(--primary-color)",
  };

  return (
    <button className="custom-btn" style={buttonStyle}>
      {props.text}
    </button>
  );
}

export default CustomButton;
