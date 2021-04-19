import React, { FC } from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const ParticipantCreate: FC = (props) => {
  return (
    <Create title="Creating a new Participant" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="participant_id" />
        <DateInput source="dob" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default ParticipantCreate;
