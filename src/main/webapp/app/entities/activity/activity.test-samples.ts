import dayjs from 'dayjs/esm';

import { IActivity, NewActivity } from './activity.model';

export const sampleWithRequiredData: IActivity = {
  id: 19235,
};

export const sampleWithPartialData: IActivity = {
  id: 31425,
  noOfParticipants: 32455,
  contactPerson: 'lease yowza',
  lastModifiedBy: 'presuppose',
  freeField6: 4894,
  freeField8: dayjs('2023-10-18T04:30'),
  freeField9: false,
  freeField10: true,
  freeField11: false,
};

export const sampleWithFullData: IActivity = {
  id: 30627,
  date: dayjs('2023-10-18T07:15'),
  organizationName: 'parameter creepy',
  location: 'zowie query',
  activityName: 'caboose panhandle',
  description: 'given how optimistically',
  noOfParticipants: 14435,
  time: 'in',
  mobileNo: 6168,
  emailId: 'proctor humble apse',
  contactPerson: 'warped respect',
  comments: 'eventually guess',
  profilePhoto: '../fake-data/blob/hipster.png',
  profilePhotoContentType: 'unknown',
  signaturePhoto: '../fake-data/blob/hipster.png',
  signaturePhotoContentType: 'unknown',
  status: 'sometimes round',
  lastModified: dayjs('2023-10-17T16:51'),
  lastModifiedBy: 'waterlogged loudly',
  freeField1: 'versus',
  freeField2: 'participant notwithstanding blindly',
  freeField3: 'squish',
  freeField4: 'uh-huh trumpet gee',
  freeField5: 14594,
  freeField6: 16987,
  freeField7: dayjs('2023-10-18T05:48'),
  freeField8: dayjs('2023-10-18T12:37'),
  freeField9: false,
  freeField10: false,
  freeField11: true,
  freeField12: false,
};

export const sampleWithNewData: NewActivity = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
