import { useEffect } from 'react';
import { useQuery } from 'react-query';

import CourseAPI from '@/api/course';
import useToast from '@/hooks/use-toast';

const useGetCourses = () => {
  const { data, isLoading } = useQuery(
    'courses',
    () => CourseAPI.getCourses(),
    { refetchOnWindowFocus: false, retry: false },
  );

  const toast = useToast();

  useEffect(() => {
    if (!isLoading && !data) {
      toast.error('Error! Try again later!');
    }
  }, [isLoading, data]);

  return {
    data,
    isLoading,
  };
};

export default useGetCourses;
