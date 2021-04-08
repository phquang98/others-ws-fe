import React, { FC, Fragment } from "react";
import Button from "@material-ui/core/Button";
import xlsx from "xlsx";

import { extractDataFromWorkBook, uploadDataToServer } from "../helpers/upload";

let workBook: xlsx.WorkBook; // backend take this
const sheetNameHere = "Fake Data 1";

const UploadPage: FC = () => {
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
          const fooxoalater = extractDataFromWorkBook(workBook, sheetNameHere);
          console.log("very good shit", fooxoalater);

          uploadDataToServer(fooxoalater);
        }
      };
      fileReader.readAsArrayBuffer(excelFile); // trigger fileReader.onload
    } else {
      console.log("Something wrong with uploading the files!");
    }
  };

  return (
    <Fragment>
      <Button variant="contained" color="secondary">
        Checking Material UI present
      </Button>

      <input type="file" onChange={extractDataFromInputEle} />
    </Fragment>
  );
};

export default UploadPage;
