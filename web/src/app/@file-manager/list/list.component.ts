import {ChangeDetectionStrategy, Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';

import { media } from '@store/reducers/index';
import { mediaActions } from '@store/actions/index';
import { Media } from '@store/models';
import * as grpc from '@grpc/media/service';
import { Store } from '@ngrx/store';
import { Logger } from '@core/logger';


@Component({
  selector: 'adfy-filemanager-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  list$ = this.store.select(media.selectList)

  constructor(
    @Inject(Store) private readonly store: Store
  ) {}

  ngOnInit(): void {
    let request : grpc.AllRequest = {}
    this.store.dispatch(mediaActions.allRequest({request: request}))
    Logger.debug('ListComponent', 'constructor', `init`);
  }

}
