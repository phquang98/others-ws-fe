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
        <TextInput isRequired={true} helperText="0-10" source="used_assignments" />
        <TextInput isRequired={true} helperText="0-100" source="max_assignment_point" />
        <TextInput isRequired={true} label="Grade 1 Upper Limit" source="grade1_interval" />
        <TextInput isRequired={true} label="Grade 2 Upper Limit" source="grade2_interval" />
        <TextInput isRequired={true} label="Grade 3 Upper Limit" source="grade3_interval" />
        <TextInput isRequired={true} label="Grade 4 Upper Limit" source="grade4_interval" />
        <TextInput isRequired={true} label="Grade 5 Upper Limit" source="grade5_interval" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
