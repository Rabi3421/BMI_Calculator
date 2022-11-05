import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  console.log(chats);
  const fetchData = () => {
    axios
      .get("http://localhost:1000/api/chats")
      .then((res) => setChats(res.data));
    // setChats(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((e) => (
        <div key = {e._id}>{e.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
