import mongoose from 'mongoose';

const SignUpSchema = new mongoose.Schema({
  id: { type: String, required: true },
  pwd: { type: String, required: true },
  email: String,
  tel: String,
  address: String,
})

export default mongoose.models.User || mongoose.model('User', SignUpSchema, 'User');