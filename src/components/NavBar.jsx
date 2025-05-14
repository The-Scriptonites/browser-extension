export default function NavBar({ isDarkMode, setDarkMode }) {
  return (
    <div
      className="flex justify-between items-center px-4 py-2 rounded-lg shadow-md"
      style={{
        backgroundColor: isDarkMode ? "hsl(226, 11%, 37%)" : "hsl(0, 0%, 93%)",
      }}
    >
      <img
        src="./assets/images/logo.svg"
        className="block"
        alt="Extension logo"
      />
      <div
        className="flex items-center justify-center w-10 h-10 rounded-lg  cursor-pointer"
        style={{
          backgroundColor: isDarkMode
            ? "hsl(225, 23%, 24%)"
            : "hsl(0, 0%, 88%)",
        }}
        onClick={() => setDarkMode((isDarkMode) => !isDarkMode)}
      >
        <img
          src={`./assets/images/${isDarkMode ? "icon-sun" : "icon-moon"}.svg`}
          className="block"
          alt="Toggle dark mode icon"
        />
      </div>
    </div>
  );
}
