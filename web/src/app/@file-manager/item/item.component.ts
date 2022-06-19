import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Logger } from '@core/logger';
import { Store } from '@ngrx/store';
import { mediaActions } from '@store/actions';

import { Media } from "@store/models";

@Component({
  selector: 'adfy-filemanager-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  @Input() media! : Media;

  @Output() selectAction: EventEmitter<Media> = new EventEmitter<Media>();

  constructor(
    @Inject(Store) private readonly store: Store
  ) { }

  ngOnInit(): void {

  }

  styleExp() {
    return {
      "background": `url(${this.media.url})`
    }
  }

  onSelectAction($event: Event, media: Media) {
    $event.preventDefault();
    this.store.dispatch(mediaActions.selectedMedia({media: media}))
  }


}
