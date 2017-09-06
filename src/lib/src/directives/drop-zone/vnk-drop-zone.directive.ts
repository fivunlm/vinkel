import {Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({
  selector: '[vnkDropZone]'
})
export class VnkDropZoneDirective {
  @Output() over = new EventEmitter<void>();
  @Output() leave = new EventEmitter<void>();
  @Output() files = new EventEmitter<FileList>();

  constructor() {
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    this.files.emit(event.dataTransfer.files);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
    this.over.emit();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: any) {
    event.preventDefault();
    this.leave.emit();
  }
}
