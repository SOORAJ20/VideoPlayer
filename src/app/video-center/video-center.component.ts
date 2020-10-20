import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]

})
export class VideoCenterComponent implements OnInit {

  videos: any;
    

  selectedVideo: Video;
  videoAdded: Video;
  hideNewVideo: boolean =true;

  constructor(private vService: VideoService) { }

  ngOnInit(): void {
    this.vService.getVideos().subscribe(videofetched=> this.videos=videofetched)
  }
  onSelectedVideo(video: any){
    this.selectedVideo=video;
    this.hideNewVideo=true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video: Video){
    console.log(video);
    this.vService.addVideo(video).subscribe(videoAdded=>{
      this.videos.push(videoAdded);
      this.hideNewVideo=true;
      console.log(videoAdded);
      
    });
  }


  onUpdateVideoEvent(video: any){
    console.log(video);
    this.vService.updateVideo(video).subscribe(resUpdateVideo=> video=resUpdateVideo);
      console.log(video);
      this.selectedVideo=null;
      
    }

    onDeleteVideoEvent(video: any){
      console.log(video);
      let videoArray=this.videos;
      this.vService.deleteVideo(video).subscribe(resDeleteVideo=> {
        for(let i=0;i<videoArray.length;i++){
          if(videoArray[i]._id==video._id){
            videoArray.splice(i,1);
          }
        }
      });

        this.selectedVideo=null;
        
      }
  

  newVideo(){
    this.hideNewVideo=false;
  }


}
