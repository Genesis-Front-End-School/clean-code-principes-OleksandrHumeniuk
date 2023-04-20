import type { FC } from 'react';
import React from 'react';
import { Check } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import styles from './SkillList.module.scss';

interface SkillList {
  skills: string[] | undefined;
}

const SkillList: FC<SkillList> = ({ skills }) => (
  <Box className={styles.skillsWrapper}>
    <Typography className={styles.skillsHeader}>
      What will you learn:
    </Typography>
    {skills?.map((skill, index) => (
      <Box key={index} className={styles.skill}>
        <Check color="primary" />
        <Typography>{skill}</Typography>
      </Box>
    ))}
  </Box>
);

export default SkillList;
