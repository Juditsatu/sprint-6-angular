import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../interface/story.interface';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {
  @Input() public stories: Story[] = [];

  currentSentence: number = 0;

  public prev() {
    if (this.currentSentence == 0) {
      this.currentSentence = this.stories.length - 1;
    } else {
      this.currentSentence--;
    }
  }
  
  public next() {
    if (this.currentSentence == this.stories.length - 1) {
      this.currentSentence = 0;
    } else {
      this.currentSentence++
    }
  }
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  
}
