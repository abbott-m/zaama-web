type navLinks = {
  id: number;
  name: strings;
  sectionId: strings;
  path: string;
}[];

type faq = {
  id: number;
  question: string;
  answer: string;
}[];

type socialLinks = {
  id: number;
  icon: React.ReactNode;
  path: string;
}[];
type quickLinks = {
  id: number;
  name: string;
  path: string;
}[];
interface IOptions {
  id: number;
  name: string;
  value: string;
}
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
