import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
        alt="gambar story"
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
