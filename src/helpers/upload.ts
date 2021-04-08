import xlsx, { WorkBook, Sheet2JSONOpts } from "xlsx";
import axios from "axios";

import { Participant } from "../common/types";

const sheet2JsonOpts: Sheet2JSONOpts = {
  raw: false // use formatted str, aka w prop,
  // header: 1
};

const serverURL = "http://localhost:5000/participant/upload";

const extractDataFromWorkBook = (workBook: WorkBook, sheetName: string): Participant[] => {
  const workSheet = workBook.Sheets[sheetName];
  const dataDump: Participant[] = xlsx.utils.sheet_to_json(workSheet, sheet2JsonOpts);
  return dataDump; //
};

const uploadDataToServer = (dataFromWorkBook: any): void => {
  axios.post(serverURL, dataFromWorkBook);
};

export { extractDataFromWorkBook, uploadDataToServer };
