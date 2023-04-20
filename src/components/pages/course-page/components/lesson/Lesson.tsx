import type { FC } from 'react';
import React from 'react';
import { ExpandMore, Lock } from '@mui/icons-material';
import {
  Collapse,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import VideoPlayer from '@/components/common/video-player/VideoPlayer';
import type { Lesson as LessonInterface } from '@/types/common/course';
import { parseLessonPoster, parseTime } from '@/utils';

import styles from './Lesson.module.scss';

interface LessonProps extends LessonInterface {
  value: string;
  currentValue: string;
  setValue: (value: string) => void;
}

const Lesson: FC<LessonProps> = ({
  value,
  currentValue,
  setValue,
  ...lesson
}) => {
  const isOpen = value === currentValue;
  const isLocked = lesson.status === 'locked';
  const ListIcon = isLocked ? Lock : ExpandMore;

  const handleClick = () => {
    setValue(isOpen ? '' : value);
  };

  return (
    <ListItem className={styles.wrapper}>
      <ListItemButton
        disabled={isLocked}
        className={styles.header}
        onClick={handleClick}
      >
        <ListItemIcon>
          <ListIcon className={isOpen ? styles.iconRotated : styles.icon} />
        </ListItemIcon>
        <ListItemText className={styles.text}>
          <Typography className={styles.title}>
            {`Lesson ${lesson.order}: ${lesson.title}`}
          </Typography>
          <Typography>{parseTime(lesson.duration)}</Typography>
        </ListItemText>
      </ListItemButton>
      <Divider className={styles.divider} />
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className={styles.videoWrapper}
      >
        <VideoPlayer
          title={lesson.title}
          poster={parseLessonPoster(lesson)}
          src={lesson.link}
          className={styles.video}
        />
      </Collapse>
    </ListItem>
  );
};

export default Lesson;
