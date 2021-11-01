const ErrorMessage = ({ error }) => {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <h3 className="text-red-600">{error}</h3>
        </div>
    )
}

export default ErrorMessage
