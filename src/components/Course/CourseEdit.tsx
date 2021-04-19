import React, { FC } from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const CourseEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="course_id" />
        <TextInput source="course_title" />
        <TextInput source="course_description" />
        <DateInput source="date_started" />
        <DateInput source="date_ended" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
