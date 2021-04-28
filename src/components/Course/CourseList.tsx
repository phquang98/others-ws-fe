import React, { FC, useState } from "react";
import xlsx from "xlsx";
import { List, Datagrid, TextField, EditButton, DeleteButton, useRecordContext } from "react-admin";

import CourseSearch from "./CourseSearch";
import { extractDataFromWorkBook, uploadDataToServer } from "../../helpers/upload";
import { Participant } from "../../common/types";
import XFileIpt from "./XFileIpt";

const CourseList: FC = (props) => {
  const [xlsxJSONData, setXlsxJSONData] = useState<Participant[]>([]);

  let workBook: xlsx.WorkBook; // backend take this
  const sheetNameHere = "Fake Data 1";
  const uploadURL = process.env.REACT_APP_URL_UPLOAD_PAGE;

  const extractDataFromInputEle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (evt.currentTarget.files) {
      const excelFile = evt.currentTarget.files[0];
      // console.log("silver", excelFile);
      const fileReader = new FileReader();
      fileReader.onload = (): void => {
        if (fileReader.result && typeof fileReader.result !== "string") {
          // const data = new Uint8Array(progressEvt?.currentTarget?.result); CANT DO THIS
          const data = new Uint8Array(fileReader.result); // ArrayBuffer only
          workBook = xlsx.read(data, { type: "array" });
          console.log("platinum", extractDataFromWorkBook(workBook, sheetNameHere));
          setXlsxJSONData(extractDataFromWorkBook(workBook, sheetNameHere));
          console.log("wtf", xlsxJSONData);
        }
      };
      fileReader.readAsArrayBuffer(excelFile); // trigger fileReader.onload
    } else {
      console.log("Something wrong with uploading the files!");
    }
  };

  const uploadToSrvHdlr = () => {
    // console.log(xlsxJSONData);
    // uploadDataToServer(uploadURL, xlsxJSONData);
  };

  return (
    <List filters={<CourseSearch />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="course_id" />
        <TextField source="course_title" />
        {/* <TextField source="course_description" />
      <DateField source="date_started" />
      <DateField source="date_ended" /> */}
        <XFileIpt />
        {/* <input type="file" onChange={extractDataFromInputEle} /> */}
        <button onClick={uploadToSrvHdlr}>Upload</button>
        <EditButton />
        <DeleteButton basePath="/course" />
      </Datagrid>
    </List> //
  );
};

export default CourseList;
