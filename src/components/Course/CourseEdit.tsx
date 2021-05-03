import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const CourseEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="course_title" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
