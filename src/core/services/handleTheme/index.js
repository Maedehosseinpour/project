const handleTheme = () => {
  const themeLocal = localStorage.getItem("theme");
  if (themeLocal === "dark") {
    document.documentElement.classList.add("dark");
  }
};
export default handleTheme;
