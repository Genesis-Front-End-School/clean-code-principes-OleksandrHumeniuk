export interface PreviewCourse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  image: string;
  video: string | undefined;
  videoPoster: string;
  lessonsCount: number;
  rating: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  order: number;
  isLocked: boolean;
  video: string;
  videoPoster: string;
}

export interface Course extends Omit<PreviewCourse, 'lessonsCount'> {
  skills: string[];
  duration: string;
  lessons: Lesson[];
  lessonText: string;
}
