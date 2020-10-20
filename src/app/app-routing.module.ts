import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';


const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'videos',component:VideoCenterComponent},
 {path:'video-list',component:VideoListComponent},
 {path:'video-details',component:VideoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
