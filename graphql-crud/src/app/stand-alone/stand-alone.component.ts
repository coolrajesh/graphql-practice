import { Component,NgModule } from '@angular/core';
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
 
@NgModule({
  declarations: [
    StandAloneComponent,
  ],
  imports: [
    CommonModule, // Import CommonModule here

  ],
  exports: [
    StandAloneComponent,
  ],
}) 


// @Component({
//   selector: 'app-stand-alone',
//   standalone: true,
//   imports: [
//     CommonModule, RouterOutlet,MatTableModule,MatToolbarModule,MatCardModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatFormFieldModule, MatInputModule,RouterLink,RouterLinkActive
//   ],
//   templateUrl: './stand-alone.component.html',
//   styleUrl: './stand-alone.component.css'
// })
export class StandAloneComponent {

}

