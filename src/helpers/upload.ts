import xlsx, { WorkBook, Sheet2JSONOpts } from "xlsx";
import axios from "axios";
import dotenv from "dotenv";

import { Participant } from "../common/types";

const sheet2JsonOpts: Sheet2JSONOpts = {
  raw: false // use formatted str, aka w prop,
  // header: 1
};

dotenv.config();

const sheetNameHere = "Fake Data 1";
let workBook: xlsx.WorkBook; // backend take this

// const extractDataFromFileInput = () => {};

const extractDataFromWorkBook = (workBook: WorkBook, sheetName: string): Participant[] => {
  const workSheet = workBook.Sheets[sheetName];
  const dataDump: Participant[] = xlsx.utils.sheet_to_json(workSheet, sheet2JsonOpts);
  return dataDump; //
};

const uploadDataToServer = (uploadURL: string | undefined, dataFromWorkBook: Participant[]): void => {
  if (uploadURL) {
    // generic here is the data from the server, aka what inside the res.status().json({...inHere})
    // const resFromServer =
    axios.post<{ msg: string }>(uploadURL, dataFromWorkBook);

    // axios
    //   .post<{ msg: string }>(uploadURL, dataFromWorkBook)
    //   .then()
    //   .catch((serverErr) => {

    //   });
  } else {
    console.log("Can not read upload URL correctly or URL missing.");
  }
};

/**
 * Used by input element, will get access to the `files` prop, then read the file content
 * @param evt Change event of the input element.
 * @returns The data inside of the file accessed from the input element.
 */
const extractDataFromInputEle = (evt: React.ChangeEvent<HTMLInputElement>): Participant[] => {
  let extractedData: Participant[] = [];
  if (evt.currentTarget.files) {
    const excelFile = evt.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (): void => {
      if (fileReader.result && typeof fileReader.result !== "string") {
        // const data = new Uint8Array(progressEvt?.currentTarget?.result); CANT DO THIS
        const data = new Uint8Array(fileReader.result); // ArrayBuffer only
        workBook = xlsx.read(data, { type: "array" });
        extractedData = extractDataFromWorkBook(workBook, sheetNameHere);
      }
    };
    fileReader.readAsArrayBuffer(excelFile); // trigger fileReader.onload
    return extractedData;
  } else {
    console.log("Something wrong with uploading the files!");
    return extractedData;
  }
};

export { extractDataFromWorkBook, uploadDataToServer, extractDataFromInputEle };
