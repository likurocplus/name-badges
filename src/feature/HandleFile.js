import * as XLSX from "xlsx/xlsx.mjs";
import { showSuccessPopup } from "./ShowSuccessPopup";
import { showErrorPopup } from "./ShowErrorPopup";

//Feature: Update file if user upload new file
//Input: 1.event be received by onChange event
//       2. setFile to update file stata
//Process:
//Output: file be updated
const handleFile = async (e, setFile, setFileName) => {
  const data = await e.target.files[0];
  if (data) {
    //1. setfileName to display the screen
    setFileName(data.name);

    //2.create reader to read binary file in brownser
    const reader = new FileReader();

    //3.set reader read file as ArrayBuffer because XLSX read() method can read ArrayBuffer datatype
    reader.readAsArrayBuffer(data);

    //4. add event listener to reader to wait onload success
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setFile(jsonData);
      showSuccessPopup();
    };
  } else {
    showErrorPopup();
    console.log("Khong co file");
  }
};

export default handleFile;
