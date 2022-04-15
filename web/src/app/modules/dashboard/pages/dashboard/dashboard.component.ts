import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Empty, MeResponse } from '@grpc/user/service';
import { UserServiceClient } from '@grpc/user/service.client';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  me$  = new BehaviorSubject<MeResponse | null>(null);

  constructor(private userServiceClient : UserServiceClient) { }

  ngOnInit(): void {
    const empty : Empty = {}
    const {response} = this.userServiceClient.me(empty)

    response.then(resp => {
      this.me$.next(resp)
    })

  }

}
