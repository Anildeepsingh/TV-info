import React, { useState } from "react";

const Navbar = () => {
//   const [input, setInput] = useState();

  return (
    <div className=" bg-slate-600">
      <span className="text-8xl flex text-white justify-center">TV Info</span>

      <div className="flex justify-center h-9 bg-red-300">
        <input
          type="radio"
          name="radio"
          className="ml-4 "
          value="This is Actor"
        //   onChange={(e) => setInput(e.target.value)}
        />
        <label className="p-1.5">Actor</label>
        <input
          type="radio"
          name="radio"
          className="ml-4 "
          value="This is Show"
        //   onChange={(e) => setInput(e.target.value)}
        />
        <label className="p-1.5">Show</label>
      </div>
      {/* {input && (
        <div className="flex justify-center">
          <input className="border" placeholder={input} />
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
