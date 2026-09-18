// ==========================================================================
// El Guasimal · Type Definitions
// ==========================================================================

export interface Cemetery {
  name: string;
  tagline: string;
  period: string;
  founded: string;
  rebuilt: string;
  ageAtStudy: string;
  tombsCount: string;
  heroImage: string;
  aboutImage: string;
  aboutLead: string;
  aboutText: string;
  documents: string[];
}

export interface TombSection {
  heading: string;
  paragraphs: string[];
}

export interface TombFacts {
  [key: string]: string;
}

export interface Tomb {
  slug: string;
  image: string;
  id: string;
  title: string;
  years: string;
  style: string;
  brief: string;
  sections: TombSection[];
  facts: TombFacts;
}

export interface Fact {
  k: string;
  v: string;
}

export interface Stat {
  value: string;
  label: string;
}
