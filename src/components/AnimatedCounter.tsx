import { useState, useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  value: string;
};

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    function startAnimation() {
      const match = value.match(/^([\d.]+)([KMB+%]*)$/i);

      if (!match) {
        setDisplayValue(value);
        return;
      }

      const numericPart = match[1];
      const targetNum = parseFloat(numericPart);
      const suffix = match[2] || '';
      const isDecimal = numericPart.includes('.');
      const duration = Math.min(800 + Math.log10(targetNum + 1) * 400, 2000);
      const startTime = performance.now();

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = targetNum * easeOut;

        if (isDecimal) {
          setDisplayValue(currentValue.toFixed(1) + suffix);
        } else {
          setDisplayValue(Math.floor(currentValue).toString() + suffix);
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericPart + suffix);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
};

export default AnimatedCounter;
