import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
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
    channel: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    comments: [{
      user: { type: String },
      text: { type: String },
      userLogo: { type: String },
    }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Video', VideoSchema);