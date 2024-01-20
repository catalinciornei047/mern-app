import mongoose from "mongoose";
const studSchema = mongoose.Schema(
    {
        nume:{
            type:String,
            required: true,
        },
        prenume:{
            type:String,
            required: true,
        },
        facultate:{
            type:String,
            required: true,
        },
        specializare:{
            type:String,
            required: true,
        },
        grupa:{
            type:String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const STUD = mongoose.model('dateStud',studSchema);