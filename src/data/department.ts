export interface FacultyMember {
  id: string;
  nameTh: string;
  nameEn: string;
  academicRankTh?: string;
  academicRankEn?: string;
  roleTh: string;
  roleEn: string;
  subspecialties: string[];
  image: string;
  hasCustomPhoto: boolean;
  officePhone: string;
  isHead?: boolean;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: "jule-namchaisiri",
    nameTh: "อ. นพ.จุล นำชัยศิริ",
    nameEn: "Jule Namchaisiri, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "หัวหน้าสาขาวิชาศัลยศาสตร์ทรวงอก",
    roleEn: "Head, Division of Cardiovascular & Thoracic Surgery",
    subspecialties: [
      "Congenital Cardiac Surgery",
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery"
    ],
    image: "/images/faculty/dr-jule.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644",
    isHead: true
  },
  {
    id: "wichai-benjacholamas",
    nameTh: "ศ. นพ.วิชัย เบญจชลมาศ",
    nameEn: "Prof. Wichai Benjacholamas, M.D.",
    academicRankTh: "ศาสตราจารย์",
    academicRankEn: "Professor of Surgery",
    roleTh: "อาจารย์อาวุโส / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Senior Professor, Cardiothoracic Surgeon",
    subspecialties: [
      "Congenital Cardiac Surgery",
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery"
    ],
    image: "/images/faculty/dr-wichai.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  },
  {
    id: "seree-singhatanadgige",
    nameTh: "รศ. นพ.เสรี สิงหถนัดกิจ",
    nameEn: "Assoc. Prof. Seree Singhatanadgige, M.D.",
    academicRankTh: "รองศาสตราจารย์",
    academicRankEn: "Associate Professor",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "Adult Cardiac Surgery",

    ],
    image: "/images/faculty/dr-seree.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  },
  {
    id: "patchara-ongcharit",
    nameTh: "อ. นพ.พัชร อ่องจริต",
    nameEn: "Patchara Ongcharit, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "ศัลยแพทย์ทรวงอกและหัวใจ / ผู้เชี่ยวชาญการผ่าตัดปลูกถ่ายหัวใจ",
    roleEn: "Cardiothoracic Surgeon & Heart Transplant Specialist",
    subspecialties: [
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery",
      "Heart and Lung Transplantation & Mechanical Circulatory Support (MCS)"
    ],
    image: "/images/faculty/dr-patchara.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  },
  {
    id: "chanapong-kityarak",
    nameTh: "ผศ. นพ.ชนาพงษ์ กิตยารักษ์",
    nameEn: "Chanapong Kityarak, M.D.",
    academicRankTh: "ผู้ช่วยศาสตราจารย์",
    academicRankEn: "Assistant Professor",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery",
      "Endovascular Repair (TEVAR)"
    ],
    image: "/images/faculty/dr-chanapong.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  },
  {
    id: "nopporn-pornpattanarak",
    nameTh: "อ. นพ.นพพร พรพัฒนารักษ์",
    nameEn: "Nopporn Pornpattanarak, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "General Thoracic Surgery",
      "Thoracic Surgical Oncology"
    ],
    image: "/images/faculty/dr-nopporn.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  },
  {
    id: "chayanant-sirinavin",
    nameTh: "อ. นพ.ชญาน์ทัต ศิรินาวิน",
    nameEn: "Chayanant Sirinavin, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "Congenital Cardiac Surgery",
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery"
    ],
    image: "",
    hasCustomPhoto: false,
    officePhone: "02-256-4944"
  },
  {
    id: "muenthep-chomvilailuk",
    nameTh: "อ. นพ.เหมือนเทพ โฉมวิไลลักษณ์",
    nameEn: "Muenthep Chomvilailuk, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "Congenital Cardiac Surgery",
      "Adult Cardiac Surgery",
      "Minimally Invasive Cardiac Surgery"
    ],
    image: "/images/faculty/dr-muenthep.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4944"
  },
  {
    id: "padet-tanangterapong",
    nameTh: "อ. นพ.เผด็จ ธนังธีรพงษ์",
    nameEn: "Padet Tanangterapong, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "อาจารย์แพทย์ & ผู้ช่วยหัวหน้าภาควิชาฯ ฝ่ายการศึกษา",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "General Thoracic Surgery",
      "Thoracic Surgical Oncology"
    ],
    image: "",
    hasCustomPhoto: false,
    officePhone: "02-256-4644"
  },
  {
    id: "thas-tangkitvanichakul",
    nameTh: "อ. นพ.ธรรศ ตั้งกิจวนิจกุล",
    nameEn: "Thas Tangkitvanichakul, M.D.",
    academicRankTh: "",
    academicRankEn: "",
    roleTh: "อาจารย์แพทย์ / ศัลยแพทย์ทรวงอกและหัวใจ",
    roleEn: "Cardiothoracic Surgeon",
    subspecialties: [
      "Adult Cardiac Surgery",
      "Complex Aortic Surgery",
      "Endovascular Repair (TEVAR)"
    ],
    image: "/images/faculty/dr-thas.jpg",
    hasCustomPhoto: true,
    officePhone: "02-256-4644"
  }
];

export interface Milestone {
  yearBe: string;
  yearAd: string;
  title: string;
  description: string;
  pioneer: string;
  tag: string;
  image?: string;
}

export const departmentMilestones: Milestone[] = [
  {
    yearBe: "2496",
    yearAd: "1953",
    title: "ผ่าตัดหัวใจสำเร็จครั้งแรกในประเทศไทย & ก่อตั้งหน่วยหัวใจ ปอด",
    description: "ทำการผ่าตัดผูกเย็บ Patent Ductus Arteriosus (PDA) สำเร็จเป็นครั้งแรกในประวัติศาสตร์การแพทย์ไทย พร้อมทั้งจัดตั้งห้องตรวจสวนหัวใจ (Cardiac Catheterization Lab) แห่งแรกในประเทศไทย",
    pioneer: "ศ. นพ.สมาน มันตาภรณ์",
    tag: "First in Thailand",
    image: "/images/history/prof-saman.jpg"
  },
  {
    yearBe: "2497",
    yearAd: "1954",
    title: "การผ่าตัดลิ้นหัวใจครั้งแรกในประเทศไทย",
    description: "บุกเบิกการผ่าตัดลิ้นหัวใจ Closed Mitral Valvulotomy ครั้งแรกในประเทศไทย ณ โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
    pioneer: "ศ. นพ.สมาน มันตาภรณ์",
    tag: "Valve Pioneer"
  },
  {
    yearBe: "2502",
    yearAd: "1959",
    title: "การผ่าตัดหัวใจชนิดเปิดด้วยเครื่องปอด-หัวใจเทียมครั้งแรก",
    description: "ผ่าตัดหัวใจชนิดเปิด (Open Heart Surgery) โดยใช้เครื่อง Cardiopulmonary Bypass ครั้งแรกในประเทศไทยเพื่อแก้ไข Valvular Pulmonary Stenosis สำเร็จอย่างงดงาม",
    pioneer: "ศ. นพ.สมาน มันตาภรณ์ และคณะศัลยแพทย์ผู้ช่วย",
    tag: "Open Heart Pioneer",
    image: "/images/history/historical-team.jpg"
  },
  {
    yearBe: "2520",
    yearAd: "1977",
    title: "ประดิษฐ์ลิ้นหัวใจเทียมชีวภาพจากเนื้อเยื่อ Dura Mater",
    description: "ประดิษฐ์คิดค้นลิ้นหัวใจเทียมจากเยื่อหุ้มสมอง Dura Mater ถนอมด้วย Glycerine เข้มข้น นำมาใช้รักษาผู้ป่วยชาวไทยได้สำเร็จเป็นแห่งแรก",
    pioneer: "ศ. นพ.ชวลิต อ่องจริต",
    tag: "Innovation"
  },
  {
    yearBe: "2530",
    yearAd: "1987",
    title: "การผ่าตัดปลูกถ่ายหัวใจสำเร็จครั้งแรกในไทยและเอเชียตะวันออกเฉียงใต้",
    description: "บุกเบิกการผ่าตัดเปลี่ยนหัวใจ (Heart Transplantation) สำเร็จเป็นครั้งแรกในประเทศไทยและภูมิภาคเอเชียอาคเนย์ เมื่อวันที่ 18 ธันวาคม 2530 ณ โรงพยาบาลจุฬาลงกรณ์ พร้อมวางรากฐานระเบียบวิธีการนิติศาสตร์และการรับบริจาคอวัยวะจากผู้บริจาคสมองตาย",
    pioneer: "ศ. นพ.ชวลิต อ่องจริต",
    tag: "First in Southeast Asia"
  },
  {
    yearBe: "2527 - ปัจจุบัน",
    yearAd: "1984 - Present",
    title: "ผลิตศัลยแพทย์ทรวงอกสู่สากลต่อเนื่องกว่า 40 ปี",
    description: "เปิดหลักสูตรฝึกอบรมแพทย์ประจำบ้านและแพทย์ประจำบ้านต่อยอดสาขาวิชาศัลยศาสตร์ทรวงอก ผลิตศัลยแพทย์ผู้เชี่ยวชาญที่มีเกียรติภูมิและมาตรฐานเป็นที่ยอมรับระดับนานาชาติ",
    pioneer: "สาขาวิชาศัลยศาสตร์ทรวงอก รพ.จุฬาลงกรณ์",
    tag: "Academic Excellence"
  }
];

export const excellenceCenters = [
  {
    nameTh: "ศูนย์ความเป็นเลิศทางการแพทย์ด้านการปลูกถ่ายอวัยวะ",
    nameEn: "Center of Excellence for Organ Transplantation, KCMH",
    description: "โรงพยาบาลจุฬาลงกรณ์เป็นสถาบันแห่งแรกของประเทศไทยที่สามารถทำการผ่าตัดปลูกถ่ายอวัยวะ ไต ตับ และหัวใจ โดยเฉพาะหัวใจเป็นแห่งแรกของภูมิภาคเอเชียตะวันออกเฉียงใต้ มีอัตราความสำเร็จเทียบเท่าระดับมาตรฐานสากล",
    logo: "/images/centers/organ-transplant-logo.jpg",
    image: "/images/centers/transplant-team.jpg",
    link: "https://kcmh.chulalongkornhospital.go.th/ec/excellent-center-for-organ-transplantation-th/",
    highlights: ["First Heart Transplant in SE Asia", "International Standard Care", "Multidisciplinary Transplant Team"]
  },
  {
    nameTh: "ศูนย์ความเป็นเลิศทางการแพทย์ด้านโรคหัวใจและหลอดเลือด",
    nameEn: "The Cardiac Center of Excellence, KCMH",
    description: "ศูนย์การแพทย์ตติยภูมิชั้นสูงให้บริการวินิจฉัยและดูแลรักษาผู้ป่วยโรคหัวใจและหลอดเลือดแบบครบวงจร ด้วยเทคโนโลยี Hybrid OR, ECMO Center, Mechanical Circulatory Support (LVAD) และการผ่าตัดแผลเล็ก",
    image: "/images/services/hybrid-or.jpg",
    link: "https://kcmh.chulalongkornhospital.go.th/ec/the-cardiac-center-th/",
    highlights: ["Advanced Hybrid Operating Suites", "Adult & Congenital Care", "24/7 Emergency Aortic Network"]
  }
];

export const researchHighlights = [
  {
    titleTh: "รางวัลงานวิจัยดีเด่นระดับนานาชาติ ASCVTS 2020",
    titleEn: "Outstanding Research Award - 28th ASCVTS Congress",
    venue: "28th Congress of the Asian Society for Cardiovascular & Thoracic Surgery, Chiang Mai, Thailand",
    date: "7 - 10 กุมภาพันธ์ 2563",
    description: "แพทย์ประจำบ้านศัลยกรรมทรวงอก โรงพยาบาลจุฬาลงกรณ์ ชนะการประกวดแข่งขันและได้รับรางวัลงานวิจัยดีเด่นในเวทีระดับนานาชาติ",
    images: ["/images/research/ascvts-award-1.jpg", "/images/research/ascvts-award-2.jpg"]
  },
  {
    titleTh: "การนำเสนอผลงานวิจัยในงานประชุม EACTS ณ กรุงลิสบอน ประเทศโปรตุเกส",
    titleEn: "International Oral Presentation - 33rd EACTS Annual Meeting",
    venue: "33rd EACTS Annual Meeting, Lisbon, Portugal",
    date: "3 - 5 ตุลาคม 2562",
    description: "แพทย์ประจำบ้านศัลยกรรมทรวงอก โรงพยาบาลจุฬาลงกรณ์ ได้รับคัดเลือกให้นำเสนอผลงานวิจัยบนเวทีสมาคมศัลยศาสตร์ทรวงอกแห่งยุโรป",
    images: ["/images/research/eacts-lisbon-1.jpg", "/images/research/eacts-lisbon-2.jpg"]
  }
];

export const clinicalServices = {
  opd: {
    titleTh: "คลินิกผู้ป่วยนอกศัลยกรรมทรวงอก (OPD)",
    titleEn: "Outpatient Surgical Clinic",
    location: "อาคารจักรีทศมรามาธิบดินทร์ ชั้น 6 โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
    scheduleNote: "ออกตรวจตามวันและตารางนัดหมายของแพทย์เฉพาะทาง (กรุณาติดต่อสอบถามหรือนัดหมายล่วงหน้า)",
    phone: "02-256-4000"
  },
  office: {
    titleTh: "สำนักงานสาขาวิชาศัลยศาสตร์ทรวงอก",
    titleEn: "Division Office",
    location: "อาคาร สก. ชั้น 4 โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
    phone: "02-256-4644"
  },
  specialClinic: {
    titleTh: "คลินิกพิเศษนอกเวลาราชการ (Special Clinic)",
    titleEn: "After-Hours Special Clinic",
    url: "https://specialclinics.chulalongkornhospital.go.th/",
    phone: "02-256-5193",
    description: "บริการตรวจรักษาทางการแพทย์นอกเวลาราชการ โดยแพทย์ผู้เชี่ยวชาญเฉพาะทาง บริหารงานโดยชมรมคณาจารย์แพทย์ คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    scheduleNote: "วันจันทร์ – ศุกร์ เวลา 16.30 – 20.00 น. และวันเสาร์ – อาทิตย์ เวลา 08.00 – 12.00 น. (ติดต่อนัดหมายแพทย์ล่วงหน้าอย่างน้อย 1 วัน ผ่าน Call Center โทร. 02-256-5193)"
  },
  icu: {
    titleTh: "หออภิบาลผู้ป่วยวิกฤตศัลยกรรมหัวใจ (Cardiac Surgery ICU)",
    titleEn: "Cardiac Surgery ICU & Operating Suites",
    description: "พร้อมด้วยอุปกรณ์ช่วยชีวิตขั้นสูง เครื่องพยุงการทำงานของหัวใจและปอด (ECMO, IABP, LVAD) ตลอด 24 ชั่วโมง"
  }
};

export const contactInfo = {
  deptNameTh: "สาขาวิชาศัลยศาสตร์ทรวงอก ภาควิชาศัลยศาสตร์",
  facultyTh: "คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
  hospitalTh: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
  addressTh: "1873 ถนนพระราม 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330",
  addressEn: "1873 Rama IV Road, Pathumwan, Bangkok 10330, Thailand",
  locationNote: "อาคาร สก. ชั้น 4 (สำนักงานสาขาวิชา) และ อาคารจักรีทศมรามาธิบดินทร์ ชั้น 6 (คลินิกผู้ป่วยนอก OPD) โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
  phones: [
    { label: "สำนักงานสาขาวิชา (อาคาร สก. ชั้น 4)", number: "02-256-4644", href: "tel:022564644" },
    { label: "คลินิกพิเศษนอกเวลา Call Center", number: "02-256-5193", href: "tel:022565193" },
    { label: "นัดหมายตรวจ รพ.จุฬาลงกรณ์", number: "02-256-4000", href: "tel:022564000" },
    { label: "สำนักงานภาควิชาศัลยศาสตร์", number: "02-256-4944", href: "tel:022564944" }
  ],
  emergencyHotline: {
    label: "Aortic Emergency & Acute Referral (24 ชม.)",
    number: "02-256-4000",
    href: "tel:022564000"
  },
  specialClinicUrl: "https://specialclinics.chulalongkornhospital.go.th/",
  email: "cvt.chula@gmail.com"
};
