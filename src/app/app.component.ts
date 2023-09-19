import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  images = [
    {
      imageSrc: './assets/finn.png',
      imageAlt: 'finn',
    },
    {
      imageSrc: './assets/coraje.png',
      imageAlt: 'coraje',
    },
    {
      imageSrc: './assets/goku.png',
      imageAlt: 'goku',
    },
    {
      imageSrc: './assets/musculoso.png',
      imageAlt: 'musculoso',
    },
    {
      imageSrc: './assets/mario.png',
      imageAlt: 'mario',
    },
    {
      imageSrc: './assets/bojji.png',
      imageAlt: 'bojji',
    }
  ]
}
