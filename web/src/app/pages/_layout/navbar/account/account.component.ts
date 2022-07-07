import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/reducers/user.reducer';
import { User } from "@store/models/index"
import { filter, map } from 'rxjs/operators';
import { TuiDialogService } from '@taiga-ui/core';
import { TUI_ARROW } from '@taiga-ui/kit';

const ACCOUNT_MENU_ITEMS = [
  {
    label: 'Edit Profile',
    routerLink: '/account/produle',
  },
  {
    label: 'Logout',
    routerLink: '/auth/logout',
  },
];


@Component({
  selector: 'adfy-navbar-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {

  readonly arrowIcon = TUI_ARROW;

  user$ = this.store.select(selectUser)

  dropdownOpen = false;

  menuItems = ACCOUNT_MENU_ITEMS;

  constructor(
    private readonly store: Store,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) { }

  ngOnInit(): void {

  }

  onClick() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onObscured(obscured: boolean) {
    if (obscured) {
      this.dropdownOpen = false;
    }
  }

  onActiveZone(active: boolean) {
    this.dropdownOpen = active && this.dropdownOpen;
  }
}
