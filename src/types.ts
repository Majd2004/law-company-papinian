export type Language = 'ar' | 'en';

export interface PracticeArea {
  id: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  iconName: string;
  category: 'corporate' | 'litigation' | 'international' | 'digital';
  featuresAr: string[];
  featuresEn: string[];
  leadCounselAr: string;
  leadCounselEn: string;
}

export interface TeamMember {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
  experienceYears: number;
  educationAr: string[];
  educationEn: string[];
  image: string;
  email: string;
  linkedin: string;
}

export interface CaseStudy {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  clientSectorAr: string;
  clientSectorEn: string;
  outcomeValueAr: string;
  outcomeValueEn: string;
  summaryAr: string;
  summaryEn: string;
  strategyAr: string[];
  strategyEn: string[];
  year: string;
}

export interface SmartContractTemplate {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  defaultPartyA: string;
  defaultPartyB: string;
  defaultTermsAr: string[];
  defaultTermsEn: string[];
  clauseOptions: { id: string; labelAr: string; labelEn: string; textAr: string; textEn: string }[];
}

export interface LegalArticle {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  readTime: string;
  date: string;
  authorAr: string;
  authorEn: string;
  summaryAr: string;
  summaryEn: string;
  contentAr: string;
  contentEn: string;
  image: string;
  tagsAr: string[];
  tagsEn: string[];
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: 'general' | 'corporate' | 'litigation' | 'fees';
}

export interface OfficeLocation {
  cityAr: string;
  cityEn: string;
  countryAr: string;
  countryEn: string;
  addressAr: string;
  addressEn: string;
  phone: string;
  email: string;
  workingHoursAr: string;
  workingHoursEn: string;
  isHeadquarters?: boolean;
}

export interface SitePlanModule {
  stepNumber: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  icon: string;
  status: string;
}
