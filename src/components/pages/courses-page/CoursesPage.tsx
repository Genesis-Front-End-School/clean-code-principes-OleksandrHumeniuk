import type { FC } from 'react';
import { Box, Pagination, Typography } from '@mui/material';

import Loader from '@/components/common/loader';
import CourseCardList from '@/components/pages/courses-page/components/course-card-list';
import useGetCourses from '@/hooks/use-get-courses/useGetCourses';
import usePagination from '@/hooks/use-pagination/usePagination';

import styles from './CoursesPage.module.scss';

const PAGE_SIZE = 10;

const CoursesPage: FC = () => {
  const { courses, isLoading } = useGetCourses();
  const { currentPage, handlePageChange, currentCourses, count } =
    usePagination(PAGE_SIZE, courses);

  if (isLoading) return <Loader />;

  if (!courses) return null;

  return (
    <Box className={styles.content}>
      <Typography variant="h2" className={styles.header}>
        Featured Courses
      </Typography>
      <Typography className={styles.description}>
        Empower yourself with our dynamic online courses. Genesis team has
        experienced instructors, like Oleksandr Humeniuk, that will guide you
        through each step of your learning journey, helping you to achieve your
        goals and unleash your full potential.
      </Typography>
      <Pagination
        page={currentPage}
        count={count}
        onChange={handlePageChange}
        className={styles.pagination}
        color="primary"
      />
      <CourseCardList courses={currentCourses} />
      <Pagination
        page={currentPage}
        count={count}
        onChange={handlePageChange}
        className={styles.pagination}
        color="primary"
      />
    </Box>
  );
};

export default CoursesPage;
