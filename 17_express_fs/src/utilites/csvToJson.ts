import { promises as fs } from "fs";
import csv from 'csvtojson';

const convertCsvToJson = async (csvPath: string, jsonPath: string) => {
  const jsonObj = await csv({
    colParser: {
      "phone": function(item) {
        if (!item) return 'missing data';
        return item;
      }
    }
  }).fromFile(csvPath);
  await fs.writeFile(jsonPath, JSON.stringify(jsonObj));
  console.log('File created!');
}

export default convertCsvToJson;