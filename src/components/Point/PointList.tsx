import React, { FC } from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from "react-admin";

import PointSearch from "./PointSearch";

const PointList: FC = (props) => (
  <List filters={<PointSearch />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="course_id" />
      <TextField source="participant_id" />
      <NumberField source="assignment_1" />
      <NumberField source="assignment_2" />
      <NumberField source="assignment_3" />
      <NumberField source="exam" />
      <NumberField source="final_grades" />
      <EditButton />
      <DeleteButton basePath="/course_participant" />
    </Datagrid>
  </List>
);

export default PointList;
