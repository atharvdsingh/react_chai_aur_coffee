import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [pass, setpass] = useState("");
  const passwordRef = useRef(null);

  const copyPassWordToClip = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "1234567890";
    if (char) str += "<>.,/'/;'][!@#$%^&*()_";
    for (let i = 1; i < length; i++) {
      var char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpass(pass);
  }, [length, num, char,setpass]);
  useEffect(() => {
    generatePass();
  }, [length, num, char, generatePass]);
  return (
    <>
      <div className="w-full max-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-green-600 text-center ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="passworld"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 hover:bg-amber-400 py-0.5 shrink-0 cursor-pointer"
            onClick={copyPassWordToClip}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => {
                setnum((prev) => !prev);
              }}
            />
            <label className="cursor-pointer mx[10px]" htmlFor="numberInput">
              number
            </label>
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => {
                setchar((prev) => !prev);
              }}
              id="special_ch"
            />
            <label className="cursor-pointer" htmlFor="special_ch">
              {" "}
              special character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
