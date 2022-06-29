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
      console.log("prev", this.stories[this.currentSentence])
    } else {
      this.currentSentence--;
      console.log("prev2", this.stories[this.currentSentence])
    }
  }
  
  public next() {
    if (this.currentSentence == this.stories.length - 1) {
      this.currentSentence = 0;
      console.log("next", this.stories[this.currentSentence]);
    } else {
      this.currentSentence++
      console.log("next2", this.stories[this.currentSentence]);
    }
  }
  
  public getColor(index: number) : string {
    console.log("i", index)
    switch(index) {
      case 0: return '#fff'
      case 1: return '#000'
      case 2: return '#000'
      case 3: return '#000'
      default: return 'red'
    }
  }

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  
}
