/**
 * WEBSITE CONFIGURATION
 * Replace null with verified links; never publish placeholder contact details.
 * Example: email: 'your.name@university.edu'
 */
const profile = {
  email: null,
  googleScholar: null,
  orcid: null,
  linkedin: null,
  github: null,
  cvPdf: null
};

/**
 * Selected research outputs. Verify final publication metadata before publishing.
 * For the TMLCN item, add its exact title, year and DOI when confirmed.
 */
const publications = [
  {
    venue: 'IEEE ICCCN Â· 2026',
    title: 'Multi-View GAN-Based Intrusion Detection with Temporal Reconstruction and Class-Aware Feature Balancing',
    details: 'IEEE International Conference on Computer Communications and Networks (ICCCN)',
    url: null
  },
  {
    venue: 'IEEE ICC Â· 2026',
    title: 'LIME: Lightweight Multi-head Early-exit Transformer for Network Intrusion Detection',
    details: 'IEEE International Conference on Communications (ICC)',
    url: null
  },
  {
    venue: 'IEEE GLOBECOM Â· 2025',
    title: 'AE-Multi-WGAN: A Robust Multi-Attack Detection IDS for Imbalanced Datasets',
    details: 'IEEE Global Communications Conference (GLOBECOM), pp. 1065â€“1070',
    url: null
  },
  {
    venue: 'IEEE TMLCN Â· JOURNAL',
    title: 'Research publication in IEEE Transactions on Machine Learning in Communications and Networking',
    details: 'Add the exact article title, publication year, and DOI after verification.',
    url: null
  }
];

const publicationList = document.querySelector('#publication-list');
publications.forEach(item => {
  const article = document.createElement('article');
  article.className = 'publication reveal';
  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = item.venue;
  const content = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = item.title;
  const details = document.createElement('p');
  details.textContent = item.details;
  content.append(title, details);
  const link = document.createElement(item.url ? 'a' : 'span');
  link.className = 'pub-link' + (item.url ? '' : ' disabled');
  link.textContent = item.url ? 'â†—' : 'â€”';
  if (item.url) { link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', 'Open publication: ' + item.title); }
  else { link.title = 'Publication link not yet configured'; }
  article.append(venue, content, link);
  publicationList.append(article);
});

const emailLink = document.querySelector('#email-link');
if (profile.email) { emailLink.href = 'mailto:' + profile.email; }
else { emailLink.textContent = 'Email to be added'; emailLink.removeAttribute('href'); emailLink.setAttribute('aria-disabled', 'true'); emailLink.style.opacity = '.7'; }
const contactLinks = document.querySelector('#contact-links');
const links = [ ['Google Scholar',profile.googleScholar],['ORCID',profile.orcid],['LinkedIn',profile.linkedin],['GitHub',profile.github],['Download CV',profile.cvPdf] ];
links.filter(([,url]) => !!url).forEach(([label,url]) => {
  const a = document.createElement('a'); a.textContent = label + ' â†—'; a.href = url;
  if (!url.startsWith('assets/')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  contactLinks.append(a);
});
document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded',String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')); }
