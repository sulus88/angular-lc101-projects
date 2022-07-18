import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faav-links',
  templateUrl: './faav-links.component.html',
  styleUrls: ['./faav-links.component.css']
})
export class FaavLinksComponent implements OnInit {
favLinks =["https://launchcode.instructure.com/","https://www.nytimes.com/"] ;
  constructor() { }

  ngOnInit() {
  }

}
