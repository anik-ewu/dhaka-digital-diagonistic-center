/*
 * ============================================================
 *  SITE CONTENT — edit this file to update the website.
 * ============================================================
 *  Every text is written as { bn: "বাংলা", en: "English" }.
 *  If "en" is left empty, the Bangla text is shown in English mode too.
 *  See README.md for step-by-step examples.
 */

const SITE = {
  name: { bn: "ঢাকা ডিজিটাল ডায়াগনস্টিক সেন্টার", en: "Dhaka Digital Diagnostic Center" },
  city: { bn: "ফরিদপুর", en: "Faridpur" },
  tagline: {
    bn: "একটি স্বয়ংসম্পূর্ণ অত্যাধুনিক শীতাতপ নিয়ন্ত্রিত কম্পিউটারাইজড ডিজিটাল ডায়াগনস্টিক সেন্টার",
    en: "A complete, modern, air-conditioned, computerised digital diagnostic center",
  },
  address: {
    bn: "ঝিলটুলী (চৌরঙ্গীর মোড়), বিদ্যুৎ অফিসের সামনে, ফরিদপুর ৭৮০০",
    en: "Chowrongir Mor, Jhiltuli (opposite the Electricity Office), Faridpur 7800, Bangladesh",
  },
  mapQuery: "Dhaka Digital Diagnostic Center, Faridpur",
  email: "dhakadigitaldiagnosticcenterfa@gmail.com",

  // Main number for booking a serial (shown in hero, header and floating button)
  serialPhone: "01756-535611",

  // Other contact people. Add or remove freely.
  contacts: [
    { name: { bn: "মোঃ হুমায়ুন কবির (আশিক)", en: "Md. Humayun Kabir (Ashik)" },
      role: { bn: "চেয়ারম্যান", en: "Chairman" },
      phones: ["01756-535611"] },
  ],

  // Social links — paste the full URL when available (leave "" to hide)
  facebook: "",
};

/* Fixed labels used around the page */
const I18N = {
  nav_home: { bn: "হোম", en: "Home" },
  nav_services: { bn: "সেবা", en: "Services" },
  nav_doctors: { bn: "ডাক্তার", en: "Doctors" },
  nav_gallery: { bn: "গ্যালারি", en: "Gallery" },
  nav_contact: { bn: "যোগাযোগ", en: "Contact" },

  hero_eyebrow: { bn: "বিশ্বস্ত রিপোর্ট · অভিজ্ঞ ডাক্তার", en: "Reliable reports · Experienced doctors" },
  hero_call: { bn: "সিরিয়ালের জন্য কল করুন", en: "Call for a serial" },
  hero_doctors: { bn: "ডাক্তারদের তালিকা", en: "View doctors" },
  serial_label: { bn: "সিরিয়ালের জন্য", en: "For serial" },
  address_label: { bn: "ঠিকানা", en: "Address" },

  services_kicker: { bn: "আমাদের সেবা সমূহ", en: "What we offer" },
  services_title: { bn: "নির্ভরযোগ্য ও আস্থাশীল পরীক্ষা", en: "Tests you can rely on" },
  services_sub: {
    bn: "আধুনিক যন্ত্রপাতি ও দক্ষ টেকনোলজিস্টদের মাধ্যমে নির্ভুল রিপোর্ট।",
    en: "Accurate reports from modern equipment and skilled technologists.",
  },
  fee_label: { bn: "ফি", en: "Fee" },

  doctors_kicker: { bn: "বিশেষজ্ঞ ডাক্তারগণ", en: "Our specialists" },
  doctors_title: { bn: "ডাক্তারদের তালিকা ও চেম্বারের সময়সূচী", en: "Doctors & chamber schedule" },
  doctors_note: {
    bn: "সময়সূচী পরিবর্তন হতে পারে — আসার আগে কল করে সিরিয়াল নিশ্চিত করুন।",
    en: "Schedules may change — please call to confirm your serial before visiting.",
  },
  search_placeholder: { bn: "নাম বা রোগ দিয়ে খুঁজুন…", en: "Search by name or specialty…" },
  filter_all: { bn: "সকল", en: "All" },
  no_results: { bn: "কোনো ডাক্তার পাওয়া যায়নি।", en: "No doctor found." },
  schedule_label: { bn: "রোগী দেখার সময়", en: "Visiting hours" },

  gallery_kicker: { bn: "গ্যালারি", en: "Gallery" },
  gallery_title: { bn: "আমাদের মুহূর্তগুলো", en: "Moments & notices" },

  contact_kicker: { bn: "যোগাযোগ", en: "Get in touch" },
  contact_title: { bn: "আমরা আছি আপনার পাশে", en: "We are here for you" },
  contact_people: { bn: "যোগাযোগের নম্বর", en: "Phone numbers" },
  email_label: { bn: "ই-মেইল", en: "Email" },
  directions: { bn: "গুগল ম্যাপে দেখুন", en: "Open in Google Maps" },

  footer_rights: { bn: "সর্বস্বত্ব সংরক্ষিত", en: "All rights reserved" },
  close: { bn: "বন্ধ করুন", en: "Close" },
};

/* Short highlight badges under the hero */
const HIGHLIGHTS = [
  { value: { bn: "২য়", en: "2nd" }, label: { bn: "বর্ষপূর্তি", en: "Anniversary" } },
  { value: { bn: "১৫+", en: "15+" }, label: { bn: "বিশেষজ্ঞ ডাক্তার", en: "Specialist doctors" } },
  { value: { bn: "মহিলা", en: "Female" }, label: { bn: "সনোলজিস্ট দ্বারা আল্ট্রাসনোগ্রাফি", en: "sonologist for ultrasonography" } },
  { value: { bn: "অ্যানোমালি", en: "Anomaly" }, label: { bn: "স্ক্যান করা হয়", en: "scan available" } },
];

/*
 * SERVICES
 *  icon: one of  microscope | xray | heart | ultrasound | echo | checkup | hormone | baby | scan
 *  fee:  leave "" to hide. Example: fee: { bn: "৫০০ টাকা", en: "BDT 500" }
 */
const SERVICES = [
  { icon: "microscope", name: { bn: "প্যাথলজি", en: "Pathology" },
    desc: { bn: "রক্ত, প্রস্রাব ও অন্যান্য ল্যাব পরীক্ষা", en: "Blood, urine and other lab tests" }, fee: "" },
  { icon: "xray", name: { bn: "ডিজিটাল এক্স-রে", en: "Digital X-ray" },
    desc: { bn: "পরিষ্কার ও দ্রুত ডিজিটাল ইমেজিং", en: "Clear, fast digital imaging" }, fee: "" },
  { icon: "heart", name: { bn: "ইসিজি", en: "ECG" },
    desc: { bn: "হৃদস্পন্দনের পরীক্ষা", en: "Heart rhythm check" }, fee: "" },
  { icon: "ultrasound", name: { bn: "আল্ট্রাসনোগ্রাম", en: "Ultrasonogram" },
    desc: { bn: "মহিলা সনোলজিস্ট দ্বারা করানো হয়", en: "Done by a female sonologist" }, fee: "" },
  { icon: "echo", name: { bn: "ইকোকার্ডিওগ্রাম", en: "Echocardiogram" },
    desc: { bn: "হৃদপিণ্ডের আল্ট্রাসাউন্ড", en: "Ultrasound of the heart" }, fee: "" },
  { icon: "checkup", name: { bn: "মেডিকেল চেক-আপ", en: "Medical check-up" },
    desc: { bn: "সম্পূর্ণ স্বাস্থ্য পরীক্ষা", en: "Complete health check" }, fee: "" },
  { icon: "hormone", name: { bn: "হরমোন টেস্ট", en: "Hormone tests" },
    desc: { bn: "থাইরয়েড সহ বিভিন্ন হরমোন পরীক্ষা", en: "Thyroid and other hormone tests" }, fee: "" },
  { icon: "scan", name: { bn: "টিভিএস", en: "TVS" },
    desc: { bn: "ট্রান্সভ্যাজাইনাল সনোগ্রাফি", en: "Transvaginal sonography" }, fee: "" },
  { icon: "baby", name: { bn: "অ্যানোমালি স্ক্যান", en: "Anomaly scan" },
    desc: { bn: "গর্ভস্থ শিশুর বিস্তারিত আল্ট্রাসনোগ্রাফি", en: "Detailed ultrasound of the unborn baby" }, fee: "" },
];

/* Specialty filters shown above the doctor list. "tags" on each doctor must use these keys. */
const SPECIALTIES = {
  medicine: { bn: "মেডিসিন", en: "Medicine" },
  surgery: { bn: "সার্জারি", en: "Surgery" },
  gynae: { bn: "গাইনী ও প্রসূতি", en: "Gynae & Obs" },
  child: { bn: "শিশু", en: "Child" },
  urology: { bn: "কিডনি ও ইউরোলজি", en: "Kidney & Urology" },
  ortho: { bn: "হাড় ও জোড়া", en: "Orthopedics" },
  ent: { bn: "নাক-কান-গলা", en: "ENT" },
  diabetes: { bn: "ডায়াবেটিস ও হরমোন", en: "Diabetes & Hormone" },
  skin: { bn: "চর্ম ও যৌন", en: "Skin & VD" },
  ultrasound: { bn: "আল্ট্রাসাউন্ড", en: "Ultrasound" },
};

/*
 * DOCTORS — copied from the center's posters. Please double-check spelling and timings.
 *  photo: optional, e.g. "assets/images/doctors/dr-name.jpg" (leave "" to show initials)
 */
const DOCTORS = [
  {
    name: { bn: "ডাঃ ফজলুল হক শোভন", en: "Dr. Fazlul Haque Shovon" },
    degrees: { bn: "এম বি বি এস, বিসিএস (স্বাস্থ্য), এফসিপিএস (সার্জারী), এফসিপিএস (হেপাটোবিলিয়ারী সার্জারী)",
               en: "MBBS, BCS (Health), FCPS (Surgery), FCPS (Hepatobiliary Surgery)" },
    specialty: { bn: "বিশেষজ্ঞ জেনারেল ও ল্যাপারোস্কপিক সার্জারী", en: "General & Laparoscopic Surgery Specialist" },
    institution: { bn: "সহকারী অধ্যাপক (হেপাটোবিলিয়ারী সার্জারী), শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ হাসপাতাল, ঢাকা",
                   en: "Assistant Professor (Hepatobiliary Surgery), Shaheed Suhrawardy Medical College Hospital, Dhaka" },
    schedule: { bn: "প্রতিদিন দুপুর ৩:০০টা থেকে সন্ধ্যা ৭:৩০টা", en: "Daily 3:00 PM – 7:30 PM" },
    tags: ["surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ মোঃ ফেরদৌস মৃধা", en: "Dr. Md. Ferdous Mridha" },
    degrees: { bn: "এম বি বি এস (ঢাকা), বিসিএস (স্বাস্থ্য), এফসিপিএস (মেডিসিন-শেষ পর্ব), এফসিপিএস (গ্যাস্ট্রো-এন্টারোলজি কোর্স), সিসিডি (বারডেম)",
               en: "MBBS (Dhaka), BCS (Health), FCPS (Medicine – final part), FCPS (Gastroenterology course), CCD (BIRDEM)" },
    specialty: { bn: "মেডিসিন, গ্যাস্ট্রো-লিভার, নিউরোমেডিসিন, হৃদরোগ, বাতজ্বর ও ডায়াবেটিস",
                 en: "Medicine, Gastro-liver, Neuromedicine, Heart disease, Rheumatic fever & Diabetes" },
    institution: { bn: "ফরিদপুর মেডিকেল কলেজ ও হাসপাতাল, ফরিদপুর", en: "Faridpur Medical College Hospital, Faridpur" },
    schedule: { bn: "শনিবার থেকে বৃহস্পতিবার দুপুর ২:৩০টা থেকে রাত ৮টা", en: "Sat – Thu, 2:30 PM – 8:00 PM" },
    tags: ["medicine", "diabetes"], photo: "",
  },
  {
    name: { bn: "ডাঃ সন্দীপন গাইন", en: "Dr. Sandipan Gain" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), বিসিএস (স্বাস্থ্য), এফ.সি.পি.এস (সার্জারী), এম.আর.সি.এস (এডিনবার্গ, ইউকে), এম.এস (ইউরোলজী)",
               en: "MBBS (Dhaka), BCS (Health), FCPS (Surgery), MRCS (Edinburgh, UK), MS (Urology)" },
    specialty: { bn: "কিডনি, মূত্রনালী, মূত্রথলী, প্রস্টেট ও পুরুষ প্রজননতন্ত্র রোগ বিশেষজ্ঞ ও সার্জন",
                 en: "Kidney, urinary tract, bladder, prostate & male reproductive system specialist and surgeon" },
    institution: { bn: "ন্যাশনাল ইনস্টিটিউট অব কিডনী ডিজিজেস এন্ড ইউরোলজী, শের-ই-বাংলা নগর, ঢাকা",
                   en: "National Institute of Kidney Diseases & Urology, Sher-e-Bangla Nagar, Dhaka" },
    schedule: { bn: "শনিবার থেকে বৃহস্পতিবার দুপুর ২টা থেকে রাত ৮টা", en: "Sat – Thu, 2:00 PM – 8:00 PM" },
    tags: ["urology", "surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ মিজানূর রহমান", en: "Dr. Mizanur Rahman" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), বি.সি.এস (স্বাস্থ্য), (অর্থো সার্জারী), ডি অর্থো (BSMMU)",
               en: "MBBS (Dhaka), BCS (Health), (Ortho Surgery), D-Ortho (BSMMU)" },
    specialty: { bn: "হাড় ভাঙ্গা, বাত-ব্যথা ও হাড় জোড়া বিশেষজ্ঞ সার্জন", en: "Fracture, arthritis & bone-joint specialist surgeon" },
    institution: { bn: "ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা; বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় (সাবেক পিজি হাসপাতাল), ঢাকা",
                   en: "Dhaka Medical College Hospital; Bangladesh Medical University (former PG Hospital), Dhaka" },
    schedule: { bn: "শনিবার থেকে বৃহস্পতিবার দুপুর ২:০০টা থেকে সন্ধ্যা ৭:০০টা", en: "Sat – Thu, 2:00 PM – 7:00 PM" },
    tags: ["ortho", "surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ তৃষা সরকার", en: "Dr. Trisha Sarkar" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), বি.সি.এস (স্বাস্থ্য), এফ.সি.পি.এস (গাইনী এন্ড অবস)", en: "MBBS (Dhaka), BCS (Health), FCPS (Gynae & Obs)" },
    specialty: { bn: "গাইনী, প্রসূতি ও স্ত্রী রোগ বিশেষজ্ঞ ও সার্জন", en: "Gynaecology & Obstetrics specialist and surgeon" },
    institution: { bn: "এক্স- ফরিদপুর মেডিকেল কলেজ ও হাসপাতাল, ফরিদপুর", en: "Ex- Faridpur Medical College Hospital, Faridpur" },
    schedule: { bn: "দুপুর ২:৩০টা থেকে রাত ৮টা", en: "2:30 PM – 8:00 PM" },
    tags: ["gynae", "surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ সরোজিৎ দাস", en: "Dr. Sorojit Das" },
    degrees: { bn: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (এন্ডোক্রাইনোলজি এন্ড মেটাবলিজম) বিএসএমএমইউ",
               en: "MBBS, BCS (Health), MD (Endocrinology & Metabolism), BSMMU" },
    specialty: { bn: "ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ বিশেষজ্ঞ", en: "Diabetes, thyroid & hormone specialist" },
    institution: { bn: "ফরিদপুর জেনারেল হাসপাতাল, ফরিদপুর", en: "Faridpur General Hospital, Faridpur" },
    schedule: { bn: "দুপুর ২:৩০টা থেকে রাত ৮টা", en: "2:30 PM – 8:00 PM" },
    tags: ["diabetes", "medicine"], photo: "",
  },
  {
    name: { bn: "ডাঃ শাহেদ হাসান", en: "Dr. Shahed Hasan" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), বি.সি.এস (স্বাস্থ্য), এম.এস (নাক-কান, গলা ও হেড নেক সার্জারি) বি.এস.এম.এম.ইউ, এম.সি.পি.এস (নাক, কান, গলা ও হেড নেক সার্জারি)",
               en: "MBBS (Dhaka), BCS (Health), MS (ENT & Head-Neck Surgery) BSMMU, MCPS (ENT & Head-Neck Surgery)" },
    specialty: { bn: "নাক-কান, গলা রোগ বিশেষজ্ঞ", en: "ENT (ear, nose & throat) specialist" },
    institution: { bn: "ফরিদপুর মেডিকেল কলেজ হাসপাতাল, ফরিদপুর", en: "Faridpur Medical College Hospital, Faridpur" },
    schedule: { bn: "দুপুর ২:৩০টা থেকে রাত ৮টা", en: "2:30 PM – 8:00 PM" },
    tags: ["ent", "surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ মুর্শিদা সিকদার মিতুল", en: "Dr. Murshida Sikdar Mitul" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), সি.সি.ডি (বারডেম), এফ.সি.পি.এস (গাইনোকোলজিক্যাল অনকোলজী), পি.জি.টি (গাইনী ও অবস), পিজিটি (শিশু)",
               en: "MBBS (Dhaka), CCD (BIRDEM), FCPS (Gynaecological Oncology), PGT (Gynae & Obs), PGT (Paediatrics)" },
    specialty: { bn: "গাইনী ও প্রসূতি রোগ", en: "Gynaecology & Obstetrics" },
    institution: { bn: "রেজিস্ট্রার (গাইনী ডিপার্টমেন্ট), ডায়াবেটিক এসোসিয়েশন মেডিকেল কলেজ এন্ড হাসপাতাল, ফরিদপুর",
                   en: "Registrar (Gynae Dept.), Diabetic Association Medical College & Hospital, Faridpur" },
    schedule: { bn: "প্রতিদিন দুপুর ২:৩০টা থেকে সন্ধ্যা ৭টা (শুক্রবার সকাল ১০টা থেকে দুপুর ২টা)",
                en: "Daily 2:30 PM – 7:00 PM (Friday 10:00 AM – 2:00 PM)" },
    tags: ["gynae"], photo: "",
  },
  {
    name: { bn: "ডাঃ সুদীপ বিশ্বাস", en: "Dr. Sudip Biswas" },
    degrees: { bn: "এম.বি.বি.এস (ঢাকা), ডিপ্লোমা ইন এ্যাজমা, সি.সি.ডি (বারডেম), সি.পি.আর (ঢাকা), পি.জি.টি (কার্ডিওলজি), সি.এম.ইউ (ঢাকা)",
               en: "MBBS (Dhaka), Diploma in Asthma, CCD (BIRDEM), CPR (Dhaka), PGT (Cardiology), CMU (Dhaka)" },
    specialty: { bn: "মেডিসিন, বক্ষব্যাধি, এ্যাজমা, চর্ম, যৌন ও এলার্জি, হৃদরোগ ও ডায়াবেটিস বিশেষজ্ঞ",
                 en: "Medicine, chest disease, asthma, skin, VD & allergy, heart disease & diabetes" },
    institution: { bn: "ডায়াবেটিক এসোসিয়েশন মেডিকেল কলেজ হাসপাতাল, হার্ট ফাউন্ডেশন, ফরিদপুর",
                   en: "Diabetic Association Medical College Hospital, Heart Foundation, Faridpur" },
    schedule: { bn: "প্রতিদিন সকাল ১০:০০টা থেকে সন্ধ্যা ৭টা", en: "Daily 10:00 AM – 7:00 PM" },
    tags: ["medicine", "diabetes", "skin"], photo: "",
  },
  {
    name: { bn: "ডাঃ মোঃ অভি রায়হান", en: "Dr. Md. Ovi Rayhan" },
    degrees: { bn: "এম.বি.বি.এস (ডি.ইউ), সি.এম.ইউ (আল্ট্রা), ঢাকা, এম.সি.জি.পি (মেডিসিন)", en: "MBBS (DU), CMU (Ultra), Dhaka, MCGP (Medicine)" },
    specialty: { bn: "মেডিসিন ও শিশু, বক্ষব্যাধি, বাতব্যথা ও বাতজ্বর, চর্ম ও যৌন, ডায়াবেটিস বিষয়ে অভিজ্ঞ",
                 en: "Medicine & child, chest disease, arthritis & rheumatic fever, skin & VD, diabetes" },
    institution: { bn: "মেডিকেল অফিসার (পেডিয়াট্রিক বিভাগ), ডাঃ জাহেদ মেমোরিয়াল শিশু হাসপাতাল, ফরিদপুর",
                   en: "Medical Officer (Paediatrics), Dr. Zahed Memorial Children's Hospital, Faridpur" },
    schedule: { bn: "প্রতিদিন বিকাল ৩:০০টা থেকে সন্ধ্যা ৭:০০টা", en: "Daily 3:00 PM – 7:00 PM" },
    tags: ["medicine", "child", "skin"], photo: "",
  },
  {
    name: { bn: "ডাঃ আল্-আমিন সারোয়ার", en: "Dr. Al-Amin Sarowar" },
    degrees: { bn: "এম.বি.বি.এস, বিসিএস (স্বাস্থ্য), পিজিটি (মেডিসিন), ডিভসি (চর্ম ও যৌন), সিসিডি (বারডেম)",
               en: "MBBS, BCS (Health), PGT (Medicine), DVC (Skin & VD), CCD (BIRDEM)" },
    specialty: { bn: "মেডিসিন, ডায়াবেটিস, চর্ম ও যৌন রোগের চিকিৎসক", en: "Medicine, diabetes, skin & VD" },
    institution: { bn: "এমওসিএস, সিভিল সার্জন অফিস, ফরিদপুর (প্রাক্তন মেডিকেল অফিসার, জেনারেল হাসপাতাল, ফরিদপুর)",
                   en: "MOCS, Civil Surgeon Office, Faridpur (former Medical Officer, General Hospital, Faridpur)" },
    schedule: { bn: "প্রতিদিন দুপুর ২:৩০টা থেকে রাত ৮টা", en: "Daily 2:30 PM – 8:00 PM" },
    tags: ["medicine", "diabetes", "skin"], photo: "",
  },
  {
    name: { bn: "ডাঃ আয়িদা রাবিহা", en: "Dr. Ayida Rabiha" },
    degrees: { bn: "এম.বি.বি.এস (ডিইউ), ডিএমইউ (সিমুড)", en: "MBBS (DU), DMU (CMUD)" },
    specialty: { bn: "টিভিএস ও আল্ট্রাসাউন্ড বিশেষজ্ঞ", en: "TVS & ultrasound specialist" },
    institution: { bn: "সহকারী রেজিস্ট্রার (গ্যাস্ট্রোএন্টেরোলজি)", en: "Assistant Registrar (Gastroenterology)" },
    schedule: { bn: "প্রতিদিন সকাল ১০:০০টা থেকে সন্ধ্যা ৭:০০টা", en: "Daily 10:00 AM – 7:00 PM" },
    tags: ["ultrasound"], photo: "",
  },
  {
    name: { bn: "ডাঃ সোনিয়া খানম", en: "Dr. Sonia Khanam" },
    degrees: { bn: "এম.বি.বি.এস (ডিইউ), সিএমইউ (আল্ট্রা সাউন্ড), পিজিটি (গাইনী এবং অবস)", en: "MBBS (DU), CMU (Ultrasound), PGT (Gynae & Obs)" },
    specialty: { bn: "গাইনী ও আল্ট্রাসাউন্ড", en: "Gynaecology & ultrasound" },
    institution: { bn: "মেডিকেল অফিসার, জাহিদ মেমোরিয়াল শিশু হাসপাতাল, ফরিদপুর", en: "Medical Officer, Zahid Memorial Children's Hospital, Faridpur" },
    schedule: { bn: "প্রতিদিন সকাল ১০টা থেকে রাত ৮টা", en: "Daily 10:00 AM – 8:00 PM" },
    tags: ["gynae", "ultrasound"], photo: "",
  },
  {
    name: { bn: "ডাঃ মোঃ রাশিদুল হাসান", en: "Dr. Md. Rashidul Hasan" },
    degrees: { bn: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এম.এস. (ইউরোলজি), বিএসএমএমইউ", en: "MBBS, BCS (Health), MS (Urology), BSMMU" },
    specialty: { bn: "ইউরোলজি বিশেষজ্ঞ ও সার্জন — কিডনি, প্রস্টেট, মূত্রনালী ও পুরুষ রোগ",
                 en: "Urology specialist & surgeon — kidney, prostate, urinary tract & men's health" },
    institution: { bn: "সহকারী অধ্যাপক, ফরিদপুর মেডিকেল কলেজ হাসপাতাল, ফরিদপুর (প্রাক্তন ইউরোলজি রেসিডেন্ট, জাতীয় কিডনি ও ইউরোলজি ইনস্টিটিউট, ঢাকা)",
                   en: "Assistant Professor, Faridpur Medical College Hospital (former Urology Resident, National Institute of Kidney Diseases & Urology, Dhaka)" },
    schedule: { bn: "শনিবার থেকে বৃহস্পতিবার বিকাল ২:৩০টা থেকে ৭:০০টা", en: "Sat – Thu, 2:30 PM – 7:00 PM" },
    tags: ["urology", "surgery"], photo: "",
  },
  {
    name: { bn: "ডাঃ অচিন্ত্য কুমার দাস", en: "Dr. Achintya Kumar Das" },
    degrees: { bn: "এমবিবিএস, বিসিএস (স্বাস্থ্য), এমএস (প্লাস্টিক সার্জারি)", en: "MBBS, BCS (Health), MS (Plastic Surgery)" },
    specialty: { bn: "বার্ণ, প্লাস্টিক, রিকন্সট্রাক্টিভ, হ্যান্ড ও এসথেটিক সার্জারি বিশেষজ্ঞ",
                 en: "Burn, plastic, reconstructive, hand & aesthetic surgery specialist" },
    institution: { bn: "প্লাস্টিক সার্জন, বার্ণ ও প্লাস্টিক সার্জারি বিভাগ, ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা",
                   en: "Plastic Surgeon, Burn & Plastic Surgery Dept., Dhaka Medical College Hospital" },
    schedule: { bn: "বৃহস্পতিবার ৩টা থেকে রাত ৮টা ও শুক্রবার ১০টা থেকে ৬টা", en: "Thu 3:00 PM – 8:00 PM, Fri 10:00 AM – 6:00 PM" },
    tags: ["surgery", "skin"], photo: "",
  },
];

/* GALLERY — add images to assets/images and list them here */
const GALLERY = [
  { src: "assets/images/anniversary.jpg", caption: { bn: "২য় বর্ষপূর্তি", en: "2nd anniversary" } },
  { src: "assets/images/dr-achintya-kumar-das.jpg", caption: { bn: "ডাঃ অচিন্ত্য কুমার দাস — প্লাস্টিক সার্জারি", en: "Dr. Achintya Kumar Das — Plastic surgery" } },
  { src: "assets/images/doctors-roster.jpg", caption: { bn: "ডাক্তারদের তালিকা ও সময়সূচী", en: "Doctors & schedule poster" } },
];
