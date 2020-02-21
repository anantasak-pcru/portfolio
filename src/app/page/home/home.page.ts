import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  personal_detail =
    [
      "Name:             Anantasak Nonkhunthod",
      "Age:              21 years",
      "Date of Birth:    11 Aug 1999",
      "Nationality:      Thai",
      "Religion:         -",
      "Language:         Thai",
    ]

  education =
    [
      "Kindergarten:     Ban Kokkruad School",
      "Grade 1 - 6:      Ban Kokkruad School",
      "Grade 7-12:       Subbonwitthayakom School",
      "B. Sc.:           Phetchabun Rajabhat University (Computer Science) (Inprogress)",
    ]


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  gotoPage(page:string,version:number = null) {
    let navigateExtras:NavigationExtras = {
      queryParams:{
        v:version
      }
    }
    // console.log(version);
    
    //if(version != null)
      this.router.navigate([`/${page}`],navigateExtras)
    // else
    //   this.router.navigate([`/${page}`])
  }

}
