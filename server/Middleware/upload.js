const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const url = "mongodb://127.0.0.1:27017/GiftCRM_DB";

const storage = new GridFsStorage({ url, bucketName: "images" });

const upload = multer({
	storage,
	onFileUploadComplete: (file, storageMeta) => {
		// Get the file ID from the GridFSBucketWriteStream object.
		const id = storageMeta.fileId;

		// Do something with the file ID.
	},
});

module.exports = upload;
