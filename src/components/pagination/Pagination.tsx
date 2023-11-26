
const Pagination = () => {
    return (
        <div className="py-10">
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex gap-2">
                    <li>
                        <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 ">
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300  "
                            href="#!"
                        >
                            1
                        </a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative block rounded bg-[#457B9D] px-3 py-1.5 text-sm font-medium text-white transition-all duration-300"
                            href="#!"
                        >
                            2
                            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                                (current)
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 "
                            href="#!"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;