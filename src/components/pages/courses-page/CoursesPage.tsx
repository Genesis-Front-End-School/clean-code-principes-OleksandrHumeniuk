import type { FC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Box, Pagination, Typography } from '@mui/material';

import Loader from '@/components/common/loader';
import CourseCardList from '@/components/pages/courses-page/components/course-card-list';
import usePagination from '@/hooks/usePagination';
import { showToast } from '@/redux/reducers/toast.reducer';
import CourseService from '@/services/course.service';
import { TOAST_STATUS } from '@/types/redux/toast';

import styles from './CoursesPage.module.scss';

const PAGE_SIZE = 10;

const CoursesPage: FC = () => {
  const { data, isLoading } = useQuery(
    'courses',
    () => CourseService.getCourses(),
    { refetchOnWindowFocus: false, retry: false },
  );

  const { currentPage, handlePageChange, currentCourses, count } =
    usePagination(PAGE_SIZE, data?.courses);

  const dispatch = useDispatch();

  if (isLoading) return <Loader />;

  if (!data) {
    dispatch(
      showToast({
        status: TOAST_STATUS.ERROR,
        message: 'Error! Try again later!',
      }),
    );
    return <></>;
  }

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
        color="primary"
        count={count}
        onChange={handlePageChange}
      />
      <CourseCardList courses={currentCourses} />
      <Pagination
        page={currentPage}
        color="primary"
        count={count}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default CoursesPage;
