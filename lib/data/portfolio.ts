export const portfolioCategories = ["All", "Web", "Mobile"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  image: string;
  tags: string[];
  result: string;
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [];
