import React, { FC } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProv from "ra-data-json-server";

import UserList from "./components/User/User";
import { firebaseAuthProvider } from "./config/firebase";
import customURLs from "./common/Routes";
import CustomLayout from "./common/CustomLayout";

const App: FC = () => {
  const fakeDataProvider = jsonServerProv("https://jsonplaceholder.typicode.com");

  return (
    <Admin
      layout={CustomLayout}
      customRoutes={customURLs}
      authProvider={firebaseAuthProvider}
      dataProvider={fakeDataProvider}
    >
      {/* <Resource name="participants" list={PartList} create={PartCreate} edit={PartEdit} /> */}
      <Resource name="users" list={UserList} />
      <button>Shit</button>
    </Admin>
  );
};

export default App;
