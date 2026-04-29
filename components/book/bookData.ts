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
      'The content available on this page is shared entirely for learning and academic support. Our goal is to bridge the gap between students and their course material so that no learner has to struggle finding the books they need for their studies.',
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
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-turjuma-tul-quran': {
    slug: '9th-class-turjuma-tul-quran',
    title: '9th Class Turjuma Tul Quran Text Book PDF',
    subject: 'Turjuma Tul Quran',
    className: '9th Class',
    cover: '/models/textures/Quran.jpg',
    intro:
      'The 9th class Turjuma Tul Quran textbook is now available in digital format for students who wish to study Quranic translation alongside their regular curriculum. This PDF version allows students to read and reflect on the teachings at any time, making spiritual learning more accessible and flexible.',
    description:
      'Turjuma Tul Quran Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Quranic Verses & Translations',
      'Islamic Teachings & Ethics',
      'Historical Context of Revelations',
      'Practical Application of Quranic Wisdom'
    ],
    pctbCredit:
      'This book is part of the official course material published by the Punjab Curriculum and Textbook Board (PCTB). It covers selected Quranic verses along with their Urdu translations as prescribed in the Punjab educational syllabus. The digital copy is shared here to ensure students have convenient access to their required reading.',
    educationalPurpose:
      'This resource is provided purely for educational and spiritual learning purposes. Our intention is to support students in understanding Quranic teachings as part of their academic journey and personal growth.',
    copyrightRespect:
      'We acknowledge and respect the rights of the original publishers. This content is not being distributed for profit or any unauthorized use. It is presented solely as a learning aid for students enrolled in the Punjab education system.',
    removalRequest:
      'Should the copyright holder of this material wish for it to be removed from our platform, please get in touch with us at your earliest convenience. We will review your request with care and take down the content promptly after confirming ownership.',
    acknowledgement:
      'We extend our gratitude to the PCTB and all scholars involved in preparing this translation textbook. Their dedication to making Quranic education a part of mainstream learning deserves deep respect and recognition.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Turjuma Tul Quran',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-islamiat': {
    slug: '9th-class-islamiat',
    title: '9th Class Islamiat Text Book PDF',
    subject: 'Islamiat',
    className: '9th Class',
    cover: '/models/textures/islamiat.jpg',
    intro:
      'Access the official 9th class Islamiat textbook in PDF format right here. This digital version covers all the chapters included in the Punjab board syllabus, from the basics of Islamic teachings to detailed discussions on moral values and historical events. Students can use this book for daily study and exam preparation alike.',
    description:
      'Islamiat Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Islamic Principles & Beliefs',
      'Pillars of Islam',
      'Islamic History & Civilization',
      'Moral Character & Ethics'
    ],
    pctbCredit:
      'The Islamiat textbook for 9th class is published by the Punjab Curriculum and Textbook Board (PCTB) as a core subject resource. It is designed to educate students about Islamic principles, ethics, and history in a structured manner. This digital version is being shared to help students access their course material with ease.',
    educationalPurpose:
      'Every piece of content on this page serves an educational purpose. The aim is to make sure students can study their Islamiat lessons without any hurdles, whether they are at home, in a library, or on the go.',
    copyrightRespect:
      'Ilmistree honors the rights of all original content creators and publishers. Sharing this textbook digitally is done with good intentions and purely for the benefit of students. No part of this material is being used for monetary gain.',
    removalRequest:
      'If you are the copyright owner or authorized representative and believe this content should not be displayed here, please contact us through our website. We promise to handle your concern respectfully and remove the material as quickly as possible.',
    acknowledgement:
      'A heartfelt thank you to the curriculum developers and educators who created this resource. Their commitment to Islamic education helps shape the character and knowledge of students across the province.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Islamiat',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-mathematics': {
    slug: '9th-class-mathematics',
    title: '9th Class Mathematics Text Book PDF',
    subject: 'Mathematics',
    className: '9th Class',
    cover: '/models/textures/MATH.jpg',
    intro:
      'The 9th class Mathematics textbook is available here in a clean and readable PDF format. This book covers all essential topics including algebra, geometry, trigonometry, and data handling as laid out in the Punjab board curriculum. Whether you are solving practice problems or revising formulas before exams, this digital copy has you covered.',
    description:
      'Mathematics Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Algebra & Equations',
      'Geometry & Shapes',
      'Trigonometry Basics',
      'Data Handling & Statistics'
    ],
    pctbCredit:
      'Published by the Punjab Curriculum and Textbook Board (PCTB), this Mathematics textbook is the standard reference used in government and private schools across Punjab. We are making it available in digital form so that every student can have quick and easy access to the material they need for academic success.',
    educationalPurpose:
      'This content is shared with the single aim of helping students learn and practice mathematics more effectively. We believe that easy access to textbooks can make a meaningful difference in a student\'s academic performance and confidence.',
    copyrightRespect:
      'We deeply respect the work that goes into creating educational textbooks. This material is not being used for any commercial purpose. It is shared here solely to support learners who need convenient access to their study books.',
    removalRequest:
      'In case the rightful owner of this content prefers that it should not appear on this website, we welcome you to contact us. We will take your request seriously and ensure the content is removed within a reasonable timeframe.',
    acknowledgement:
      'We are thankful to the mathematicians, educators, and the PCTB team who developed this textbook. Their hard work helps thousands of students build strong foundations in mathematics every year.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Mathematics',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-urdu-qawaid-o-insha': {
    slug: '9th-class-urdu-qawaid-o-insha',
    title: '9th Class Urdu Qawaid o Insha Text Book PDF',
    subject: 'Urdu Qawaid o Insha',
    className: '9th Class',
    cover: '/models/textures/INSHA.jpg',
    intro:
      'Here you can find the 9th class Urdu Qawaid o Insha textbook in a digital PDF version. This book focuses on Urdu grammar rules and essay writing skills that are essential for students studying under the Punjab board. The digital format makes it simple to read and refer to chapters whenever needed.',
    description:
      'Urdu Qawaid o Insha Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Urdu Grammar Rules',
      'Letter Writing Techniques',
      'Essay Composition',
      'Vocabulary & Expression'
    ],
    pctbCredit:
      'This Urdu language textbook is officially produced by the Punjab Curriculum and Textbook Board (PCTB). It includes comprehensive lessons on grammar structure, letter writing, and creative composition as per the approved syllabus. We share this copy so that students can easily study their Urdu course material online.',
    educationalPurpose:
      'All resources shared on this page are meant exclusively for educational use. Our purpose is to make learning Urdu grammar and writing skills more approachable for students who may not always have physical books available.',
    copyrightRespect:
      'We value and respect the creative work of the publishers and writers behind this textbook. No part of this content is being used to generate revenue or to infringe on any intellectual property rights.',
    removalRequest:
      'If you own the rights to this material and would like it removed, please do not hesitate to reach out to our team. We are committed to honoring such requests and will take prompt action upon receiving your communication.',
    acknowledgement:
      'We appreciate the linguists and curriculum experts at PCTB who crafted this textbook. Their efforts play an important role in preserving and promoting Urdu language skills among the younger generation.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Urdu Qawaid o Insha',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-biology': {
    slug: '9th-class-biology',
    title: '9th Class Biology Text Book PDF',
    subject: 'Biology',
    className: '9th Class',
    cover: '/models/textures/BIOLOGY.jpg',
    intro:
      'The complete 9th class Biology textbook is available for students in a downloadable PDF format. This book explores topics ranging from cell biology and genetics to ecology and human physiology, all aligned with the Punjab board syllabus. Students can use this resource for detailed study and quick revision of biological concepts.',
    description:
      'Biology Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Cell Structure & Functions',
      'Genetics & Heredity',
      'Human Body Systems',
      'Ecology & Environment'
    ],
    pctbCredit:
      'This Biology textbook is an official publication of the Punjab Curriculum and Textbook Board (PCTB). It is carefully written to match the learning outcomes defined in the national curriculum framework. By sharing this digital version, we aim to help students access their science material without any difficulty.',
    educationalPurpose:
      'The material on this page exists to serve students and educators in their academic efforts. We share these resources because we believe that every student deserves easy and free access to quality educational content.',
    copyrightRespect:
      'Ilmistree fully recognizes the hard work and creativity of all involved in producing this textbook. This content is not for sale or unauthorized reproduction. It is presented here as a free educational resource for learners.',
    removalRequest:
      'Should any copyright holder want their content removed from this platform, we respectfully ask them to contact us first. We value open communication and will address every request with sincerity and speed.',
    acknowledgement:
      'A special thanks to the scientists, authors, and the PCTB board members whose collaborative efforts bring quality biology education to classrooms across Punjab.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Biology',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-computer-science': {
    slug: '9th-class-computer-science',
    title: '9th Class Computer Science Text Book PDF',
    subject: 'Computer Science',
    className: '9th Class',
    cover: '/models/textures/COMPUTER.jpg',
    intro:
      'Download the Grade 9th computer science textbook in PDF format, so you can read and study it easily. This book teaches students the basics of computers, programming logic, hardware, and software. It is a must-have for anyone who wants to learn the basics of information technology.',
    description:
      'You can quickly preview and download the Computer Textbook PDF for Class 9 online. This page has the most recent PCTB Computer Science book, which includes all of the chapters, ideas, and exercises in one place. Students can read the textbook online or download the whole PDF and study it later. This 9th grade computer book PDF makes it easy to get to, has clear content, and makes learning easy, whether you\'re studying for an exam or going over important topics.\n\nThe Punjab Curriculum and Textbook Board (PCTB) wrote this Computer Science book, which is part of the Grade 9th curriculum. It is written to help students learn about modern computers in both theory and practice. This digital copy is shared here so that students can study from any location.',
    mainTopics: [
      'Number Systems',
       'Digital Systems and Logic Design',
        'Software and System',
         'Introducion to Computer Networks',
          'Computational Thinking',
           'Data Science and Data Gathering',
            'Emerging Technologies in Computer Science',
             'Ethical, Social, and Legal Concerns in Computer Usage',
              'Enterpreneurship in Digital Age',
      
    ],
    pctbCredit:
      'This textbook is for Grade 9th Computer Science in 2026. This book is based on a new syllabus that is published by the Punjab Curriculum and Textbook Board (PCTB). There are new chapters and topics that are interconnected to what students need to learn right now. Students can easily read the soft copy online or download it using the links below.',
    educationalPurpose:
      'The only reason we have this book on our site is to help people learn. We want to give students the resources they need to learn about computers and do well on their tests.',
    copyrightRespect:
      'We have great respect for the intellectual property of all publishers and authors. This material is available here only as a free learning resource and is not being used for any commercial benefit whatsoever.',
    removalRequest:
      'If you are the rightful owner of this content and prefer it not to be available here, kindly reach out to us. We commit to reviewing your request carefully and removing the material as soon as possible after confirmation.',
    acknowledgement:
      'We are grateful to the technology educators and the PCTB team who developed this textbook. Their work equips students with essential digital skills that are increasingly important in today\'s world.',
    pdfUrl:
      'https://drive.google.com/uc?export=download&id=1YQNpbrn0gTJddb2mB7bAZJBiH8iqJ0cW',
    previewUrl:
      'https://drive.google.com/file/d/1YQNpbrn0gTJddb2mB7bAZJBiH8iqJ0cW/preview',
    quickAccess: {
      subject: 'Computer Science',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-english-grammar': {
    slug: '9th-class-english-grammar',
    title: '9th Class English Grammar Text Book PDF',
    subject: 'English Grammar',
    className: '9th Class',
    cover: '/models/textures/ENG GRAMER.jpg',
    intro:
      'The 9th class English Grammar textbook is now available as a PDF download for students. This book covers key grammar topics including tenses, sentence structure, active and passive voice, direct and indirect speech, and more. It is a valuable companion for anyone aiming to strengthen their English language skills.',
    description:
      'English Grammar Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Parts of Speech & Usage',
      'Tense Forms & Applications',
      'Sentence Structure & Composition',
      'Active & Passive Voice'
    ],
    pctbCredit:
      'This English Grammar textbook is officially published by the Punjab Curriculum and Textbook Board (PCTB) as part of the 9th class English language course. The content follows the national curriculum standards and is widely used in schools throughout Punjab. We share this PDF to help students access their grammar lessons with convenience.',
    educationalPurpose:
      'Everything shared on this page is for educational purposes only. We aim to help students improve their English grammar skills by making their course textbook readily available in a digital format that they can access anytime.',
    copyrightRespect:
      'We acknowledge the effort and expertise that went into creating this textbook. Ilmistree does not use this material for any commercial or unauthorized purpose. It is shared purely as a study aid for students.',
    removalRequest:
      'If you hold the copyright for this book and wish for it to be removed from our site, please contact us before taking any formal steps. We assure you that your request will be handled professionally and the material will be taken down upon confirmation.',
    acknowledgement:
      'Our thanks go out to the English language experts and the PCTB publishing team who made this textbook possible. Their dedication to quality education helps students across Punjab develop strong communication skills.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'English Grammar',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  },
  '9th-class-urdu': {
    slug: '9th-class-urdu',
    title: '9th Class Urdu Text Book PDF',
    subject: 'Urdu',
    className: '9th Class',
    cover: '/models/textures/URDU.jpg',
    intro:
      'Download or view the 9th class Urdu textbook in PDF format. This book includes poetry, prose, and literary selections that are part of the Punjab board curriculum for Urdu language. It helps students develop a deeper appreciation for Urdu literature while building their reading and comprehension abilities.',
    description:
      'Urdu Class 9th Updated Textbook 2025. This book is based on the latest syllabus issued by the Punjab Curriculum and Textbook Board (PCTB). It includes updated topics and chapters according to the current academic requirements. Students can easily read the soft copy online or download it using the links provided below.',
    mainTopics: [
      'Classical & Modern Poetry',
      'Prose & Literary Selections',
      'Urdu Comprehension Skills',
      'Literature Analysis & Appreciation'
    ],
    pctbCredit:
      'Published by the Punjab Curriculum and Textbook Board (PCTB), this Urdu textbook is the official course material prescribed for 9th class students in Punjab. It contains carefully selected literary works and exercises. We are providing this digital copy to ensure students have uninterrupted access to their study resources.',
    educationalPurpose:
      'This resource is made available strictly for academic and learning purposes. Our mission is to help every student access their Urdu textbook easily, especially those who may face challenges in obtaining physical copies.',
    copyrightRespect:
      'We respect the literary and intellectual property of all authors and publishers involved in this textbook. No commercial use is being made of this content. It is shared here as a free educational aid for students.',
    removalRequest:
      'If the copyright owner of this material wishes for it to be removed, we kindly request them to get in touch with our team. We will process the request with full respect and remove the content as soon as we can verify the claim.',
    acknowledgement:
      'We are truly grateful to the Urdu scholars, poets, and the PCTB team who put together this wonderful textbook. Their contribution keeps the rich tradition of Urdu literature alive among the new generation of learners.',
    pdfUrl: DEFAULT_PDF,
    quickAccess: {
      subject: 'Urdu',
      className: '9th Class',
      medium: 'English Medium',
      board: 'Punjab Board',
      format: 'PDF',
      fileSize: '54.6 MB',
      syllabus: 'Current 2026',
    },
  }
};
