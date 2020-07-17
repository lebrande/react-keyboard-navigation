// https://usehooks.com/useOnClickOutside/
import { useEffect } from 'react';

export const useFocusOutside = (
  ref,
  onFocusOutside,
) => {
  useEffect(() => {
    const { current } = ref;
    const handleFocusOutside = (event) => {
      if (current && !current.contains(event.target)) {
        onFocusOutside();
      }
    };

    document.addEventListener('focus', handleFocusOutside, true);
    return () => {
      document.removeEventListener('focus', handleFocusOutside, true);
    };
  }, [ref]);
};
