import type { FC } from 'react';
import React, { useState } from 'react';
import { List, Text } from '@OleksandrHumeniuk/genesis-ui-library';

import LessonComponent from '@/components/pages/course-page/components/lesson/Lesson';
import type { Lesson } from '@/types/services/course';

import styles from './LessonList.module.scss';

const LessonList: FC<{ lessons: Lesson[] }> = ({ lessons }) => {
  const [openedLesson, setOpenedLesson] = useState('');

  return (
    <>
      <Text variant="h6" className={styles.lessonsHeader}>
        Lessons
      </Text>
      <List className={styles.lessonsWrapper}>
        {lessons.map(lesson => (
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
