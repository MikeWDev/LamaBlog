import { addPost, addUser, deletePost } from "@/lib/actions";
import React from "react";

const ServerAction = () => {
  return (
    <>
      <div>
        <form action={addPost}>
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="desc" name="desc" />
          <input type="text" placeholder="userid" name="userid" />
          <button>Create</button>
        </form>
      </div>
      <div>
        <form action={addUser}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="password" name="password" />
          <button>Create</button>
        </form>
        <form action={deletePost}>
          <input type="text" placeholder="post slug" name="slug" />
          <button>Delete</button>
        </form>
      </div>
    </>
  );
};

export default ServerAction;
