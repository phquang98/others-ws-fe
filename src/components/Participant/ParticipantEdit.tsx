import React, { FC } from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const ParticipantEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <DateInput source="dob" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default ParticipantEdit;
