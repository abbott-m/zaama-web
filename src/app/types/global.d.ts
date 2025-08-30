// src/app/types/global.d.ts
declare global {
  interface ITicketData {
    ticketType: number;
    color: string;
    packageName: string;
    packageSubName?: string;
    dollar_price: string;
    cedi_price: string;
    perks: string[];
    available: boolean;
    countDown: boolean;
  }

  interface IOptions {
    id: number;
    name: string;
    value: string;
  }

  interface faq {
    id: number;
    question: string;
    answer: string;
  }[]

  interface navLinks {
    id: number;
    name: string;
    sectionId: string;
    path: string;
  }[]

  interface socialLinks {
    id: number;
    icon: React.ReactNode;
    path: string;
  }[]

  interface quickLinks {
    id: number;
    name: string;
    path: string;
  }[]

  interface MerchItem {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    available: boolean;
  }

  interface HeroMessage {
    id: number;
    text: string;
    emphasis?: boolean;
  }

  interface DonationTier {
    amount: string;
    title: string;
    description: string;
    color: string;
    icon: string;
  }

  interface TransportOption {
    id: number;
    name: string;
    icon: string;
    description: string[];
    color: string;
  }

  interface AppFeature {
    id: number;
    title: string;
    description: string;
    icon: string;
  }

  interface EventInfo {
    date: string;
    venue: string;
    doors: string;
    ageLimit: string;
    dress: string;
  }
}

export {};

// src/app/types/forms.ts
export interface GeneralInquiryForm {
  name: string;
  email: string;
  phone_number: string;
  company: string;
  subject: string;
  message: string;
}

export interface SponsorshipForm {
  company_name: string;
  contact_name: string;
  email: string;
  phone_number: string;
  website: string;
  industry: string;
  sponsorship_level: string;
  budget_range: string;
  objectives: string;
  previous_sponsorships: string;
  message: string;
}

export interface MediaForm {
  media_name: string;
  phone_number: string;
  email: string;
  number_of_team: string;
}

export interface VolunteerForm {
  name: string;
  phone_number: string;
  email: string;
  category: string;
  educational_level: string;
  age: string;
  interest: string;
  favourite_genre: string;
  volunteer_payment_mode: string;
  health_status: string;
  past_experience: string;
  expectation: string;
  social_handle: string;
}

export interface VendorForm {
  primary_first_name: string;
  primary_last_name: string;
  primary_phone_number: string;
  primary_email: string;
  primary_country: string;
  secondary_first_name: string;
  secondary_last_name: string;
  secondary_phone_number: string;
  secondary_email: string;
  secondary_country: string;
  company_name: string;
  is_company_registered: string;
  country_of_registration: string;
  tax_id: string;
  category: string;
  other_category: string;
  booth_size: string;
}