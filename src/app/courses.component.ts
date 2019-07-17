import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses',
  template: `<h2>{{ "Title:" + getTitle() }}</h2>
  <ul>
  	<li *ngFor="let course of courses">{{ course }}</li>
  <ul>
  <img [src]="loremImg" />
  
  `
})
export class CoursesComponent {
	title = "This is courses title";
	courses;
	loremImg = 'http://lorempixel.com/400/200/';

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}

	getTitle() {
		return this.title;
	}
}
