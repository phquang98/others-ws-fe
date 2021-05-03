import React, { FC } from "react";
import { List, Datagrid, TextField, EmailField, DateField, EditButton, DeleteButton } from "react-admin";

import ParticipantSearch from "./ParticipantSearch";
import XEvaluate from "./XEvaluate";

const ParticipantList: FC = (props) => {
  return (
    <List filters={<ParticipantSearch />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="dob" />
        <EmailField source="email" />
        <XEvaluate />
        <EditButton />
        <DeleteButton basePath="/participant" />
      </Datagrid>
    </List> //
  );
};

export default ParticipantList;
