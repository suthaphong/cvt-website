export const siteConfig = {
  deptNameTh: "สาขาวิชาศัลยศาสตร์ทรวงอก",
  deptNameEn: "Division of Cardiovascular & Thoracic Surgery",
  hospitalTh: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
  hospitalEn: "King Chulalongkorn Memorial Hospital",
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
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Faculty & Surgeons", href: "/#faculty" },
    { label: "Resident & Fellow", href: "/fellowship" },
    { label: "Research", href: "/#research" }
  ],

  // --- Hero Section Data ---
  hero: {
    title: "Excellence in Cardiovascular & Thoracic Care",
    description: "Providing advanced surgical interventions, fellowship training, and clinical research in adult cardiac, general thoracic, and aortic surgery.",
    primaryBtn: { label: "Clinical Services", href: "#services" },
    secondaryBtn: { label: "Refer a Patient", href: "tel:022564000" },
  },

  // --- Clinical Programs Cards ---
  programs: [
    {
      title: "Adult Cardiac Surgery",
      description: "Coronary artery bypass grafting (CABG), complex valve repair and replacement, minimal invasive cardiac surgery (MICS), and heart failure mechanical circulatory support.",
    },
     {
      title: "Aortic Surgery",
      description: "Full-spectrum care for acute aortic syndrome, ascending and root remodeling, total arch replacement with frozen elephant trunk (FET), and complex hybrid/TEVAR interventions.",
    },
    {
      title: "Thoracic Surgery",
      description: "Video-assisted thoracoscopic surgery (VATS), uniportal anatomical lung resection, mediastinal mass excision, and airway reconstruction for thoracic malignancies.",
    },
    {
      title: "Pediatric Cardiac Surgery",
      description: "Comprehensive surgical repair for pediatric and adult congenital heart disease (ACHD), complex neonatal cardiac reconstructions, and multidisciplinary heart defect management.",
    },
  ],
};

export default siteConfig;
