"use client";

import React from 'react';
import { useViewTransitionNavigate } from '@/hooks/useViewTransitionNavigate';

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/*
 * Anchor that navigates with the View Transitions API in supporting browsers,
 * but stays a real <a> so right-click + middle-click still work.
 */
export const TransitionLink: React.FC<TransitionLinkProps> = ({
  to,
  onClick,
  children,
  ...rest
}) => {
  const navigate = useViewTransitionNavigate();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // Let the browser handle modifier-clicks and external/hash-only links.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (to.startsWith('http') || to.startsWith('#')) return;

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default TransitionLink;
