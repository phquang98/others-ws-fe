import React, { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PointCreate: FC = (props) => {
  return (
    <Create title="Logging points of a participant..." {...props}>
      <SimpleForm>
        <TextInput isRequired={true} source="course_id" />
        <TextInput isRequired={true} source="participant_id" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => {
          return (
            <TextInput
              key={ele}
              isRequired={true}
              helperText="App ignore based on course used assignments."
              source={`assignment_${ele}`}
            />
          );
        })}
        <TextInput isRequired={true} helperText="0-100" source="exam" />
      </SimpleForm>
    </Create>
  );
};

export default PointCreate;
