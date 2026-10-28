/**
 * DAMAYANTI CREST — Central Ecosystem Data
 * 
 * This file serves as the single source of truth for ecosystem details,
 * divisions, initiatives, products, availability statuses, and contact details.
 * 
 * Edit this file to update brand information, add new products, or change release statuses.
 */

const DAMAYANTI_DATA = {
  company: {
    name: 'Damayanti Crest',
    tagline: 'Many Ideas. One Vision.',
    positioning: 'An independent business ecosystem bringing together technology, heritage, publications, and traditions.',
    supportingMessage: 'Building digital experiences, sharing cultural knowledge, publishing ideas, and creating products inspired by tradition.',
    email: 'damayati.crest@gmail.com',
    preferredDomain: 'damayanticrest.online', // Domain preference (configured when acquired)
    isDomainLive: false,
    githubRepo: 'https://github.com/damayanti-technologies/damayanti-crest'
  },

  principles: [
    {
      title: 'Purposeful Creation',
      description: 'Focusing on genuine utility, thoughtful craftsmanship, and lasting value across digital and physical creations.'
    },
    {
      title: 'Respect for Heritage',
      description: 'Honoring linguistic richness, classical literature, artistic forms, and cultural wisdom from enduring traditions.'
    },
    {
      title: 'Continuous Learning',
      description: 'Fostering intellectual curiosity, methodical experimentation, and constant refinement across every initiative.'
    },
    {
      title: 'Thoughtful Growth',
      description: 'Nurturing independent initiatives with patient discipline, long-term stewardship, and authentic purpose.'
    }
  ],

  values: [
    { name: 'Integrity', description: 'Honesty and transparency in every statement, project status, and professional relationship.' },
    { name: 'Curiosity', description: 'A persistent desire to explore new ideas, learn new technologies, and understand traditions.' },
    { name: 'Cultural Respect', description: 'Deep reverence for classical languages, arts, historical contexts, and community heritage.' },
    { name: 'Quality', description: 'High standards of design, usability, writing, and material finish across every output.' },
    { name: 'Accessibility', description: 'Designing experiences and content that remain approachable, inclusive, and practical.' },
    { name: 'Continuous Improvement', description: 'Iterative refinement and humble dedication to lifelong progress.' }
  ],

  divisions: [
    {
      id: 'damayanti-technologies',
      name: 'Damayanti Technologies',
      shortName: 'Technologies',
      icon: 'assets/icons/tech.svg',
      summary: 'Developing digital products, software, and practical technology experiences.',
      detailedDescription: 'Focused on creating thoughtful software tools, web applications, and digital utilities that solve practical challenges with speed, simplicity, and refined user experience.',
      areasOfActivity: [
        'Web & Desktop Applications',
        'Developer & Everyday Utilities',
        'Interactive & Game Experiences',
        'Digital Productivity Tools'
      ],
      associatedProjects: ['sandarshana', 'sanket-qr', 'arrout']
    },
    {
      id: 'damayanti-heritage',
      name: 'Damayanti Heritage',
      shortName: 'Heritage',
      icon: 'assets/icons/heritage.svg',
      summary: 'Sharing language, literature, history, culture, and traditional knowledge.',
      detailedDescription: 'Dedicated to documenting, illuminating, and sharing classical and regional cultural heritage, with a special emphasis on Telugu language, literature, historical knowledge, and educational materials.',
      areasOfActivity: [
        'Telugu Language & Literature',
        'Historical Knowledge & Documentation',
        'Cultural Education & Learning Modules',
        'Traditional Philosophy & Arts'
      ],
      associatedInitiative: {
        name: 'Sannivesham',
        focus: 'Telugu Language, Culture, Literature & History',
        description: 'An independent initiative focused on Telugu language, culture, literature, history, traditional knowledge, and educational cultural content.',
        url: null, // Keep null until verified official link is supplied
        status: 'In Development'
      }
    },
    {
      id: 'damayanti-publications',
      name: 'Damayanti Publications',
      shortName: 'Publications',
      icon: 'assets/icons/publications.svg',
      summary: 'Creating and developing books, educational materials, and written content.',
      detailedDescription: 'A dedicated publishing imprint designed to produce thoughtful printed books, digital essays, language learning guides, cultural documentation, and scholarly literature.',
      areasOfActivity: [
        'Printed Books & Monographs',
        'Educational & Language Guides',
        'Digital Essays & Anthologies',
        'Cultural & Literary Publications'
      ],
      publicationsNote: 'Publications will be introduced here as they become available.'
    },
    {
      id: 'damayanti-traditions',
      name: 'Damayanti Traditions',
      shortName: 'Traditions',
      icon: 'assets/icons/traditions.svg',
      summary: 'Exploring traditional crafts, devotional merchandise, cultural gifts, and products inspired by heritage.',
      detailedDescription: 'A creative division focused on conceptualizing tangible objects, artifacts, and gifts that bring the beauty, symbolism, and serenity of traditional arts into modern living spaces.',
      plannedCategories: [
        'Cultural & Calligraphy Stickers',
        'Heritage Fridge Magnets',
        'Devotional & Sacred Art Idols',
        'Handcrafted Folk Art',
        'Artisanal Cultural Gifts',
        'Heritage-Inspired Lifestyle Goods'
      ]
    }
  ],

  /**
   * Product & Initiative Catalogue
   * 
   * Status values: 'In Development' | 'Available' | 'Coming Soon' | 'Archived'
   * Note: Only set url to a non-null string if an official verified destination exists.
   */
  products: [
    {
      id: 'sandarshana',
      name: 'SANDARSHANA',
      divisionId: 'damayanti-technologies',
      divisionName: 'Damayanti Technologies',
      category: 'Technology',
      subCategory: 'Web Browser',
      description: 'A browser project focused on providing a practical, focused, and intuitive web browsing experience.',
      status: 'In Development',
      url: null,
      ctaLabel: 'More details coming soon',
      icon: 'assets/icons/tech.svg'
    },
    {
      id: 'sanket-qr',
      name: 'SANKET QR',
      divisionId: 'damayanti-technologies',
      divisionName: 'Damayanti Technologies',
      category: 'Technology',
      subCategory: 'Utility Application',
      description: 'A QR code application project for creating, scanning, and working with QR codes efficiently.',
      status: 'In Development',
      url: null,
      ctaLabel: 'More details coming soon',
      icon: 'assets/icons/tech.svg'
    },
    {
      id: 'arrout',
      name: 'ARROUT',
      divisionId: 'damayanti-technologies',
      divisionName: 'Damayanti Technologies',
      category: 'Technology',
      subCategory: 'Game Project',
      description: 'A game project within the Damayanti Technologies ecosystem exploring engaging interactive mechanics.',
      status: 'In Development',
      url: null,
      ctaLabel: 'More details coming soon',
      icon: 'assets/icons/tech.svg'
    },
    {
      id: 'sannivesham',
      name: 'Sannivesham',
      divisionId: 'damayanti-heritage',
      divisionName: 'Damayanti Heritage',
      category: 'Heritage & Education',
      subCategory: 'Cultural Initiative',
      description: 'An independent initiative focused on Telugu language, culture, literature, history, traditional knowledge, and educational cultural content.',
      status: 'In Development',
      url: null,
      ctaLabel: 'More details coming soon',
      icon: 'assets/icons/heritage.svg'
    }
  ],

  /**
   * Planned Product Categories for Divisions
   */
  traditionsCategories: [
    { name: 'Stickers', description: 'Artistic stickers featuring traditional typography, cultural motifs, and emblems.' },
    { name: 'Fridge Magnets', description: 'Cast and printed magnets celebrating historical architecture and heritage symbols.' },
    { name: 'Devotional Idols', description: 'Sculpted devotional pieces crafted with reverence for traditional proportions.' },
    { name: 'Traditional Crafts', description: 'Curated artisanal items honoring authentic regional craft traditions.' },
    { name: 'Cultural Gifts', description: 'Thoughtfully packaged commemorative sets suitable for celebratory occasions.' },
    { name: 'Heritage Merchandise', description: 'Everyday physical items tastefully accented with classical heritage design.' }
  ]
};

// Freeze object in runtime to prevent accidental modification
if (typeof Object.freeze === 'function') {
  Object.freeze(DAMAYANTI_DATA);
}
