const FindJobRecord = `
  _id
  posted_by
  active
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
  notes
  images {
    original
    cropped
  }
  position_tags
`;
const FindJobRecordForJobCard = `
  _id
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
  name
  email
  school
  degree
  major
  date
  expiry_date
  resume {
    filename
    resumeid
  }
  status
`;


export default {
  FindJobRecord: FindJobRecord,
  FindApplicantRecord: FindApplicantRecord,
  FindJobRecordForJobCard: FindJobRecordForJobCard,
};
