import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Poem", // or "Poem" if that's your post model
      required: true,
    },
    commentBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    likedBy: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
