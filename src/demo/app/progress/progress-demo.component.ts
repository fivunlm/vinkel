import {Component, ViewChild} from "@angular/core";
import {VnkProgressBarComponent} from "vinkel";

@Component({
  templateUrl: './progress-demo.component.html'
})
export class ProgressDemoComponent {
  value: number = 25;
  @ViewChild('progress1') progress1: VnkProgressBarComponent;
  @ViewChild('progress2') progress2: VnkProgressBarComponent;
  @ViewChild('progress3') progress3: VnkProgressBarComponent;

  onResetProgress(){
    this.value = 0;
  }

  onToggleIndeterminated(){
    this.progress1.determinated = !this.progress1.determinated;
    this.progress2.determinated = !this.progress2.determinated;
    this.progress3.determinated = !this.progress3.determinated;
  }
}
