import mongoose from "mongoose";

import { Schema } from "mongoose";

const User = new Schema( {
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
    },
        {
        timestamps: true
        }
)

export default mongoose.models.User  || mongoose.model("User", User)