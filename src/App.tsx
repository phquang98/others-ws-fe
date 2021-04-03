import React, { FC } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProv from "ra-data-json-server";

import UserList from "./components/User/User";

const App: FC = () => {
  const fakeDataProvider = jsonServerProv("https://jsonplaceholder.typicode.com");

  return (
    <Admin dataProvider={fakeDataProvider}>
      {/* <Resource name="participants" list={PartList} create={PartCreate} edit={PartEdit} /> */}
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
