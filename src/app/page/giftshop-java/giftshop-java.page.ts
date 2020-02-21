import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { IonSlides } from '@ionic/angular'
import { CustomStatic } from '../../static/custom-static'

const IMG_PATH = './assets/img/giftshop/'
const VDO_PATH = './assets/vdo/giftshop/'
const info =
  "อธิบายนิดนึงเกี่ยวกับโปรเจกนี้" +
  "อาจารย์ให้โจท์ทำแอพพลิเคชั่นขายของฝากขอกงจังหวัดเพชรบูรณ์" +
  "ออกตัวก่อนเลยนี่คือการเขียนแอนดรอยครั้งเเรกในชีวิต" +
  "เนื่องจากของฝากมันมีหลายชนิด ต้องเก็บข้อมูลพวกสินค้าราคาต่าง" +
  "เลยเลือกใช้ Firebase ที่มีบริการครบทุกอย่าง" +
  "ขอบเขตุหลักๆก็ทุกคนที่ login สามารถไปลงของขายในเเอพได้ แก้ไข ลบ สินค้าตัวเองได้"
"ส่วนผู้ใช้ทั่วไปก็สามารถใช้ได้สามารถเข้าดูสินค้าของทุกคนที่ลงขายได้"

const github_url = "https://github.com/Pidsamhai/android_studio_class_exam/tree/master/Giftshop"

@Component({
  selector: 'app-giftshop-java',
  templateUrl: './giftshop-java.page.html',
  styleUrls: ['./giftshop-java.page.scss'],
})
export class GiftshopJavaPage implements OnInit {

  @ViewChild('myslider', { static: true }) slides: IonSlides;

  sliderOne: any
  slideOpts: any
  constructor(private router: Router, private location: Location, private statics: CustomStatic) {
    this.slideOpts = new statics.slideOpts(true).flip
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          src: IMG_PATH + '1.png',
          vdo: false
        },
        {
          id: 2,
          src: IMG_PATH + '2.png',
          vdo: false
        },
        {
          id: 3,
          src: IMG_PATH + '3.png',
          vdo: false
        },
        {
          id: 4,
          src: VDO_PATH + 'giftshop-java.mp4',
          vdo: true
        }
      ]
    };
  }

  preview() {
    this.slides.slidePrev()
  }
  next() {
    this.slides.slideNext()
  }

  change() {
    this.slides.getActiveIndex().then(result => {
      console.log(result);
    })
  }

  imgrandom() {
    let img = []
    for (let i = 0; i <= Math.floor(10); i++) {
      const item = {
        id: i,
        src: 'https://source.unsplash.com/random',
        vdo: false
      }

      img.push(item)
    }

    return img
  }

  update() {
    this.sliderOne.slidesItems = this.imgrandom()
    this.slides.update().then(val => {
      console.log(val);

    })
  }

  ngOnInit() {
    console.log(info);
  }

  openGit() {
    const win = window.open(github_url, '_blank')
    win.focus()
  }

}
