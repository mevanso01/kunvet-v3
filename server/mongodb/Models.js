import Mongoose from 'mongoose';
import PassportLocalMongoose from 'passport-local-mongoose';

const TempAccountSchema = Mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  vcode: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  business_name: {
    type: String,
  },
});

const JobSchema = Mongoose.Schema({
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
  },
  posted_by: {
    type: String,
    required: true,
  },
  active: {
    type: { Boolean, default: false },
    required: true,
  },
  title: {
    // Name of the job
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  expiry_date: {
    type: Date,
    default: () => new Date(+new Date() + (1000 * 60 * 60 * 24 * 30)),
  },
  description: {
    // Short description
    type: String,
  },
  type: [{
    type: String,
    enum: ['fulltime', 'parttime', 'internship', 'contract', 'other'],
  }],
  type2: [{
    type: String,
    enum: ['internship', 'contract', 'other'],
  }],
  address: {
    // Address
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
    enum: ['business', 'individual', 'club'],
    default: 'individual',
  },
  shift: [{
    type: String,
    enum: ['morning', 'noon', 'afternoon', 'evening', 'night', 'flexible'],
  }],
  studentfriendly: {
    type: Boolean,
  },
  age: {
    type: Number,
  },
  pay_type: {
    type: String,
    enum: ['paid', 'unpaid', 'negotiable', 'none'],
    default: 'none',
  },
  salary: {
    type: Number,
  },
  pay_denomination: String,
  education: {
    type: String,
    enum: ['Associate', 'Bachelor', 'Master', 'None'],
  },
  language: {
    type: String,
    default: 'English',
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
const ApplicantSchema = Mongoose.Schema({
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
  },
  job_id: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  expiry_date: {
    type: Date,
    default: () => new Date(+new Date() + (1000 * 60 * 60 * 24 * 30)),
  },
  status: {
    type: String,
    enum: ['submitted', 'opened', 'processing', 'processed', 'accepted', 'rejected', 'withdrawn'],
    default: 'submitted',
  },
  name: String,
  email: String,
  school: String,
  degree: String,
  notes: String,
  resume: {
    filename: String,
    resumeid: String,
  },
});
const BusinessProfileSchema = Mongoose.Schema({
  biography: {
    type: String,
  },
  business_name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  email: {
    type: String,
  },
  display_email: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
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
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
});

// remove me maybe?
const EmployeeProfileSchema = Mongoose.Schema({
  about_me: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    // unique: true,
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

const OrganizationSchema = Mongoose.Schema({
  business_name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  biography: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  email: {
    type: String,
  },
  display_email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  website: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
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

/* const ResumeItem = {
  name: String,
  filename: String,
  resumeid: String,
}; */

const FileSchema = Mongoose.Schema({
  owner: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  uploadPath: {
    type: String,
  },
  mimeType: {
    type: String,
  },
  uploadOnce: {
    type: Boolean,
    required: true,
    default: false,
  },
  readOnly: {
    type: Boolean,
    required: true,
    default: false,
  },
  employerOnly: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const AccountSchema = Mongoose.Schema({
  /*
  Added by passport-local-mongoose:

  username: {...},
  hash: {...},
  salt: {...},
  */
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email_verified: {
    type: { Boolean, default: false },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  default_org: {
    type: String,
  },
  profile_img: {
    data: Buffer,
    contentType: String,
  },
  created_date: {
    type: { Date, default: Date.now },
  },
  school: {
    type: String,
  },
  degree: {
    type: String,
  },
  display_email: {
    type: String,
  },
  resumes: [{
    name: String,
    filename: String,
    resumeid: String,
  }],
  employee_info: {
    type: String,
    resume: Mongoose.model('Resume', ResumeSchema),
  },
  saved_jobs: {  // list of mongoIDs
    type: { default: [] },
  },
  org_list: {  // list of mongoIDs
    type: { default: [] },
  },
  notifications: [{
    text: String,
    route: String,
    notification_type: String,
    date: {
      type: { Date },
      default: Date.now,
    },
  }],
});
AccountSchema.plugin(PassportLocalMongoose, {
  usernameField: 'email',
});

export default {
  Job: Mongoose.model('Job', JobSchema),
  Resume: Mongoose.model('Resume', ResumeSchema),
  Account: Mongoose.model('Account', AccountSchema),
  Applicant: Mongoose.model('Applicant', ApplicantSchema),
  TempAccount: Mongoose.model('TempAccount', TempAccountSchema),
  BusinessProfile: Mongoose.model('BusinessProfile', BusinessProfileSchema),
  EmployeeProfile: Mongoose.model('EmployeeProfile', EmployeeProfileSchema),
  Organization: Mongoose.model('Organization', OrganizationSchema),
  File: Mongoose.model('File', FileSchema),
};
