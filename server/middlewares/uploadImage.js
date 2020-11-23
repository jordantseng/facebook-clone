const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(".")[0];
    cb(null, `${name}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
      return cb(new Error("File must be image"));
    }
    return cb(null, true);
  },
});

module.exports = upload;
