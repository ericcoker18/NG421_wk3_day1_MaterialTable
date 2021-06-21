import { Injectable } from '@angular/core';
import { Avengers } from '../interfaces/Iavengers';
import { AvengersMembers } from '../data/avengers';


@Injectable({
  providedIn: 'root'
})
export class AvengerServiceService {
  members: Avengers[] = [];

  constructor() {
    this.members = AvengersMembers;
   }

   GetMembers(): Avengers[] {
     return this.members
   }
}
