import React, { FC } from "react";
import { Filter, TextInput } from "react-admin";

const PointSearch: FC = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search participant ID" source="participant_id" alwaysOn />
    </Filter>
  );
};

export default PointSearch;
