import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';

import { MovieDetailResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  _storage: Storage;

  favorites: MovieDetailResponse[] = [];

  constructor(
    private storage: Storage,
    private toastController: ToastController) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    const favorites = await this._storage.get("favorites");
    this.favorites = favorites ? favorites : [];
  }

  addToFavorite(detail: MovieDetailResponse) {
    if (!this.exists(detail.id)) {
      this.favorites.push(detail);
      this._storage.set("favorites", this.favorites);
      this.presentToast("Added to favorites!");
    }
  }

  exists(id) {
    return this.favorites.find(f => f.id === id);
  }

  removeFromFavorite(detail: MovieDetailResponse) {
    this.favorites = this.favorites.filter(f => f.title !== detail.title);
    this._storage.set("favorites", this.favorites);
    this.presentToast("Removed from favorites!");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }
}
