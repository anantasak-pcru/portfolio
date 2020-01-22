import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
) { }

  ngOnInit() {
    
  }

  goMyprofile(){  
      this.router.navigate(["/myprofile"])
  }

}
