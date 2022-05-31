import { Injectable } from '@angular/core';
import { Profile } from '../_models/profile';
import { PROFILES } from '../_data/mock-profile';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(){
    return of(PROFILES);
  }
}
