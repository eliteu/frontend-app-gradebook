import { StrictDict } from 'utils';

const EMAIL_HEADING = 'Email';
const TOTAL_COURSE_GRADE_HEADING = 'Total Grade (%)';
const USERNAME_HEADING = 'Username';
const FULL_NAME_HEADING = 'Full Name';
const LAST_UPDATED = 'Last Updated'

const GradeFormats = StrictDict({
  absolute: 'absolute',
  percent: 'percent',
});

const Headings = StrictDict({
  email: EMAIL_HEADING,
  lastUpdated: LAST_UPDATED,
  totalGrade: TOTAL_COURSE_GRADE_HEADING,
  username: USERNAME_HEADING,
  fullName: FULL_NAME_HEADING,
});

export {
  EMAIL_HEADING,
  LAST_UPDATED,
  TOTAL_COURSE_GRADE_HEADING,
  USERNAME_HEADING,
  FULL_NAME_HEADING,
  GradeFormats,
  Headings,
};
