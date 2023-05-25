import type { FC } from 'react';
import React from 'react';
import { Divider, Loader } from '@OleksandrHumeniuk/genesis-ui-library';

import CourseInfo from '@/components/pages/course-page/components/course-info';
import LessonList from '@/components/pages/course-page/components/lesson-list';
import SkillList from '@/components/pages/course-page/components/skill-list';
import useGetCourse from '@/hooks/use-get-course/useGetCourse';

const CoursesPage: FC = () => {
  const { isLoading, course } = useGetCourse();

  if (isLoading) return <Loader />;

  if (!course) return null;

  return (
    <div>
      <CourseInfo course={course} />
      <Divider />
      <SkillList skills={course.skills} />
      <LessonList lessons={course.lessons} />
    </div>
  );
};

export default CoursesPage;
