function ButtonSecondary({className = "", children}) {
    const defaultClasses = "m-1 px-5 py-1 rounded-md bg-gray-100 text-gray-500 shadow-gray-600 border hover:bg-gray-200";
    return (
        <button
            class={`${defaultClasses} ${className}`}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary