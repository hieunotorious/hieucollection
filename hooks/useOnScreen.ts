import { useState, useMemo, useEffect } from "react";

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window === "undefined") {
      return;
    }
    return new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (!observer) {
      return;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
