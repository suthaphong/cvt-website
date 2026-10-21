export interface MemberProfile {
  name: string;
  roleTh: string;
  roleEn: string;
  category: 'resident' | 'fellow' | 'alumni' | 'upcoming';
  yearLevel?: number; // 1, 2, 3, 4, 5
  academicYear?: string;
  image: string;
  hasCustomPhoto: boolean;
  statusBadge: string;
  transitionNote?: string;
}

export const academicYearCurrent = "2569";
export const academicYearSource = "2567";

// Resident Year 5 (Chief Residents in 2569 - progressed from Year 3 in 2567)
export const residentsYear5: MemberProfile[] = [
  {
    name: "นายแพทย์ณฐกร พงศ์ทวิกร",
    roleTh: "แพทย์ประจำบ้านปีที่ 5",
    roleEn: "CVT resident year 5 (Chief Resident)",
    category: "resident",
    yearLevel: 5,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2022/11/นพ.ณฐกร.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 5",
    transitionNote: " "
  },
  {
    name: "นายแพทย์เจนวิทย์ วนิชเวทย์พิบูล",
    roleTh: "แพทย์ประจำบ้านปีที่ 5",
    roleEn: "CVT resident year 5 (Chief Resident)",
    category: "resident",
    yearLevel: 5,
    academicYear: "2569",
    image: "",
    hasCustomPhoto: false,
    statusBadge: "แพทย์ประจำบ้านปีที่ 5 (Chief)",
    transitionNote: " "
  },
  {
    name: "นายแพทย์กฤตนันท์ ว่องศรียานนท์",
    roleTh: "แพทย์ประจำบ้านปีที่ 5",
    roleEn: "CVT resident year 5 (Chief Resident)",
    category: "resident",
    yearLevel: 5,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2022/11/นพ.กฤตนันท์.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 5 (Chief)",
    transitionNote: " "
  },
  {
    name: "แพทย์หญิงชริยากรณ์ สนธิสัมพันธ์",
    roleTh: "แพทย์ประจำบ้านปีที่ 5",
    roleEn: "CVT resident year 5 (Chief Resident)",
    category: "resident",
    yearLevel: 5,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2022/11/พญ.ชริยากรณ์.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 5 (Chief)",
    transitionNote: " "
  }
];

// Resident Year 4 in 2569 (progressed from Year 2 in 2567)
export const residentsYear4: MemberProfile[] = [
  {
    name: "นายแพทย์พงศยา ไส้เพี้ย",
    roleTh: "แพทย์ประจำบ้านปีที่ 4",
    roleEn: "CVT resident year 4",
    category: "resident",
    yearLevel: 4,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2023/12/นพ.พงศยา-ไส้เพี้ย-scaled.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 4",
    transitionNote: " "
  },
  {
    name: "แพทย์หญิงสลิลดา สุรพงศ์ไพรัช",
    roleTh: "แพทย์ประจำบ้านปีที่ 4",
    roleEn: "CVT resident year 4",
    category: "resident",
    yearLevel: 4,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2023/12/พญ.สลิลดา-สุรพงศ์ไพรัช-1-scaled.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 4",
    transitionNote: " "
  },
  {
    name: "นายแพทย์พชรดนัย เจริญทรัพย์",
    roleTh: "แพทย์ประจำบ้านปีที่ 4",
    roleEn: "CVT resident year 4",
    category: "resident",
    yearLevel: 4,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2023/12/นพ.พชรดนัย-เจริญทรัพย์-scaled.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 4",
    transitionNote: " "
  }
];

// Resident Year 3 in 2569 (progressed from Year 1 in 2567)
export const residentsYear3: MemberProfile[] = [
  {
    name: "แพทย์หญิงศิรินัชชา ศรีอุดร",
    roleTh: "แพทย์ประจำบ้านปีที่ 3",
    roleEn: "CVT resident year 3",
    category: "resident",
    yearLevel: 3,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2024/08/พญ.ศิรินัชชา-CVT-scaled.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 3",
    transitionNote: " "
  },
  {
    name: "นายแพทย์พงศภัค ตันติวิชช์",
    roleTh: "แพทย์ประจำบ้านปีที่ 3",
    roleEn: "CVT resident year 3",
    category: "resident",
    yearLevel: 3,
    academicYear: "2569",
    image: "",
    hasCustomPhoto: false,
    statusBadge: "แพทย์ประจำบ้านปีที่ 3",
    transitionNote: " "
  },
  {
    name: "นายแพทย์กฤตพงศ์ กุลธำรงศรี",
    roleTh: "แพทย์ประจำบ้านปีที่ 3",
    roleEn: "CVT resident year 3",
    category: "resident",
    yearLevel: 3,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2024/08/นพ.กฤตพงศ์-CVT.jpeg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 3",
    transitionNote: " "
  },
  {
    name: "แพทย์หญิงณัฐพร เลิศเกียรติพานิชย์",
    roleTh: "แพทย์ประจำบ้านปีที่ 3",
    roleEn: "CVT resident year 3",
    category: "resident",
    yearLevel: 3,
    academicYear: "2569",
    image: "https://chula-surgery.com/wp-content/uploads/2024/08/พญ.ณัฐพร-CVT-scaled.jpg",
    hasCustomPhoto: true,
    statusBadge: "แพทย์ประจำบ้านปีที่ 3",
    transitionNote: " "
  }
];

export const alumniMembers: MemberProfile[] = [
  // Graduated from Senior Resident cohort (Year 5 in 2567 -> Alumni)
  {
    name: "นายแพทย์สรรพกร วิริยางกูร",
    roleTh: "ศิษย์เก่าแพทย์ประจำบ้าน",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.สรรพากร.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx"
  },
  {
    name: "นายแพทย์พงษ์พน มั่นสิทธิกุล",
    roleTh: "ศิษย์เก่าแพทย์ประจำบ้าน",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.พงษ์พน.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx"
  },
  {
    name: "นายแพทย์ภานุวัฒน์ คงเสรีนนท์",
    roleTh: "ศิษย์เก่าแพทย์ประจำบ้าน",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.ภานุวัฒน์.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx "
  },
  {
    name: "แพทย์หญิงกชกร กู้กิจมั่น",
    roleTh: "ศิษย์เก่าแพทย์ประจำบ้าน",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/พญ.กชกร.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx"
  },

  // Graduated Fellows (Cohort 2567 -> Alumni)
  {
    name: "นายแพทย์ปาณัท กิตติสิทธิ์",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.ปาณัท.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx \nแพทย์ประจำบ้านต่อยอดรุ่นปีการศึกษา xxxx"
  },
  {
    name: "นายแพทย์ณัฐดนัย เลิศบุษศราคาม",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    academicYear: "2567",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.ณัฐดนัย.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่าแพทย์ประจำบ้านต่อยอด",
    transitionNote: "แพทย์ประจำบ้านรุ่นปีการศึกษา xxxx แพทย์ประจำบ้านต่อยอดรุ่นปีการศึกษา xxxx"
    
  },

  // Established Department Alumni
  {
    name: "นายแพทย์สุทธิรัก สุทธิศักดิ์",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.สุทธิรัก.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)"
  },
  {
    name: "นายแพทย์กฤษดา จิตรรักษ์บำรุง",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/นพ.กฤษดา.jpeg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)"
  },
  {
    name: "นายแพทย์ธรรศ ตั้งกิจวนิชกุล",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/ธรรศ-1.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)"
  },
  {
    name: "นายแพทย์ชลธาร บำราศอรินทร์พ่าย",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    image: "https://chula-surgery.com/wp-content/uploads/2021/10/ชลธาร-บำราศอรินทรัพย์.jpg",
    hasCustomPhoto: true,
    statusBadge: "ศิษย์เก่า (Alumni)"
  },
  {
    name: "แพทย์หญิงกวินนุช บุญพิพัฒนาพงศ์",
    roleTh: "ศิษย์เก่าศัลยศาสตร์ทรวงอก",
    roleEn: "CVT Surgery Alumni",
    category: "alumni",
    image: "",
    hasCustomPhoto: false,
    statusBadge: "ศิษย์เก่า (Alumni)"
  }
];

export const allResidents = [
  ...residentsYear5,
  ...residentsYear4,
  ...residentsYear3
];

export const allMembers = [
  ...residentsYear5,
  ...residentsYear4,
  ...residentsYear3,
  ...alumniMembers
];
