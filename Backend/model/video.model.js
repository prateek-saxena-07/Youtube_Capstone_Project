import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  disLikes: {
    type: Number,
    default: 0,
    },
  
}, {
    timestamps:true,
});

export default mongoose.model('Video', VideoSchema);