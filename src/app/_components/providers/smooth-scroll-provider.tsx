"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScrollProvider({ children }: React.PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothTouch: true,
        smoothWheel: true,
        normalizeWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
