import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const PointEdit: FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="course_id" />
        <TextInput disabled source="participant_id" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => {
          return (
            <TextInput
              key={ele}
              helperText="App ignore based on course used assignments."
              source={`assignment_${ele}`}
            />
          );
        })}
        <TextInput helperText="0-100" source="exam" />
      </SimpleForm>
    </Edit>
  );
};

export default PointEdit;
