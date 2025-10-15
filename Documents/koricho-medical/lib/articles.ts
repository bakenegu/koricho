// Fetch health articles from a free API
export interface Article {
  id: string
  title: string
  description: string
  url: string
  publishedAt: string
  source: {
    name: string
  }
  urlToImage?: string
}

export async function fetchHealthArticles(): Promise<Article[]> {
  // Users can optionally integrate their own API by modifying this function
  return getMockArticles()
}

// Mock articles as fallback
function getMockArticles(): Article[] {
  return [
    {
      id: "1",
      title: "Understanding Diabetes: Prevention and Management",
      description:
        "Learn about the latest approaches to diabetes prevention, early detection, and effective management strategies for better health outcomes.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Health Journal" },
      urlToImage: "/diabetes-health.jpg",
    },
    {
      id: "2",
      title: "The Importance of Vaccination in Public Health",
      description:
        "Explore how vaccines protect communities and prevent the spread of infectious diseases across populations.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Medical News" },
      urlToImage: "/vaccination-medicine.jpg",
    },
    {
      id: "3",
      title: "Mental Health Awareness: Breaking the Stigma",
      description:
        "Understanding mental health conditions and the importance of seeking help and support for psychological well-being.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Health Today" },
      urlToImage: "/mental-health-abstract.png",
    },
    {
      id: "4",
      title: "Nutrition and Wellness: A Comprehensive Guide",
      description:
        "Discover the role of proper nutrition in maintaining health and preventing chronic diseases through balanced diets.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Wellness Magazine" },
      urlToImage: "/healthy-food-collage.png",
    },
    {
      id: "5",
      title: "Cardiovascular Health: Prevention is Key",
      description:
        "Learn about heart disease prevention, risk factors, and lifestyle changes that can improve cardiovascular health.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Heart Health" },
      urlToImage: "/heart-health.png",
    },
    {
      id: "6",
      title: "Antibiotic Resistance: A Growing Concern",
      description:
        "Understanding the challenges of antibiotic resistance and the importance of responsible medication use.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Medical Research" },
      urlToImage: "/antibiotics-medicine.jpg",
    },
    {
      id: "7",
      title: "Maternal and Child Health: Best Practices",
      description:
        "Essential information about prenatal care, child development, and ensuring healthy outcomes for mothers and babies.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Family Health" },
      urlToImage: "/mother-baby-health.jpg",
    },
    {
      id: "8",
      title: "Managing Chronic Pain: Modern Approaches",
      description: "Explore contemporary methods for managing chronic pain conditions and improving quality of life.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Pain Management" },
      urlToImage: "/pain-management.jpg",
    },
    {
      id: "9",
      title: "Sleep Health: Why Quality Rest Matters",
      description:
        "Understanding the importance of sleep for overall health and strategies for improving sleep quality.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Sleep Science" },
      urlToImage: "/sleep-health.png",
    },
    {
      id: "10",
      title: "Infectious Disease Prevention in Communities",
      description:
        "Best practices for preventing the spread of infectious diseases in community settings and healthcare facilities.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Public Health" },
      urlToImage: "/disease-prevention.png",
    },
    {
      id: "11",
      title: "The Role of Exercise in Disease Prevention",
      description:
        "How regular physical activity contributes to preventing chronic diseases and maintaining overall health.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Fitness Health" },
      urlToImage: "/diverse-fitness.png",
    },
    {
      id: "12",
      title: "Healthcare Access in Rural Communities",
      description: "Addressing challenges and solutions for improving healthcare access in underserved rural areas.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: { name: "Rural Health" },
      urlToImage: "/rural-healthcare.jpg",
    },
  ]
}
