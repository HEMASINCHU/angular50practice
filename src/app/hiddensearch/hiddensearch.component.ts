import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hiddensearch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hiddensearch.component.html',
  styleUrls: ['./hiddensearch.component.css']
})
export class HiddensearchComponent {
  isActive = false;

  toggleSearch(inputElement: HTMLInputElement) {
    this.isActive = !this.isActive;
    if (this.isActive) {
      setTimeout(() => {
        inputElement.focus();
      });
    }
  }

}
