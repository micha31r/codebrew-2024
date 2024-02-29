import { useLocation, Link } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback, forwardRef } from 'react';

import UseSmoothScroll from './UseSmoothScroll';

import { Outlet } from 'react-router-dom';

import styles from './SharedLayout.module.css';

const Navbar = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className={styles.nav}>
      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/#about" >ABOUT</Link>
      </div>

      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/#benefits">BENEFITS</Link>
      </div>

      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/themes/#themes">THEME</Link>
      </div>

      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/#prizes">PRIZES</Link>
      </div>

      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to ="/#workshop">WORKSHOP</Link>
      </div>
      
      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/#sponsors">SPONSORS</Link>
      </div>

      <div className={styles.nav__item}>
        <Link className={styles.nav__link} to="/themes/#faq">FAQ</Link>
      </div>

    </nav>
  );
});

const SharedLayout = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useCallback(node => {
    if (node !== null) {
      setNavbarHeight(node.getBoundingClientRect().height);
    }
  }, []);

  UseSmoothScroll(navbarHeight);

  return (
    <>
      <Navbar ref={navbarRef} />
      <Outlet />
    </>
  );
};

export default SharedLayout;