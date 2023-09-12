type scrollHandler = {
  sectionId: string;
  behavior: "smooth" | "auto" | "instant";
  onClick?: () => void;
};
const handleScroll = ({ sectionId, behavior, onClick }: scrollHandler) => {
  // get the element by id and use scrollIntoView
  const element = document.getElementById(sectionId);

  // scroll to the element
  window.scrollTo({
    top: Number(element?.offsetTop),
    left: 0,
    behavior: behavior,
  });

  // do anything alongside the scrolling
  if (onClick) onClick();
};
export default handleScroll;
