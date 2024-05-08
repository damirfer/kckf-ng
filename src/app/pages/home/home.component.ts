import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList: IProduct[] = [
    {
        "id": 1,
        "name": "T-shirt",
        "quantity": 20,
        "price": 25.99,
        "dateAdded": "2022-01-01",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 2,
        "name": "Jeans",
        "quantity": 15,
        "price": 45.99,
        "dateAdded": "2022-01-02",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 3,
        "name": "Sneakers",
        "quantity": 10,
        "price": 59.99,
        "dateAdded": "2022-01-03",
        "status": true,
        "type": "Footwear"
    },
    {
        "id": 4,
        "name": "Jacket",
        "quantity": 8,
        "price": 89.99,
        "dateAdded": "2022-01-04",
        "status": true,
        "type": "Clothing"
    },
    {
        "id": 5,
        "name": "Socks",
        "quantity": 30,
        "price": 9.99,
        "dateAdded": "2022-01-05",
        "status": true,
        "type": "Accessories"
    }
]
}
