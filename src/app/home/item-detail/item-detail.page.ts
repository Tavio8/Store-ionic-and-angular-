import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonBackButton,
  ],
})
export class ItemDetailPage implements OnInit {
  id! : string;
  item: any;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private api = inject(ApiService);

  constructor() {}

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }
    this.id = id;

    this.item = this.api.items.find((record) => record.id == id);
    console.log(this.item);
    
  }
}
