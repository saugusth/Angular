import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block'
  },
  animations:[
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders ,
        errmess => this.errMess = <any>errmess);
  }

}
