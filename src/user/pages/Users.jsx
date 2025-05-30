import React from "react";

import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Marc Portuguez",
      image:
        "https://media.istockphoto.com/id/2020686889/photo/office-workers-holding-a-jigsaw-puzzle-teamwork-and-unity-charity-volunteering-problem.jpg?s=1024x1024&w=is&k=20&c=UPPFSxjwBUCkHGeyz3Z8ss4jtyiuzOLD0D1cK0m_cgo=",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
  // return <h1>test</h1>
}

export default Users;
