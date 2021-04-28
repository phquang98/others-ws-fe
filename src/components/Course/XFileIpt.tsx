import React, { FC, Fragment } from "react";
import { Participant, XDataGridProps } from "../../common/types";

const XFileIpt: FC<XDataGridProps<Participant>> = (props) => {
  return (
    <Fragment>
      <input type="file" />
      {console.log(props.record)}
    </Fragment>
  );
};

export default XFileIpt;
