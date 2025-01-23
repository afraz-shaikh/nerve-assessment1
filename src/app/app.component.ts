import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home/home.component";
import { path } from './routing/path';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nerve';

  constructor(private router: Router) {
 
      this.router.navigate([path.home]);
 
  }

}
