import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { CoolDiv, Header } from '@OleksandrHumeniuk/genesis-ui-library';

import styles from './Page.module.scss';

const Page: FC<PropsWithChildren<object>> = ({ children }) => (
  <CoolDiv className={styles.wrapper}>
    <Header />
    <CoolDiv className={styles.content}>{children}</CoolDiv>
  </CoolDiv>
);

export default Page;
