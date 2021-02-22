import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  constructor() { }

  ngOnInit(): void {
  }

}
