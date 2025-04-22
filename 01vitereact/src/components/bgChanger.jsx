import React from "react";

const BgChanger = () => {
  const [bgColor, setBgColor] = React.useState("gray");
  return (
    <div
      className="w-full h-screen duration-200 rounded"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent overflow-hidden">
        {" "}
        Background color Changer
      </h1>
      <div className=" flex flex-wrap justify-center px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white p-2 rounded-md mt-4">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black   transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "red" }}
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black  transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >
            Green
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black  transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black  transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setBgColor("yellow")}
          >
            Yellow
          </button>

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black  transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "purple" }}
            onClick={() => setBgColor("purple")}
          >
            Purple
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="outline-none px-4 py-1 rounded-full cursor-pointer text-black  transition-all duration-300 ease-in-out hover:scale-110"
            style={{ backgroundColor: "none" }}
            onClick={() => setBgColor("")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
