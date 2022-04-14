const path = require("path");

const uploadFile = (
  file,
  filePath = "uploads",
  extensions = ["png", "jpg", "jpeg", "gif"]
) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject("no file");
    }
    const [name, ext] = file.name.split(".");
    if (!extensions.includes(ext)) {
      return reject("the file must be valid");
    }
    const date = new Date();
    const fileName = `${name.replace(
      / /g,
      "-"
    )}-${date.getDay()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`;
    const uploadPath = path.join(
      __dirname,
      `../uploads`,
      filePath,
      `${fileName}.${ext}`
    );
    file.mv(uploadPath, (err) => {
      if (err) {
        return reject("something went wrong");
      }
      resolve(`${fileName}.${ext}`);
    });
  });
};

module.exports = uploadFile;
