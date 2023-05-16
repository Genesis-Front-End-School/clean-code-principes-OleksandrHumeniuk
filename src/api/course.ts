import axiosInstance from '@/api/instance';
import getAuthorizationHeader from '@/api/utils';
import type { GetCourseResponse, GetCoursesResponse } from '@/types/api/course';

class Course {
  getCourses = async (): Promise<GetCoursesResponse> => {
    const res = await axiosInstance.get(
      `/core/preview-courses`,
      getAuthorizationHeader(),
    );
    return res.data;
  };

  getCourse = async (courseId: string): Promise<GetCourseResponse> => {
    const res = await axiosInstance.get(
      `/core/preview-courses/${courseId}`,
      getAuthorizationHeader(),
    );
    return res.data;
  };
}

const CourseAPI = new Course();

export default CourseAPI;
