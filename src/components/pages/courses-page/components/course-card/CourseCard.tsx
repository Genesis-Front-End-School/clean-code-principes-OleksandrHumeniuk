import type { FC } from 'react';
import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CoolDiv,
  East,
  IconButton,
  Link,
  Stars,
  Tag,
  Text,
  VideoPlayer,
} from '@OleksandrHumeniuk/genesis-ui-library';

import type { PreviewCourse } from '@/types/services/course';

import styles from './CourseCard.module.scss';

export type CourseCardProps = PreviewCourse;

const CourseCard: FC<CourseCardProps> = course => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={`/${course.id}`} className={styles.link}>
      <Card
        className={styles.wrapper}
        variant="outlined"
        sx={{
          ':hover': {
            boxShadow: 5,
          },
          ':active': {
            boxShadow: 15,
          },
        }}
      >
        <CardMedia
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          {isHover ? (
            <VideoPlayer
              className={styles.video}
              src={course.video ?? ''}
              poster={course.videoPoster}
              title={course.title}
              isAutoPlay={true}
            />
          ) : (
            <CoolDiv
              className={styles.picture}
              component="img"
              alt="course preview"
              src={course.image}
            />
          )}
        </CardMedia>
        <CardContent>
          <CoolDiv className={styles.headerRow}>
            {course.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
            <Text color="primary" className={styles.date}>
              {course.launchDate}
            </Text>
          </CoolDiv>
          <Text className={styles.title} variant="h6">
            {course.title}
          </Text>
          <Text className={styles.description}>{course.description}</Text>
          <Text color="primary" className={styles.lessonCount}>
            {course.lessonsCount} lessons
          </Text>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <CoolDiv className={styles.actionsWrapper}>
            <Stars
              className={styles.rating}
              color="primary"
              defaultValue={course.rating}
              readOnly
            />
            <IconButton className={styles.iconButton}>
              <Avatar className={styles.iconButtonAvatar}>
                <East />
              </Avatar>
            </IconButton>
          </CoolDiv>
        </CardActions>
      </Card>
    </Link>
  );
};

export default CourseCard;
