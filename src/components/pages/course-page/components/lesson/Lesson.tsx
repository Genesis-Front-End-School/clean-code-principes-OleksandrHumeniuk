import type { FC, SetStateAction } from 'react';
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
import type { Lesson as LessonInterface } from '@/types/services/course';

import styles from './Lesson.module.scss';

interface LessonProps extends LessonInterface {
  value: string;
  currentValue: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const Lesson: FC<LessonProps> = ({
  value,
  currentValue,
  setValue,
  ...lesson
}) => {
  const isOpen = value === currentValue;
  const ListIcon = lesson.isLocked ? Lock : ExpandMore;

  const handleClick = () => {
    setValue(isOpen ? '' : value);
  };

  return (
    <ListItem className={styles.wrapper}>
      <ListItemButton
        disabled={lesson.isLocked}
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
          <Typography>{lesson.duration}</Typography>
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
          poster={lesson.videoPoster}
          src={lesson.video}
          className={styles.video}
        />
      </Collapse>
    </ListItem>
  );
};

export default Lesson;
