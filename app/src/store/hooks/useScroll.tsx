import { scrollStore } from "../zustand";

const useScroll = () => {
  const { scroll } = scrollStore((state) => ({
    scroll: state.scroll,
  }));

  const { setScroll } = scrollStore();

  return { scroll, setScroll };
};

export default useScroll;
