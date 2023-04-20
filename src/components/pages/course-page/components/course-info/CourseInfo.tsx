import type { FC } from 'react';
import React, { useMemo } from 'react';
import {
  AccessTime,
  CalendarToday,
  CastForEducation,
} from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';

import Tag from '@/components/common/tag';
import IconField from '@/components/pages/course-page/components/icon-field';
import type { Course } from '@/types/common/course';
import { parseCourseCover, parseDate, parseTime } from '@/utils';

import styles from './CourseInfo.module.scss';

interface CourseInfoProps {
  course: Course;
}

const CourseInfo: FC<CourseInfoProps> = ({ course }) => {
  const lessonText = useMemo(() => {
    const lessonsNum = course?.lessons.length;
    const lockedLessonsNum = course?.lessons.filter(
      lesson => lesson.status === 'locked',
    ).length;
    return `${lessonsNum} lessons ${
      lockedLessonsNum !== 0 ? `(${lockedLessonsNum} locked)` : ''
    }`;
  }, [course]);

  return (
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
            label={`Launch date: ${parseDate(course.launchDate)}`}
            icon={<CalendarToday color="primary" />}
          />
          <IconField
            label={lessonText}
            icon={<CastForEducation color="primary" />}
          />
          <IconField
            label={parseTime(course.duration)}
            icon={<AccessTime color="primary" />}
          />
        </Box>
        <Box
          className={styles.previewImage}
          component="img"
          alt="course preview"
          src={parseCourseCover(course.previewImageLink)}
        />
      </Box>
    </Box>
  );
};

export default CourseInfo;
