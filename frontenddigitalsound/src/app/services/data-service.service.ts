import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';

@Injectable()
export class DataServiceService {

  private messageSource = new BehaviorSubject<string>('Default Message');
  currentMessage = this .messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
