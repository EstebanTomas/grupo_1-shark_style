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
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        //aca se especifica los archivos q admite
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('solo imagenes pa'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1400 * 1400,
        files: 3
    }
});

/* fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        //aca se especifica los archivos q admite
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('solo imagenes pa'))
        }
        callback(null, true)
    },
    //aca se especifica los limites, se aceptan aprox 2MB each foto, and only 3 files sino no se sube
    limits:{
        fileSize: 1424 * 1424,
        files: 3
    } */
module.exports = upload;