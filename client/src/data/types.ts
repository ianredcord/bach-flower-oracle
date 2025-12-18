export interface Remedy {
  id: number;
  name_en: string;
  name_zh: string;
  category: string;
  emotion: string;
  positive: string;
  positive_traits?: string; // Optional as it might not be in all data
}

export interface Category {
  id: string;
  name_zh: string;
  name_en: string;
}

export interface RemediesData {
  categories: Category[];
  remedies: Remedy[];
}
