function ButtonPrimary({ className, children }) {
    const defaultClass = "m-1 px-5 py-1 rounded-md bg-gray-600 text-white shadow-gray-800 shadow-sm hover:bg-gray-800";

    return (
        <button
            class={`${defaultClass} ${className}`}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary