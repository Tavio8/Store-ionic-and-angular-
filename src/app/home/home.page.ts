import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonThumbnail,
  IonImg,
  IonCardContent,
  IonCardHeader,
  IonCard,
  IonGrid,
  IonLabel,
  IonText,
  IonIcon,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonTitle,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonThumbnail,
    IonImg,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonLabel,
    IonText,
    IonIcon,
    NgFor,
  ],
})
export class HomePage implements OnInit {
  items: any[] = [];
  allItems: any[] = [];
  query!: string;
  private api = inject(ApiService);

  ngOnInit() {
    console.log('ngoninit');
    this.getItems();
  }

  trackByFn(index: number, item: string) {
    return index;
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any){
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch(){
    this.items = [];
    if (this.query.length > 0){
      this.searchItems();
    } else{
      this.items = [...this.allItems];
    }
  }

  searchItems(){
    this.items = this.api.items.filter((item) =>
    item.name.toLowerCase().includes(this.query)
    );
  }
}
