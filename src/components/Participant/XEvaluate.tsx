import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-admin";
import { stringify } from "query-string";

import { Participant, XDataGridProps } from "../../common/types";

const XEvaluate: FC<XDataGridProps<Participant>> = (props) => {
  const redirectHdlr = () => {
    console.log(JSON.stringify(props.record?.id));
  };

  return (
    <Fragment>
      <Button
        label="Evaluate"
        onClick={redirectHdlr}
        component={Link}
        to={{
          pathname: "/course_participant",
          search: stringify({
            filter: JSON.stringify({ customFilter: props.record?.id })
          })
        }}
      />
    </Fragment>
  );
};

export default XEvaluate;
