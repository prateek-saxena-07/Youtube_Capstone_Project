import Video from '../model/video.model.js'

export const addVideo=async (req, res) => {
    const { title, videoUrl,channel,thumbnail,likes,disLikes,comments,views } = req.body;
    try {
        const newVid = await Video.create({
            title: title,
            videoUrl: videoUrl,
            channel: channel,
            thumbnail: thumbnail,
            views: views,
            likes: likes,
            disLikes: disLikes,
            comments:comments
        });
        res.status(201).json(newVid)
    }
    catch (err)
    {   console.log(err)
        res.status(500).json({ message: "Error creating video" ,err:err});
    }
    
}

export const getVideo = async (req, res) => {
    try {
        const vid = await Video.find({});
        res.status(200).json({ success:true,data: vid });
    }

    catch (err) {   
        console.log(err);
        res.status(500).json({success:false, message:'Server Error :)',err:err.message})
    }

}