import type { FC } from 'react';
import React from 'react';
import {
  AccessTime,
  CalendarToday,
  CastForEducation,
} from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';

import Tag from '@/components/common/tag';
import IconField from '@/components/pages/course-page/components/icon-field';
import type { Course } from '@/types/services/course';

import styles from './CourseInfo.module.scss';

const CourseInfo: FC<{ course: Course }> = ({ course }) => (
  <Box className={styles.header}>
    <Box className={styles.courseInfo}>
      <Typography variant="h4">{course.title}</Typography>
      <Box className={styles.courseInfoRow}>
        {course.tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
        <Rating
          readOnly
          defaultValue={course.rating}
          className={styles.rating}
        />
      </Box>
      <Typography className={styles.description}>
        {course.description}
      </Typography>
      <Box className={styles.icons}>
        <IconField
          label={`Launch date: ${course.launchDate}`}
          icon={<CalendarToday color="primary" />}
        />
        <IconField
          label={course.lessonText}
          icon={<CastForEducation color="primary" />}
        />
        <IconField
          label={course.duration}
          icon={<AccessTime color="primary" />}
        />
      </Box>
      <Box
        className={styles.previewImage}
        component="img"
        alt="course preview"
        src={course.image}
      />
    </Box>
  </Box>
);

export default CourseInfo;
