import React, { useMemo } from "react";
import "./style.css";

const DOTS = "...";

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

const ChakraPagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
    onPageChange,
}) => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [siblingCount, currentPage, totalPageCount]);

    return (
        <div className="chakra-pagination-container">
            <button
                className="chakra-pagination-button"
                onClick={() =>
                    onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
                }
            >
                prev
            </button>
            {paginationRange.map((item, index) => (
                <React.Fragment key={index}>
                    {item === DOTS ? (
                        <span className="chakra-pagination-dots">...</span>
                    ) : (
                        <button
                            className={`chakra-pagination-page ${item === currentPage ? "active" : ""
                                }`}
                            onClick={() => onPageChange(item)}
                        >
                            {item}
                        </button>
                    )}
                </React.Fragment>
            ))}
            <button
                className="chakra-pagination-button"
                onClick={() =>
                    onPageChange(
                        currentPage !== totalPageCount ? currentPage + 1 : currentPage
                    )
                }
            >next
            </button>
        </div>
    );
};

export default ChakraPagination;
