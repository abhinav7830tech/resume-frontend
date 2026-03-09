import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String },
  fileName: { type: String },
  skills: [{ type: String }],
  experience: { type: String },
  education: { type: String },
  summary: { type: String },
  parsedData: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Resume || mongoose.model('Resume', resumeSchema);
