import csvParse from 'csv-parse';

function readCSVFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result;
      csvParse(csvData, { columns: true }, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
