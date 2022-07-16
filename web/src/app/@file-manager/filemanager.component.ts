import { Component, ChangeDetectionStrategy, Inject, OnInit, OnDestroy } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { selectSelectedMedia } from '@store/reducers/media.reducer';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { mediaActions } from '@store/actions';


@Component({
  selector: 'adfy-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagerComponent implements OnInit, OnDestroy {

  selectedMedia$ = this.store.select(selectSelectedMedia);

  public ngDestroyed$ = new Subject();

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialogContext<string, string>,
    @Inject(Store) readonly store: Store
  ) {
      console.log(`Receive data ${this.data}`)
  }

  ngOnInit(): void {
    this.selectedMedia$
        .pipe(
          takeUntil(this.ngDestroyed$),
          filter(media => media !== null)
         )
        .subscribe((media)=> {
          this.context.completeWith( media!.url )
          this.store.dispatch(mediaActions.resetSelectedMedia())
        });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next()
  }

  get data(): string {
    return this.context.data;
  }
}
