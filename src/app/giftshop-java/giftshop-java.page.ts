import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-giftshop-java',
  templateUrl: './giftshop-java.page.html',
  styleUrls: ['./giftshop-java.page.scss'],
})
export class GiftshopJavaPage implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {
  }

  gohome(){
    this.location.back()
  }

  openGit(){
    window.location.href = "https://github.com/Pidsamhai/android_studio_class_exam/tree/master/Giftshop"
  }

}
