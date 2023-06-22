interface ContactInfo {
  icon: string;
  contactType: string;
  info: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "geo-alt",
    contactType: "Location:",
    info: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: "envelope",
    contactType: "Email:",
    info: "info@example.com",
  },
  {
    icon: "phone",
    contactType: "Call:",
    info: "+1 5589 55488 55s",
  },
];
