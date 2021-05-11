import React, { FC } from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const CourseCreate: FC = (props) => {
  return (
    <Create title="Creating a new Course" {...props}>
      <SimpleForm>
        <TextInput isRequired={true} source="id" />
        <TextInput source="course_title" />
        <DateInput isRequired={true} source="date_started" />
        <DateInput isRequired={true} source="date_ended" />
        <TextInput isRequired={true} source="grade1_interval" />
        <TextInput isRequired={true} source="grade2_interval" />
        <TextInput isRequired={true} source="grade3_interval" />
        <TextInput isRequired={true} source="grade4_interval" />
        <TextInput isRequired={true} source="grade5_interval" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
