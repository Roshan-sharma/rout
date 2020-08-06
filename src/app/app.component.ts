import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react';
  public user;
  public pass;
  check()
  {
    if (this.user=="")
    {
      alert('Empty'+this.user);
    }
    else
    {
      alert('success'+this.user);
    }
  }
}
