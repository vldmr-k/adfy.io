import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/reducers/user.reducer';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'adfy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  providers: [TuiDestroyService]
})
export class NavbarComponent implements OnInit {

  constructor(private readonly store: Store, private destroy$: TuiDestroyService) { }

  ngOnInit(): void {
    this.store.select(selectUser)
    .pipe(takeUntil(this.destroy$))
    .pipe(
      map((user) => console.log("user", user))
    )
  }

}
