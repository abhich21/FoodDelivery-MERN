import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {type: String, required:true, unique:false},
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        default: null,
      },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("User", UserSchema);
