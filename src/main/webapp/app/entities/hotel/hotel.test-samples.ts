import dayjs from 'dayjs/esm';

import { IHotel, NewHotel } from './hotel.model';

export const sampleWithRequiredData: IHotel = {
  id: 16408,
};

export const sampleWithPartialData: IHotel = {
  id: 17552,
  date: dayjs('2023-10-18T00:15'),
  location: 'lest nail',
  rent: 2162.92,
  emailId: 'weak precedence',
  contactPerson: 'slapstick',
  status: 'whether notwithstanding bedrock',
  lastModifiedBy: 'scaly',
  freeField1: 'overstretch bobble rigid',
  freeField5: 15508,
  freeField6: 5287,
  freeField7: dayjs('2023-10-18T13:50'),
  freeField10: true,
};

export const sampleWithFullData: IHotel = {
  id: 28242,
  date: dayjs('2023-10-17T21:23'),
  name: 'gah likewise ding',
  description: 'wriggler',
  location: 'tan',
  rent: 6680.2,
  emailId: 'outside silently',
  contactPerson: 'gently extremely',
  status: 'intercept rigidly',
  lastModified: dayjs('2023-10-18T08:34'),
  lastModifiedBy: 'fooey geez',
  freeField1: 'defiant mostly',
  freeField2: 'ticket diction',
  freeField5: 17173,
  freeField6: 8868,
  freeField7: dayjs('2023-10-18T03:24'),
  freeField8: dayjs('2023-10-18T00:32'),
  freeField9: false,
  freeField10: false,
};

export const sampleWithNewData: NewHotel = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
