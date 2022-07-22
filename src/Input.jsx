function Input({ value, className, onInput }) {
    return (
        <textarea
            name=""
            id=""
            rows="10"
            class={className}
            onInput={(e) => onInput(e)}
        >{value}</textarea>
    );
}

export default Input;
