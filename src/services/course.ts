import CourseAPI from 'src/api/course';

const DEFAULT_POSTER_SRC = '/default.jpg';

import type { PreviewCourse } from '@/types/services/course';
import type { Course as CourseType } from '@/types/services/course';
import {
  parseCourseCover,
  parseDate,
  parseLessonNumber,
  parseLessonPoster,
  parseTime,
  sortLessons,
} from '@/utils';
class Course {
  getCourses = async (): Promise<PreviewCourse[] | undefined> => {
    const data = await CourseAPI.getCourses();
    if (!data) return undefined;

    return data.courses.map(course => ({
      id: course.id,
      title: course.title,
      tags: course.tags,
      launchDate: parseDate(course.launchDate),
      status: course.status,
      description: course.description,
      lessonsCount: course.lessonsCount,
      rating: course.rating,
      image: parseCourseCover(course.previewImageLink),
      video: course.meta.courseVideoPreview?.link,
      videoPoster:
        course.meta.courseVideoPreview?.previewImageLink ?? DEFAULT_POSTER_SRC,
    }));
  };

  getCourse = async (courseId: string): Promise<CourseType | null> => {
    const data = await CourseAPI.getCourse(courseId);
    if (!data) return null;

    const lessons = data.lessons?.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      duration: parseTime(lesson.duration),
      order: lesson.order,
      isLocked: lesson.status === 'locked',
      video: lesson.link,
      videoPoster: parseLessonPoster(lesson.previewImageLink, lesson.order),
    }));

    return {
      skills: data.meta.skills,
      lessons: sortLessons(lessons ?? []),
      lessonText: parseLessonNumber(lessons),
      id: data.id,
      title: data.title,
      tags: data.tags,
      launchDate: parseDate(data.launchDate),
      status: data.status,
      description: data.description,
      duration: parseTime(data.duration),
      rating: data.rating,
      image: parseCourseCover(data.previewImageLink),
      video: data.meta.courseVideoPreview?.link,
      videoPoster:
        data.meta.courseVideoPreview?.previewImageLink ?? DEFAULT_POSTER_SRC,
    };
  };
}

const CourseService = new Course();

export default CourseService;
