import mongoose from 'mongoose';
const newSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number
},
{
    timestamps: true
})
const ProductRouter = mongoose.model('product', newSchema);