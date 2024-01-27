import { Component,AfterViewInit,ViewChild, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import {GraphQLServiceService } from '../services/graph-qlservice.service';
import {gql,Apollo} from 'apollo-angular';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const query = gql`
query {
  products {
    id
    title
    price
    description
    images
    category {
      id
      name
      image
    }
  }
}
`;

const singleQuery = gql`{
  product(id: "4") {
    title
    price
  }
}`

const query1 = gql `{
  todos  {
      id
      description
  }
}
`

const createMutation = gql `
mutation {
  addProduct(
    data: {
      title: "New Product"
      price: 100
      description: "Test"
      categoryId: 1
      images: ["https://placeimg.com/640/480/any"]
    }
  ) {
    title
    price
    images
    category {
      id
      name
      image
    }
  }
}
`

export interface Product {
  id: Number;
  description: string;
  title: string;
  price:number;
  category:string;
  image:string;
}



@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatTableModule,MatToolbarModule,MatCardModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatFormFieldModule, MatInputModule,RouterLink,RouterLinkActive],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'graphql-crud';
  data:any = [];
  displayedColumns: string[] = ['srno','category','title', 'price','description','image'];
  dataSource = new MatTableDataSource<Product>(this.data);

  constructor(private GraphQLServiceService: GraphQLServiceService,private apollo: Apollo){
   
  }

  ngOnInit(): void {
    this.GraphQLServiceService.apiQuery(query).subscribe((res) => {      
      this. data = res.products;
      console.log(res)
      this.dataSource = new MatTableDataSource<Product>(this.data); 
      setTimeout(()=>{
        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort; 
      })
   });    
  }
}
