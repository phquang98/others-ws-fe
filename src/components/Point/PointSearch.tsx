import React, { FC } from "react";
import { Filter, TextInput } from "react-admin";

const PointSearch: FC = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search course ID" source="course_id" alwaysOn />
    </Filter>
  );
};

export default PointSearch;
