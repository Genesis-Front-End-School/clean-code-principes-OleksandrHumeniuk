import type { Lesson } from '@/types/common/course';

export const parseDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const parseLessonPoster = (lesson: Lesson): string =>
  `${lesson.previewImageLink}/lesson-${lesson.order}.webp`;

export const parseCourseCover = (previewImageLink: string): string =>
  `${previewImageLink}/cover.webp`;

export const parseTime = (time: number): string =>
  `${Math.floor(time / 60)} minutes ${time % 60} seconds`;

export const sortLessons = (lessons: Lesson[]): Lesson[] =>
  [...lessons].sort((lesson1, lesson2) => lesson1.order - lesson2.order);
