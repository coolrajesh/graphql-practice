import { Component,OnDestroy } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {gql,Apollo} from 'apollo-angular';
import { Subscription } from 'rxjs';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl,Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';


const query = gql`
query {
  categories {
    id
    name
    image
  }
}
`;

const createMutation = gql `
mutation {
  addProduct(
    data: {
      title: "Raj Product"
      price: 10000
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

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatToolbarModule,MatFormFieldModule, MatInputModule,MatCardModule,MatDividerModule,MatButtonModule,MatSelectModule,RouterLink,RouterLinkActive,CommonModule,FormsModule,
    ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  category:any=[];
  private querySubscription!: Subscription;
  public createFormGroup!:  FormGroup; 
  mutateObj = {
    title: "Raj Product",
    price: 1000,
    description: "Test",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]
  }

  constructor(private apollo:Apollo){}
  
  ngOnInit(): void {
    this.getCategory();
    this.createFormGroupInit();
  }

  getCategory(){
    this.querySubscription = this.apollo
    .watchQuery<any>({
      query: query,
    })
    .valueChanges.subscribe(({ data, loading }) => {      
      this.category = data.categories;         
    });
  }

  createFormGroupInit(){
    this.createFormGroup = new FormGroup({
        category:new FormControl('',[Validators.required]),
        title:new FormControl('',[Validators.required]),
        price:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required])
         
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.createFormGroup?.controls[controlName].hasError(errorName);
  }

  create(){
    console.log(this.createFormGroup.value);    
    this.apollo.mutate({ mutation: createMutation }).subscribe();

  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
