import React, { useContext, useState } from "react";
import UserContext, { UserState } from "../store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First name: {user.firstName}</div>
      <div>Last name: {user.lastName}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "John",
    lastName: "Doe",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button onClick={() => setUser({ firstName: "Jane", lastName: "Dire" })}>
          Update context
        </button>
      </UserContext.Provider>
    </div>
  );
}

export default UseContextComponent;
