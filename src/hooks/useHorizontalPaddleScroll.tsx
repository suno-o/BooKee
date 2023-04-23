import { useState, useEffect, useRef } from "react"

export const useHorizontalPaddleScroll = () => {
  const scrollViewRef = useRef<HTMLDivElement>(null);
  const [leftPaddleVisible, setLPV] = useState(false);
  const [rightPaddleVisible, setRPV] = useState(false);

  /* reset left and right paddles - paddles will only render when the view is scrollable */
  const resetScrollPaddle = (e?: Event, newScrollLeft?: number) => {
    if (!scrollViewRef.current) return;
    
    const { clientWidth, scrollWidth } = scrollViewRef.current;
    const scrollLeft = newScrollLeft ? newScrollLeft : scrollViewRef.current.scrollLeft;

    setLPV(scrollLeft > 0 ? true : false);
    setRPV(scrollLeft < scrollWidth - clientWidth ? true : false);
  }

  /* paddle reset on init */
  useEffect(() => {
    if (scrollViewRef) resetScrollPaddle();
  }, [scrollViewRef])

  /* attach window resize event listener - reset paddles on window size change */
  useEffect(() => {
    window.addEventListener('resize', resetScrollPaddle);
    return () => window.removeEventListener('resize', resetScrollPaddle);
  }, [])

  /* left or right paddle click */
  const onScroll = (increment: boolean) => () => {
    if (scrollViewRef && scrollViewRef.current) {
      const { clientWidth, scrollLeft } = scrollViewRef.current;
      const newScrollPos = scrollLeft + (increment ? 1 : -1) * clientWidth;
      scrollViewRef.current.scrollLeft = newScrollPos;

      resetScrollPaddle(undefined, newScrollPos);
    }
  }

  return {
    scrollViewRef,
    leftPaddleVisible,
    rightPaddleVisible,
    onScroll
  };
}