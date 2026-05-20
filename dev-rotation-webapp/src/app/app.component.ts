import { Component, inject } from '@angular/core';
import {RouterLink, RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mikel\'s Portfolio';
  router = inject(Router)

  goToDetails() {
    this.router.navigate(['/details']).then(() => {
      alert("Navigated to Details")
    });
  }
}
