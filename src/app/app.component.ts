import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public route = 'list';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.route = this.activatedRoute.snapshot.url[0].path;
    });
  }
}
