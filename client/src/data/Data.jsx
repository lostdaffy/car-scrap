export const universities = [
  // ---------------- INDIA ----------------
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    imageUrl: "/images/about.jpg",
    shortName: "IIT Bombay",
    established: 1958,
    type: "Public Technical University",
    accreditation: ["NAAC A++"],
    address: {
      line1: "Powai",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400076",
    },
    contacts: {
      phone: "+91-22-2572-2545",
      email: "info@iitb.ac.in",
    },
    website: "https://www.iitb.ac.in/",
    location: { lat: 19.1334, lng: 72.9133 },
    studentCount: 11000,
    facultyCount: 700,
    facilities: [
      "Central Library",
      "Hostels",
      "Research Labs",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "B.Tech", durationYears: 4 },
      { level: "PG", name: "M.Tech", durationYears: 2 },
      { level: "PG", name: "MBA", durationYears: 2 },
      { level: "Doctoral", name: "Ph.D.", durationYears: 5 },
    ],
    admissions: {
      requirements: [
        "JEE Advanced (UG)",
        "GATE/CAT (PG)",
        "Departmental Interview (Ph.D.)",
      ],
      applicationWindow: { start: "2025-01-01", end: "2025-03-31" },
    },
    rankings: { national: 3, global: 149, source: "Sample/Placeholder" },
    notes: "Data is sample/illustrative. Update as per official sources.",
  },

  // ---------------- RUSSIA ----------------
  {
    id: "omsk-medical-university",
    name: "Omsk State Medical University",
    imageUrl:
      "https://ishanoverseas.com/wp-content/uploads/2025/07/7jidcL1hW.jpg",
    established:
      "1920 (as Medical Faculty of Siberian Institute) → Academy (1994) → University status in 2015",
    type: "Public Medical University under Russia’s Ministry of Health & Education",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "5,500 total, including 600+ international students.",
    facilities: [
      "59 Departments",
      "Library with 600,000+ volumes",
      "Computer Labs",
      "Hostels",
      "Student Scientific Society",
    ],
    programs: [{ level: "UG", name: "MBBS (General Medicine)", durationYears: 6 }],
    facility: [
      "Pediatrics",
      "Preventive Medicine",
      "Dentistry",
      "Pharmacy ",
      "5 faculties, 59 departments",
    ],
    admissions: {
      requirements: ["NEET", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: 237, global: 5555, source: "WDOMS" },
    notes:
      "One of Russia's oldest medical universities with over 40,000 graduates worldwide. Strong clinical training from Year 3.",
  },

  // ---------------- ARMENIA ----------------
  {
    id: "yerevan-state-medical-university",
    name: "Yerevan State Medical University named after Mkhitar Heratsi",
    imageUrl: "https://ysmu.am/wp-content/uploads/2021/05/ysmu-logo.png",
    shortName: "YSMU",
    established: 1920,
    type: "Public Medical University",
    accreditation: ["WHO", "UNESCO", "NMC", "FAIMER", "ECFMG"],
    address: {
      line1: "Koryun Street, 2",
      city: "Yerevan",
      state: "Yerevan",
      country: "Armenia",
      postalCode: "0025",
    },
    contacts: {
      phone: "+374-10-58-22-13",
      email: "info@ysmu.am",
    },
    website: "https://www.ysmu.am/",
    location: { lat: 40.1792, lng: 44.4991 },
    studentCount: 8500,
    facultyCount: 1200,
    facilities: [
      "10 Faculties",
      "Modern Medical Labs",
      "Clinical Training Centers",
      "Library",
      "Hostels",
      "Research Centers",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 5 },
      { level: "UG", name: "Pharmacy", durationYears: 5 },
      { level: "UG", name: "Military Medicine", durationYears: 6 },
      { level: "PG", name: "MD Specializations", durationYears: 3 },
      { level: "Doctoral", name: "Ph.D. Programs", durationYears: 4 },
    ],
    admissions: {
      requirements: [
        "NEET",
        "50% in PCB",
        "Age ≥ 17",
        "No IELTS/TOEFL required",
      ],
      applicationWindow: { start: "2025-03-01", end: "2025-10-31" },
    },
    rankings: { national: 1, global: 4200, source: "WDOMS" },
    notes:
      "Armenia's top medical university and oldest medical institution. Premier government medical university in Eastern Europe under Ministry of Education and Science of Armenia.",
  },

  // ---------------- NEPAL ----------------
  {
    id: "bp-koirala-institute-health-sciences",
    name: "B.P. Koirala Institute of Health Sciences",
    imageUrl:
      "https://www.bpkihs.edu/wp-content/uploads/2020/09/bpkihs-logo.png",
    shortName: "BPKIHS",
    established: 1993,
    type: "Public Medical Institute",
    accreditation: ["NMC", "WHO", "Nepal Medical Council"],
    address: {
      line1: "Dharan",
      city: "Dharan",
      state: "Province No. 1",
      country: "Nepal",
      postalCode: "56700",
    },
    contacts: {
      phone: "+977-25-525555",
      email: "info@bpkihs.edu",
    },
    website: "https://www.bpkihs.edu/",
    location: { lat: 26.8157, lng: 87.2824 },
    studentCount: 3500,
    facultyCount: 450,
    facilities: [
      "Teaching Hospital",
      "Advanced Medical Labs",
      "Research Centers",
      "Library",
      "Hostels",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 5.5 },
      { level: "UG", name: "BDS", durationYears: 5 },
      { level: "UG", name: "B.Sc. Nursing", durationYears: 4 },
      { level: "PG", name: "MD/MS", durationYears: 3 },
      { level: "Doctoral", name: "Ph.D.", durationYears: 5 },
    ],
    admissions: {
      requirements: ["NEET", "50% in PCB", "Age ≥ 17"],
      applicationWindow: { start: "2025-04-01", end: "2025-07-31" },
    },
    rankings: { national: 2, global: 4500, source: "Nepal Medical Council" },
    notes:
      "Premier autonomous health sciences institute in Nepal. Known for excellent clinical training and research programs.",
  },

  // ---------------- UZBEKISTAN ----------------
  {
    id: "andijan-state-medical-institute",
    name: "Andijan State Medical Institute",
    imageUrl: "https://andmi.uz/wp-content/uploads/2020/05/andmi-logo.png",
    shortName: "ASMI",
    established: 1955,
    type: "Public Medical Institute",
    accreditation: ["WHO", "NMC", "FAIMER", "WDOMS"],
    address: {
      line1: "Bog'ishamol Street, 1",
      city: "Andijan",
      state: "Andijan Region",
      country: "Uzbekistan",
      postalCode: "170100",
    },
    contacts: {
      phone: "+998-74-223-45-67",
      email: "info@andmi.uz",
    },
    website: "https://www.andmi.uz/",
    location: { lat: 40.7821, lng: 72.3442 },
    studentCount: 3000,
    facultyCount: 870,
    facilities: [
      "Modern Medical Labs",
      "Clinical Training Centers",
      "Library",
      "Hostels",
      "Research Centers",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 5 },
      { level: "UG", name: "Pharmacy", durationYears: 5 },
      { level: "PG", name: "Residency Programs", durationYears: 3 },
    ],
    admissions: {
      requirements: [
        "NEET",
        "50% in PCB",
        "Age ≥ 17",
        "No IELTS/TOEFL required",
      ],
      applicationWindow: { start: "2025-04-01", end: "2025-08-01" },
    },
    rankings: { national: 2, global: 5044, source: "WDOMS" },
    notes:
      "Non-profit public education institution. Strong focus on practical medical training with experienced faculty.",
  },

  // ---------------- GEORGIA ----------------
  {
    id: "georgian-national-university-seu",
    name: "Georgian National University SEU",
    imageUrl: "https://seu.edu.ge/wp-content/uploads/2020/03/seu-logo.png",
    shortName: "SEU",
    established: 2001,
    type: "Private University",
    accreditation: ["WHO", "NMC", "WDOMS", "ECFMG", "FAIMER"],
    address: {
      line1: "9 Tsinandali Street",
      city: "Tbilisi",
      state: "Tbilisi",
      country: "Georgia",
      postalCode: "0144",
    },
    contacts: {
      phone: "+995-32-2-15-15-15",
      email: "info@seu.edu.ge",
    },
    website: "https://www.seu.edu.ge/",
    location: { lat: 41.7151, lng: 44.8271 },
    studentCount: 11035,
    facultyCount: 470,
    facilities: [
      "3D Anatomage",
      "Cadavers",
      "Advanced Research Center",
      "Robotic Surgical Equipment",
      "Team Learning Center",
      "Simulation Center",
      "High-tech Laboratories",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 6 },
      { level: "UG", name: "Pharmacy", durationYears: 4 },
      { level: "PG", name: "Various Specializations", durationYears: 2 },
    ],
    admissions: {
      requirements: ["NEET", "50% in PCB", "Age ≥ 17"],
      applicationWindow: { start: "2025-04-01", end: "2025-11-01" },
    },
    rankings: { national: 2, global: 4500, source: "WDOMS" },
    notes:
      "Largest and most prestigious medical university in Georgia. High-standard medical facilities and internationally recognized degrees valid across the globe.",
  },

  // ---------------- KYRGYZSTAN ----------------
  {
    id: "osh-international-medical-university",
    name: "Osh International Medical University",
    imageUrl:
      "https://oshimu.com/wp-content/uploads/2020/01/osh-international-medical-university-logo.png",
    shortName: "OIMU",
    established: 2020,
    type: "Private Medical University",
    accreditation: ["WHO", "NMC", "ECFMG", "FAIMER", "WFME", "WDOMS"],
    address: {
      line1: "Osh city",
      city: "Osh",
      state: "Osh Oblast",
      country: "Kyrgyzstan",
      postalCode: "723500",
    },
    contacts: {
      phone: "+996-3222-5-00-00",
      email: "info@oshimu.com",
    },
    website: "https://oshimu.com/",
    location: { lat: 40.5283, lng: 72.7985 },
    studentCount: 3000,
    facultyCount: 250,
    facilities: [
      "Faculty of General Medicine",
      "Faculty of Dentistry",
      "Faculty of Pharmacy",
      "Faculty of Nursing",
      "Faculty of Public Health",
      "Faculty of Medical Technology",
      "International Medical Faculty",
      "Modern Labs",
      "Library",
      "Hostels",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 5 },
      { level: "UG", name: "Pharmacy", durationYears: 5 },
      { level: "UG", name: "Nursing", durationYears: 4 },
      { level: "PG", name: "Postgraduate Medical Education", durationYears: 3 },
    ],
    admissions: {
      requirements: [
        "NEET",
        "50% in PCB",
        "Age ≥ 17",
        "No IELTS/TOEFL required",
      ],
      applicationWindow: { start: "2025-04-01", end: "2025-08-31" },
    },
    rankings: { national: 8, global: 8915, source: "EduRank" },
    notes:
      "Young dynamic university established in 2020. Over 1,200 Indian students enrolled. English-medium instruction with student-teacher ratio 1:10.",
  },

  // ---------------- KAZAKHSTAN ----------------
  {
    id: "semey-state-medical-university",
    name: "Semey Medical University",
    imageUrl: "https://smu.edu.kz/upload/iblock/590/semy_logo.png",
    shortName: "SemSMU",
    established: 1952,
    type: "Public Medical University",
    accreditation: ["WHO", "NMC", "FAIMER", "ECFMG", "WDOMS"],
    address: {
      line1: "Abai Kunanbayev Street, 103",
      city: "Semey",
      state: "East Kazakhstan Region",
      country: "Kazakhstan",
      postalCode: "071400",
    },
    contacts: {
      phone: "+7-7222-52-45-89",
      email: "info@smu.edu.kz",
    },
    website: "https://smu.edu.kz/",
    location: { lat: 50.4111, lng: 80.2275 },
    studentCount: 4880,
    facultyCount: 650,
    facilities: [
      "University Hospital (11 buildings)",
      "Training and Clinical Center",
      "76 Clinical Sites",
      "Research Institute of Radiation Medicine and Ecology",
      "Branches in Pavlodar and Ust-Kamenogorsk",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Bachelor Programs", durationYears: 4 },
      { level: "PG", name: "Master Programs", durationYears: 2 },
      { level: "PG", name: "Residency Programs", durationYears: 3 },
      { level: "Doctoral", name: "Doctoral Programs", durationYears: 3 },
    ],
    admissions: {
      requirements: ["NEET", "50% in PCB", "Age ≥ 17"],
      applicationWindow: { start: "2025-04-01", end: "2025-08-31" },
    },
    rankings: {
      national: 1,
      global: 4500,
      source: "JSC Center for Human Resources Development",
    },
    notes:
      "Oldest medical institution in Kazakhstan (1952). Largest higher education institution in North-Eastern Kazakhstan. 19% international students. Ranked 1st among medical universities in Kazakhstan for graduate employment. Over 26,683 specialists trained.",
  },
];
