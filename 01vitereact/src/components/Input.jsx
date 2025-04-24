import React from "react";

function Input({
  label,

  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none border-2 border-gray-300 rounded-md p-2 w-full"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer border-2 border-gray-300 outline-none">
          <option value="usd">USD</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
