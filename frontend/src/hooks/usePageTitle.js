import { useEffect } from 'react';

const SITE = 'Uzou TechEd Hub';

// Sets the browser tab title for the current page.
export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Tech skills for Africa’s next generation`;
  }, [title]);
};
