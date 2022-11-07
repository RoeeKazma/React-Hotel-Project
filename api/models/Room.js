import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    roomPrice:{
        type: Number,
        require: true,
    },
    desc:{
        type: String,
        require: true,
    },
    maxPeople:{
        type: Number,
        require: true,
    },
    roomNumbers:{
        type: [{number:Number, unavailableDates:{type: [Date]}}],
    },

},
{timestamps:true}
)

export default mongoose.model("Room", RoomSchema)