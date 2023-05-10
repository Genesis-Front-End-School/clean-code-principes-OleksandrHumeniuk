import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import CourseAPI from '@/api/course';
import useToast from '@/hooks/use-toast';

const useGetCourse = () => {
  const { query, push } = useRouter();
  const courseId = query.courseId as string;
  const toast = useToast();

  const { data, isLoading } = useQuery(
    ['courses', courseId],
    () => CourseAPI.getCourse(courseId),
    { refetchOnWindowFocus: false, retry: false },
  );

  useEffect(() => {
    if (!isLoading && !data) {
      toast.error('Error! Check validity of courseId and/or try again later!');
      void push('/');
    }
  }, [isLoading, data]);

  return {
    data,
    isLoading,
  };
};

export default useGetCourse;
