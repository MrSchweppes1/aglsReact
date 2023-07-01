import React from 'react';
import styles from './Portfolio.module.scss';
import genStyles from '../../App.module.scss';
import classNames from 'classnames';

export const Portfolio = () => {
  return (
    <section className={classNames(styles.workList)}>
      <div className={classNames(genStyles.container)}>
        <div className={classNames(styles.portfolio, genStyles.d_g, genStyles.ji_c)}>
          <div className={styles.projectItem}>
            <img className={classNames(styles.projectElhovka)} alt="" />
          </div>
          <div className={styles.projectItem}>
            <img className={classNames(styles.projectBurevestnik)} alt="" />
          </div>
          <div className={styles.projectItem}>
            <img className={classNames(styles.projectAfonino)} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
