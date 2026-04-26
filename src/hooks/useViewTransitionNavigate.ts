import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

type StartViewTransition = (cb: () => void | Promise<void>) => unknown;

interface DocumentWithVT extends Document {
  startViewTransition?: StartViewTransition;
}

export function useViewTransitionNavigate() {
  const router = useRouter();

  return useCallback(
    (to: string, opts?: any) => {
      if (typeof window === 'undefined') {
        router.push(to, opts);
        return;
      }
      const doc = document as DocumentWithVT;
      if (typeof doc.startViewTransition === 'function') {
        doc.startViewTransition(() => {
          router.push(to, opts);
        });
      } else {
        router.push(to, opts);
      }
    },
    [router]
  );
}
