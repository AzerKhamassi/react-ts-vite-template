import "./style.scss";

interface ButtonProps {
    className?: string;
    rounded?: boolean;
    disabled?: boolean;
    text: string | JSX.Element
    onClick: () => void;
    isLoading?: boolean;
    btnColor?: string
}

const Button = (props: ButtonProps): JSX.Element => {
    const { text, className, disabled, onClick } = props;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`fs-14 ${className}`}>
            {text}</button>
    )
}

export default Button
