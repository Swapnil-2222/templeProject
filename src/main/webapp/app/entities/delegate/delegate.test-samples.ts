import dayjs from 'dayjs/esm';

import { IDelegate, NewDelegate } from './delegate.model';

export const sampleWithRequiredData: IDelegate = {
  id: 5948,
};

export const sampleWithPartialData: IDelegate = {
  id: 13400,
  firstName: 'Dejah',
  lastName: 'Wuckert',
  nationality: 'provided actually until',
  dateOfBirth: dayjs('2023-10-18'),
  citizenship: 'till versus',
  mobileNo: 898,
  emergencyContactName: 'sardine rundown absent',
  emergencyContactNo: 22574,
  countryOfBirth: 'trustworthy zinc',
  departurePlace: 'seriously',
  status: 'after',
  lastModified: dayjs('2023-10-18T04:45'),
  lastModifiedBy: 'martyr wasteful proper',
  profilePhoto: '../fake-data/blob/hipster.png',
  profilePhotoContentType: 'unknown',
  profilePhotoContentType: 'persimmon slow',
  passportImageContentType: 'frugal',
  conferenceName: 'pulse soar how',
  freeField2: 'decriminalize meh greedily',
  freeField3: 'regularly beautiful',
  freeField4: 'modernise',
  freeField5: 6617,
  freeField6: 30581,
  freeField8: dayjs('2023-10-17T21:27'),
  freeField10: true,
  freeField12: '../fake-data/blob/hipster.png',
  freeField12ContentType: 'unknown',
};

export const sampleWithFullData: IDelegate = {
  id: 13167,
  firstName: 'Natalie',
  lastName: 'Mraz',
  gender: 'OTHER',
  nationality: 'blah',
  countryOfResidence: 'pervert',
  dateOfBirth: dayjs('2023-10-17'),
  citizenship: 'shyly worsen',
  mobileNo: 31824,
  emailId: 'saffron apropos',
  emergencyContactName: 'per',
  emergencyContactRelationship: 'positively adorable',
  emergencyContactNo: 12239,
  countryOfBirth: 'mandate past drizzle',
  cityOfResidence: 'graceful knavishly',
  stateOfResidence: 'anxiously gee',
  districtOfResidence: 'as',
  departureDate: dayjs('2023-10-17T18:39'),
  departurePlace: 'yahoo',
  arrivalDate: dayjs('2023-10-18T14:25'),
  arrivalPlace: 'fuzzy',
  status: 'preserve colorfully brightly',
  lastModified: dayjs('2023-10-18T04:37'),
  lastModifiedBy: 'however used',
  isTaxReceipt: true,
  profilePhoto: '../fake-data/blob/hipster.png',
  profilePhotoContentType: 'unknown',
  profilePhotoContentType: 'speed alive',
  passportImage: '../fake-data/blob/hipster.png',
  passportImageContentType: 'unknown',
  passportImageContentType: 'and reciprocate',
  conferenceName: 'bouncy',
  freeField1: 'bankrupt however recipe',
  freeField2: 'mmm fully',
  freeField3: 'ferociously sharp phew',
  freeField4: 'after',
  freeField5: 7454,
  freeField6: 26593,
  freeField7: dayjs('2023-10-18T12:15'),
  freeField8: dayjs('2023-10-18T11:19'),
  freeField9: false,
  freeField10: false,
  freeField11: '../fake-data/blob/hipster.png',
  freeField11ContentType: 'unknown',
  freeField12: '../fake-data/blob/hipster.png',
  freeField12ContentType: 'unknown',
};

export const sampleWithNewData: NewDelegate = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
