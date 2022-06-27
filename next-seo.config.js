const title = "Sarmad Gardezi - Freelance Developer";
const description = "Designer, tech enthusiast and entrepreneur of sorts";

const SEO = {
  title,
  description,
  canonical: "https://sarmadgardezi.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sarmadgardezi.com",
    title,
    description,
    images: [
      {
        url: "https://sarmadgardezi.com/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@sarmadgardezi",
    site: "@sarmadgardezi",
    cardType: "summary_large_image",
  },
};

export default SEO;
