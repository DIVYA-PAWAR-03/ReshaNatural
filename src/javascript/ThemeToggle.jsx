// const themeSwitchBtn = document.getElementById('theme-switch');
// let isDarkmode = false;

// themeSwitchBtn.addEventListener('click',()=>{
//   if (isDarkmode === true) {
//     document.body.classList.remove('darkMode')
//     isDarkmode= false;
//     themeSwitchBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
//   } else {
//     document.body.classList.add('darkMode')
//     isDarkmode = true;
//        themeSwitchBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
//   }


    
// })


import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Load theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("darkMode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      id="theme-switch"
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: isDarkMode ? "#222" : "#ddd",
        color: isDarkMode ? "#fff" : "#000",
        border: "none",
        transition: "all 0.3s ease",
      }}
    >
      {isDarkMode ? (
        <i className="fa-solid fa-sun"></i> // Light Mode
      ) : (
        <i className="fa-solid fa-moon"></i> // Dark Mode
      )}
    </button>
  );
};

export default ThemeToggle;
