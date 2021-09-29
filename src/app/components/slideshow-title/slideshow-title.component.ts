import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-title',
  templateUrl: './slideshow-title.component.html',
  styleUrls: ['./slideshow-title.component.scss'],
})
export class SlideshowTitleComponent implements OnInit {
  @Input() title: string = "";

  constructor() { }

  ngOnInit() { }

}
