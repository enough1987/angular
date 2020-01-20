import { createId } from 'src/app/utils/utils';

export class Course {
 id: string;
 title: string;
 creationDate: Date;
 durationMin: Number;
 description: string;

 constructor(
  title: string,
  description: string,
  durationMin: Number = 0,
  creationDate: Date = new Date,
  id: string = createId()) {
  this.title = title;
  this.description = description;
  this.durationMin = durationMin;
  this.creationDate = creationDate;
  this.id = id;
 }

 getDate(): string {
  return this.creationDate.toLocaleDateString("en-US")
 }
}