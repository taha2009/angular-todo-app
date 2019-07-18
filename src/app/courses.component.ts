import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses',
  template: `<h2>{{ "Title:" + getTitle() }}</h2>
  <ul>
  	<li *ngFor="let course of courses">{{ course }}</li>
  <ul>
  <img [src]="loremImg" />
  <button class="btn btn-primary" [class.active]="isActive"> Button! </button>
  <button [style.backgroundColor]="isActive? 'blue' : 'white'">Save</button>
  <button (click)="onSave($event)">Click!</button>
  <input #email2 (keyup.enter)="onKeyUp(email2.value)" />
  <input [(ngModel)]="email" (keyup.enter)="onKeyUpModel()" />
  
  `
})
export class CoursesComponent {
	title = "This is courses title";
	email = "tzabuawala@gmail.com";
	email2 = "tzabuawala@yahoo.com"
	courses;
	isActive = true;
	loremImg = 'http://lorempixel.com/400/200/';

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}

	onSave($event) {
		console.log("Clicked!!!!", $event);
		
	}

	onKeyUpModel() {
		console.log(this.email);
		
	}

	onKeyUp(email2) {
		console.log(email2);
	}

	getTitle() {
		return this.title;
	}
}
