import { ENTITIES } from '../data/entities'

export function buildBreadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${ENTITIES.domain}${item.path}`,
    })),
  }
}

export function buildWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${ENTITIES.softwareName} - ${ENTITIES.softwareType}`,
    url: ENTITIES.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${ENTITIES.domain}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildFAQPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function buildArticle({ headline, description, datePublished, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: { '@type': 'Organization', name: ENTITIES.organization },
    publisher: {
      '@type': 'Organization',
      name: ENTITIES.organization,
      logo: { '@type': 'ImageObject', url: `${ENTITIES.domain}/favicon.png` },
    },
    datePublished,
    dateModified: datePublished,
    image: image || `${ENTITIES.domain}/og-image.png`,
  }
}
