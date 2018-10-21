import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { Book } from '../../../models/book';




@Component({
  selector: 'book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  @Input() book: any = null;

  constructor(public modalCtrl: ModalController, private route: ActivatedRoute) {
    this.route.params
      .subscribe((data)=>{this.book = data});
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
