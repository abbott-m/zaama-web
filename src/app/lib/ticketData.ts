export const ticketData: ITicketData[] = [
  {
    ticketType: 1,
    color: "yellow",
    packageName: "General Admission",
    dollar_price: "10",
    cedi_price: "300",
    perks: [
      "Concert Entry Wristband",
      "Access to Main Concert Grounds",
      "Entry to Merch Area (shop exclusive Zaama & Iron Boy items)",
      "Access to Food & Beverage Court",
      "Concert Photo Zones (capture the vibe)",
      "Live Performances from Top Artists Across West Africa",
      "Immersive Sound & Light Show Experience"
    ],
    available: true,
    countDown: false,
  },
  {
    ticketType: 2,
    color: "red",
    packageName: "General Access Plus",
    dollar_price: "20",
    cedi_price: "500",
    perks: [
      "Bands",
      "Merch Area Access & Signing",
      "After Party Access (T&Cs Apply)",
      "Experiential Area Access", 
      "Access to General Bar and Food",
      "Super Pop Up experience inside General Access",
      "Multiple Entry Access"
    ],
    available: true,
    countDown: false,
  },
  {
    ticketType: 3,
    color: "green", 
    packageName: "VIP",
    dollar_price: "40",
    cedi_price: "700",
    perks: [
      "All General Access Plus benefits",
      "Fast-Track Entry (skip the lines)",
      "Dedicated VIP Lounge (luxury seating, exclusive vibes)",
      "Complimentary Welcome Drink",
      "Close-Up Stage Viewing Zone",
      "Exclusive Photo Moments (VIP-only media wall & meet spot)",
      "VIP Merch Pack and Brand Souvenir lucky wins",
      "Exclusive After-Party VIP Zone (T&Cs Apply)",
      "Chance to Meet Surprise Guest Artists & Creators",
      "Multiple Entry Access"
    ],
    available: true,
    countDown: false,
  },
  {
    ticketType: 4,
    color: "red",
    packageName: "Squad Package", 
    packageSubName: "Group of 4",
    dollar_price: "10",
    cedi_price: "1,000",
    perks: [
      "Discounted Group Pricing (buy 4, get 1 free OR % off)",
      "Squad Shoutout on Concert Screens & Social Wall",
      "One Squad Pack (concert stickers, badges & digital AR filters)",
      "Early Access to After-Party Tickets (T&Cs Apply)",
      "Concert Entry Wristband for all members",
      "Access to Main Concert Grounds",
      "Entry to Merch Area",
      "Note: No Multiple Entry Access"
    ],
    available: true,
    countDown: false,
  },
];

export const tableData = [
  {
    color: "yellow",
    packageName: "Gold Package",
    cedi_price: "30,000",
    tag: "Rebel Music",
  },
  {
    color: "red",
    packageName: "Silver Package", 
    cedi_price: "20,000",
    tag: "Kilos Milos",
  },
  {
    color: "yellow",
    packageName: "Bronze Package",
    cedi_price: "10,000", 
    tag: "January 9th",
  },
];