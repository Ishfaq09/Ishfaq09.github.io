/**
 * WEBSITE CONFIGURATION
 * Replace null with verified links; never publish placeholder contact details.
 * Example: email: 'your.name@university.edu'
 */
const profile = {
  email: 'ishfaq.sofi@ieee.org',
  googleScholar: null,
  orcid: null,
  linkedin: null,
  github: 'https://github.com/Ishfaq09',
  cvPdf: null
};

/**
 * Selected research outputs. Verify final publication metadata before publishing.
 * For the TMLCN item, add its exact title, year and DOI when confirmed.
 */
const publications = [
  {
    "title": "An Efficient Transformer-Based Knowledge Distillation Framework with CPCA and GAN Augmentation for Lightweight IDS",
    "venue": "IEEE Transactions on Machine Learning in Communications and Networking",
    "year": "2025",
    "type": "journal"
  },
  {
    "title": "AE-Multi-WGAN: A Robust Multi-Attack Detection IDS for Imbalanced Datasets",
    "venue": "IEEE GLOBECOM · pp. 1065–1070",
    "year": "2025",
    "type": "conference"
  },
  {
    "title": "LIME: Lightweight Multi-head Early-exit Transformer for Network Intrusion Detection",
    "venue": "IEEE ICC",
    "year": "2026",
    "type": "conference"
  },
  {
    "title": "ACCV-GAN: A Variational-Transformer GAN with Class-Aware Adaptive Training for Intrusion Detection Data Augmentation",
    "venue": "IEEE Transactions on Network and Service Management · Under revision as listed",
    "year": "2025",
    "type": "journal"
  },
  {
    "title": "Generative AI-enabled Multi-Attack Intrusion Detection Framework for Imbalanced Datasets",
    "venue": "IEEE Transactions on Emerging Topics in Computational Intelligence · Status needs updating",
    "year": "2026",
    "type": "journal"
  },
  {
    "title": "Multi-View GAN-Based Intrusion Detection with Temporal Reconstruction and Class-Aware Feature Balancing",
    "venue": "IEEE ICCCN",
    "year": "2026",
    "type": "conference"
  },
  {
    "title": "A Hybrid AE–WGAN–HCBOU Framework for Rare Attack Augmentation and Class-Imbalanced Intrusion Detection",
    "venue": "Computers & Security · Under revision as listed",
    "year": "2026",
    "type": "journal"
  },
  {
    "title": "SNR-Guided Model Sizing for Differentially Private Federated Learning with LiRA Privacy Auditing",
    "venue": "IEEE ICCCN",
    "year": "2026",
    "type": "conference"
  },
  {
    "title": "RF-Driven Adaptive Surrogate Models for LoRaDisC Network Performance Prediction in Smart Agriculture and Field Sensing Environments",
    "venue": "AgriEngineering",
    "year": "2026",
    "type": "journal"
  },
  {
    "title": "Smart Energy-Saving Solutions Based on Artificial Intelligence and Other Emerging Technologies for 5G Wireless and Beyond Networks Communications",
    "venue": "Intelligent Signal Processing and RF Energy Harvesting for 5G and B5G Networks · pp. 77–95",
    "year": "2024",
    "type": "journal"
  },
  {
    "title": "Impact of Crop Management Practices on Maize Yield: Insights from Farming in Tropical Regions and Predictive Modeling Using Machine Learning",
    "venue": "Journal of Agriculture and Food Research · 101392",
    "year": "2024",
    "type": "journal"
  },
  {
    "title": "Modeling of Edge Server Cache-Reservation for Virtual Reality Applications",
    "venue": "ACM QoS and Security for Wireless and Mobile Networks · pp. 131–138",
    "year": "2023",
    "type": "conference"
  },
  {
    "title": "Minimization of Handover Decisions with Quality of Service Using Fuzzy Logic Prediction Model",
    "venue": "Journal of Communications · 18(2)",
    "year": "2023",
    "type": "journal"
  },
  {
    "title": "A Survey on Energy-Efficient 5G Green Network with a Planned Multi-Tier Architecture",
    "venue": "Journal of Network and Computer Applications · 118, 1–28",
    "year": "2018",
    "type": "journal"
  },
  {
    "title": "Power and Energy Optimization with Reduced Complexity in Different Deployment Scenarios of Massive MIMO Networks",
    "venue": "International Journal of Communication Systems · 32(6), e3907",
    "year": "2019",
    "type": "journal"
  },
  {
    "title": "Performance Evaluation of Different Channel Estimation Techniques in MIMO System for Hata Channel Model",
    "venue": "IEEE ICICS · pp. 155–160",
    "year": "2018",
    "type": "conference"
  },
  {
    "title": "A Survey on Substrate Integrated Waveguide Filters: Design Challenges and Miniaturizing Techniques for the 5G",
    "venue": "International Journal of High Speed Electronics and Systems · 32(01), 2140006",
    "year": "2023",
    "type": "journal"
  },
  {
    "title": "ESEIABS: Energy and Spectrum Efficient Hybrid Technique for 5G and Beyond Networks Using Interference Aware Beam Selection",
    "venue": "ICT Express · 9(5), 769–775",
    "year": "2023",
    "type": "journal"
  },
  {
    "title": "A New Method of Intelligent Handover Management in 5G Communication Networks—IHMCN",
    "venue": "Journal of Communications · 18(12)",
    "year": "2023",
    "type": "journal"
  },
  {
    "title": "A New Method of Isolation Enhancement of Dual Band Band-Pass Filter Using Composite Mode Co-planar Waveguide Structure for 5G and Body Centric Applications",
    "venue": "Iranian Journal of Science and Technology, Transactions of Electrical Engineering · 47(1), 317–326",
    "year": "2023",
    "type": "journal"
  },
  {
    "title": "KU Database of Handwritten Arabic Words",
    "venue": "Research output listed on Strikingly · Full venue needs verification",
    "year": "2016",
    "type": "journal"
  },
  {
    "title": "A New Method of Dual-Hop Energy Harvesting and Efficient Power Allocation in IoT Networks Using a Bio-Inspired Based Power Distribution Scheme",
    "venue": "Journal of Communications · 17(6)",
    "year": "2022",
    "type": "journal"
  },
  {
    "title": "A New Genetic Algorithm Bio-Inspired Based Impartial Evaluation of UFMC and GFDM Under Diverse Window Constraints",
    "venue": "Arabian Journal for Science and Engineering · 47(11), 14173–14184",
    "year": "2022",
    "type": "journal"
  },
  {
    "title": "Agriculture-Food Supply Chain Management Based on Blockchain and IoT: A Narrative on Enterprise Blockchain Interoperability",
    "venue": "Agriculture · 12(1), 40",
    "year": "2021",
    "type": "journal"
  },
  {
    "title": "PAPR Minimization of FBMC/OQAM Scheme by Hybrid SLM and PTS Using Artificial Bee-Colony Phase Optimization",
    "venue": "Arabian Journal for Science and Engineering · 46, 9925–9934",
    "year": "2021",
    "type": "journal"
  },
  {
    "title": "A Compact and Reconfigurable Dual-Mode Configuration Substrate Integrated Waveguide Dual-Band Bandpass Filter for 5G and Millimeter-Wave Communications",
    "venue": "Progress in Electromagnetics Research Letters · 99, 93–101",
    "year": "2021",
    "type": "journal"
  },
  {
    "title": "Edge Computing and Its Convergence with Blockchain in 5G and Beyond: Security, Challenges, and Opportunities",
    "venue": "IEEE Access · 8, 205340–205373",
    "year": "2020",
    "type": "journal"
  },
  {
    "title": "Performance Evaluation of Spatial Multiplexing Using Different Modulation Techniques in MIMO System for Small- and Large-Scale Fading Channel",
    "venue": "International Journal of Sensors Wireless Communications and Control · 9(2), 188–202",
    "year": "2019",
    "type": "journal"
  },
  {
    "title": "Bit Error Rate Based Performance Evaluation of LTE OFDMA System",
    "venue": "IEEE ICICS · pp. 161–166",
    "year": "2018",
    "type": "conference"
  },
  {
    "title": "Image Restoration and the Various Restoration Techniques Used in the Field of Digital Image Processing",
    "venue": "International Journal of Computer Science and Mobile Computing · 6(6), 390–393",
    "year": "2017",
    "type": "journal"
  },
  {
    "title": "Energy Efficiency Optimization of Massive MIMO Network",
    "venue": "M.Tech thesis · Lovely Professional University · Supervisor: Dr. Akhil Gupta",
    "year": "2018",
    "type": "thesis"
  },
  {
    "title": "Generative Artificial Intelligence for Secure and Efficient Intrusion Detection in Imbalanced Multi-Attack Cyber Environments",
    "venue": "PhD thesis · Concordia University · Supervisors: Prof. Anjali Agarwal and Prof. Kuljeet Kaur",
    "year": "2026",
    "type": "thesis"
  }
];
const publicationList = document.querySelector('#publication-list');
const search = document.querySelector('#publication-search');
const filter = document.querySelector('#publication-filter');
const count = document.querySelector('#publication-count');
function renderPublications() {
  const term = search.value.toLowerCase().trim();
  const type = filter.value;
  publicationList.replaceChildren();
  const selected = publications.filter(p => (type === 'all' || p.type === type) && (p.title + ' ' + p.venue + ' ' + p.year).toLowerCase().includes(term));
  count.textContent = `${selected.length} of ${publications.length} entries`;
  selected.forEach(p => {
    const article = document.createElement('article'); article.className='publication visible';
    const venue = document.createElement('div'); venue.className='pub-venue'; venue.textContent=p.year+' · '+p.type.toUpperCase();
    const body=document.createElement('div'); const title=document.createElement('h3'); title.textContent=p.title;
    const details=document.createElement('p'); details.textContent=p.venue; body.append(title,details);
    article.append(venue,body); publicationList.append(article);
  });
}
search.addEventListener('input',renderPublications); filter.addEventListener('change',renderPublications); renderPublications();

const emailLink = document.querySelector('#email-link');
if (profile.email) { emailLink.href = 'mailto:' + profile.email; }
else { emailLink.textContent = 'Email to be added'; emailLink.removeAttribute('href'); emailLink.setAttribute('aria-disabled', 'true'); emailLink.style.opacity = '.7'; }
const contactLinks = document.querySelector('#contact-links');
const links = [ ['Google Scholar',profile.googleScholar],['ORCID',profile.orcid],['LinkedIn',profile.linkedin],['GitHub',profile.github],['Download CV',profile.cvPdf] ];
links.filter(([,url]) => !!url).forEach(([label,url]) => {
  const a = document.createElement('a'); a.textContent = label + ' ↗'; a.href = url;
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
