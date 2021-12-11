import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-B boorder-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
