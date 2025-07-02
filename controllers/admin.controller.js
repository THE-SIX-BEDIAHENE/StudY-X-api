import { adminModel } from "../models/admin.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const loginAdmin = async (req, res) => {
    try {


        const { username, password } = req.body;
        const admin = await adminModel.findOne({ username });

        //check if admin
        if (!admin) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password, admin.password);
        if (!match) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' })
        }

        const accessToken = jwt.sign(
            {
                id: admin._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' })

        return res.status(200).json({ accessToken })

    } catch (error) {
        console.error('Login Error:', error.message);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}