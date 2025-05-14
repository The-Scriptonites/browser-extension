export default function MainContent({
  sortedItems,
  isDarkMode,
  handleRemoveExtension,
  handleExtensionToggle,
  statusFilter,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full mt-8 pb-24">
      {sortedItems.map((item) => (
        <div
          key={item.name}
          className="p-4 rounded-lg shadow-md h-[170px]"
          style={{
            backgroundColor: isDarkMode
              ? "hsl(226, 25%, 17%)"
              : "hsl(0, 0%, 100%)",
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex gap-3  ">
              <img src={item.logo} alt={item.name} className="w-10 h-10" />
              <div className="flex flex-col gap-0.5 mt-[-2px]">
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: isDarkMode
                      ? "hsl(0, 0%, 93%)"
                      : "hsl(226, 25%, 17%)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-[16px] sm:text-[13px] font-normal
                  leading-6"
                  style={{
                    color: isDarkMode
                      ? "hsl(0, 0%, 78%)"
                      : "hsl(226, 25%, 17%)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>

            {/* Remove and Toggle Button */}
            <div className="flex  justify-between items-center">
              <button
                onClick={() => {
                  handleRemoveExtension(item.name);
                }}
                className="cursor-pointer px-3 py-1 w-fit rounded-full text-center text-sm flex items-center justify-center border-2 focus:border-red-400"
                style={{
                  color: isDarkMode ? "hsl(0, 0%, 93%)" : "hsl(226, 25%, 17%)",
                  backgroundColor: isDarkMode ? "hsl(225, 23%, 24%)" : "",
                }}
              >
                Remove
              </button>

              {/* Toggle Button */}
              <button
                disabled={
                  statusFilter === "active" || statusFilter === "inactive"
                }
                onClick={() => handleExtensionToggle(item.name)}
                className={`cursor-pointer flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  item.isActive ? "bg-red-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={` h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    item.isActive ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
