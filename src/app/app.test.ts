import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent (test.ts)', () => {
  it('creates (from .test.ts)', () => {
    const fixture = TestBed.configureTestingModule({ imports: [AppComponent] }).createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
