import type { FC } from 'react';
import React from 'react';
import { Divider } from '@mui/material';

import Loader from '@/components/common/loader';
import CourseInfo from '@/components/pages/course-page/components/course-info';
import LessonList from '@/components/pages/course-page/components/lesson-list';
import SkillList from '@/components/pages/course-page/components/skill-list';
import useGetCourse from '@/hooks/useGetCourse';

const CoursesPage: FC = () => {
  const { isLoading, data: course } = useGetCourse();

  if (isLoading) return <Loader />;

  if (!course) return null;

  return (
    <div>
      <CourseInfo course={course} />
      <Divider />
      <SkillList skills={course.meta.skills} />
      <LessonList lessons={course.lessons} />
    </div>
  );
};

export default CoursesPage;
