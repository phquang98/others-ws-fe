import xlsx, { WorkBook, Sheet2JSONOpts } from "xlsx";
import axios from "axios";
import dotenv from "dotenv";

import { Participant } from "../common/types";

const sheet2JsonOpts: Sheet2JSONOpts = {
  raw: false // use formatted str, aka w prop,
  // header: 1
};

dotenv.config();
const uploadURL = process.env.REACT_APP_URL_UPLOAD_PAGE;

const extractDataFromWorkBook = (workBook: WorkBook, sheetName: string): Participant[] => {
  const workSheet = workBook.Sheets[sheetName];
  const dataDump: Participant[] = xlsx.utils.sheet_to_json(workSheet, sheet2JsonOpts);
  return dataDump; //
};

const uploadDataToServer = (dataFromWorkBook: any): void => {
  console.log(uploadURL);
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
    console.log("Can not read upload URL correctly.");
  }
};

export { extractDataFromWorkBook, uploadDataToServer };
