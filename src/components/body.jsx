import React, { useState } from "react";

export default function Body({ setModalOpen, menuData }) {
  console.log("menudatafrombody", menuData);

  // Show loading if menuData is null or undefined
  if (!menuData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <img src="/loading.gif" alt="Loading..." className="w-20 h-20" />
      </div>
    );
  }

  // Deduplicate menu names by getting the unique values
  const uniqueMenuNames = [...new Set(menuData.map((item) => item.menuName))];

  // Set initial state for the selected menu
  const [selectedMenu, setSelectedMenu] = useState(uniqueMenuNames[0] || "");

  // Filter the menu data based on the selected menu
  const filteredItems = menuData.filter((item) => item.menuName === selectedMenu);

  return (
    <div>
      {/* Menu Selection Bar */}
      <div
        className="relative h-[79px] bg-cover  flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${encodeURI(
            "https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4vwq1U7XnDOaJ3lr5FKCsvwOCt3piCa60rsSY6IBHlnP7J9TaclErCl2NHRu5yEOr4JJn-XQX99I8K~1l5PCeXxiPZ-ng5jRROHbl1Es47NdlT4NeFI1k2MQ0he9Ot4E98vaewmeG9ZhLYjY-GXyKJo5DVj7RKCuq2Y7DUY6Kv-TnsjJADJwbbIEA3expSyMCzUIiejm~pBQ9KJ8Cm1MOHk77ZDCU4s0xPhGi706zrZe~b3WpvtVS0UZbft21TKYLJY6Mti3qdvfoNIU7H4i9uoadsHRIMJ3jr9iMxLZNbndHr0TUaix9xmAOvRu-KK49wjgYBW1acw5KgNchkG4A__"
          )})` ,  backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center",
        }}
      >
        {/* Render a button for each unique menuName */}
        {uniqueMenuNames.length > 0 &&
          uniqueMenuNames.map((menuName, index) => (
            <button
              key={index}
              className={`p-3 m-3 text-white font-bold cursor-pointer bg-black border-2 border-transparent ${
                selectedMenu === menuName ? "bg-blue-500" : "hover:border-blue-500"
              }`}
             
              onClick={() => setSelectedMenu(menuName)}
            >
              {menuName}
            </button>
          ))}

        <button
          className="p-3 text-white font-bold cursor-pointer bg-black border-2 border-transparent hover:border-blue-500"
         
          onClick={() => setModalOpen(true)}
        >
          ---+---
        </button>
      </div>

      {/* Menu Content */}
      <div
  className="min-h-screen bg-black p-8 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), 
                      url("https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkTFjMUuehDIRRcl-s5GpwpoXDswdhDOftf81BHGsT2BTTVnEj4qviQ61kH8nHrbEroruETjEhW3zGENTuEE9WcGzfSKLclF248jsfYSkANQOQ2NnpF1EbPCuaP54br68sMC6KbN16kmm4csiSGylYLhC~zRWGcSjrcdh~wYry6HVjWYctH7wJMsiji-GsfVCD551Ac34hrydfzWGqHqoxyF8hQwAmwV8wJbOpH803OfeIOqeYhUm7hIDXbYu8~lvnQMUlz97aMnqRo3QSjKURd81-~UWlSK~8oLTh1iiMg-cuNhMEZRl7MCucNhHkz4mba-sg5BTMjPooAn~aZ6ZQ__")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="max-w-4xl mx-auto relative p-8 border border-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 gap-4">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="text-white text-4xl"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <h2 className="text-center text-3xl font-serif text-white mb-8 tracking-wider">
              — {selectedMenu} —
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 p-4 ">
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h1 className="text-white text-3xl  tracking-wide">{item.itemName}</h1>
                        <div className="border-b-4 border-dotted border-white flex-1 mx-2"></div>
                        <span className="text-white">${item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1 font-serif">{item.itemDescription}</p>
                      </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No items available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
