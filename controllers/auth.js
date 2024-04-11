import UserModel from '../models/user.js'
import bcrypt from 'bcryptjs'
export const Register = async (req, res) => {
   try {
     const body = req.body;
     body.password = await bcrypt.hash(body.password,10);
     const usermodel = new UserModel(body);
     const user = await usermodel.save();
     res.send({user: user, message: 'Sign Up Success'});
   } catch (error){
    res.send({message: 'Registration failed'})

   }
}
export const Login = async (req, res) => {
    try {
       const body = req.body;
       const user = await UserModel.findOne({email: body.email});
       if(user === null ){
         res.send({message: 'Ko thay tai khoan'});
       }else{
         const verify = await bcrypt.compare(body.password, user.password)
         if(verify){
            const token = await JsonWebTokenError.sign({id:user.id}, '123456')
            res.send({user: user, token: token, message: 'Dang nhap thanh cong'});
         }else{
            res.send({message: 'sai ten dang nhap hoac mat khau'});
         }
       }
    }catch (error){
        
    }
}