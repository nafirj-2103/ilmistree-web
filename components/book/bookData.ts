export interface BookDetail {
  slug: string;
  title: string;
  subject: string;
  className: string;
  cover: string;
  intro: string;
  description: string;
  mainTopics: string[];
  pctbCredit: string;
  educationalPurpose: string;
  copyrightRespect: string;
  removalRequest: string;
  acknowledgement: string;
  pdfUrl: string;
  previewUrl?: string;
  quickAccess: {
    subject: string;
    className: string;
    medium: string;
    board: string;
    format: string;
    fileSize: string;
    syllabus: string;
  };
}

const DEFAULT_PDF =
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export const bookDetails: Record<string, BookDetail> = {
  // TODO: Replace the placeholder PDF URLs with the real textbook links when they are available.
  '9th-class-physics': {
    slug: '9th-class-physics',
    title: '9th Class Physics Text Book PDF',
    subject: 'Physics',
    className: '9th Class',
    cover: '/models/textures/physics.jpg',
    intro:
      'Students can now easily get the 9th-grade physics book in PDF format. This resource helps students go through their chapters at their pace whether they are getting ready for tests or going over key points. This version also helps teachers plan their lessons and materials in the classroom with the 9th-grade physics book.',
    description:
      'This page makes it easy to see and download the Class 9 Physics Textbook PDF. It is the recent PCTB Physics book. It has all the chapters, ideas and exercises in one place. Students can read the 9th-grade physics book online or download the whole PDF to study without being online. When you are getting ready for exams or going over topics, the 9th class Physics book in PDF format is really helpful. It has explanations and you can find what you need quickly, which makes learning easier.\n\nThe Physics book is made by the Punjab Curriculum and Textbook Board. It is for students in this grade. The book is supposed to help you understand the basics of Physics and how they are used in life. We made a version of the book so students can study when they want and where they want. The 9th class Physics book is easy to use and you can take it with you anywhere.',
    mainTopics: [
      'Physical Quantities & Measurements',
      'Kinematics',
      'Dynamics',
      'Turning Effects of Forces',
      'Work, Energy, and Power',
      'Mechanical Properties of Matter',
      'Thermal Properties of Matter',
      'Magnetism',
    ],
    pctbCredit:
      'This Physics textbook has been carefully developed and published under the supervision of the Punjab Curriculum and Textbook Board (PCTB). It follows the officially approved national curriculum and is widely used in schools across Punjab. This digital version is shared to help students easily access their study material and continue learning without any delay.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'Ilmistree fully respects the intellectual property rights of all publishers and content creators. This material is shared here only with the intention of supporting education and is not being used for any commercial activity or unauthorized distribution.',
    removalRequest:
      'If you hold the copyright to this textbook or any part of its content and would like it to be taken down from this platform, we encourage you to reach out to us directly. We take such requests seriously and will act promptly to remove the material upon verification.',
    acknowledgement:
      'We sincerely appreciate the efforts of the Punjab Curriculum and Textbook Board and all associated publishers who work hard to create quality educational content. Their contribution to the learning journey of millions of students is truly valued.',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1xYy8pSLJ_izsnvaI72PczXvpeMJ9rZnI',
    previewUrl: 'https://drive.google.com/file/d/1xYy8pSLJ_izsnvaI72PczXvpeMJ9rZnI/preview',
    quickAccess: {
      subject: 'Physics',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '42.6 MB',
      syllabus: '2025-2026',
    },
  },
  '9th-class-turjuma-tul-quran': {
    slug: '9th-class-turjuma-tul-quran',
    title: '9th Class Turjuma Tul Quran Text Book PDF',
    subject: 'Turjuma Tul Quran',
    className: '9th Class',
    cover: '/models/textures/Quran.jpg',
    intro: `Students who want to study translations in Quran along their regular education, now view and download 9th class turjuma tul quran textbook in digital form. This PDF format allows students to read and reflect on the teachings anytime they want, thus making spiritual learning more accessible and flexible.`,
    description: `Are you looking for a Tarjuma Tul Quran Class 9 Textbook PDF? This page will provide a simple way to read and download the latest PCTB book all at one place. The stress of carrying and managing physical books can be an issue for students and teachers as well, especially when it comes to daily study and revision. That's why this digital version makes it easy – read online or download the complete PDF for quick and convenient access anywhere, anytime.

Grade 9 of the Tarjuma tul Quran Book contains all chapters, translation content, and important concepts in a systematic manner. The digital book has been developed to facilitate the learning of Quranic meanings in an easy and lucid manner, whether you are revising important lessons or preparing for exams, so that the method of studying becomes more smooth and effective.`,
    mainTopics: [
      'تلاوتِ قرآن کے آداب',
      'عمومی ہدایات برائے اساتذۂ کرام',
      'حاصلاتِ تعلیم',
      'سورۃ مریم',
      'سورۃ طٰہٰ',
      'سورۃ الانبیاء',
      'سورۃ الحج',
      'سورۃ الفرقان',
      'سورۃ الشعراء',
      'سورۃ النمل',
      'سورۃ القصص',
      'سورۃ العنکبوت',
      'سورۃ الزمر',
      'سورۃ القمر',
      'سورۃ السجدہ',
      'سورۃ سبا',
      'سورۃ فاطر',
      'سورۃ یٰس',
      'سورۃ الصافات',
      'سورۃ ص',
      'سورۃ الاحقاف',
      'ماڈل پیپر برائے جماعت نہم',
      'رموز و اوقافِ قرآنِ مجید',
      'تصدیقی سرٹیفکیٹ',
    ],
    pctbCredit: `This text book has been prepared under the supervision of Punjab Curriculum and Textbook Board (PCTB) and is according to the approved curriculum. It is used extensively in schools throughout Punjab to help students develop a clear understanding of the teachings of the Quran. This digital copy is provided so that students can readily access their study material and continue learning.`,
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We acknowledge and respect the rights of the original publishers. This content is not being distributed for profit or any unauthorized use. It is presented solely as a learning aid for students enrolled in the Punjab education system.',
    removalRequest:
      'Should the copyright holder of this material wish for it to be removed from our platform, please get in touch with us at your earliest convenience. We will review your request with care and take down the content promptly after confirming ownership.',
    acknowledgement:
      'We extend our gratitude to the PCTB and all scholars involved in preparing this translation textbook. Their dedication to making Quranic education a part of mainstream learning deserves deep respect and recognition.',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=157EhLaNBr6h1XNrF6k2mflsdui9RfYaU',
    previewUrl: 'https://drive.google.com/file/d/157EhLaNBr6h1XNrF6k2mflsdui9RfYaU/preview',
    quickAccess: {
      subject: 'Turjuma Tul Quran',
      className: '9th Class',
      medium: 'Urdu Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '34 MB',
      syllabus: '2025-2026',
    },
  },
  // ... rest of the books unchanged
  '9th-class-islamiat': {
    slug: '9th-class-islamiat',
    title: '9th Class Islamiat Text Book PDF',
    subject: 'Islamiat',
    className: '9th Class',
    cover: '/models/textures/islamiat.jpg',
    intro:
      'Grab the official 9th class Islamiat textbook in PDF format here. This digital edition contains all the chapters that are in the syllabus of Punjab board starting with the basics of Islamic teachings to deep discussions on moral values and historical events. The book can be read by students for daily study as well as for the preparation of exams.',
    description:
      'Looking for Class 9 Islamiyat Textbook PDF? This page is an easy way to read and download the latest PCTB Islamiyat book in one place. Keeping and maintaining physical books can be cumbersome for students and teachers alike, particularly during daily study and revision.So this digital version is a simple and quick way for you ,to read the book online or download the full PDF eBook copies of this book for no cost.\n\nAll the chapters for 9th Class Islamiyat book are included with key concepts and important topics in well organised format. This digital version is built to help students to understand Islamic teachings in a clear and effective method. Whether you are preparing for exams or revising important lessons, this PDF makes learning easier, faster and accessible.',
    mainTopics: [
      'Quran e Majeed o Hadees e Nabvi (S.A.W)',
      'Imaniyat o Ibadaat',
      'Seerat e Nabwi (S.A.W)',
      'Akhlaq o Adaab',
      'Husn e Mamlaat o Masharat',
      'Hidayat k Sarchashme aur Mashaheer e Islam',
      'Islami Taleemat aur Asr e Hazir K Taqaze',
    ],
    pctbCredit:
      'This textbook has been prepared under the supervision of Punjab Curriculum and Textbook Board (PCTB) in respect of approved curriculum. It is extensively used in schools of Punjab to help students gain a clear understanding of Islamic teachings. This is a digital copy to ensure that students have easy access to their study material and can continue their learning without any difficulty.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'Ilmistree honors the rights of all original content creators and publishers. Sharing this textbook digitally is done with good intentions and purely for the benefit of students. No part of this material is being used for monetary gain.',
    removalRequest:
      'If you are the copyright owner or authorized representative and believe this content should not be displayed here, please contact us through our website. We promise to handle your concern respectfully and remove the material as quickly as possible.',
    acknowledgement:
      'A heartfelt thank you to the curriculum developers and educators who created this resource. Their commitment to Islamic education helps shape the character and knowledge of students across the province.',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1kiaCqhXsXuuZ7HAAuXYfjl4_WaBf-ARS',
    previewUrl: 'https://drive.google.com/file/d/1kiaCqhXsXuuZ7HAAuXYfjl4_WaBf-ARS/preview',
    quickAccess: {
      subject: 'Islamiat',
      className: '9th Class',
      medium: 'Urdu Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '23.9 MB',
      syllabus: '2022-2026',
    },
  },
  '9th-class-mathematics': {
    slug: '9th-class-mathematics',
    title: '9th Class Mathematics Text Book PDF',
    subject: 'Mathematics',
    className: '9th Class',
    cover: '/models/textures/MATH.jpg',
    intro:
      'The 9th Class Mathematics textbook is available in PDF format for easy study, rapid revision, and efficient classroom support. Students can review major ideas at any time without carrying physical books thanks to this digital version, that can be downloaded, or read online for convenient learning at home or on the go.',
    description:
      'Looking for the Class 9 Mathematics Textbook PDF? This page provides a simple and reliable way to read and download the latest PCTB Math book in one place. Managing physical books can be difficult for students, especially during daily practice and revision. That’s why this digital edition is a good solution you can either read the book online, or download the complete PDF to get quick access at any time of day anywhere without any fuss.\n\n9th Class Maths book covers all chapters with exercises and key concepts in a well formatted manner. This digital version has been developed for helping students in comprehension of mathematical concepts clearly and in upgrading problem solving skills. This PDF can make the learning process more efficient, structured, and accessible, whether you are preparing for exams or practicing important exercises.',
    mainTopics: [
      'Sets',
      'Real Numbers',
      'Logarithms',
      'Set and Functions',
      'Factorization and Algebraic Manipulation',
      'Linear Equations and Inequalities',
      'Trigonometry',
      'Coordinate Geometry',
      'Logic',
      'Similar Figures',
      'Graphs of Functions',
      'Loci and Construction',
      'Information Handling',
      'Probability',
      'Answers and Glossary',
    ],
    pctbCredit:
      'This textbook is prepared under the supervision of Punjab Curriculum & Textbook Board (PCTB) according to the approved curriculum. It is widely used in schools in Punjab to help students build a strong foundation in Mathematics. This digital copy is provided to ensure that students are able to access their study material conveniently and continue their learning process without any hindrance.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We respect the rights of the original publishers and share this content only for educational assistance.',
    removalRequest:
      'If you are the rights holder and want this material removed, please contact us and we will respond promptly.',
    acknowledgement:
      'We appreciate the efforts of the curriculum developers and educators behind this textbook.',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1IHxM96F221JY3uL4jEIRWQ8NxskXyilF',
    previewUrl: 'https://drive.google.com/file/d/1IHxM96F221JY3uL4jEIRWQ8NxskXyilF/preview',
    quickAccess: {
      subject: 'Mathematics',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '109 MB',
      syllabus: '2025-2026',
    },
  },
  '9th-class-urdu-qawaid-e-insha': {
    slug: '9th-class-urdu-qawaid-e-insha',
    title: '9th Class Urdu Qawaid-e-Insha Text Book PDF',
    subject: 'Urdu Qawaid-e-Insha',
    className: '9th Class',
    cover: '/models/textures/INSHA.jpg',
    intro:
      'Get the Urdu Qawaid-e-Insha textbook for the ninth grade in PDF format to practice grammar and write better. Students\' comprehension of Urdu grammar rules, sentence construction, and effective expression is strengthened by this book. For simple study, review, and improved preparations at any time, you just read it online or download the complete PDF.',
    description:
      'This book is meant to help Class 9 Urdu Qawaid-e-Insha students improve their writing and grammar. It also helps with comprehension.\nThe good thing about this Class 9 Urdu Qawaid-e-Insha book, in PDF format is that Class 9 Urdu Qawaid-e-Insha students do not have to carry heavy books. They can study Class 9 Urdu Qawaid-e-Insha easily.\nThis digital Class 9 Urdu Qawaid-e-Insha textbook has all the chapters and rules of Class 9 Urdu Qawaid-e-Insha that students need. Everything is easy to understand. Well organized in the Class 9 Urdu Qawaid-e-Insha textbook.\n\nThis PDF can be helpful for students as preparation for assessments and practice Urdu on a daily basis, proficiently. It will allow learners review the grammar concepts fast and uses such ideas in the writing tasks immediately. A helpful, accessible resources to enhance your Urdu language skills anywhere, anytime, whether you studying at home or revising for exams.',
    mainTopics: [
      '1. Khat K Hisse, Alqab o Aadaab',
      '2. Lafz, Jumlah, Kalma aur Mehmal',
      '3. Murakab aur Hum Rutba Jumle',
      '4. Kalme Ki Kismen',
      '5. Manqoot Gher Manqoot aur Bhari Huroof',
      '6. Huroof Shamsi o Qamri',
      '7. Isam Ki Qisme',
      '8. Isam Marfa aur Isam Marfa ki Iqsam',
      '9. Isam Nakra aur Isam Nakra Ki Iqsam',
      '10. Isam Ki Qismen',
      '11. Jins aur Adad',
      '12. Fael, Fael Ki Iqsam',
      '13. Ifaal e Maavun',
      '14. Huroof, Huroof Ki Iqsam',
      '15. Mutradif aur Mutazad Alfaz',
      '16. Zu Maani aur Baham Mumasil Alfaz',
      '17. Ramooz e Auqaf',
      '18. Sabqe aur Lahqe',
      '19. Murakabat, Murakabat ki Iqsam',
      '20. Ne aur Ko Ka istamal',
      '21. Talafuz',
      '22. Rozmarrah aur Mahawara, Zarb ul Imsaal',
      '23. Ilm e Biyan',
      '24. Khutoot Navisi',
      '25. Khat likhne K lie Zaroori Baaten',
      '26. Khat K Hisse, Alqab o Aadaab',
      '27. Namune K Chand Khutoot',
      '28. Araiz Naveesi',
      '29. Araiz Naveesi K Lie Hidayat',
      '30. Namune Ki Chand Drakhwasten',
      '31. Raseed Likhna',
      '32. Raseed likhne K lie Lawazmat',
      '33. Namune Ki Chand Raseedaat',
      '34. Mukalma Nigari',
      '35. Namune K Chand Mukalme',
      '36. Kahani Likhna, Chand Zaroori Baaten',
      '37. Namune Ki Chand Kahanian',
      '38. Khake Ki Madad se Kahaniyan Likhna',
      '39. Mazmoon likhna',
      '40. Mazameen Ki Iqsam',
      '41. Chand Mazameen',
      '42. Mazameen K lie Deegar Unwanaat',
      '43. Tafheem Ibarat, Zaroori Baaten',
      '44. Chand Ibaraat, Sawalaat o Jawabaat',
      '45. Mashaq K lie Ibaaraat',
    ],
    pctbCredit:
      'This textbook has been prepared under the supervision of Punjab Curriculum & Textbook Board (PCTB) on the officially approved syllabus. It has been widely adopted by schools in Punjab to help students build their Urdu language skills, including grammar, comprehension and writing proficiency, in a structured and effective way.\nThis digital edition is provided to make learning more accessible and student-friendly. It enables learners to easily access their study material anytime and anywhere, supporting consistent practice and smooth academic preparation without the limitations of carrying physical books.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We fully respect the rights of the original publishers and share this material only for educational use.',
    removalRequest:
      'If you own this content and want it removed, please contact us for prompt action.',
    acknowledgement:
      'We acknowledge the contribution of the authors, educators, and curriculum board.',
    pdfUrl:
      'https://drive.usercontent.google.com/u/0/uc?id=18jrYqapYhunZykdWTX4Yl5js8RtCk2Bq&export=download&authuser=0',
    previewUrl:
      'https://drive.usercontent.google.com/u/0/uc?id=18jrYqapYhunZykdWTX4Yl5js8RtCk2Bq&export=download&authuser=0',
    quickAccess: {
      subject: 'Urdu Qawaid-e-Insha',
      className: '9-10 Class',
      medium: 'Urdu Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '125 MB',
      syllabus: '2023-2024',
    },
  },
  '9th-class-biology': {
    slug: '9th-class-biology',
    title: '9th Class Biology Text Book PDF',
    subject: 'Biology',
    className: '9th Class',
    cover: '/models/textures/BIOLOGY.jpg',
    intro:
      'Download Class 9 Biology Textbook PDF to learn and understand important concepts of Biology in a simple way. This digital edition makes it easy for students by finding out topics related to living things, human body systems, plants, animals, and the scientific process. The book is available online or the full PDF is downloadable for easy access at any time.',
    description:
      'This Biology book has been specially created to strengthen the conceptual knowledge of 9th grade students and that would boost their knowledge of science through detailed explanations, diagrams and exercises. The PDF version makes studying more flexible and accessible so students may learn without having to carrying around heavy physical textbooks. All chapters are ordered fully for more efficient revision, practice and exam preparation.\n\nFor everyday study, rapid revision, and board exam and assessment preparation, this digital textbook is very helpful. At home or elsewhere, students can more readily examine key biology topics and comprehend scientific ideas. This PDF resource offers an easy and dependable approach to continue learning at any time, whether you\'re reviewing important chapters or getting ready for exams.',
    mainTopics: ['The Science Of Biology', 'BIODIVERSITY', 'The Cell', 'Cell Cycle','Tissues,Organs and Organ Systems','Enzymes','Bioenergetics','Plant physiology','Reproduction in Plants','Glossary'],
    pctbCredit:
      'This textbook has been written under the supervision of Punjab Curriculum & Textbook Board (PCTB) on the officially approved syllabus. It has been widely adopted by schools in Punjab to help students build their Urdu language skills, including grammar, comprehension and writing proficiency, in a structured and effective way.\n\nThe digital edition is offered to make learning more convenient and accessible for the students. This gives students easy access to their study materials over the internet, enabling them to keep pace with their academic preparation, revision, and practice without the limitations of carrying printed books around.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We respect the intellectual property rights of all publishers and authors.',
    removalRequest:
      'If removal is requested by the copyright owner, we will act quickly after verification.',
    acknowledgement:
      'We sincerely value the efforts of the textbook authors and curriculum developers.',
       pdfUrl:'https://drive.google.com/uc?export=download&id=1I9F9tqWqaGBndZSR3DzyaBtsG1ImpU5l',
       previewUrl:'https://drive.google.com/file/d/1I9F9tqWqaGBndZSR3DzyaBtsG1ImpU5l/preview',
    quickAccess: {
      subject: 'Biology',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '30 MB',
      syllabus: '2025-2026',
    },
  },
  '9th-class-computer-science': {
    slug: '9th-class-computer-science',
    title: '9th Class Computer Science Text Book PDF',
    subject: 'Computer Science',
    className: '9th Class',
    cover: '/models/textures/COMPUTER.jpg',
    intro:
      'Read and download the 9th class Computer Science textbook in PDF format for easier digital learning.',
    description:
      'This page provides the Class 9 Computer Science textbook in PDF form. Students can use it to study core concepts, revise lessons, and prepare for tests.\n\nThe digital copy makes course material available anytime and anywhere.',
    mainTopics: [
      'Computer Systems',
      'Problem Solving',
      'Programming Basics',
      'Information Technology',
    ],
    pctbCredit:
      'This Computer Science textbook follows the official Punjab Curriculum and Textbook Board (PCTB) syllabus.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We respect the rights of publishers and share this content only for non-commercial educational use.',
    removalRequest:
      'Copyright holders may contact us to request removal, and we will respond promptly.',
    acknowledgement:
      'We appreciate the educators and authors who developed this educational resource.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Computer Science',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: '2025-2026',
    },
  },
  '9th-class-english-grammar': {
    slug: '9th-class-english-grammar',
    title: '9th Class English Grammar Text Book PDF',
    subject: 'English Grammar',
    className: '9th Class',
    cover: '/models/textures/ENG GRAMER.jpg',
    intro:
      'Use the 9th class English Grammar textbook PDF to improve grammar, comprehension, and writing skills.',
    description:
      'This page offers the Class 9 English Grammar textbook in digital PDF format. Students can read it online or download it for practice and revision.\n\nIt is a convenient way to keep English study material available at all times.',
    mainTopics: ['Parts of Speech', 'Tenses', 'Sentence Structure', 'Comprehension'],
    pctbCredit:
      'This English Grammar resource follows the approved Punjab Curriculum and Textbook Board (PCTB) pattern.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We respect all content rights and provide this material only for educational assistance.',
    removalRequest:
      'Rights holders can contact us for removal and we will handle the request responsibly.',
    acknowledgement:
      'We thank the authors and educators involved in preparing this learning resource.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'English Grammar',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: '2025-2026',
    },
  },
  '9th-class-urdu': {
    slug: '9th-class-urdu',
    title: '9th Class Urdu Text Book PDF',
    subject: 'Urdu',
    className: '9th Class',
    cover: '/models/textures/URDU.jpg',
    intro:
      'Open and study the 9th class Urdu textbook in PDF format for poetry, prose, and language learning.',
    description:
      'This page makes the Class 9 Urdu textbook available in digital PDF form. Students can use it for lesson study, revision, and regular reading.\n\nThis soft copy makes Urdu study more accessible and easy to manage.',
    mainTopics: ['نظم', 'نثر', 'غزل', 'فہم و ادراک'],
    pctbCredit:
      'This Urdu textbook is prepared in line with the Punjab Curriculum and Textbook Board (PCTB) syllabus.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'We respect the rights of publishers and content creators and do not use this material commercially.',
    removalRequest:
      'If the rightful owner requests removal, we will review and remove the content quickly.',
    acknowledgement:
      'We appreciate the work of the educators and authors who created this textbook.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Urdu',
      className: '9th Class',
      medium: 'Urdu Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: '2025-2026',
    },
  },
};

