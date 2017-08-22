import Mongoose from 'mongoose';

const JobSchema = Mongoose.Schema({
  name: {
    // Name of the job
    type: String,
    required: true,
  },
  description: {
    // Short description
    type: String,
    required: true,
  },
  type: {
    // Type of the job
    type: String,
    required: true,
    enum: ['fulltime', 'parttime', 'other'],
    default: 'other',
  },
  address: {
    // Address
    type: String,
  },
});

export default {
  Job: Mongoose.model('Job', JobSchema),
};
