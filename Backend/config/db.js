import mongoose from "mongoose"

export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://snehakushwaha7394:gJ2G72lSwQi1Q3wZ@sneha.otlht3g.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}