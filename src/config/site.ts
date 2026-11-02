export interface NavChild {
  label: string;
  description?: string;
  href: string;
  badge?: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const siteConfig = {
  deptNameTh: "สาขาวิชาศัลยศาสตร์ทรวงอก",
  deptNameEn: "Division of Cardiovascular & Thoracic Surgery",
  hospitalTh: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
  hospitalEn: "King Chulalongkorn Memorial Hospital",
  subTitle: "Faculty of Medicine, Chulalongkorn University",
  theme: {
    primary: "#A6192E",
    accent: "#DE5C8E",
    dark: "#1E293B"
  },
  images: {
    logo: "/images/logo.png",
    heroBanner: "/images/hero-bg.jpg"
  },
  hotline: {
    label: "Aortic Emergency 24h",
    phone: "02-256-4000",
    link: "tel:022564000"
  },
  navLinks: [
    { 
      label: "Home", 
      href: "/" 
    },
    { 
      label: "About Us", 
      href: "/about",
      children: [
        {
          label: "ประวัติและความเป็นมา",
          description: "กว่า 70 ปีแห่งการบุกเบิกผ่าตัดหัวใจในไทย (ตั้งแต่ พ.ศ. 2496)",
          href: "/about#history"
        },
        {
          label: "ศูนย์ความเป็นเลิศทางการแพทย์",
          description: "ศูนย์ปลูกถ่ายอวัยวะ & ศูนย์โรคหัวใจ รพ.จุฬาลงกรณ์",
          href: "/about#centers",
          badge: "Excellence"
        },
        {
          label: "วิสัยทัศน์และพันธกิจ",
          description: "การบริการ วิชาการ ฝึกอบรม และวิจัยระดับภูมิภาค",
          href: "/about#mission"
        }
      ]
    },
    { 
      label: "Services & Clinics", 
      href: "/services",
      children: [
        {
          label: "สาขาความเชี่ยวชาญการผ่าตัด",
          description: "Adult Cardiac, Thoracic, Aortic & Pediatric Surgery",
          href: "/services#subspecialties"
        },
        {
          label: "คลินิกผู้ป่วยนอก อาคารจักรีทศมรามาธิบดินทร์ ชั้น 6",
          description: "ตรวจตามตารางนัดหมายแพทย์เฉพาะทาง โทร 02-256-4000",
          href: "/services#opd",
          badge: "OPD"
        },
        {
          label: "คลินิกพิเศษนอกเวลาราชการ",
          description: "Call Center 02-256-5193 (นัดหมายล่วงหน้าอย่างน้อย 1 วัน)",
          href: "https://specialclinics.chulalongkornhospital.go.th/",
          badge: "Special",
          external: true
        },
        {
          label: "หอผู้ป่วยวิกฤตและห้องผ่าตัด",
          description: "Cardiac ICU, Hybrid Operating Suites & ECMO Center",
          href: "/services#facilities"
        },
        {
          label: "ส่งต่อผู้ป่วย & ฉุกเฉิน 24 ชม.",
          description: "สายด่วนส่งต่อผู้ป่วยฉุกเฉินหลอดเลือดแดงใหญ่เอออร์ตา",
          href: "tel:022564000",
          badge: "24 Hours"
        }
      ]
    },
    { 
      label: "Faculty & Surgeons", 
      href: "/faculty",
      children: [
        {
          label: "คณาจารย์ศัลยแพทย์",
          description: "อาจารย์แพทย์ผู้เชี่ยวชาญศัลยศาสตร์ทรวงอกและหัวใจ",
          href: "/faculty"
        },
        {
          label: "ทำเนียบแพทย์ประจำบ้านและศิษย์เก่า",
          description: "Residents, Clinical Fellows & Alumni Directory",
          href: "/fellowship",
          badge: "ปีการศึกษา 2569"
        }
      ]
    },
    { 
      label: "Education & Research", 
      href: "/research",
      children: [
        {
          label: "หลักสูตรฝึกอบรม (มคว.2)",
          description: "Curriculum และเกณฑ์การอบรมแพทย์ประจำบ้าน",
          href: "/documents/curriculum-mkw2.pdf",
          badge: "PDF",
          external: true
        },
        {
          label: "คู่มือแพทย์ประจำบ้าน 2568",
          description: "Residency Manual สำหรับการเรียนการสอนและปฏิบัติงาน",
          href: "/documents/resident-manual-2568.pdf",
          badge: "PDF",
          external: true
        },
        {
          label: "MDCU MEDUMORE",
          description: "บทเรียนออนไลน์ E-Learning (ICD & ECMO Course)",
          href: "/#medumore"
        },
        {
          label: "งานวิจัยและรางวัลระดับนานาชาติ",
          description: "รางวัลงานวิจัย ASCVTS และผลงาน EACTS ประเทศโปรตุเกส",
          href: "/research"
        },
        {
          label: "วารสาร ฬ.จุฬา (KCMH Journal)",
          description: "คลังวารสารความรู้ทางการแพทย์และสุขภาพ รพ.จุฬาลงกรณ์",
          href: "/#kcmh-section"
        }
      ]
    }
  ] as NavItem[],

  // --- Hero Section Data ---
  hero: {
    title: "Excellence in Cardiovascular & Thoracic Care",
    description: "บุกเบิกวิทยาการศัลยศาสตร์ทรวงอกและหัวใจแห่งแรกของประเทศไทย ให้บริการผ่าตัดตติยภูมิชั้นสูง ฝึกอบรมแพทย์ผู้เชี่ยวชาญ และสร้างสรรค์งานวิจัยระดับสากล",
    primaryBtn: { label: "Clinical Services", href: "/services" },
    secondaryBtn: { label: "About Us", href: "/about" },
  },

  // --- Clinical Programs Cards ---
  programs: [
    {
      title: "Adult Cardiac Surgery",
      titleTh: "การผ่าตัดหัวใจผู้ใหญ่",
      description: "Coronary artery bypass grafting (CABG), complex valve repair and replacement, minimally invasive cardiac surgery (MICS), and heart failure mechanical circulatory support (LVAD).",
    },
    {
      title: "Aortic Surgery",
      titleTh: "การผ่าตัดหลอดเลือดแดงใหญ่",
      description: "Full-spectrum care for acute aortic syndrome, ascending and root remodeling, total arch replacement with frozen elephant trunk (FET), and complex hybrid/TEVAR interventions.",
    },
    {
      title: "Thoracic Surgery",
      titleTh: "การผ่าตัดปอดและทรวงอก",
      description: "Video-assisted thoracoscopic surgery (VATS), uniportal anatomical lung resection, mediastinal mass excision, and airway reconstruction for thoracic malignancies.",
    },
    {
      title: "Congenital Cardiac Surgery",
      titleTh: "การผ่าตัดหัวใจเด็กและพิการแต่กำเนิด",
      description: "Comprehensive surgical repair for pediatric and adult congenital heart disease (ACHD), complex neonatal cardiac reconstructions, and multidisciplinary heart defect management.",
    },
  ],
};

export default siteConfig;
