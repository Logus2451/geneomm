import { Dna, Baby, Microscope, Stethoscope, HeartPulse, BrainCircuit, Users, ShieldCheck, RefreshCcw, Target } from 'lucide-react';

export const services = [
  {
    slug: "genetic-counseling",
    icon: Dna,
    title: "Genetic Counseling",
    description: "Personalized guidance to help you understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease.",
    details: {
      whatIsIt: "Genetic counseling is a communication process that deals with the human problems associated with the occurrence, or the risk of occurrence, of a genetic disorder in a family. Our counselors are trained professionals who help you understand complex genetic information.",
      whoNeedsIt: "Individuals or families concerned about a genetic condition, couples planning a pregnancy, or anyone with a family history of hereditary disease.",
      whatToExpect: "A session involves reviewing your family and medical histories, discussing genetic testing options, and receiving support and resources. It's a collaborative conversation focused on your needs.",
      faqs: [
        { q: "Is a referral needed?", a: "A referral is helpful but not always necessary. You can contact us directly to schedule a consultation." },
        { q: "How long is a session?", a: "Initial sessions typically last about 60 minutes." }
      ]
    }
  },
  {
    slug: "fetal-genetics",
    icon: Baby,
    title: "Fetal Genetics",
    description: "Early identification of infants with certain genetic, metabolic, and congenital disorders to allow for timely intervention.",
    details: {
      whatIsIt: "Fetal genetics is a specialized field that focuses on the diagnosis and management of genetic conditions before birth. It uses advanced imaging techniques and prenatal testing to identify genetic abnormalities in the developing fetus.",
      whoNeedsIt: "It is recommended for every newborn, as it is a crucial preventive health measure.",
      whatToExpect: "A small blood sample is collected from the baby's foot and sent to a lab for analysis. Results are usually available within a week.",
      faqs: [
        { q: "Is the test painful for the baby?", a: "The heel prick is a quick procedure and causes minimal, momentary discomfort." },
        { q: "What if the result is positive?", a: "A positive screen is not a diagnosis. It means further testing is needed. We guide you through every step of this process." }
      ]
    }
  },
  {
    slug: "dysmorphology-assessment",
    icon: Microscope,
    title: "Dysmorphology Assessment",
    description: "Comprehensive evaluation of physical anomalies to identify patterns that may suggest a specific genetic syndrome.",
    details: {
      whatIsIt: "Dysmorphology is the study of congenital birth defects that alter the shape or form of a body part. An assessment involves a detailed physical examination to look for specific patterns of features.",
      whoNeedsIt: "Children or adults with unusual facial features, growth problems, or birth defects.",
      whatToExpect: "A thorough, non-invasive physical exam, detailed measurements, and a review of medical history. This often provides crucial clues for diagnosis.",
      faqs: [
        { q: "Can this provide a definitive diagnosis?", a: "It often points towards a specific syndrome or class of syndromes, which can then be confirmed with genetic testing." }
      ]
    }
  },
  {
    slug: "Pediatric-adult-genetics",
    icon: Stethoscope,
    title: "Pediatric & Adult Genetics",
    description: "Diagnosis and management of genetic disorders in children, from common conditions to the rarest diseases.",
    details: {
      whatIsIt: "This specialty focuses on identifying and managing genetic conditions in infants, children, and adults. It covers a wide spectrum of disorders affecting growth, development, and health.",
      whoNeedsIt: "Children or adults with developmental delays, birth defects, known genetic syndromes like Down syndrome, or a family history of a genetic condition.",
      whatToExpect: "A comp rehensive consultation including physical examination, review of records, and discussion of potential genetic testing to establish a diagnosis and create a management plan.",
      faqs: [
        { q: "What is the goal of a Pediatric genetics consultation?", a: "The primary goals are to provide an accurate diagnosis, offer prognostic information, and coordinate care to improve the child's quality of life." }
      ]
    }
  },
  {
    slug: "metabolic-disorders",
    icon: HeartPulse,
    title: "Metabolic Disorders",
    description: "Specialized care for inborn errors of metabolism, helping manage complex dietary and medical needs.",
    details: {
      whatIsIt: "Inborn errors of metabolism are rare genetic disorders in which the body cannot properly turn food into energy. These are caused by defects in specific proteins (enzymes) that help break down parts of food.",
      whoNeedsIt: "Individuals diagnosed through newborn screening or those who develop symptoms later in life, such as poor growth, lethargy, or developmental regression.",
      whatToExpect: "Management is highly individualized and may include special diets, medications, and supplements. Close monitoring is key.",
      faqs: [
        { q: "Are metabolic disorders treatable?", a: "Many are treatable with early diagnosis and strict management, often preventing severe complications." }
      ]
    }
  },
  {
    slug: "developmental-delay-assessment",
    icon: BrainCircuit,
    title: "Developmental Delay",
    description: "Investigating the genetic causes of developmental delays to provide accurate diagnoses and targeted therapies.",
    details: {
      whatIsIt: "A developmental delay is when a child does not reach their developmental milestones at the expected times. An assessment aims to find the underlying cause, which can be genetic in many cases.",
      whoNeedsIt: "Any child showing significant delays in speech, motor skills, social skills, or cognitive abilities.",
      whatToExpect: "The assessment includes a detailed developmental history, physical exam, and potentially neurological and genetic testing to identify a cause.",
      faqs: [
        { q: "Why is finding a diagnosis important?", a: "A diagnosis can help parents understand why their child has delays, predict future challenges, and access specific therapies and support." }
      ]
    }
  },
  {
    slug: "prenatal-genetics",
    icon: Users,
    title: "Prenatal Genetics",
    description: "Assessing the risk of genetic disorders before birth, offering parents information and options for their pregnancy.",
    details: {
      whatIsIt: "Prenatal genetic counseling and testing provide information about the health of a developing fetus. This includes screening tests (like blood tests and ultrasound) and diagnostic tests (like amniocentesis).",
      whoNeedsIt: "Expecting parents, especially those with advanced maternal age, a family history of a genetic condition, or abnormal screening test results.",
      whatToExpect: "A discussion of risks, benefits, and limitations of available tests, allowing you to make informed decisions that align with your values.",
      faqs: [
        { q: "Are prenatal tests safe?", a: "Screening tests are non-invasive and safe. Diagnostic tests carry a small risk, which will be discussed in detail by your counselor." }
      ]
    }
  },
  {
    slug: "precision-medicine",
    icon: ShieldCheck,
    title: "Precision Medicine",
    description: "Tailoring medical treatment to the individual characteristics of each patient, informed by their genetic makeup.",
    details: {
      whatIsIt: "Precision medicine is an innovative approach that takes into account individual variability in genes, environment, and lifestyle for each person. This allows doctors to predict more accurately which treatment and prevention strategies will work in which people.",
      whoNeedsIt: "Patients with certain cancers, rare genetic disorders, or those who have had adverse reactions to standard treatments.",
      whatToExpect: "It often begins with genetic testing to identify specific biomarkers that can guide treatment decisions, leading to more effective, personalized care.",
      faqs: [
        { q: "Is this the future of medicine?", a: "Yes, it represents a shift from a 'one-size-fits-all' approach to one that is more targeted and effective." }
      ]
    }
  },
  {
    slug: "recurrent-pregnancy-losses",
    icon: RefreshCcw,
    title: "Recurrent Pregnant Losses",
    description: "Evaluation and management of recurrent pregnancy loss to help couples achieve a healthy pregnancy.",
    details: {
      whatIsIt: "Recurrent pregnancy loss (RPL) is historically defined as three consecutive pregnancy losses, but more recently defined as two or more. We investigate genetic, anatomical, hormonal, and immunological factors.",
      whoNeedsIt: "Couples who have experienced two or more spontaneous miscarriages.",
      whatToExpect: "A detailed history taking, physical exam, and specific testing such as karyotyping of parents, thrombosis screening, and uterine assessment.",
      faqs: [
        { q: "What are the success rates after RPL?", a: "With appropriate evaluation and supportive care, the majority of couples with RPL eventually have a successful pregnancy." }
      ]
    }
  },
  {
    slug: "cancer-genetics",
    icon: Target,
    title: "Cancer Genetics",
    description: "Genetic risk assessment for hereditary cancer syndromes to guide screening and prevention.",
    details: {
      whatIsIt: "Cancer genetics focuses on hereditary cancer syndromes where a genetic mutation increases the risk of certain cancers. Testing can identify these mutations (e.g., BRCA1, BRCA2).",
      whoNeedsIt: "Individuals with early-onset cancer, multiple family members with the same or related cancers, or a known family mutation.",
      whatToExpect: "Analysis of your personal and family cancer history, risk assessment, and counseling about the implications of genetic testing.",
      faqs: [
        { q: "How does this help my treatment?", a: "It can guide surgical decisions, influence chemotherapy choices (e.g., PARP inhibitors), and help other family members understand their risk." }
      ]
    }
  }
];

export const team = [
  {
    name: "Dr. M. Pradeep Kumar",
    title: "Consultant Pediatrician & Geneticist",
    image: "/assets/Dr.Pradeep1.JPG",
    qualifications: "M.B.B.S, M.D. (Pediatrics), DCH, DNB, Fellowship in Clinical Genetics",
    experience: "With over 15 years of experience, Dr. Pradeep Kumar is a leading figure in the field of genetics, dedicated to solving the most complex cases and empowering families with knowledge and compassionate care.",
    specialInterests: ["Dysmorphology", "Inborn Errors of Metabolism", "Neurogenetics", "Rare Disease Diagnosis", "Cancer genetics", "Preventive Genetics"],
    languages: ["English", "Tamil"]
  },
  {
    name: "Dr. S. Kanitha Pradeepkumar",
    title: "Aesthetic Dermatologist",
    image: "/assets/Dr.Kanitha.JPG",
    qualifications: "M.B.B.S, D.D.V.L., Pg. Diploma in Cosmetology",
    experience: "Affiliated with Radiant Skin Clinic, Coimbatore, Dr. Kanitha provides specialized dermatological care, focusing on the diagnosis and management of genetic skin conditions (genodermatoses) and related aesthetic concerns.",
    specialInterests: ["Genodermatoses", "Pediatric Dermatology", "Laser Treatments", "Aesthetic Dermatology"],
    languages: ["English", "Tamil"]
  },
  {
    name: "Dr. Naresh Shanmugam",
    title: "Senior Consultant, Pediatric Gastroenterology & Hepatology",
    image: "/assets/Dr.Naresh.jpg",
    qualifications: "MBBS, DCH, DNB (Paediatrics), FRCPCH, Dip. Nutritional Medicine (UK), CCT (UK), CSST (UK)",
    experience: "Dr. Naresh specializes in genetic disorders affecting the digestive system. As a visiting consultant from Rela Hospital, Chennai, he brings world-class expertise in hepatology and gastroenterology to Geneomm.",
    specialInterests: ["Genetic Liver Diseases", "Metabolic Liver Disease", "Pediatric Endoscopy"],
    languages: ["English", "Tamil"]
  },
  {
    name: "Dr. K. Sasidaran",
    title: "Pediatric Nephrologist & Critical Care Consultant",
    image: "/assets/Dr.Sasidaran.jpeg",
    qualifications: "M.B.B.S, M.D. (Pediatrics), Fellowship in Pediatric Nephrology",
    experience: "Visiting from Mehta Hospitals, Chennai, Dr. Sasidaran provides expert care for genetic kidney diseases and manages critically ill children with complex genetic conditions, ensuring comprehensive renal support.",
    specialInterests: ["Hereditary Kidney Diseases", "Pediatric Dialysis", "Congenital Anomalies of the Kidney"],
    languages: ["English", "Tamil"]
  }
];

export const testimonials = [
  {
    quote: "Dr. Pradeep Kumar is a very good and experienced doctor. He gave a very clear explanation and guidance regarding our consultation. Highly recommend this hospital for genetic and DNA consultation.",
    name: "Aboothalha A.",
    relation: "Genetic Consultation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "We consult with Dr. Pradeep and feel very comfortable. When we ask any doubt he clarifies it clearly.",
    name: "Nivi Sundaram",
    relation: "Patient",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "We have been consulting Dr. Pradeep since my son's birth. He is an awesome person who knows everything about my child. He prescribes mild doses which help recover soon.",
    name: "Harini Seshadri",
    relation: "Parent",
    image: "https://images.unsplash.com/photo-1595760780346-f972eb49f094?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "My relatives recommended Dr. Pradeep Kumar and he was absolutely outstanding. He was genuinely concerned about my health issue and kept at it diligently until full recovery. Highly recommended.",
    name: "Radha Radha",
    relation: "Patient",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Really they are great. Speaking very positive, with clean and neat surroundings. They treat the patient in a friendly manner.",
    name: "Premila Devi",
    relation: "Patient",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Consulting for both my kids over 8 years. Great and genuine. Very affectionate with kids.",
    name: "Subha Gengusamy",
    relation: "Parent of two",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Good consultant, kind hearted, and very polite behaviour. Staff coordination is also good.",
    name: "Saritha",
    relation: "Consultation",
    image: "https://images.unsplash.com/photo-1552058544-f2b084996299?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Excellent hospital and nice person. The 'God of Genes' specialist and for infertility problems.",
    name: "Navaneetha Krishan",
    relation: "Infertility Consultation",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Nice Doctor. Consulted for infertility treatment.",
    name: "Jothianand S.",
    relation: "Infertility Treatment",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  }
];

export const faqs = [
  {
    question: "What is a rare disease?",
    answer: "A rare disease is any disease that affects a small percentage of the population. In India, this is often defined as a condition affecting fewer than 1 in 5,000 people. Many rare diseases are genetic in origin."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by clicking the 'Book Appointment' button on our website, which will open a request form. Alternatively, you can call us at +91 73731 46666 or send us a message on WhatsApp."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring any previous medical records, test results, doctor's referrals, and a list of current medications for the patient. For genetic consultations, a family health history is also very helpful."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer tele-health and virtual consultations for patients who are unable to visit our clinic in person. You can select this preference when you fill out the appointment request form."
  },
  {
    question: "How much does genetic testing cost?",
    answer: "The cost of genetic testing varies widely depending on the type of test required. Our genetic counselors will discuss the options, costs, and any potential insurance coverage with you before proceeding."
  }
];
