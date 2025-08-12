import mongoose, { Schema } from "mongoose";

const poemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 25,
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200,
    },
    language: {
      type: String,
      enum: ["English", "Bengali", "Urdu", "Hindi"],
    },
    translatedPronunciation: {
      type: String,
      default: "English",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likedBy: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    savedBy: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    sharedBy: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },

    views: {
      type: Number,
      default: 0,
    },

    isArchived: {
      type: Boolean,
      default: false,
    },
    isDrafted: {
      type: Boolean,
      default: false,
    },
    strikes: [
      {
        striker: { type: Schema.Types.ObjectId, ref: "User" },
        reason: String,
        status: {
          type: String,
          enum: ["pending", "approved", "rejected"],
          default: "pending",
        },
      },
    ],
    numberOfStrikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Poem = mongoose.model("poem", poemSchema);
