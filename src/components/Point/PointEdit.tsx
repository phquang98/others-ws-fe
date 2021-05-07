import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const PointEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="course_id" />
        <TextInput disabled source="participant_id" />
        <TextInput source="assignment_1" />
        <TextInput source="assignment_2" />
        <TextInput source="assignment_3" />
        <TextInput source="exam" />
      </SimpleForm>
    </Edit>
  );
};

export default PointEdit;
