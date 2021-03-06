import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'task2',
    loadChildren: () => import('./task-ii/task-ii.module').then(m => m.TaskIiModule)
  },
  {
    path: 'task1',
    loadChildren: () => import('./task-i/task-i.module').then(m => m.TaskIModule)
  },
  { 
    path: 'task3', 
    loadChildren: () => import('./task3/task3.module').then(m => m.Task3Module) 
  },
  { path: 'task4', 
  loadChildren: () => import('./task4/task4.module').then(m => m.Task4Module) },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
