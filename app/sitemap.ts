import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hayot-kalkulyatori.uz';

  const calculators = [
    'calculators/financial/salary-tax',
    'calculators/financial/loan',
    'calculators/financial/investment',
    'calculators/financial/mortgage',
    'calculators/financial/currency-profit',
    'calculators/financial/compound-interest',
    'calculators/financial/retirement',
    'calculators/financial/fire',
    'calculators/health/bmi',
    'calculators/health/calories-burned',
    'calculators/health/ideal-weight',
    'calculators/health/water-intake',
    'calculators/health/sleep-quality',
    'calculators/health/life-expectancy',
    'calculators/health/calorie-calculator',
    'calculators/health/heart-rate',
    'calculators/life/life-time',
    'calculators/life/age',
    'calculators/life/work-hours',
    'calculators/life/screen-time',
    'calculators/life/weekends-left',
    'calculators/life/reading-time',
    'calculators/life/commute-time',
    'calculators/life/life-report',
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...calculators.map((calc) => ({
      url: `${baseUrl}/${calc}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
