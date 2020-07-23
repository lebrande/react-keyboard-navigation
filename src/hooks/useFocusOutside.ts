import { useEffect, RefObject } from 'react';

export const useFocusOutside = (
  ref: RefObject<HTMLDivElement>,
  onFocusOutside: () => void,
): void => {
  useEffect(() => {
    const { current } = ref;
    const handleFocusOutside = (event: FocusEvent) => {
      if (current && !current.contains(event.target as Node)) {
        onFocusOutside();
      }
    };

    document.addEventListener('focus', handleFocusOutside, true);
    return () => {
      document.removeEventListener('focus', handleFocusOutside, true);
    };
  }, [ref]);
};
