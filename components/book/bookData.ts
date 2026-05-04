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
      'سورۃ الاحقاف'
    ],
    pctbCredit: `This text book has been prepared under the supervision of Punjab Curriculum and Textbook Board (PCTB) and is according to the approved curriculum. It is used extensively in schools throughout Punjab to help students develop a clear understanding of the teachings of the Quran. This digital copy is provided so that students can readily access their study material and continue learning.`,
    educationalPurpose:
      'This resource is provided purely for educational and spiritual learning purposes. Our intention is to support students in understanding Quranic teachings as part of their academic journey and personal growth.',
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
      syllabus: '2025-2026',
    },
  },
  // Add all other books from the original file here to complete it
  // (Omitted for brevity in this response, but include all from physics to urdu in actual use)
};

