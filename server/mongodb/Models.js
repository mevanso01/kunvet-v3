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

const HowDidYouHearSchema = Mongoose.Schema({
  email: String,
  how_did_you_hear: String,
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
  expired: {
    type: Boolean,
    default: false,
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
  /* Jobs should be ordered by recreate_date. */
  recreate_date: {
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
  university: {
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
    default: () => new Date(+new Date() + (1000 * 60 * 60 * 24 * 40)),
  },
  status: {
    type: String,
    enum: ['submitted', 'opened', 'processing', 'processed', 'accepted', 'rejected', 'withdrawn', 'expired'],
    default: 'submitted',
  },
  name: String,
  email: String,
  school: String,
  degree: {
    type: String,
    enum: [
      'pursuing_bachelor',
      'bachelors',
      'pursuing_master',
      'masters',
      'pursuing_phd',
      'phd',
      'high_school',
      'none',
    ],
  },
  major: String,
  notes: String,
  resume: {
    filename: String,
    resumeid: String,
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
  backend: {
    type: String,
  },
  backendPath: {
    type: String,
  },
  mimeType: {
    type: String,
    required: true,
    default: 'application/octet-stream',
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
  protected: {
    type: Boolean,
    required: true,
    default: false,
  },
  accessList: [
    Mongoose.Schema.Types.ObjectId,
  ],
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
    enum: [
      'pursuing_bachelor',
      'bachelors',
      'pursuing_master',
      'masters',
      'pursuing_phd',
      'phd',
      'high_school',
      'none',
    ],
  },
  major: String,
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
  is_developer: {
    type: Boolean,
    required: true,
    default: false,
  },
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
  Organization: Mongoose.model('Organization', OrganizationSchema),
  File: Mongoose.model('File', FileSchema),
  HDYH: Mongoose.model('HDYH', HowDidYouHearSchema),
};
