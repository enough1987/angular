import { createId } from 'src/app/utils/utils';

export class User {
 id: string;
 firstName: string;
 lastName: string;

 constructor(
  firstName: string,
  lastName: string,
  id: string = createId()) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
 }
}