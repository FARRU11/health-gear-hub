import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: object;
};

export const SEO = ({ title, description, canonical, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) ensureMeta("description", description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let ldEl = document.getElementById("structured-data-json-ld");
    if (!ldEl) {
      ldEl = document.createElement("script");
      ldEl.setAttribute("type", "application/ld+json");
      ldEl.id = "structured-data-json-ld";
      document.head.appendChild(ldEl);
    }
    (ldEl as HTMLScriptElement).text = jsonLd ? JSON.stringify(jsonLd) : "";
  }, [title, description, canonical, jsonLd]);

  return null;
};
