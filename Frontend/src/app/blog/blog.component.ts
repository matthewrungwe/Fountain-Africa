import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'Fountain Africa | Blog';

  constructor(private titleService: Title) {

}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
