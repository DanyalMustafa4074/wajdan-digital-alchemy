import { useCallback } from 'react';
import { useNavigate, type NavigateOptions } from 'react-router-dom';

type StartViewTransition = (cb: () => void | Promise<void>) => unknown;

interface DocumentWithVT extends Document {
  startViewTransition?: StartViewTransition;
}

/*
 * SPA navigation with the View Transitions API. Falls back to plain
 * navigate() in browsers that haven't shipped the API yet.
 */
export function useViewTransitionNavigate() {
  const navigate = useNavigate();

  return useCallback(
    (to: string, opts?: NavigateOptions) => {
      const doc = document as DocumentWithVT;
      if (typeof doc.startViewTransition === 'function') {
        doc.startViewTransition(() => navigate(to, opts));
      } else {
        navigate(to, opts);
      }
    },
    [navigate],
  );
}
