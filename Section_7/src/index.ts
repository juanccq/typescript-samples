import * as fs from 'fs';

function appendToFileAsync(filePath: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, 'utf-8', (err) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

function readFileAsync(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data);
      }
    })
  })
}

const filePath = 'example.txt';
const dataToAppend = 'Appended comment';

appendToFileAsync(filePath, dataToAppend).then(() => {
  console.log('Data appended successfully');
  return readFileAsync(filePath);
}).then((fileContent) => {
  console.log(fileContent);
}).catch((error) => {
  console.error(error.message);
})