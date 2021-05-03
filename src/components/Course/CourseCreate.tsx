import React, { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CourseCreate: FC = (props) => {
  return (
    <Create title="Creating a new Course" {...props}>
      <SimpleForm>
        <TextInput isRequired={true} source="id" />
        <TextInput source="course_title" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
