import { useEffect } from 'react';
import { useQuery } from 'react-query';

import useToast from '@/hooks/use-toast';
import CourseService from '@/services/course';

const useGetCourses = () => {
  const { data, isLoading } = useQuery('courses', CourseService.getCourses, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  const toast = useToast();

  useEffect(() => {
    if (!isLoading && !data) {
      toast.error('Error! Try again later!');
    }
  }, [isLoading, data]);

  return {
    courses: data,
    isLoading,
  };
};

export default useGetCourses;
