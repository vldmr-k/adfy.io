import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBuilderComponent } from './block-builder.component';

describe('BlockBuilderComponent', () => {
  let component: BlockBuilderComponent;
  let fixture: ComponentFixture<BlockBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
