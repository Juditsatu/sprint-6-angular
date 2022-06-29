import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../interface/story.interface';
import storyJson from '../../../assets/story.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() public stories: Story[] = storyJson;
  
  show: boolean = false;

  public showStory() {
    this.show = !this.show;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
