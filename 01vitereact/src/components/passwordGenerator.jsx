import React, { useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = React.useState("8");
  const [numbers, setNumbers] = React.useState(false);
  const [characters, setCharacters] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRef = useRef(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const Password = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for (let i = 0; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
  }, [passwordRef]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    Password();
  }, [length, numbers, characters]);
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
          onChange={(e) => setLength(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="bg-blue-500 text-white px-4 py-2 shrink-0 cursor-pointer rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out mt-2 hover:scale-110"
          onClick={copyPassword}
        >
          Copy Password{" "}
        </button>
      </div>
      <div className="mb-4">
        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label className="block text-gray-700 mb-2">Include Numbers:</label>
        <input
          type="checkbox"
          checked={numbers}
          id="numberInput"
          onChange={(e) => setNumbers((prev) => !prev)}
        />
      </div>
      <div className="block text-sm gap-x-2 mb-4">
        <div className="block items-center gap-x-2">
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label className="text-gray-700 mb-1 text-center">
            {" "}
            length:{length}
          </label>
        </div>
      </div>
      <div className="mb-4">
        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label className="block text-gray-700 mb-2">
          Include Special Characters:
        </label>
        <input
          type="checkbox"
          checked={characters}
          id="characterInput"
          onChange={(e) => setCharacters((prev) => !prev)}
        />
      </div>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={Password}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110"
      >
        Generate Password
      </button>
      {password && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Generated Password:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
