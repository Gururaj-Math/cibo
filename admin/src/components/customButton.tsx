function CustomButton(props: {
    text: string;
    scrolled?: boolean;
    className?: string;
    onClick: () => Promise<void>;
}) {
    const buttonStyle = {
        backgroundColor: props.scrolled ? "white" : "var(--primary-color)",
    };

    return (
        <button
            className={`custom-btn ${props.className}`}
            style={buttonStyle}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default CustomButton;
