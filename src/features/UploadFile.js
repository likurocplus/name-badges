import * as XLSX from "xlsx/xlsx.mjs";
// XLSX is a global from the standalone script

async function handleFileAsync(e) {
  var files = await e.target.files[0];
  if (files) {
    const fr = new FileReader();
    fr.readAsArrayBuffer(files);
    fr.onload = function (e) {
      console.log(e.target.result);
      // const data = new Uint8Array(e.target.result);
      const data = e.target.result;
      const workbook = XLSX.read(data);
      // Lấy dữ liệu từ sheet đầu tiên
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log(jsonData); // In dữ liệu ra console dưới dạng JSON
    };
  }
  //   fr.readAsDataURL(dataUrl);
  console.log(files);
}

export default handleFileAsync;
