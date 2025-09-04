import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ROCKCORP:758500@cluster0.rpnqctk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}