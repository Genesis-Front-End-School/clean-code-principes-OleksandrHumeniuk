import type { FC } from 'react';
import React from 'react';
import { Check, CoolDiv, Text } from '@OleksandrHumeniuk/genesis-ui-library';

import styles from './SkillList.module.scss';

const SkillList: FC<{ skills: string[] | undefined }> = ({ skills }) => (
  <CoolDiv className={styles.skillsWrapper}>
    <Text className={styles.skillsHeader}>What will you learn:</Text>
    {skills?.map((skill, index) => (
      <CoolDiv key={index} className={styles.skill}>
        <Check color="primary" />
        <Text>{skill}</Text>
      </CoolDiv>
    ))}
  </CoolDiv>
);

export default SkillList;
