import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseSmoothScroll = (offsetHeight) => {
    console.log('useSmoothScroll');
    const { hash, pathname } = useLocation();

    useEffect(() => {
        const smoothScroll = (id, offsetHeight) => {
            const element = document.getElementById(id);
            if (element) {
              console.log('scrolling to', id);
              const elementTop = element.getBoundingClientRect().top;
              const elementPosition = elementTop + window.scrollY;
              const offsetPosition = elementPosition - offsetHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          };

        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            requestAnimationFrame(() => {
                const id = hash.replace('#', '');
                if (!document.getElementById(id)) {
                  setTimeout(() => {
                    smoothScroll(id, offsetHeight);
                  }, 100);
                } else {
                  smoothScroll(id, offsetHeight);
                }
            });
        }
    }, [hash, pathname, offsetHeight]);
};

export default UseSmoothScroll;