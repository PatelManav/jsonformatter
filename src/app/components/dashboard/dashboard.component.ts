import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) {}

  ngOnInit(): void {}
  data: any;
  fileName: string;
  fileHandler(e: any) {
    console.log(e);
    var fr = new FileReader();
    this.fileName = e.target.value;
    this.fileName = this.fileName.substring(
      this.fileName.lastIndexOf('\\') + 1
    );
    fr.onload = () => {
      this.data = JSON.parse(fr.result as string);
      console.log(this.data);
    };
    fr.readAsText(e.target.files[0]);
  }
}
