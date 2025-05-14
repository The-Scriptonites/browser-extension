export default function MainHeader({
  isDarkMode,
  statusFilter,
  setStatusFilter,
}) {
  const commonClass =
    "px-6 py-2 md:px-4 md:py-1 text-center flex justify-center items-center rounded-full cursor-pointer";

  const getButtonStyles = (filterValue) => ({
    backgroundColor:
      statusFilter === filterValue
        ? "hsl(3, 77%, 44%)"
        : isDarkMode
        ? "hsl(226, 25%, 17%)"
        : "hsl(200, 60%, 99%)",
    color:
      statusFilter === filterValue
        ? "white"
        : isDarkMode
        ? "hsl(217, 61%, 90%)"
        : "hsl(225, 23%, 24%)",
  });

  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between items-center mt-12">
      <h2
        className={`text-4xl md:text-2xl font-bold ${
          isDarkMode ? "text-[hsl(217, 61%, 90%)]" : "text-[hsl(225, 23%, 24%)]"
        }`}
      >
        Extensions List
      </h2>
      <div className="flex items-center gap-2">
        <button
          className={commonClass}
          onClick={() => setStatusFilter("all")}
          style={getButtonStyles("all")}
        >
          All
        </button>
        <button
          className={commonClass}
          onClick={() => setStatusFilter("active")}
          style={getButtonStyles("active")}
        >
          Active
        </button>
        <button
          className={commonClass}
          onClick={() => setStatusFilter("inactive")}
          style={getButtonStyles("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
