import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Video } from './video';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private Url="/api/videos";
  private Url1="/api/videos/";


  constructor( private http: HttpClient) { }

  getVideos(){
    return this.http.get(this.Url, {responseType:'json'});
  }

  addVideo(video: Video){
    return this.http.post(this.Url,video, {responseType:'json'});
  }

  updateVideo(video: Video){
    return this.http.put(this.Url1 + video._id,video, {responseType:'json'});
  }

  deleteVideo(video:Video){
    return this.http.delete(this.Url1 + video._id,{responseType:'json'});

  }

}
