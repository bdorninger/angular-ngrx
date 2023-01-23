import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface MyState {
  unitSystem: 'SI' | 'US';
  globalUnitType: 'abs' | 'rel';
}

function getSavedState(): MyState {
  const mss: string | null = localStorage.getItem('mystate');
  return mss != null
    ? (JSON.parse(mss) as MyState)
    : {
        unitSystem: 'SI',
        globalUnitType: 'abs',
      };
}

@Injectable()
export class UnitStoreService extends ComponentStore<MyState> {
  constructor() {
    super(getSavedState());
  }
}
