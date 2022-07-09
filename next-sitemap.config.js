const siteUrl = "https://sarmadgardezi.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap/sitemap-index.xml`,
    ],
  },
  exclude: ["/secret"],
};