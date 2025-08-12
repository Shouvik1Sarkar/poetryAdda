import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    tokens: {
      emailVerificationToken: {
        type: String,
      },
      accessToken: {
        type: String,
      },
      refreshToken: {
        type: String,
      },
      forgotPasswordToken: {
        type: String,
      },
      resetPasswordToken: {
        type: String,
      },
    },
    tokensExpiry: {
      emailVerificationTokenExpiry: {
        type: Date,
      },
      accessTokenExpiry: {
        type: Date,
      },
      refreshTokenExpiry: {
        type: Date,
      },

      forgotPasswordTokenExpiry: {
        type: Date,
      },
      resetPasswordTokenExpiry: {
        type: Date,
      },
    },

    content: {
      savedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      likedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      archivedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      sharedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      draftContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      uploadedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
      taggedContent: {
        type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
        default: [],
      },
    },
    numberOfStrikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// Best practice ac to chat gpt
// use it if face type error

/**
 * content: {
  savedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  likedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  archivedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  sharedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  draftContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  uploadedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  },
  taggedContent: {
    type: [{ type: Schema.Types.ObjectId, ref: "Poem" }],
    default: []
  }
}

 */
