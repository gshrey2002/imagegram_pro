

export async function createPost(req, res) {
    console.log(req.file); // req.file.location
    // call the service layer function
    if(!req.file || !req.file.location) {
        return res.status(400).json({
            success: false,
            message: "Image is required"
        });
    }
}