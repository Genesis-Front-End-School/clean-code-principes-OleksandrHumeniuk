import type { Lesson } from '@/types/services/course';

export const parseDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const parseLessonPoster = (link: string, order: number): string =>
  `${link}/preview/lesson-${order}.webp`;

export const parseCourseCover = (previewImageLink: string): string =>
  `${previewImageLink}/cover.webp`;

export const parseTime = (time: number): string =>
  `${Math.floor(time / 60)} minutes ${time % 60} seconds`;

export const parseLessonNumber = (lessons: Lesson[]): string => {
  const lessonsNum = lessons.length;
  const lockedLessonsNum = lessons.filter(lesson => lesson.isLocked).length;
  return `${lessonsNum} lessons ${
    lockedLessonsNum !== 0 ? `(${lockedLessonsNum} locked)` : ''
  }`;
};

export const sortLessons = (lessons: Lesson[]): Lesson[] =>
  [...lessons].sort((lesson1, lesson2) => lesson1.order - lesson2.order);
