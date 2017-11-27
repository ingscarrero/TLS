export interface Identity {
    name: string;
    email: string;
    phone: string;
    zipcode: string;
}

export interface Event {
    date: Date;
    comments: string;
    actor: string;
}
export type InquiryType = 'Question' | 'Petition' | 'Claim';
export type InquiryStatus = 'Registered' | 'Sent' | 'Pending' | 'Forwarded' | 'Solved';

export interface Inquiry {
    identity?: Identity;
    type: InquiryType;
    status: InquiryStatus;
    createdOn?: Date;
    createdBy?: string;
    subject?: string;
    message?: string;
    trace: Array<Event>;
}
export interface Product {
    name: string;
    id: string;
}
export type OfferStatus = 'Registered' | 'Submitted' | 'Pending' | 'Approved' | 'Rejected';
export type OfferType = 'Customer' | 'Internal';
export interface Offer {
    identity: Identity;
    type: OfferType;
    status: OfferStatus;
    amount: number;
    message?: string;
    trace: Array<Event>;
    product?: Product;
}


export type ContentType = 'Form' | 'Table'| 'Dynamic';
export type FieldType = 'text' | 'number'| 'date' | 'flag' | 'phone' | 'e-mail';
export interface FieldSetting {
  caption: string;
  required?: boolean;
  type: FieldType;
  name: string;
  validationFunction?: string;
  class?: string;
  lines?: number;
  default?: string;
  order?: number;
}
export interface ViewSettings {
  title: string;
  content?: Array<FieldSetting>;
  action: string;
  sortBy: string;
}
