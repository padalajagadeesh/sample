import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class commonService {
  private _flag = new BehaviorSubject<boolean>(false);

  // Observable for outside components to subscribe to
  flag$ = this._flag.asObservable();

  // Method to update the flag
  setFlag(value: boolean) {
    this._flag.next(value);
  }

  // Optional: to get current value without subscribing
  get currentFlag(): boolean {
    return this._flag.value;
  }
}
