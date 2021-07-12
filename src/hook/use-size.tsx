import { useState, useEffect } from 'react';

export default () => {
    const [size, setSize] = useState({
        width: 1024,
        height: 0,
    });

    useEffect(() => {
        handleSize();

        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        }
      }, []);

    const handleSize = () => {
        setSize({
            width: document?.body?.clientWidth || 1024,
            height: document?.body?.clientHeight || 600,
        });
    }

    return size
}