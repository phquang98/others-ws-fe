import React, { FC } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProv from "ra-data-json-server";

import { firebaseAuthProvider } from "./config/firebase";
import customURLs from "./common/Routes";
import PartList from "./components/Participant/ParticipantList";
import PartCreate from "./components/Participant/ParticipantCreate";
import PartEdit from "./components/Participant/ParticipantEdit";
import CustomLayout from "./components/CustomLayout/CustomLayout";
import CourseList from "./components/Course/CourseList";
import CourseCreate from "./components/Course/CourseCreate";
import CourseEdit from "./components/Course/CourseEdit";
import PointList from "./components/Point/PointList";
import PointEdit from "./components/Point/PointEdit";
import PointCreate from "./components/Point/PointCreate";

const App: FC = () => {
  const dataProv = jsonServerProv("http://localhost:5000");

  return (
    <Admin layout={CustomLayout} customRoutes={customURLs} authProvider={firebaseAuthProvider} dataProvider={dataProv}>
      <Resource name="participant" list={PartList} create={PartCreate} edit={PartEdit} />
      <Resource name="course" list={CourseList} create={CourseCreate} edit={CourseEdit} />
      <Resource name="course_participant" list={PointList} create={PointCreate} edit={PointEdit} />
    </Admin>
  );
};

export default App;
