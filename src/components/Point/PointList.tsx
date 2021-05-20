import React, { FC } from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from "react-admin";

import PointSearch from "./PointSearch";

const PointList: FC = (props) => {
  return (
    <List filters={<PointSearch />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="course_id" />
        <TextField source="participant_id" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => {
          return <NumberField key={ele} label={`Asgmt ${ele}`} source={`assignment_${ele}`} />;
        })}
        <NumberField source="exam" />
        <NumberField source="grade" />
        <EditButton />
        <DeleteButton basePath="/course_participant" />
      </Datagrid>
    </List>
  );
};

export default PointList;
