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

const ResumeSchema = Mongoose.Schema({
  id: { // ID for resume, ID used to reference resumes when given to businesses
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const AccountSchema = Mongoose.Schema({
  username: {
    index: { unique: true },
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  is_business: {
    type: Boolean,
    required: true,
  },
  business_info: {
    type: String,
    required: true,
  },
  // found it redundant to include is_employee, because if it's not a business and
  // they signed up then they have to be employee. So if business is false, assume employee == true
  // but feel free to add it
  employee_info: {
    type: String,
    resume: Mongoose.model('Resume', ResumeSchema),
    required: true,
  },
});

export default {
  Job: Mongoose.model('Job', JobSchema),
  Resume: Mongoose.model('Resume', ResumeSchema),
  Account: Mongoose.model('Account', AccountSchema),
};
