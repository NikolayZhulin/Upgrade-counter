import s from './Button.module.css'


type ButtonPropsType = {
    name: string;
    callback: () => void;
    disabled?: boolean;
}

export const Button = (props: ButtonPropsType) => {
    const onclickHandler = () => {
        props.callback();
    }

    return (
        <button
            className={s.button}
            onClick={onclickHandler}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    )
}