const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/user_photo"));
    },
    filename: (req, file, cb) => {
        cb(null, 'avatar' + '-' + Date.now() + path.extname(file.originalname));
    }
});
/* >■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF). */
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        //aca se especifica los archivos q admite
        if ( ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".gif" ) {
            return callback(new Error('Solo aceptamos imagenes con extensión JPG, JPEG, PNG, GIF'));
        }
        callback(null, true);
    }
});
module.exports = upload;