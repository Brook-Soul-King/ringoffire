import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {

  constructor(private router: Router) {}

  newGame() {
    // Start game
    this.router.navigateByUrl('/game');
  }
}
