import React from 'react';
import styles from './Main.module.scss';
import genStyles from '../../App.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Main = () => {
  return (
    <main>
      <section className={styles.banner}>
        <div className={classNames(genStyles.container, styles.title)}>
          <h1>Ландшафтная студия Alexandra Green LandSign</h1>
          <div
            className={classNames(
              styles.bannerLogo,
              genStyles.d_flex,
              genStyles.al_c,
              genStyles.jc_c,
            )}
          >
            <p className={classNames(styles.animationFirst, styles.p)}>
              Гармония в природе на вашем островке земли
            </p>
            <img className={classNames(styles.img)} alt="" />
            <p className={classNames(styles.animationLast, styles.p)}>
              Создаю сады для комфортной жизни
            </p>
          </div>
        </div>
      </section>

      <section className={classNames(styles.aboutUs, styles.elementAnimation)}>
        <div className={classNames(genStyles.container)}>
          <h2>Обо мне</h2>
          <div
            className={classNames(
              styles.aboutUs_info,
              genStyles.d_flex,
              genStyles.jc_sa,
              genStyles.al_c,
            )}
          >
            <img className={classNames(styles.aboutUs_img)} alt="" />
            <p className={classNames(styles.aboutUs_text)}>
              Здравствуйте! Меня зовут Зайцева Александра. Я ландшафтный дизайнер по призванию и
              образованию. Занимаюсь проектированием частных садов, благоустройством и озеленением 7
              лет. Создаю сады с душой. Рада приветствовать Вас на моём сайте.
            </p>
            <p className={classNames(styles.background_text, styles.animation_aboutUs)}>
              Green <br />
              LandSign
            </p>
          </div>
        </div>
      </section>

      <section className={classNames(styles.services, styles.elementAnimation)}>
        <div className={classNames(genStyles.container)}>
          <h2>Услуги</h2>
          <p className={classNames(styles.services_backgroundText)}>
            Green <br />
            LandSign
          </p>
          <div className={classNames(styles.servicesList, genStyles.d_g)}>
            <Link to="/services" className={styles.servicesListitem}>
              <div className={styles.servicesListitem}>
                <img
                  className={classNames(styles.servicesProject_img, styles.servicesListitem_img)}
                  alt=""
                />
                <p className={classNames(styles.servicesText)}>ландшафтный дизайн</p>
              </div>
            </Link>
            <Link to="/services" className={styles.servicesListitem}>
              <div className={styles.servicesListitem}>
                <img
                  className={classNames(styles.servicesGazon_img, styles.servicesListitem_img)}
                  alt=""
                />
                <p className={classNames(styles.servicesText)}>благоустройство</p>
              </div>
            </Link>
            <Link to="/services" className={styles.servicesListitem}>
              <div className={styles.servicesListitem}>
                <img
                  className={classNames(styles.servicesVillage_img, styles.servicesListitem_img)}
                  alt=""
                />
                <p className={classNames(styles.servicesText)}>озеленение</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={classNames(styles.portfolio, styles.elementAnimation)}>
        <div>
          <h2>Портфолио</h2>
          <div className={classNames(styles.portfolioList, genStyles.d_g, genStyles.ji_c)}>
            <Link to="/portfolio" className={styles.servicesListitem}>
              <img className={classNames(styles.projectAfonino)} alt="" />
            </Link>
            <Link to="/portfolio" className={styles.servicesListitem}>
              <img className={classNames(styles.projectBurevestnik)} alt="" />
            </Link>
            <Link to="/portfolio" className={styles.servicesListitem}>
              <img className={classNames(styles.projectElhovka)} alt="" />
            </Link>
            <Link to="/projects" className={styles.servicesListitem}>
              <img className={classNames(styles.projectNicePlace)} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
