const fs = require('fs');
const path = require('path');


module.exports.saveDataToFile = (data, filename) => {
    const dataFilePath = path.join(__dirname, `../data/${filename}.json`);
    const updatedDatabase = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataFilePath, updatedDatabase, "utf-8");
}  

module.exports.getDataByFilename = (filename) => {
    const dataFilePath = path.join(__dirname, `../data/${filename}.json`);
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
}  