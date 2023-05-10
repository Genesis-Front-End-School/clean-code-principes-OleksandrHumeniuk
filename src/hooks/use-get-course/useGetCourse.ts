import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { showToast } from '@/redux/reducers/toast.reducer';
import CourseService from '@/services/course.service';
import { TOAST_STATUS } from '@/types/redux/toast';

const useGetCourse = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const courseId = query.courseId as string;

  const { data, isLoading } = useQuery(
    ['courses', courseId],
    () => CourseService.getCourse(courseId),
    { refetchOnWindowFocus: false, retry: false },
  );

  if (!data) {
    dispatch(
      showToast({
        status: TOAST_STATUS.ERROR,
        message: 'Error! Check validity of courseId and/or try again later!',
      }),
    );
    void push('/');
  }

  return {
    data,
    isLoading,
  };
};

export default useGetCourse;
