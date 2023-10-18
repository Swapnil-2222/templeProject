import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { Gender } from 'app/entities/enumerations/gender.model';
import { DelegateService } from '../service/delegate.service';
import { IDelegate } from '../delegate.model';
import { DelegateFormService, DelegateFormGroup } from './delegate-form.service';

@Component({
  standalone: true,
  selector: 'jhi-delegate-update',
  templateUrl: './delegate-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class DelegateUpdateComponent implements OnInit {
  isSaving = false;
  delegate: IDelegate | null = null;
  genderValues = Object.keys(Gender);

  editForm: DelegateFormGroup = this.delegateFormService.createDelegateFormGroup();

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    protected delegateService: DelegateService,
    protected delegateFormService: DelegateFormService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ delegate }) => {
      this.delegate = delegate;
      if (delegate) {
        this.updateForm(delegate);
      }
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('templeProjectApp.error', { ...err, key: 'error.file.' + err.key })),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const delegate = this.delegateFormService.getDelegate(this.editForm);
    if (delegate.id !== null) {
      this.subscribeToSaveResponse(this.delegateService.update(delegate));
    } else {
      this.subscribeToSaveResponse(this.delegateService.create(delegate));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDelegate>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(delegate: IDelegate): void {
    this.delegate = delegate;
    this.delegateFormService.resetForm(this.editForm, delegate);
  }
}
