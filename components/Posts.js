import {
  collection,
  onSnapshot,
  orderBy,
  query,
  queryEqual,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "123",
//     username: "haikallazuardifadil",
//     userImg:
//       "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png",
//     img: "https://c4.wallpaperflare.com/wallpaper/383/217/191/abstract-pattern-mosaic-design-wallpaper-preview.jpg",
//     caption: "This is caption",
//   },
//   {
//     id: "123",
//     username: "haikallazuardifadil",
//     userImg:
//       "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHoDbGKJQ2lm7_rrGk8sSvSHvxgRk7_LOoQ&usqp=CAU",
//     caption: "This is caption",
//   },
//   {
//     id: "123",
//     username: "haikallazuardifadil",
//     userImg:
//       "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png",
//     img: "https://r1.ilikewallpaper.net/ipad-wallpapers/download/16466/Abstract-ipad-wallpaper-ilikewallpaper_com.jpg",
//     caption: "This is caption",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
