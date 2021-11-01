const Pagination = ({ page, pages, changePage }) => {
    let middlePagination;

    if (pages <= 5) {
        middlePagination = [...Array(pages)].map((_, idx) => (
            <button
                className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                key={idx + 1}
                onClick={() => changePage(idx + 1)}
                disabled={page === idx + 1}
            >
                {idx + 1}
            </button>
        ))
    } else {
        const startValue = Math.floor((page - 1) / 5) * 5;

        middlePagination = (
            <>
                {[...Array(5)].map((_, idx) => (
                    <button
                        className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                        key={startValue + idx + 1}
                        disabled={page === startValue + idx + 1}
                        onClick={() => changePage(startValue + idx + 1)}
                    >
                        {startValue + idx + 1}
                    </button>
                ))}
        
                <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                    ...
                </button>
                <button
                    className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                    onClick={() => changePage(pages)}
                >
                    {pages}
                </button>
            </>
        )

        if (page > 5) {
            if (pages - page >= 5) {
                middlePagination = (
                    <>
                        <button
                            className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                            onClick={() => changePage(1)}
                        >
                            1
                        </button>
                        <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                            ...
                        </button>
                        <button 
                            className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                            onClick={() => changePage(startValue)}
                        >
                            {startValue}
                        </button>
                        {[...Array(5)].map((_, idx) => (
                            <button
                                className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                                key={startValue + idx + 1}
                                disabled={page === startValue + idx + 1}
                                onClick={() => changePage(startValue + idx + 1)}
                            >
                                {startValue + idx + 1}
                            </button>
                        ))}
            
                        <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                            ...
                        </button>
                        <button
                            className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                            onClick={() => changePage(pages)}
                        >
                            {pages}
                        </button>
                    </>
                );
            } else {
                let amountLeft = pages - page + 5;
                
                middlePagination = (
                    <>
                        <button
                            className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                            onClick={() => changePage(1)}
                        >
                            1
                        </button>
                        <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                            ...
                        </button>
                        <button
                            className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                            onClick={() => changePage(startValue)}
                        >
                            {startValue}
                        </button>
                        {[...Array(amountLeft)].map((_, idx) => (
                            <button
                                className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                                key={startValue + idx + 1}
                                disabled={page === startValue + idx + 1}
                                style={
                                    pages < startValue + idx + 1 ? { display: "none" } : null
                                }
                                onClick={() => changePage(startValue + idx + 1)}
                            >
                                {startValue + idx + 1}
                            </button>
                        ))}
                    </>
                );
            }
        }
    }

    return (
        pages > 1 && (
            <div className="container my-4">
                <button
                    className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                    onClick={() => changePage((page) => page - 1)}
                    disabled={page === 1}
                >
                    &#171;
                </button>
                {middlePagination}
                <button
                    className="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100"
                    onClick={() => changePage((page) => page + 1)}
                    disabled={page === pages}
                >
                    &#187;
                </button>
            </div>
        )
    )
}

export default Pagination
