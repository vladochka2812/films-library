import { useState, useEffect, useMemo } from 'react';
import { PaginationType } from './model/model';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDotsHorizontal } from 'react-icons/rx';
import { Button } from '../Button/Button';
import { VariantType } from '../Button/model/model';

export const Pagination = ({
  totalPage,
  currentPage,
  handlePageChange,
}: PaginationType) => {
  const [page, setPage] = useState(currentPage);

  const handlePrev = () => {
    setPage((prevState) => prevState - 1);
  };
  const handleNext = () => {
    setPage((prevState) => prevState + 1);
  };
  const handleChose = (chosePage: number) => {
    setPage(chosePage);
  };

  useEffect(() => {
    handlePageChange(page);
  }, [page]);

  const maxVisiblePages = 5;

  const renderPage = useMemo(() => {
    const pageNumbers = [];
    const halfMaxVisible = Math.floor(5 / 2);

    let startPage = Math.max(1, currentPage - halfMaxVisible);
    let endPage = Math.min(totalPage, startPage + maxVisiblePages - 1);

    if (totalPage <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (currentPage <= halfMaxVisible) {
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPage - halfMaxVisible) {
        startPage = totalPage - maxVisiblePages + 1;
      }
    }

    if (startPage > 1) {
      pageNumbers.push(
        <Button
          variant={VariantType.PAGINATION}
          key={1}
          onClick={() => handleChose(1)}
        >
          1
        </Button>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <button className="flex items-center" key="separator-1">
            <RxDotsHorizontal size={28} />
          </button>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          variant={VariantType.PAGINATION}
          key={i}
          onClick={() => handleChose(i)}
        >
          {i}
        </Button>
      );
    }

    if (endPage < totalPage) {
      if (endPage < totalPage - 1) {
        pageNumbers.push(
          <button className="flex items-center" key="separator-2">
            <RxDotsHorizontal />
          </button>
        );
      }
      pageNumbers.push(
        <Button
          variant={VariantType.PAGINATION}
          key={totalPage}
          onClick={() => handleChose(totalPage)}
        >
          {totalPage}
        </Button>
      );
    }
    return pageNumbers;
  }, [totalPage]);

  return (
    <div className="w-full flex">
      <button onClick={handlePrev}>
        <IoIosArrowBack />
      </button>
      <div className="flex gap-2">{renderPage}</div>
      <button onClick={handleNext}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
