import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://nvr-pi.vercel.app";
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // disallow: ["/contact/", "/api/"],
            },
            // {
            //     userAgent: "Googlebot",
            //     allow: "/",
            //     disallow: ["/terms-and-conditions/"],
            // }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}