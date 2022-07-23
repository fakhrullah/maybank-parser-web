function Input({ value, className, onInput, ...props }) {
    return (
        <textarea
            name=""
            id=""
            rows="10"
            class={className}
            onInput={(e) => onInput(e)}
            {...props}
        >{value}</textarea>
    );
}

export default Input;
