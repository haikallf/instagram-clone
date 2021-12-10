import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://links.papareact.com/3ke"
        alt=""
      />

      <div>
        <h2>haikallazuardifadil</h2>
        <h3>Welcome to Instagram</h3>
      </div>
      <button>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
