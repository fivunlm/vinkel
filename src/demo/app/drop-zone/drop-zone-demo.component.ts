import {Component} from "@angular/core";

@Component({
  templateUrl: './drop-zone-demo.component.html',
  styleUrls: ['./drop-zone-demo.component.css']
})
export class DropZoneDemoComponent {
  droppedFiles: string[] = [];
  dragInProgress = false;

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; ++i) {
      this.droppedFiles.push(files[i].name);
    }
  }
}
