import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IDelegate, NewDelegate } from '../delegate.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IDelegate for edit and NewDelegateFormGroupInput for create.
 */
type DelegateFormGroupInput = IDelegate | PartialWithRequiredKeyOf<NewDelegate>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IDelegate | NewDelegate> = Omit<
  T,
  'departureDate' | 'arrivalDate' | 'lastModified' | 'freeField7' | 'freeField8'
> & {
  departureDate?: string | null;
  arrivalDate?: string | null;
  lastModified?: string | null;
  freeField7?: string | null;
  freeField8?: string | null;
};

type DelegateFormRawValue = FormValueOf<IDelegate>;

type NewDelegateFormRawValue = FormValueOf<NewDelegate>;

type DelegateFormDefaults = Pick<
  NewDelegate,
  'id' | 'departureDate' | 'arrivalDate' | 'lastModified' | 'isTaxReceipt' | 'freeField7' | 'freeField8' | 'freeField9' | 'freeField10'
>;

type DelegateFormGroupContent = {
  id: FormControl<DelegateFormRawValue['id'] | NewDelegate['id']>;
  firstName: FormControl<DelegateFormRawValue['firstName']>;
  lastName: FormControl<DelegateFormRawValue['lastName']>;
  gender: FormControl<DelegateFormRawValue['gender']>;
  nationality: FormControl<DelegateFormRawValue['nationality']>;
  countryOfResidence: FormControl<DelegateFormRawValue['countryOfResidence']>;
  dateOfBirth: FormControl<DelegateFormRawValue['dateOfBirth']>;
  citizenship: FormControl<DelegateFormRawValue['citizenship']>;
  mobileNo: FormControl<DelegateFormRawValue['mobileNo']>;
  emailId: FormControl<DelegateFormRawValue['emailId']>;
  emergencyContactName: FormControl<DelegateFormRawValue['emergencyContactName']>;
  emergencyContactRelationship: FormControl<DelegateFormRawValue['emergencyContactRelationship']>;
  emergencyContactNo: FormControl<DelegateFormRawValue['emergencyContactNo']>;
  countryOfBirth: FormControl<DelegateFormRawValue['countryOfBirth']>;
  cityOfResidence: FormControl<DelegateFormRawValue['cityOfResidence']>;
  stateOfResidence: FormControl<DelegateFormRawValue['stateOfResidence']>;
  districtOfResidence: FormControl<DelegateFormRawValue['districtOfResidence']>;
  departureDate: FormControl<DelegateFormRawValue['departureDate']>;
  departurePlace: FormControl<DelegateFormRawValue['departurePlace']>;
  arrivalDate: FormControl<DelegateFormRawValue['arrivalDate']>;
  arrivalPlace: FormControl<DelegateFormRawValue['arrivalPlace']>;
  status: FormControl<DelegateFormRawValue['status']>;
  lastModified: FormControl<DelegateFormRawValue['lastModified']>;
  lastModifiedBy: FormControl<DelegateFormRawValue['lastModifiedBy']>;
  isTaxReceipt: FormControl<DelegateFormRawValue['isTaxReceipt']>;
  profilePhoto: FormControl<DelegateFormRawValue['profilePhoto']>;
  profilePhotoContentType: FormControl<DelegateFormRawValue['profilePhotoContentType']>;
  profilePhotoContentType: FormControl<DelegateFormRawValue['profilePhotoContentType']>;
  passportImage: FormControl<DelegateFormRawValue['passportImage']>;
  passportImageContentType: FormControl<DelegateFormRawValue['passportImageContentType']>;
  passportImageContentType: FormControl<DelegateFormRawValue['passportImageContentType']>;
  conferenceName: FormControl<DelegateFormRawValue['conferenceName']>;
  freeField1: FormControl<DelegateFormRawValue['freeField1']>;
  freeField2: FormControl<DelegateFormRawValue['freeField2']>;
  freeField3: FormControl<DelegateFormRawValue['freeField3']>;
  freeField4: FormControl<DelegateFormRawValue['freeField4']>;
  freeField5: FormControl<DelegateFormRawValue['freeField5']>;
  freeField6: FormControl<DelegateFormRawValue['freeField6']>;
  freeField7: FormControl<DelegateFormRawValue['freeField7']>;
  freeField8: FormControl<DelegateFormRawValue['freeField8']>;
  freeField9: FormControl<DelegateFormRawValue['freeField9']>;
  freeField10: FormControl<DelegateFormRawValue['freeField10']>;
  freeField11: FormControl<DelegateFormRawValue['freeField11']>;
  freeField11ContentType: FormControl<DelegateFormRawValue['freeField11ContentType']>;
  freeField12: FormControl<DelegateFormRawValue['freeField12']>;
  freeField12ContentType: FormControl<DelegateFormRawValue['freeField12ContentType']>;
};

export type DelegateFormGroup = FormGroup<DelegateFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class DelegateFormService {
  createDelegateFormGroup(delegate: DelegateFormGroupInput = { id: null }): DelegateFormGroup {
    const delegateRawValue = this.convertDelegateToDelegateRawValue({
      ...this.getFormDefaults(),
      ...delegate,
    });
    return new FormGroup<DelegateFormGroupContent>({
      id: new FormControl(
        { value: delegateRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      firstName: new FormControl(delegateRawValue.firstName),
      lastName: new FormControl(delegateRawValue.lastName),
      gender: new FormControl(delegateRawValue.gender),
      nationality: new FormControl(delegateRawValue.nationality),
      countryOfResidence: new FormControl(delegateRawValue.countryOfResidence),
      dateOfBirth: new FormControl(delegateRawValue.dateOfBirth),
      citizenship: new FormControl(delegateRawValue.citizenship),
      mobileNo: new FormControl(delegateRawValue.mobileNo),
      emailId: new FormControl(delegateRawValue.emailId),
      emergencyContactName: new FormControl(delegateRawValue.emergencyContactName),
      emergencyContactRelationship: new FormControl(delegateRawValue.emergencyContactRelationship),
      emergencyContactNo: new FormControl(delegateRawValue.emergencyContactNo),
      countryOfBirth: new FormControl(delegateRawValue.countryOfBirth),
      cityOfResidence: new FormControl(delegateRawValue.cityOfResidence),
      stateOfResidence: new FormControl(delegateRawValue.stateOfResidence),
      districtOfResidence: new FormControl(delegateRawValue.districtOfResidence),
      departureDate: new FormControl(delegateRawValue.departureDate),
      departurePlace: new FormControl(delegateRawValue.departurePlace),
      arrivalDate: new FormControl(delegateRawValue.arrivalDate),
      arrivalPlace: new FormControl(delegateRawValue.arrivalPlace),
      status: new FormControl(delegateRawValue.status),
      lastModified: new FormControl(delegateRawValue.lastModified),
      lastModifiedBy: new FormControl(delegateRawValue.lastModifiedBy),
      isTaxReceipt: new FormControl(delegateRawValue.isTaxReceipt),
      profilePhoto: new FormControl(delegateRawValue.profilePhoto),
      profilePhotoContentType: new FormControl(delegateRawValue.profilePhotoContentType),
      profilePhotoContentType: new FormControl(delegateRawValue.profilePhotoContentType),
      passportImage: new FormControl(delegateRawValue.passportImage),
      passportImageContentType: new FormControl(delegateRawValue.passportImageContentType),
      passportImageContentType: new FormControl(delegateRawValue.passportImageContentType),
      conferenceName: new FormControl(delegateRawValue.conferenceName),
      freeField1: new FormControl(delegateRawValue.freeField1),
      freeField2: new FormControl(delegateRawValue.freeField2),
      freeField3: new FormControl(delegateRawValue.freeField3),
      freeField4: new FormControl(delegateRawValue.freeField4),
      freeField5: new FormControl(delegateRawValue.freeField5),
      freeField6: new FormControl(delegateRawValue.freeField6),
      freeField7: new FormControl(delegateRawValue.freeField7),
      freeField8: new FormControl(delegateRawValue.freeField8),
      freeField9: new FormControl(delegateRawValue.freeField9),
      freeField10: new FormControl(delegateRawValue.freeField10),
      freeField11: new FormControl(delegateRawValue.freeField11),
      freeField11ContentType: new FormControl(delegateRawValue.freeField11ContentType),
      freeField12: new FormControl(delegateRawValue.freeField12),
      freeField12ContentType: new FormControl(delegateRawValue.freeField12ContentType),
    });
  }

  getDelegate(form: DelegateFormGroup): IDelegate | NewDelegate {
    return this.convertDelegateRawValueToDelegate(form.getRawValue() as DelegateFormRawValue | NewDelegateFormRawValue);
  }

  resetForm(form: DelegateFormGroup, delegate: DelegateFormGroupInput): void {
    const delegateRawValue = this.convertDelegateToDelegateRawValue({ ...this.getFormDefaults(), ...delegate });
    form.reset(
      {
        ...delegateRawValue,
        id: { value: delegateRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): DelegateFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      departureDate: currentTime,
      arrivalDate: currentTime,
      lastModified: currentTime,
      isTaxReceipt: false,
      freeField7: currentTime,
      freeField8: currentTime,
      freeField9: false,
      freeField10: false,
    };
  }

  private convertDelegateRawValueToDelegate(rawDelegate: DelegateFormRawValue | NewDelegateFormRawValue): IDelegate | NewDelegate {
    return {
      ...rawDelegate,
      departureDate: dayjs(rawDelegate.departureDate, DATE_TIME_FORMAT),
      arrivalDate: dayjs(rawDelegate.arrivalDate, DATE_TIME_FORMAT),
      lastModified: dayjs(rawDelegate.lastModified, DATE_TIME_FORMAT),
      freeField7: dayjs(rawDelegate.freeField7, DATE_TIME_FORMAT),
      freeField8: dayjs(rawDelegate.freeField8, DATE_TIME_FORMAT),
    };
  }

  private convertDelegateToDelegateRawValue(
    delegate: IDelegate | (Partial<NewDelegate> & DelegateFormDefaults),
  ): DelegateFormRawValue | PartialWithRequiredKeyOf<NewDelegateFormRawValue> {
    return {
      ...delegate,
      departureDate: delegate.departureDate ? delegate.departureDate.format(DATE_TIME_FORMAT) : undefined,
      arrivalDate: delegate.arrivalDate ? delegate.arrivalDate.format(DATE_TIME_FORMAT) : undefined,
      lastModified: delegate.lastModified ? delegate.lastModified.format(DATE_TIME_FORMAT) : undefined,
      freeField7: delegate.freeField7 ? delegate.freeField7.format(DATE_TIME_FORMAT) : undefined,
      freeField8: delegate.freeField8 ? delegate.freeField8.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
