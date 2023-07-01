import React from 'react';
import styles from './Footer.module.scss';
import genStyles from '../../../App.module.scss';
import classNames from 'classnames';

export const Footer = () => {
  return (
    <footer className="element-animation">
      <div
        className={classNames(genStyles.container, genStyles.ji_c)}
        id="fitback-form"
      >
        <h2 className={styles.request}>Оставьте заявку</h2>
        <form action="telegram.php" method="POST" className={classNames(genStyles.d_g, genStyles.ji_c)}>
          <div className={classNames(styles.callbackForm, genStyles.d_flex, genStyles.jc_sa)}>
            <div className={classNames(styles.callbackForm_date, genStyles.d_g)}>
              <input type="text" name="user_name" id="" placeholder="Введите имя" />
              <input type="text" name="user_phone" id="" placeholder="Введите номер телефона" />
              <input type="text" name="user_email" id="" placeholder="Введите e-mail" />
            </div>
            <textarea
              className="callback-form_text"
              name="user_text"
              id=""
              placeholder=" Введите сообщение"
            ></textarea>
          </div>
          <button type="submit" className={styles.btnSubmit}>Отправить данные</button>
        </form>
      </div>
    </footer>
  );
};
