import { Identity as TLSIdentity, Product as TLSProduct, Offer as TLSOffer, Event as TLSEvent, ViewSettings as TLSViewSettings,
  FieldSetting as TLSFieldSetting } from '../../../../@types';
import { Component, OnInit, Input } from '@angular/core';


const defaultOffer: TLSOffer = {
  type: 'Customer',
  status: 'Registered',
  amount: 0,
  trace: [
    {
      actor: 'APP',
      comments: 'Offer of Type Customer registered in Make and Offer module.',
      date: new Date(Date.now())
    } as TLSEvent
  ],
  identity: {} as TLSIdentity
};

const defaultViewSettings: TLSViewSettings = {
  title: 'Make an Offer',
  action: 'Next',
  sortBy: 'order'
};

const secondViewSettings: TLSViewSettings = {
  title: 'Contact Information',
  action: 'Place Bid',
  sortBy: 'order'
};

const firstStepFields = [
  { caption: 'Offer Price', required: true, type: 'number', name: 'amount', order: 0, class: 'bid-control'} as TLSFieldSetting,
  { caption: 'Message', required: true, type: 'text', lines: 6, name: 'comments', order: 1} as TLSFieldSetting
];


const secondStepFields = [
  { caption: 'Name', required: true, type: 'text', name: 'name', order: 0, lines: 1} as TLSFieldSetting,
  { caption: 'Phone', required: true, type: 'phone', name: 'phone', order: 2} as TLSFieldSetting,
  { caption: 'Email', required: true, type: 'e-mail', name: 'email', order: 1} as TLSFieldSetting,
  { caption: 'Zip Code', required: true, type: 'number', name: 'zipcode', order: 3} as TLSFieldSetting
];

@Component({
  selector: 'app-make-offer',
  templateUrl: './make-offer.component.html',
  styleUrls: ['./make-offer.component.css']
})
export class MakeOfferComponent implements OnInit {

  @Input() product: TLSProduct;
  @Input() order: string;
  result = 'Thanks for your insterest. We will validate your offer and when we\'ve made a decision, we will get in touch with you.';
  offer: TLSOffer = defaultOffer;
  firstStageSettings: TLSViewSettings = defaultViewSettings;
  secondStageSettings: TLSViewSettings = secondViewSettings;
  currentStep = 0;
  constructor() {
    this.firstStageSettings.content = firstStepFields;
    this.secondStageSettings.content = secondStepFields;
  }

  ngOnInit() {
    this.offer.product = this.product;
  }

  next() {
    if (this.currentStep >= 2) {
      return;
    }
    this.currentStep += 1;
  }

}
