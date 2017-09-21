import Mongoose from 'mongoose';

const JobSchema = Mongoose.Schema({
  name: {
    // Name of the job
    type: String,
    required: true,
  },
  date: {
    type: { Date, default: Date.now },
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
  category: {
    type: String,
    required: true,
    enum: ['business', 'individual', 'club'],
    default: 'individual',
  },
  shift: {
    type: String,
    required: true,
    enum: ['morning', 'afternoon', 'night'],
  },
  age: {
    type: Number,
  },
  salary: {
    type: Number,
  },
  education: {
    type: String,
    enum: ['Associate', 'Bachelor', 'Master', 'None'],
    default: 'None',
  },
  language: {
    type: String,
    enum: ['English', 'Other'],
    default: 'Other',
  },
  overview: {
    type: String,
  },
  responsibilities: {
    type: String,
  },
  experience: {
    type: String,
  },
  qualifications: {
    type: String,
  },
  notes: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const BusinessProfileSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
  },
  business_name: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  username: {
    index: { unique: true },
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
  industry: {
    type: String,
  },
  address: {
    type: String,
  },
  community: {
    type: String,
  },
  city: {
    type: String,
  },
  zip_code: {
    type: String,
  },
});

const EmployeeProfileSchema = Mongoose.Schema({
  about_me: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  profile_img: {
    data: Buffer,
    contentType: String,
  },
  created_date: {
    type: { Date, default: Date.now },
  },
  last_login: {
    type: Date,
  },
  student: {
    type: Boolean,
  },
  school: {
    type: String,
  },
  gpa: {
    type: Number,
  },
  graduation_date: {
    type: Date,
  },
  degree: {
    type: String,
  },
  availability: {
    type: Date,
    enum: ['8:00', '8:30'],
  },
  saved_jobs: {
    type: [String],
  },
  applied_jobs: {
    type: [String],
  },
  other: {
    type: String,
  },
});

const ResumeSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  activities: {
    type: String,
  },
  skills: {
    type: String,
  },
  interestes: {
    type: String,
  },
  references: {
    type: String,
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
  },
  business_info: {
    type: String,
  },
  employee_info: {
    type: String,
    resume: Mongoose.model('Resume', ResumeSchema),
  },
});

export default {
  Job: Mongoose.model('Job', JobSchema),
  Resume: Mongoose.model('Resume', ResumeSchema),
  Account: Mongoose.model('Account', AccountSchema),
  BusinessProfile: Mongoose.model('BusinessProfile', BusinessProfileSchema),
  EmployeeProfile: Mongoose.model('EmployeeProfile', EmployeeProfileSchema),
};
