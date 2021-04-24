import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const PointEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="course_id" />
        <TextInput disabled source="participant_id" />
        <TextInput source="assignment1" />
        <TextInput source="assignment2" />
        <TextInput source="assignment3" />
        <TextInput source="exam" />
      </SimpleForm>
    </Edit>
  );
};

export default PointEdit;
