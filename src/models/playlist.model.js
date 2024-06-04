import mongoose, { Mongoose, Schema } from "mongoose";

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
  }
}, {timestamps:true});


export const Playlist= new mongoose.model("Playlist",playlistSchema);