import { User } from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Fields should not be empty",
        success: false
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User doesn't have an account with this email",
        success: false
      });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false
      });
    }
    const tokenData = {
      id: user._id
    };

    const token = jwt.sign(tokenData, "secret_key", { expiresIn: "1d" });
    res.status(200).cookie("token", token, { httpOnly: true }).json({
      message: `Welcome back ${user.fullName}`,
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const Logout = async (req, res) => {
  res.status(200).cookie("token", "", { expires: new Date(Date.now()), httpOnly: true }).json({
    message: "User logged out successfully",
    success: true
  });
};

const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "Fields must not be empty",
        success: false
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        message: "Email already exists",
        success: false
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword
    });
    res.status(201).json({
      message: "Account created successfully",
      success: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export {
  Register,
  Login,
  Logout
};






// import { User } from "../Models/userModel.js";
// import bcryptjs from "bcryptjs"
// import jwt from 'jsonwebtoken'

// // 7908124772 lic agent
// const Login = async(req,res)=>{
//     try {
//        const {email,password} = req.body; 
//        if(!email || !password){
//         return res.status(401).json({
//             message:"Fields should not be empty",
//             success:false
//         })
//        };
//        const user = await User.findOne({email});
//        if(!user){
//         return res.status(401).json({
//             message:"User dont have an account with this email",
//             success:false
//         })
//        }

//        const passwordMatch = await bcryptjs.compare(password,user.password);
//        if(!passwordMatch){
//         return res.status(401).json({
//             message:"Invalid user name or password",
//             success:false
//         })
//        }
//        const tokenData = ({
//         id: user._id
//        })

//       const token =  jwt.sign(tokenData,"secret_key",{expiresIn:"1d"});
//       return res.status(200).cookie("token", token,{httpOnly:true}).json({
//         message:`welcome back ${user.fullName}`,
//         success:true,
//         user:{...user}
//           })
//     } catch (error) {
//         console.log(error);
//     }
// }

// const Logout = async(req,res)=>{
//     res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
//         message:"user logged out sucessfully",
//         success:true
//     })
// }

// const Register = async(req,res)=>{
//     try {
//         const {fullName,email,password} =req.body;
//         if(!fullName || !email || !password){
//             return res.status(401).json({
//                 message:"invalid credietial fields must not be empty",
//                 success:false
//             })
//         }
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(401).json({
//                 message:"Email Alredy Exist",
//                 success:false
//             })
//         }
//         const hashedPassword = await bcryptjs.hash(password,16);
//         await User.create({
//             fullName,
//             email,
//             password:hashedPassword
//         })
//         return res.status(201).json({
//            message:"Account Created sucessfully",
//            success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };

// export {
//     Register,Login,Logout
// }