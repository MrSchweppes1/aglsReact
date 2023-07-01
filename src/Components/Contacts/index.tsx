import React from 'react';
import styles from './Contacts.module.scss';
import genStyles from '../../App.module.scss';
import classNames from 'classnames';

export const Contacts = () => {
  return (
    <main>
      <section className={classNames(styles.info)}>
        <div
          className={classNames(
            styles.info_grid,
            genStyles.container,
            genStyles.d_g,
            genStyles.ji_c,
            genStyles.al_c,
          )}
        >
          <p className={classNames(styles.info_text)}>
            Мой путь в ландшафтный дизайн совершенно не простой. Я не из тех, кто осознано в
            молодости выбрал данную профессию, я не училась в Вузе на данном направлении. Я пришла в
            это направление в 32 года, после того, как приобрела свой островок земли размером в 10
            соток в чистом поле.
          </p>
          <img className={classNames(styles.info_img, styles.info_img1)} alt="" />
          <img className={classNames(styles.info_img, styles.info_img2)} alt="" />
          <p className={classNames(styles.info_text)}>
            Методом проб и ошибок, я создала свой рай, где я обрела чувство единения и гармонии с
            природой. В процессе благоустройства своего участка, я осознала свой неисчерпаемый
            интерес к данному направлению. После этого, приняла решение пойти обучаться.
          </p>
          <p className={classNames(styles.info_text)}>
            Итак: 10 лет непрекращающегося обучения, которого требует данная профессия,
            параллельного построения бизнеса и работа с клиентами. Я создаю сады для комфортной
            жизни, которые приносят людям чувство покоя, защищенности, умиротворения и гармонии
            окружающей природы с вашим островком земли.
          </p>
          <img className={classNames(styles.info_img, styles.info_img3)} alt="" />
        </div>
      </section>
      <section className={classNames(styles.section_businessCard, styles.elementAnimation)}>
        <div className={classNames(styles.businessCard_grid, genStyles.container, genStyles.d_g)}>
          <div className={classNames(styles.businessCard_greenPart)}>
            <img className={classNames(styles.greenPart_img)} alt="" />
            <h2 className={classNames(styles.greenPart_slogan)}>Создаю сады для комфортной жизни</h2>
          </div>
          <div className={classNames(styles.businessCard_beigePart, genStyles.d_g)}>
            <div className={classNames(styles.name)}>
              <h2 className={classNames(styles.beigePart_fullname)}> Зайцева<br />Александра Евгеньевна</h2>
              <p className={classNames(styles.beigePart_profession)}>ландшафтный дизайнер</p>
            </div>
            <div className={classNames(styles.contacts)}>
              <p className={classNames(styles.mail)}>AGLS@yandex.ru</p>
              <p className={classNames(styles.number)}>+7-902-560-84-67</p>
            </div>
            <div className={classNames(styles.beigePart_icons, genStyles.d_flex, genStyles.jc_sb)}>
              <div className={classNames(styles.icon, genStyles.d_g)}>
                <img className={classNames(styles.iconViber_green)} alt="" />
                <p className={classNames(styles.viber)}>viber</p>
              </div>
              <div className={classNames(styles.icon, genStyles.d_g)}>
                <img className={classNames(styles.iconInst_green)} alt="" />
                <p className={classNames(styles.inst)}>instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames(styles.section_certificate, styles.elementAnimation)}
      ></section>
    </main>
  );
};
