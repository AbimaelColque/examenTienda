import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
