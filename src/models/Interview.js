import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resumeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' },
  questions: [{ type: String }],
  answers: [{ type: String }],
  scores: [{ type: Number }],
  overallScore: { type: Number },
  feedback: { type: String },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
});

export default mongoose.models.Interview || mongoose.model('Interview', interviewSchema);
