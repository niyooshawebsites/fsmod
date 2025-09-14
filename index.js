const fs = require("fs/promises");
const { createWriteStream } = require("fs");
const { Readable } = require("stream");
const { pipeline } = require("stream/promises");
const path = require("path");

// readfile
// const readFile = async () => {
//   try {
//     const data = await fs.readFile("readme.txt", "utf-8");
//     console.log(`File data: ${data}`);
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log(`The file that your are trying to read does not exist`);
//     } else [console.log(`Error in reading file: ${err.message}`)];
//   }
// };

// readFile();

//write file

// const writeFile = async () => {
//   try {
//     await fs.writeFile(
//       "writeme.txt",
//       "The is the new matter for the write file",
//       "utf-8"
//     );
//     console.log("File written succesfully");
//   } catch (err) {
//     console.log(`Error in writing the file: ${err}`);
//   }
// };

// writeFile();

// write json
// const writeJson = async () => {
//   try {
//     const actor = {
//       name: "Sunny Deol",
//       age: 63,
//     };

//     await fs.writeFile("actors.json", JSON.stringify(actor, null, 2), "utf-8");
//     console.log("JSON written successfully");
//   } catch (err) {
//     console.log(`Error in writing json: ${err}`);
//   }
// };

// writeJson();

// append file
// const appendFile = async () => {
//   try {
//     await fs.appendFile("writeme.txt", ". This is appended data", "utf-8");
//     console.log(`File appended successfully`);
//   } catch (err) {
//     console.log(`Error in appending file: ${err}`);
//   }
// };

// appendFile();

// file operations - open, write, close

// const fileOperations = async () => {
//   let myFile;
//   try {
//     myFile = await fs.open("dummy.txt", "w");

//     myFile.write(`This is line 1\n`);
//     myFile.write(`This is line 2\n`);
//     myFile.write(`This is line 3\n`);

//     myFile.close();
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log(`The file does not exist`);
//     } else {
//       console.log(`File operation error: ${err}`);
//     }
//   }
// };

// fileOperations();

// const deleteFile = async () => {
//   try {
//     await fs.unlink("dummy.txt");
//     console.log(`File deleted successfully`);
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log(`File does not exist`);
//     } else {
//       console.log(`Error in deleting the file: ${err}`);
//     }
//   }
// };

// deleteFile();

// // delete multiple files
// const deleteMultile = async (filesToDelete) => {
//   try {
//     const deletableFiles = filesToDelete;

//     deletableFiles.map(async (file) => {
//       await fs.unlink(file);
//       console.log(`The deleted: ${file}`);
//     });

//     // await Promise.all(
//     //   deletableFiles.map((file) => {
//     //     fs.unlink(file);
//     //   })
//     // );
//     console.log(`All files deleted`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// deleteMultile(["a.txt", "b.txt", "c.txt"]);

// handling large files
// const handleLargeFiles = async () => {
//   try {
//     // readable stream
//     const creditCards = Array(10000)
//       .fill()
//       .map((cc) => `Credit Card no: ${"X".repeat(16)}\n`);

//     const readableFile = Readable.from(creditCards);

//     // writable stream
//     const writeableFile = createWriteStream("Credit Cards.txt");

//     await pipeline(readableFile, writeableFile);
//     console.log(`Large file written successfully`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// handleLargeFiles();

// // creating a dirctory
// const createDirectory = async () => {
//   try {
//     await fs.mkdir("countries");
//     console.log(`Directory created successfully`);
//   } catch (err) {
//     console.log(`Error in creating directory: ${err}`);
//   }
// };

// createDirectory();

// // deleting a directory
// const deleteDirectory = async () => {
//   try {
//     await fs.rm("countries", { recursive: true });
//     console.log("Directory deleted successfully");
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log("The directory does not exist");
//     } else {
//       console.log(`Error in deleting the directory: ${err}`);
//     }
//   }
// };

// deleteDirectory();

// // renaming a file
// const fileRename = async () => {
//   try {
//     const oldName = "actors.json";
//     const newName = "starCast.json";
//     await fs.rename(oldName, newName);
//     console.log(`File renamed successfully`);
//   } catch (err) {
//     console.log(`Error in renaming: ${err}`);
//   }
// };

// fileRename();

// create a file inside a folder
// const createFileInsideFolder = async () => {
//   try {
//     // creating a folder
//     await fs.mkdir("countries");

//     // creating a file inside the folder
//     const fileName = "India.html";
//     const folderName = "asia";
//     const folderPath = path.join("countries", folderName);
//     await fs.mkdir(folderPath);

//     const filePath = path.join("countries", folderName, fileName); // countries/asia/india.html
//     await fs.writeFile(filePath, "India is our country", "utf-8");
//     console.log(`Operation successful`);
//   } catch (err) {
//     console.log(`Error in operation:  ${err}`);
//   }
// };

// createFileInsideFolder();

// emptying a folder w/o deleting it
// const emptyFolder = async () => {
//   try {
//     const myFolder = await fs.readdir("countries", { withFileTypes: true });

//     myFolder.map(async (myFold) => {
//       if (myFold.isDirectory()) {
//         await fs.rm(path.join("countries", myFold.name), {
//           recursive: true,
//           force: true,
//         });
//       } else {
//         await fs.unlink(path.join("countries", myFold.name));
//       }
//     });

//     console.log("Directory empty successfully");
//   } catch (err) {
//     console.log(err);
//   }
// };

// emptyFolder();

// THIS IS THE END OF THE FS MODULE...........
// NEXT WE WILL LEARN THE PATH MODULE
