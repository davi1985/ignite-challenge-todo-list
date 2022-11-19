import styles from './styles.module.css';

import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};
