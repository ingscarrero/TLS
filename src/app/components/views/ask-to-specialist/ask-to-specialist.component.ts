import {Identity as TLSIdentity, Inquiry as TLSInquiry, Event as TLSEvent, ViewSettings as TLSViewSettings,
  FieldSetting as TLSFieldSetting } from '../../../../@types';
import { Component, OnInit, Input } from '@angular/core';


const defaultInquiry: TLSInquiry = {
  type: 'Question',
  status: 'Registered',
  trace: [
    {
      actor: 'APP',
      comments: 'Inquiry of Type Question registered in Ask To Specialist module.',
      date: new Date(Date.now())
    } as TLSEvent
  ],
  identity: {} as TLSIdentity
};

const defaultViewSettings: TLSViewSettings = {
  title: 'Ask a Specialist',
  action: 'Next',
  sortBy: 'order'
};

const secondViewSettings: TLSViewSettings = {
  title: 'Contact Information',
  action: 'Submit',
  sortBy: 'order'
};

const firstStepFields = [
  { caption: 'Subject', required: true, type: 'text', name: 'subject', order: 0, lines: 2} as TLSFieldSetting,
  { caption: 'Message', required: true, type: 'text', lines: 6, name: 'comments', order: 1} as TLSFieldSetting
];

const secondStepFields = [
  { caption: 'Name', required: true, type: 'text', name: 'name', order: 0, lines: 1} as TLSFieldSetting,
  { caption: 'Phone', required: true, type: 'phone', name: 'phone', order: 2} as TLSFieldSetting,
  { caption: 'Email', required: true, type: 'e-mail', name: 'email', order: 1} as TLSFieldSetting,
  { caption: 'Zip Code', required: true, type: 'number', name: 'zipcode', order: 3} as TLSFieldSetting
];
@Component({
  selector: 'app-ask-to-specialist',
  templateUrl: './ask-to-specialist.component.html',
  styleUrls: ['./ask-to-specialist.component.css']
})
export class AskToSpecialistComponent implements OnInit {
  @Input() subject: string;
  result = 'Thanks for your interest. In short, one of our specialist will get in touch with you for addressing your inquiry.';
  inquiry: TLSInquiry = defaultInquiry;
  firstStageSettings: TLSViewSettings = defaultViewSettings;
  secondStageSettings: TLSViewSettings = secondViewSettings;
  currentStep = 0;

  constructor() {
    this.firstStageSettings.content = firstStepFields;
    this.secondStageSettings.content = secondStepFields;
  }

  ngOnInit() {
    this.inquiry.subject = this.subject;
  }

  next() {
    if (this.currentStep >= 2) {
      return;
    }
    this.currentStep += 1;
  }
}
