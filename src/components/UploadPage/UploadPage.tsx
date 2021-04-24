import React, { FC, Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import xlsx from "xlsx";
import dotenv from "dotenv";

import { extractDataFromWorkBook, uploadDataToServer } from "../../helpers/upload";
import { Participant } from "../../common/types";

let workBook: xlsx.WorkBook; // backend take this
const sheetNameHere = "Fake Data 1";

dotenv.config();
const uploadURL = process.env.REACT_APP_URL_UPLOAD_PAGE;
const cacDmm = process.env.REACT_APP_API_KEY;
const dmm = process.env.REACT_APP_NOT_SECRET_CODE;

const UploadPage: FC = () => {
  const [isAck, useAck] = useState<boolean>(false);
  const [xlsxJSONData, useXlsxJSONData] = useState<Participant[]>([]);

  /** Upload + "extract" data from .xlsx file
   * - get FileList from `files` prop
   * - create a FileReader + assign a handler for onload to use when triggered
   * - use xlsx to read data from .xlsx uploaded file from <input>
   *
   * Note: cant use progressEvt from fileReader.onload, as cant typecheck `result` prop
   *
   * See: https://github.com/Microsoft/TypeScript/issues/4163
   */
  const extractDataFromInputEle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (evt.currentTarget.files) {
      const excelFile = evt.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (): void => {
        if (fileReader.result && typeof fileReader.result !== "string") {
          // const data = new Uint8Array(progressEvt?.currentTarget?.result); CANT DO THIS
          const data = new Uint8Array(fileReader.result); // ArrayBuffer only
          workBook = xlsx.read(data, { type: "array" });
          useXlsxJSONData(extractDataFromWorkBook(workBook, sheetNameHere));
        }
      };
      fileReader.readAsArrayBuffer(excelFile); // trigger fileReader.onload
    } else {
      console.log("Something wrong with uploading the files!");
    }
  };

  const submitDataToServerHdlr = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("shit", uploadURL);
    console.log("damnson", xlsxJSONData);
    uploadDataToServer(xlsxJSONData);
  };

  return (
    <Fragment>
      <Button onClick={submitDataToServerHdlr} variant="contained" color="secondary">
        Submit Data to the Server
      </Button>

      <input type="file" onChange={extractDataFromInputEle} />
    </Fragment>
  );
};

export default UploadPage;
