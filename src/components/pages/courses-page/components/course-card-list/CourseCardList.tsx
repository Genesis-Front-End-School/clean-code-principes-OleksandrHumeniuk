import type { FC } from 'react';
import React from 'react';
import { Grid } from '@OleksandrHumeniuk/genesis-ui-library';

import CourseCard from '@/components/pages/courses-page/components/course-card';
import type { PreviewCourse } from '@/types/services/course';

import styles from './CourseCardList.module.scss';

interface CourseCardListProps {
  courses: PreviewCourse[] | undefined;
}

const CourseCardList: FC<CourseCardListProps> = ({ courses }) => (
  <Grid container spacing={2} className={styles.gridWrapper}>
    {courses?.map((course, index) => (
      <Grid
        key={index}
        item
        xs={12}
        sm={6}
        md={4}
        xl={3}
        className={styles.gridItem}
      >
        <CourseCard {...course} />
      </Grid>
    ))}
  </Grid>
);

export default CourseCardList;
