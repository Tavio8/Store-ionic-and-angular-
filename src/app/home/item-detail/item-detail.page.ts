import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';

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
    IonIcon,
    IonItem,
    IonLabel,
    IonFooter,
    IonText,
    IonButtons,
    IonBadge,
    UpperCasePipe,
    NgIf,

  ],
})
export class ItemDetailPage implements OnInit {
  id! : string;
  item: any;
  addToBag!: any;
  totalItems = 0;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private api = inject(ApiService);
  private cartService = inject(CartService)

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

   addItem(){
    // const result = CartService.addQuantity(this.item)
    this.addedText();
  }

  addedText(){
    this.addToBag = 'Added to Bag';
    setTimeout(() => {
      this.addToBag = null;
    }, 1000);
  }
}
