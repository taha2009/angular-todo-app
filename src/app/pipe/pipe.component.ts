import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  course = {
    "name": "Course 1",
    "price" : 720,
    "students" : 11000,
    "rating" : 4.8042,
    "release" : new Date(2019,1,1),
    "summary" : "dsfds fds fds fds fds fds fds fds fds fds fds fds fsd ffds fsdf sf fds fds fds fds fds fds fsd fdsfs"
  }
  constructor() { }

  ngOnInit() {
  }

}
