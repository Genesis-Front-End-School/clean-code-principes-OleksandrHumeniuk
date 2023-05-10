import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { showToast } from '@/redux/reducers/toast.reducer';
import CourseService from '@/services/course.service';
import { TOAST_STATUS } from '@/types/redux/toast';

const useGetCourses = () => {
  const { data, isLoading } = useQuery(
    'courses',
    () => CourseService.getCourses(),
    { refetchOnWindowFocus: false, retry: false },
  );

  const dispatch = useDispatch();

  if (!data) {
    dispatch(
      showToast({
        status: TOAST_STATUS.ERROR,
        message: 'Error! Try again later!',
      }),
    );
  }

  return {
    data,
    isLoading,
  };
};

export default useGetCourses;
