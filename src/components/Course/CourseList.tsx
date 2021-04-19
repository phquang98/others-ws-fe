import React, { FC } from "react";
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin";

import CourseSearch from "./CourseSearch";

const CourseList: FC = (props) => (
  <List filters={<CourseSearch />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="course_id" />
      <TextField source="course_title" />
      <TextField source="course_description" />
      <DateField source="date_started" />
      <DateField source="date_ended" />
      <EditButton />
      <DeleteButton basePath="/course" />
    </Datagrid>
  </List> //
);

export default CourseList;
