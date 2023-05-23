import type { FC } from 'react';
import React, { useState } from 'react';
import { East } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Rating,
  Typography,
} from '@mui/material';

import Tag from '@/components/common/tag';
import VideoPlayer from '@/components/common/video-player';
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
              src={course.video}
              poster={course.videoPoster}
              title={course.title}
              isAutoPlay={true}
            />
          ) : (
            <Box
              className={styles.picture}
              component="img"
              alt="course preview"
              src={course.image}
            />
          )}
        </CardMedia>
        <CardContent>
          <Box className={styles.headerRow}>
            {course.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
            <Typography color="primary" className={styles.date}>
              {course.launchDate}
            </Typography>
          </Box>
          <Typography className={styles.title} variant="h6">
            {course.title}
          </Typography>
          <Typography className={styles.description}>
            {course.description}
          </Typography>
          <Typography color="primary" className={styles.lessonCount}>
            {course.lessonsCount} lessons
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Box className={styles.actionsWrapper}>
            <Rating
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
          </Box>
        </CardActions>
      </Card>
    </Link>
  );
};

export default CourseCard;
