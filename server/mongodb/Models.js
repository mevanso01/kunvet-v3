import Mongoose from 'mongoose';
import PassportLocalMongoose from 'passport-local-mongoose';

const PasswordResetInstance = Mongoose.Schema({
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

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
  createdAt: {
    type: Date,
    default: Date.now,
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
  business_id: Mongoose.Schema.Types.ObjectId,
  posted_by: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
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
  preferred_major: {
    type: String,
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
    enum: ['High_School', 'Associate', 'Bachelor', 'Master', 'None'],
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
  images: [{
    original: Mongoose.Schema.Types.ObjectId,
    cropped: Mongoose.Schema.Types.ObjectId,
  }],
  position_tags: [String],
  is_deleted: {
    type: Boolean,
    default: false,
  },
  apply_method: {
    type: String,
  },
  notes: {
    type: String,
  },
  gform_link: {
    type: String,
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
  wechat_id: String,
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
      'pursuing_associate',
      'associates',
      'high_school',
      'none',
    ],
  },
  major: String,
  notes: String,
  /* resume: {
    filename: String,
    resumeid: String,
  }, */
  resumes: [{
    filename: String,
    resumeid: String,
  }],
  applicant_message: String,
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
  },
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
  },
  biography: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  profile_pic: {
    type: Mongoose.Schema.Types.ObjectId,
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
  email_verified: {
    type: Boolean,
    default: true,
  },
  business_verified: {
    type: Boolean,
    default: true,
  },
});

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
  /*  Added by passport-local-mongoose:
  username: {...},
  hash: {...},
  salt: {...}, */
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
  },
  wechat_id: String,
  password: String,
  default_org: {
    type: String,
  },
  profile_pic: {
    type: Mongoose.Schema.Types.ObjectId,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  school: {
    type: String,
  },
  degree: {
    type: String,
    enum: [
      'pursuing_associate',
      'associates',
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
  saved_jobs: [],
  org_list: [],
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
  usernameLowerCase: true,
});

export default {
  Job: Mongoose.model('Job', JobSchema),
  Resume: Mongoose.model('Resume', ResumeSchema),
  Account: Mongoose.model('Account', AccountSchema),
  Applicant: Mongoose.model('Applicant', ApplicantSchema),
  TempAccount: Mongoose.model('TempAccount', TempAccountSchema),
  PasswordResetInstance: Mongoose.model('PasswordResetInstance', PasswordResetInstance),
  Organization: Mongoose.model('Organization', OrganizationSchema),
  File: Mongoose.model('File', FileSchema),
  HDYH: Mongoose.model('HDYH', HowDidYouHearSchema),
};
