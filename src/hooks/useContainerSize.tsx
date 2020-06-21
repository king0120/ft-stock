import { useLayoutEffect, useState, MutableRefObject } from 'react';
export function useContainerSize(containerElement: MutableRefObject<any>) {
  const [containerSize, setContainerSize] = useState<{ width: number; height: number; }>({ width: 0, height: 0 });
  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setContainerSize({
        width: containerElement.current?.offsetWidth,
        height: containerElement.current?.offsetHeight
      });
    });
    setContainerSize({
      width: containerElement.current?.offsetWidth,
      height: containerElement.current?.offsetHeight
    });
  }, [containerElement]);
  return containerSize;
}
