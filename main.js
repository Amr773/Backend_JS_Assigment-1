const path = require("node:path");
const fs = require("node:fs");
const { EventEmitter } = require("node:events");
const os = require("node:os");
// Question #1
function logFileDirPath(file, dir) {
  console.log("Question #1 Answer: " + file, dir);
}

logFileDirPath(__filename, __dirname);

//Question #2

function logFileName(file) {
  console.log("Question #2 Answer: " + path.basename(file));
}

logFileName(__filename);

//Question #3

function buildPath(file) {
  console.log("Question #3 Answer: " + path.format(file));
}

buildPath({
  root: "/",
  dir: "/Users/amremad/Desktop/Backend",
  base: "week2",
  ext: "",
  name: "week2",
});

//Question #4

function exeName(file) {
  console.log("Question #4 Answer: " + path.extname(file));
}

exeName(__filename);

//Question #5

function parseFile(file) {
  let { name, ext } = path.parse(file);

  console.log("Question #5 Answer: " + name, ext);
}
parseFile(__filename);

//Question #6
function isAbs(file) {
  console.log("Question #6 Answer: " + path.isAbsolute(file));
}
isAbs(__filename);

//Question #7
function joinSegement(...file) {
  console.log("Question #7 Answer: " + path.join(...file));
}
joinSegement(__filename, "image");

//Question #8

function resolvePath(file) {
  console.log("Question #8 Answer: " + path.resolve(file));
}

resolvePath("../week2");

//Question #9

function joinPath(path1, path2) {
  console.log("Question #9 Answer: " + path.join(path1, path2));
}
joinPath("/folder1", "folder2/file.txt");

//Question #10

async function deleteFile(file) {
  fs.unlink(file, (error) => {
    if (error) {
      console.log({ error });
    } else {
      console.log(
        "Question #10 Answer: " + path.basename(file) + " is deleted"
      );
    }
  });
}
deleteFile("./file.txt");

//Question #11

function createFolder(filePath) {
  try {
    fs.mkdirSync(filePath);
    console.log("Question #11 Answer: Success");
  } catch (error) {
    console.log(error);
  }
}

createFolder("test");

//Question #12

const event = new EventEmitter();

event.on("start", (data) => {
  console.log(data);
});

event.emit("start", "Question #12 Answer: Welcome event triggered!");

//Question #13

event.on("login", (data) => {
  console.log(`Question #13 Answer: User logged in: ${data}`);
});

event.emit("login", "Amr");

//Question #14

function readFile(file) {
  try {
    const data = fs.readFileSync(file, "utf8");
    console.log("Question #14 Answer: " + data);
  } catch (error) {
    console.error(error);
  }
}
readFile("./text2.txt");

//Question #15

function writeFile(file, content) {
  fs.writeFile(file, content, { encoding: "utf-8", flag: "w" }, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

writeFile("./text2.txt", "Hello, world!");

//Question #16

function isExist(file) {
  let exist = fs.existsSync(file);
  console.log("Question #16 Answer: " + exist);
}

isExist("./text2.txt");

//Question #17

function osInfo() {
  const platform = os.platform();
  const arch = os.arch();
  console.log({ platform, arch });
}
osInfo();
