import React, { FC } from "react";
import { Create, SimpleForm, TextInput, DateInput, Validator } from "react-admin";

const CourseCreate: FC = (props) => {
  const validator: Validator = (value) => {
    return value ? undefined : "Required";
  };

  return (
    <Create title="Creating a new Course" {...props}>
      <SimpleForm>
        <TextInput isRequired={true} source="id" />
        <TextInput isRequired={true} source="course_id" />
        <TextInput source="course_title" />
        <TextInput source="course_description" />
        <DateInput source="date_started" />
        <DateInput source="date_ended" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
