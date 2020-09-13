import { Component, OnInit, HostListener } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getStudentData();
  }
  getStudentData() {
    const studentId = 1;
    this.profileService.getStudentData(studentId).subscribe((res) => {
      console.log(res);
      this.profileData = res.data;
    });
  }
}
