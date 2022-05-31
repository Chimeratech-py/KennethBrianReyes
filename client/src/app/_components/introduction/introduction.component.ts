import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { Profile } from 'src/app/_models/profile';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  
  localProfile!: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getKenneth();
  }

  getKenneth(){
    return this.profileService.getProfile().subscribe({
      next: response => this.localProfile = response,
      error: error => console.log(error)
    })
  }

}
