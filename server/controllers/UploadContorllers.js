module.exports.uploadImageContorller = (req,res,next) =>{
    try{
        console.log("in upload controller try part");
        res.status(200).json({msg:"File was uploaded"});
    }
    catch(error){
        console.log("in the image uploading contorller: error");
        error.name="";
        res.status(400).json({error:error.toString()});
    }
}