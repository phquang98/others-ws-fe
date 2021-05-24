import React, { FC } from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const CourseEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="course_title" />
        <DateInput source="date_started" />
        <DateInput source="date_ended" />
        <TextInput disabled source="used_assignments" />
        <TextInput disabled source="max_assignment_point" />
        <TextInput disabled source="grade1_interval" />
        <TextInput disabled source="grade2_interval" />
        <TextInput disabled source="grade3_interval" />
        <TextInput disabled source="grade4_interval" />
        <TextInput disabled source="grade5_interval" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
