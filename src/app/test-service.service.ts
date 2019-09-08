import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  serviceTitle = 'Bu servisin başlığı.';
  constructor() { }
}
