import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';

const usePagination = <T>(pageSize: number, courses: T[] | undefined) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const currentCourses = useMemo(
    () => courses?.slice(pagination.from, pagination.to),
    [courses, pagination],
  );

  const [currentPage, setCurrentPage] = useState(1);

  const count = useMemo(
    () => Math.ceil((courses?.length || 0) / pageSize),
    [courses?.length, pageSize],
  );

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from, to });
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  return {
    currentPage: currentPage,
    handlePageChange,
    currentCourses,
    count,
  };
};

export default usePagination;
