import type { FC } from 'react';
import React from 'react';
import {
  AccessTime,
  CalendarToday,
  CastForEducation,
  CoolDiv,
  Stars,
  Tag,
  Text,
} from '@OleksandrHumeniuk/genesis-ui-library';

import IconField from '@/components/pages/course-page/components/icon-field';
import type { Course } from '@/types/services/course';

import styles from './CourseInfo.module.scss';

const CourseInfo: FC<{ course: Course }> = ({ course }) => (
  <CoolDiv className={styles.header}>
    <CoolDiv className={styles.courseInfo}>
      <Text variant="h4">{course.title}</Text>
      <CoolDiv className={styles.courseInfoRow}>
        {course.tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
        <Stars
          readOnly
          defaultValue={course.rating}
          className={styles.rating}
        />
      </CoolDiv>
      <Text className={styles.description}>{course.description}</Text>
      <CoolDiv className={styles.icons}>
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
      </CoolDiv>
      <CoolDiv
        className={styles.previewImage}
        component="img"
        alt="course preview"
        src={course.image}
      />
    </CoolDiv>
  </CoolDiv>
);

export default CourseInfo;
