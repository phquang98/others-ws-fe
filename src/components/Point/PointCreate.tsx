import React, { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PointCreate: FC = (props) => {
  return (
    <Create title="Logging points of a participant..." {...props}>
      <SimpleForm>
        <TextInput isRequired={true} source="course_id" />
        <TextInput isRequired={true} source="participant_id" />
        <TextInput source="assignment_1" />
        <TextInput source="assignment_2" />
        <TextInput source="assignment_3" />
        <TextInput source="exam" />
        <TextInput disabled source="final_grades" />
      </SimpleForm>
    </Create>
  );
};

export default PointCreate;
