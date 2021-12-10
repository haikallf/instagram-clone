import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "haikallazuardifadil",
    userImg: "https://links.papareact.com/3ke",
    img: "https://c4.wallpaperflare.com/wallpaper/383/217/191/abstract-pattern-mosaic-design-wallpaper-preview.jpg",
    caption: "This is caption",
  },
  {
    id: "123",
    username: "haikallazuardifadil",
    userImg: "https://links.papareact.com/3ke",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHoDbGKJQ2lm7_rrGk8sSvSHvxgRk7_LOoQ&usqp=CAU",
    caption: "This is caption",
  },
  {
    id: "123",
    username: "haikallazuardifadil",
    userImg: "https://links.papareact.com/3ke",
    img: "https://r1.ilikewallpaper.net/ipad-wallpapers/download/16466/Abstract-ipad-wallpaper-ilikewallpaper_com.jpg",
    caption: "This is caption",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
