import React, { FC } from "react";
import { Filter, TextInput } from "react-admin";

const ParticipantSearch: FC = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search last name" source="last_name" alwaysOn />
    </Filter>
  );
};

export default ParticipantSearch;
