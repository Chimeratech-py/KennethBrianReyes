import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/profile';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
