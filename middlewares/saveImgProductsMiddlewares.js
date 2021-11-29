const multer = require('multer');
const path = require("path");

const multerStorage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        var location = path.join(__dirname, "../public/img/productImage");
        cb( null, location );
    },
    filename: ( req, file, cb ) => {
        var format = 'producto' + '-' + Date.now() + path.extname(file.originalname);
        cb( null, format);
    }
});
const upload = multer({
    storage: multerStorage,
    fileFilter: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        //aca se especifica los archivos q admite
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Solo aceptamos imagenes con extensión JPG, JPEG, PNG'))
        }
        cb(null, true)
    },
    limits:{
        fileSize: 1500 * 1500,
        files: 3
    }
});

module.exports = upload;