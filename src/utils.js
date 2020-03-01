export const getContentStyles = (shouldFitContainer, header) => {
  if (shouldFitContainer) {
    return {
      overflow: "auto",
      height: `calc(100% - ${header ? header.offsetHeight : 0}px)`
    };
  }
};
