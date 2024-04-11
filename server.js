import express from 'express';
import mongoose from 'mongoose';
import ProductRouter from './route/product.js';
import AuthRouter from './route/auth.js';
const app = express();
app.use(express.json())
app.use('/api/v1' , ProductRouter)
app.use('/auth' , AuthRouter)

const connectdb = async () => {
    try {
        mongoose.connect(`mongodb://localhost:27017/webdev`);
        console.log(`connected successfully`);
    } catch (error) {
        console.log(`Connection failed`);
    }
}
app.listen(4000,async ()=>{
    await connectdb();
    console.log(`Endpoint http://localhost:4000/api/webdev`);
})