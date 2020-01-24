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

  private info = 
  "อธิบายนิดนึงเกี่ยวกับโปรเจกนี้" +
  "อาจารย์ให้โจท์ทำแอพพลิเคชั่นขายของฝากขอกงจังหวัดเพชรบูรณ์" +
  "ออกตัวก่อนเลยนี่คือการเขียนแอนดรอยครั้งเเรกในชีวิต"+
  "เนื่องจากของฝากมันมีหลายชนิด ต้องเก็บข้อมูลพวกสินค้าราคาต่าง"+
  "เลยเลือกใช้ Firebase ที่มีบริการครบทุกอย่าง"+
  "ขอบเขตุหลักๆก็ทุกคนที่ login สามารถไปลงของขายในเเอพได้ แก้ไข ลบ สินค้าตัวเองได้"
  "ส่วนผู้ใช้ทั่วไปก็สามารถใช้ได้สามารถเข้าดูสินค้าของทุกคนที่ลงขายได้"

  private github_url = "https://github.com/Pidsamhai/android_studio_class_exam/tree/master/Giftshop"

  ngOnInit() {
    console.log(this.info);
  }

  gohome(){
    this.location.back()
  }

  openGit(){
    const win = window.open(this.github_url,'_blank')
    win.focus()
  }

}
