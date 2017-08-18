
import {Component, Input} from "@angular/core";

@Component({
  selector: 'vnk-progress-bar',
  templateUrl: './vnk-progress-bar.component.html',
  styleUrls: ['./vnk-progress-bar.component.scss']
})
export class VnkProgressBarComponent {
  @Input() value: number = 50;
  @Input() height: number = 16;
  @Input('progress-class') progressClass: string = '';

  private _determinated: boolean = true;

  get determinated() {
    return this._determinated;
  }

  set determinated(setAsDeterminated: boolean){
    this.value = 0;
    this._determinated = setAsDeterminated;
  }
}
