import React, { FC } from "react";
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin";

import CourseSearch from "./CourseSearch";
import XFileIpt from "./XFileIpt";

const CourseList: FC = (props) => {
  return (
    <List filters={<CourseSearch />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="course_title" />
        <DateField source="date_started" />
        <DateField source="date_ended" />
        <XFileIpt />
        <EditButton />
        <DeleteButton basePath="/course" />
      </Datagrid>
    </List> //
  );
};

export default CourseList;
