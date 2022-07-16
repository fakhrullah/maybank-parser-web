function Input({value, className}) {
    return (
        <textarea
            name=""
            id=""
            rows="10"
            class={className}
        >{value}</textarea>
    );
}

export default Input;
