import React, { FC } from "react";
import { Filter, TextInput } from "react-admin";

const CourseSearch: FC = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search course ID" source="id" alwaysOn />
    </Filter>
  );
};

export default CourseSearch;
