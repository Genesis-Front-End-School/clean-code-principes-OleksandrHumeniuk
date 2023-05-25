import type { FC, ReactNode } from 'react';
import React from 'react';
import { Avatar, CoolDiv, Text } from '@OleksandrHumeniuk/genesis-ui-library';

import styles from './IconField.module.scss';

interface IconFieldProps {
  label: string;
  icon: ReactNode;
}

const IconField: FC<IconFieldProps> = ({ label, icon }) => (
  <CoolDiv className={styles.wrapper}>
    <Avatar className={styles.avatar}>{icon}</Avatar>
    <Text className={styles.label}>{label}</Text>
  </CoolDiv>
);

export default IconField;
