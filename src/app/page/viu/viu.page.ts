import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { CustomStatic } from 'src/app/static/custom-static';
import { IonSlides, IonContent } from '@ionic/angular';
import { Params, Router, ActivatedRoute } from '@angular/router';

const IMG_PATH = './assets/img/viu/'
const media_list = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
]


@Component({
  selector: 'app-viu',
  templateUrl: './viu.page.html',
  styleUrls: ['./viu.page.scss'],
})
export class ViuPage implements OnInit {
  @ViewChild('myslider', { static: true }) myslides: IonSlides;
  @ViewChild('content', { static: false }) content: IonContent;
  @ViewChild('viu3', { static: false }) viu2: ElementRef;

  opts: any
  slides: any
  version:number

  private slide = {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: []
  }

  constructor(private statics: CustomStatic) {
    this.opts = new statics.slideOpts(true, 2000).fade
    this.slides = this.slide_builder()
  }

  ngOnInit() {
  }

  slide_builder() {
    console.log("call builder");
    
    let _slide = this.slide
    media_list.forEach((element, index) => {
      _slide.slidesItems.push(
        {
          src: IMG_PATH + element,
          vdo: element.search(".mp4") > -1 ? true : false
        }
      )
    });
    return _slide
  }

  next() {
    this.myslides.slideNext()
  }

  onClick(url:string){
    const win = window.open(url, '_blank')
    win.focus()
  }

  prev() {
    this.myslides.slidePrev()
  }
}
