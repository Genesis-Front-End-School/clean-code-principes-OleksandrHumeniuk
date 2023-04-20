import type { FC } from 'react';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';

import Loader from '@/components/common/loader';
import CourseInfo from '@/components/pages/course-page/components/course-info';
import LessonList from '@/components/pages/course-page/components/lesson-list';
import SkillList from '@/components/pages/course-page/components/skill-list';
import { showToast } from '@/redux/reducers/toast.reducer';
import CourseService from '@/services/course.service';
import { TOAST_STATUS } from '@/types/redux/toast';

const CoursesPage: FC = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const courseId = query.courseId as string;

  const { data: course, isLoading } = useQuery(
    ['courses', courseId],
    () => CourseService.getCourse(courseId),
    { refetchOnWindowFocus: false, retry: false },
  );

  if (isLoading) return <Loader />;

  if (!course) {
    dispatch(
      showToast({
        status: TOAST_STATUS.ERROR,
        message: 'Error! Check validity of courseId and/or try again later!',
      }),
    );
    void push('/');
    return <></>;
  }

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
