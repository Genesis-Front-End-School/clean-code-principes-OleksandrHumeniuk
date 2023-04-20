import axiosInstance from '@/services/instance';
import getAuthorizationHeader from '@/services/utils';
import type {
  GetCourseResponse,
  GetCoursesResponse,
} from '@/types/services/course';

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

const CourseService = new Course();

export default CourseService;
