import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagHandle, bagHandleOutline, star } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, NgFor],
})
export class AppComponent {
  constructor() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
    })
  }
}
