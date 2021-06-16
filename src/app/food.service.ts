import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface FoodItem {
  categoria: string,
  descricao: string,
  preco: number,
}

const URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodList() {
    return this.http.get<FoodItem[]>(`${URL}/cardapio`)
  }

}
