import React, { useState } from "react";

export default function Nav() {
  //to add a toggle btn that changes the theme of your website u need to first create a button and then we will be using use state to store the inital of the button and then in the setbtn we will store how it will move to the right side and as the btn is toggled the theme of the website will change

  const [btn, setBtn] = useState(false);

  return (
    <section className={`transition-all duration-300 ${btn? 'bg-[#554940]': 'bg-[#879a77]'} `}>
      <nav className="wrapper text-white flex justify-between items-center">
        <div className="nav-item font-bold text-2xl">Products</div>
        <div className="nav-item flex items-center gap-2">
          <p>Change Theme</p>

          <div className="toggle-btn">
            <button className="w-12 h-7 p-1 bg-white rounded-3xl">
              <div
                className={`ball rounded-full w-5 h-5 ${btn? 'bg-[#554940]' : 'bg-[#879a77]'} transition-all duration-300 cursor-pointer ${btn ? "translate-x-5" : "translate-0"}`}
                onClick={() => setBtn(!btn)}
              ></div>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
