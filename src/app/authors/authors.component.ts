import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors;
  
  constructor(authors :AuthorsService) {
    this.authors = authors.getAuthors();
   }

  ngOnInit() {
  }

}
