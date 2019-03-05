import { Component, OnInit } from '@angular/core';
import {Tweet} from '../tweet' ;
import { stringify } from 'querystring';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  id : number =3;
  name:string ;
  tweets: Tweet[] = [
     {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock',
      like:0,
      likeB:false
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso',
      like:0,
      likeB:false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  OnSave(SaveInput : string){
    let tweet:Tweet ={
       created_at:new Date().toISOString(),
       id:this.id,
       text: SaveInput,
       user:this.name,
       like:0,
       likeB:false
    }
    this.tweets.push(tweet),
    this.id ++ ;


  }
  addLike(id)
  {
    let tweet = this.tweets.find(value=> {return value.id === id});
    if(tweet.likeB)
    {
      tweet.like --;
      tweet.likeB = false;
    }
    else{
    tweet.like ++;
      tweet.likeB = true;
    }
  }

}
