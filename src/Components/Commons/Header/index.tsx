import React from 'react';
import styles from './Header.module.scss';
import genStyles from '../../../App.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={classNames(
          genStyles.container,
          genStyles.d_flex,
          genStyles.al_c,
          genStyles.jc_sb,
        )}
      >
        <a href="" className={styles.logo}></a>
        <div className={styles.menu_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={classNames(styles.header_menu, genStyles.d_g, genStyles.ji_c)}>
          <ul
            className={classNames(
              styles.header_menu,
              genStyles.d_flex,
              genStyles.jc_sb,
              genStyles.al_c,
            )}
          >
            <li>
              <Link to="/" className={styles.headerMenuListitem}>
                о нас
              </Link>
            </li>
            <li className={classNames(styles.portfolioMenu)}>
              <Link
                to=""
                className={classNames(
                  styles.headerMenuListitem
                )}
              >
                портфолио
              </Link>
              <ul className={classNames(styles.portfolioMenulist, genStyles.d_g, genStyles.alc_c)}>
                <li>
                  <Link to="/portfolio" className={styles.headerMenuListitem}>
                    реализация
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className={styles.headerMenuListitem}>
                    проектирование
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contacts" className={styles.headerMenuListitem}>
                контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <a href="" className={styles.iconViber}></a>
          <a
            href="https://instagram.com/alexandra_green_landsign?igshid=YmMyMTA2M2Y="
            className={styles.iconInst}
          ></a>
        </div>
      </div>
    </header>
  );
};
