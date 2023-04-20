import type { FC } from 'react';
import React, { useState } from 'react';
import { List, Typography } from '@mui/material';

import LessonComponent from '@/components/pages/course-page/components/lesson/Lesson';
import styles from '@/components/pages/course-page/CoursePage.module.scss';
import type { Lesson as LessonInterface } from '@/types/common/course';
import { sortLessons } from '@/utils';

interface LessonListProps {
  lessons: LessonInterface[] | undefined;
}

const LessonList: FC<LessonListProps> = ({ lessons }) => {
  const [openedLesson, setOpenedLesson] = useState('');

  return (
    <>
      <Typography variant="h6" className={styles.lessonsHeader}>
        Lessons
      </Typography>
      <List className={styles.lessonsWrapper}>
        {sortLessons(lessons ?? []).map(lesson => (
          <LessonComponent
            key={lesson.id}
            value={lesson.id}
            currentValue={openedLesson}
            setValue={setOpenedLesson}
            {...lesson}
          />
        ))}
      </List>
    </>
  );
};

export default LessonList;
