import { Component } from '@angular/core';

@Component({
  selector: 'dp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dp works!';

  handleTitleClicked(title) {
    console.log(title);
  }
}
