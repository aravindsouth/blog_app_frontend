import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBodyComponent } from './blog-body/blog-body.component';
import { CommentsComponent } from './comments/comments.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{path:'', component: BlogBodyComponent},
                        {path:'signin', component: SigninComponent},
                      {path:'', component:CommentsComponent, outlet:'comments'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
