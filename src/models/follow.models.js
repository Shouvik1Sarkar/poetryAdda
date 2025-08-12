import mongoose, { Schema } from "mongoose";

const followSchema = new mongoose.Schema(
  {
    followedBy: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    following: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const Follow = mongoose.model("Follow", followSchema);
