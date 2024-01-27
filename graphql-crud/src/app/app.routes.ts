import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'view',component:ViewComponent},
    { path: '',   redirectTo: '/view', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];
