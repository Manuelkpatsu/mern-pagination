const LoadingSpinner = () => {
    return (
        <div class="flex w-screen h-screen justify-center items-center">
            <div 
                class="
                    animate-spin 
                    rounded-full 
                    h-32 w-32 
                    border-t-2 
                    border-b-2 
                    border-purple-500"
            ></div>
        </div>
    )
}

export default LoadingSpinner
