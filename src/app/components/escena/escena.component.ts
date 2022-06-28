import { Component, OnInit } from '@angular/core';
import storyJson from '../../../assets/story.json';

interface Story {
  sentence: string;
}

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {
  public stories: Story[] = storyJson;

  constructor() { 
    console.log(this.stories)
  }

  ngOnInit(): void {
  }
  
}
