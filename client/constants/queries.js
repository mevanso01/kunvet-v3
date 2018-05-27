const FindJobRecord = `
  _id
  user_id
  business_id
  posted_by
  active
  is_deleted
  title
  date
  description
  address
  university
  latitude
  longitude
  type
  studentfriendly
  type2
  shift
  age
  pay_type
  salary
  pay_denomination
  education
  preferred_major
  language
  experience
  responsibilities
  apply_method
  notes
  gform_link
  images {
    original
    cropped
  }
  position_tags
`;
const FindJobRecordForJobCard = `
  _id
  active
  is_deleted
  posted_by
  user_id
  business_id
  title
  description
  address
  university
  latitude
  longitude
  type
  studentfriendly
  type2
  shift
  age
  pay_type
  salary
  pay_denomination
  date
  images {
    cropped
  }
  position_tags
`;
const FindApplicantRecord = `
  _id
  job_id
  user_id
  name
  email
  wechat_id
  school
  degree
  major
  date
  expiry_date
  resumes {
    filename
    resumeid
  }
  status
  applicant_message
`;


export default {
  FindJobRecord: FindJobRecord,
  FindApplicantRecord: FindApplicantRecord,
  FindJobRecordForJobCard: FindJobRecordForJobCard,
};
