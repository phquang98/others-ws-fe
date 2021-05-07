import React, { FC, Fragment, useState } from "react";
import xlsx from "xlsx";

import { Course, Participant, XDataGridProps } from "../../common/types";
import { extractDataFromWorkBook, uploadDataToServer } from "../../helpers/upload";

const XFileIpt: FC<XDataGridProps<Course>> = (props) => {
  const [xlsxJSONData, setXlsxJSONData] = useState<Participant[]>([]);
  const [batchCourseId, setBatchCourseId] = useState<string>(""); // used to identify what course all the student from .xlsx will registered
  const [showText, setShowText] = useState<string>("Upload");

  const extractDataFromInputEle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (evt.currentTarget.files) {
      const excelFile = evt.currentTarget.files[0];
      // console.log("silver", excelFile);
      const fileReader = new FileReader();
      fileReader.onload = (): void => {
        if (fileReader.result && typeof fileReader.result !== "string") {
          // const data = new Uint8Array(progressEvt?.currentTarget?.result); CANT DO THIS
          const data = new Uint8Array(fileReader.result); // ArrayBuffer only
          const workBook = xlsx.read(data, { type: "array" });
          setXlsxJSONData(extractDataFromWorkBook(workBook, process.env.REACT_APP_SHEETNAME));
        }
      };
      fileReader.readAsArrayBuffer(excelFile); // trigger fileReader.onload
      props.record?.id && setBatchCourseId(props.record.id);
    } else {
      console.log("Something wrong with uploading the files!");
    }
  };

  const btnClickHdlr = async () => {
    const addedCourseId = { xlsxData: xlsxJSONData, registeringCourseId: batchCourseId };
    console.log("ne", addedCourseId);
    console.log("wtf", props.record);
    setShowText(await uploadDataToServer(process.env.REACT_APP_URL_UPLOAD_PAGE, addedCourseId));
  };

  console.log("btn ten", showText);

  return (
    <Fragment>
      <input type="file" onChange={extractDataFromInputEle} />
      {/* {console.log(props.record)} */}
      <button onClick={btnClickHdlr}>{showText ?? "Upload"}</button>
    </Fragment>
  );
};

export default XFileIpt;
