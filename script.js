// =============================
// Portfolio content configuration
//
// The easiest parts to edit:
// 1. siteProfile: name, email, LinkedIn, Instagram
// 2. categories: category names, project titles, years, descriptions and tags
// 3. images: replace the placeholder paths with your real images inside the assets folder
// =============================

const siteProfile = {
  siteName: "Yuyuan Zhu",
  copyright: "© Yuyuan Zhu",
  email: "yuyuanzhu4449@outlook.com",
  linkedin: "https://www.linkedin.com/in/yuyuan-zhu-826a64376/",
  instagram: "https://www.instagram.com/eos_bioyyyy/"
};

const uiText = {
  aboutLink: "About Me",
  categoryOverview: "Category Overview",
  designBy: "Design: Yuyuan Zhu",
  next: "→ Next",
  openProject: "Open Project",
  coverHint: "Click to view project",
  lightboxTip: "Scroll vertically to browse all project pages. Click the top-right button to close.",
  aboutEyebrow: "ABOUT ME",
  aboutTitle: "Currently seeking opportunities in graphic design, brand design and exhibition design.",
  aboutBody: "I’m a designer with a BA in Art and Science from the China Academy of Art, where I specialised in biodesign and speculative design, and I am currently studying Information Experience Design at the Royal College of Art. Alongside my research-led work, I have experience across graphic design, brand identity, product communication and book design, and I’m especially interested in roles that value clear visual thinking, narrative and cultural sensitivity.",
  aboutNote: "Much of my practice explores possible futures through a more-than-human perspective. I often begin with existing scientific knowledge and use it as a point of departure for imagining what might come next. For me, design is not only about making or solving; it is also a way of observing, thinking and reflecting critically on the world. Beyond any single medium, I see design as a means of shaping culture and rethinking the relationship between technology and nature."
};

const categories = [
  {
    id: "commercial",
    title: "Commercial Projects",
    description: "Selected commercial projects across brand identity, community branding, commercial illustration and medical packaging. Click a project cover to enter the enlarged project view.",
    projects: [
      {
        id: "tiny-moods",
        title: "Tiny Moods",
        subtitle: "Baby Brand Design",
        year: "2026",
        type: "Brand Identity",
        tags: ["Baby Product", "Brand Identity", "IP Design"],
        description: "Tiny Moods is an emotion-centered parenting companion brand designed for families. Through soft colors, playful character design, and a warm interface language, it creates a caring, friendly, and trustworthy brand identity. More than a product, it acts as a gentle companion for both babies and parents.",
        images: ["assets/tiny-moods/tiny-moods-01.jpg", "assets/tiny-moods/tiny-moods-02.jpg", "assets/tiny-moods/tiny-moods-03.jpg", "assets/tiny-moods/tiny-moods-04.jpg", "assets/tiny-moods/tiny-moods-05.jpg", "assets/tiny-moods/tiny-moods-06.jpg", "assets/tiny-moods/tiny-moods-07.jpg", "assets/tiny-moods/tiny-moods-08.jpg", "assets/tiny-moods/tiny-moods-09.jpg", "assets/tiny-moods/tiny-moods-10.jpg", "assets/tiny-moods/tiny-moods-11.jpg", "assets/tiny-moods/tiny-moods-12.jpg", "assets/tiny-moods/tiny-moods-13.jpg", "assets/tiny-moods/tiny-moods-14.jpg", "assets/tiny-moods/tiny-moods-15.jpg"]
      },
      {
        id: "unity-oasis",
        title: "Unity Oasis",
        subtitle: "Rural Community Branding Design",
        year: "2026",
        type: "Community Branding",
        tags: ["Community Design", "Brand Design", "Event Design"],
        description: "A rural community branding design project for Sideng Village, Shaxi Ancient Town, Yunnan. The project builds a visual identity rooted in nature, rhythm and community life, expressing the idea that everyone can find their own pace in this green landscape and grow together through a better shared way of life.",
        images: ["assets/unity-oasis/unity-oasis-01.jpg", "assets/unity-oasis/unity-oasis-02.jpg", "assets/unity-oasis/unity-oasis-03.jpg", "assets/unity-oasis/unity-oasis-04.jpg", "assets/unity-oasis/unity-oasis-05.jpg", "assets/unity-oasis/unity-oasis-06.jpg", "assets/unity-oasis/unity-oasis-07.jpg", "assets/unity-oasis/unity-oasis-08.jpg", "assets/unity-oasis/unity-oasis-09.jpg", "assets/unity-oasis/unity-oasis-10.jpg", "assets/unity-oasis/unity-oasis-11.jpg", "assets/unity-oasis/unity-oasis-12.jpg"]
      },
      {
        id: "jo-malone-illustration",
        title: "Jo Malone",
        subtitle: "Commercial Illustration & Merchandise Project",
        year: "2026",
        type: "Commercial Illustration",
        tags: ["Illustration", "AIGC-assisted Design", "Brand Design"],
        description: "This project focuses on Jo Malone London’s 2026 Blossoms limited edition, Frangipani, and presents a series of hand-drawn perfume posters. Inspired by frangipani flowers in Bali’s rainy season, the visual design combines the Balinese coast, sunlight after rain, and blooming frangipani to transform the emotions of rain, flowers, sunlight and release into a poetic visual experience.",
        images: ["assets/jo-malone/jo-malone-01.jpg", "assets/jo-malone/jo-malone-02.jpg", "assets/jo-malone/jo-malone-03.jpg", "assets/jo-malone/jo-malone-04.jpg", "assets/jo-malone/jo-malone-05.jpg", "assets/jo-malone/jo-malone-06.jpg", "assets/jo-malone/jo-malone-07.jpg", "assets/jo-malone/jo-malone-08.jpg", "assets/jo-malone/jo-malone-09.jpg"]
      },
      {
        id: "cellheal-packaging",
        title: "CellHeal",
        subtitle: "Medical Packaging Design",
        year: "2025",
        type: "Packaging Design",
        tags: ["Medical Product", "Packaging Design", "Brand Design"],
        description: "CellHeal is a medical packaging design project for Hydrogel Wound Care Patch. The project includes icon development, packaging systems in multiple sizes, product application research, sketch exploration, product design translation and brand extension materials, building a clean and trustworthy visual language for healthcare products.",
        images: ["assets/cellheal/cellheal-01.jpg", "assets/cellheal/cellheal-02.jpg", "assets/cellheal/cellheal-03.jpg", "assets/cellheal/cellheal-04.jpg", "assets/cellheal/cellheal-05.jpg", "assets/cellheal/cellheal-06.jpg", "assets/cellheal/cellheal-07.jpg", "assets/cellheal/cellheal-08.jpg", "assets/cellheal/cellheal-09.jpg"]
      }
    ]
  },
  {
    id: "art",
    title: "Art Projects",
    description: "Selected art projects across installation, speculative research, material practice, moving image, biofield experiments and exhibition-based work.",
    projects: [
      {
        id: "naphtholife-pulse",
        title: "NaphthoLife Pulse",
        subtitle: "Future Product Device",
        year: "2023",
        type: "Art Project",
        tags: ["Speculative Design", "Future Device", "Prop Making"],
        description: "In a future devastated by severe pollution, Earth’s oxygen levels can no longer sustain traditional breathing. Humanity adapts to anal-assisted respiration using perfluoronaphthalene solutions. Inspired by the brainless salpa’s clonal reproduction and propulsion, a new engineered species emerges, proposing a post-respiration era in which anal respiration becomes the new societal norm.",
        video: "https://youtu.be/TT_YiU4VZOs",
        projectNote: "Exhibited at the 3rd Zhejiang Young Scientists Open Day.",
        images: ["assets/naphtholife-pulse/naphtholife-pulse-01.jpg", "assets/naphtholife-pulse/naphtholife-pulse-02.jpg", "assets/naphtholife-pulse/naphtholife-pulse-03.jpg", "assets/naphtholife-pulse/naphtholife-pulse-04.jpg", "assets/naphtholife-pulse/naphtholife-pulse-05.jpg"]
      },
      {
        id: "cosmic-labtoratory",
        title: "COSMIC LABORATORY",
        subtitle: "Future Symbiotic Device",
        year: "2024",
        type: "Art Project",
        tags: ["Arduino Programming", "Speculative Design", "3D Printing"],
        description: "Welcome to the Cosmic Laboratory. This speculative project imagines using CRISPR-Cas9 technology to revive extinct species and invites viewers to contribute their DNA to the process. Through high-tech devices and a “cloud nurturing” interaction, the work explores the integration of technology and nature while reimagining new relationships between humans and revived life.",
        video: "https://youtu.be/bQr6c4gp0AU",
        projectNote: "Exhibited at the 5th Shanghai West Bund Art & Design FutureLab Education Expo.",
        images: ["assets/cosmic-laboratory/cosmic-laboratory-01.jpg", "assets/cosmic-laboratory/cosmic-laboratory-02.jpg", "assets/cosmic-laboratory/cosmic-laboratory-03.jpg", "assets/cosmic-laboratory/cosmic-laboratory-04.jpg"]
      },
      {
        id: "moisture-biofield",
        title: "Moisture Biofield",
        subtitle: "Biodesign / Material Design",
        year: "2025",
        type: "Art Project",
        tags: ["Biodesign", "Material Design", "Speculative Futures"],
        description: "Moisture Biofield envisions cacti as sustainable resources for producing bacterial cellulose in response to desertification and humidity imbalance. The project proposes bacterial cellulose as both “living soil” for ecological restoration and adaptive material for climate-responsive structures. These bio-fields integrate humidity regulation, ecological symbiosis, and intelligent control, offering speculative strategies for human and non-human coexistence.",
        video: "https://youtu.be/iQ5COafmyHo",
        projectNote: "Graduation project · Exhibited at the 6th Shanghai West Bund Design Fair · Collected.",
        images: ["assets/moisture-biofield/moisture-biofield-01.jpg", "assets/moisture-biofield/moisture-biofield-02.jpg", "assets/moisture-biofield/moisture-biofield-03.jpg", "assets/moisture-biofield/moisture-biofield-04.jpg", "assets/moisture-biofield/moisture-biofield-05.jpg"]
      },
      {
        id: "material-resonance-field",
        title: "Material Resonance Field",
        subtitle: "Art-led Research Around the Thames",
        year: "2026",
        type: "Art-led Research / Installation",
        tags: ["Installation", "River", "Material Memory"],
        description: "Material Resonance Field is an art-led research project that uses the tidal Thames as an entry point to think about rivers as living bodies. Centring on five representative foreshore objects from the sixteenth century onwards, it follows how discarded matter is rewritten by tides, microbes, and sediment into layers of material memory. The project reframes “rubbish” as evidence of shared histories, showing how damage to the river ultimately returns to shape human life and responsibility.",
        projectNote: "In progress.",
        images: ["assets/material-resonance-field/material-resonance-field-01.jpg", "assets/material-resonance-field/material-resonance-field-02.jpg", "assets/material-resonance-field/material-resonance-field-03.jpg", "assets/material-resonance-field/material-resonance-field-04.jpg", "assets/material-resonance-field/material-resonance-field-05.jpg"]
      },
      {
        id: "being-and-becoming",
        title: "Being & Becoming",
        subtitle: "Publication Design / Spatial Narrative",
        year: "2026",
        type: "Art Project",
        tags: ["Publication Design", "Spatial Narrative", "Prototype System"],
        description: "Being & Becoming explores how prototypes evolve into transformed spatial narratives. Developed through publication design, the project brings together diagrams, models, scenes and documentation to trace a process of analysis, variation and reconfiguration. It reflects on how structures, behaviours and environments can be reinterpreted through design.",
        images: ["assets/being-and-becoming/being-and-becoming-01.jpg", "assets/being-and-becoming/being-and-becoming-02.jpg", "assets/being-and-becoming/being-and-becoming-03.jpg", "assets/being-and-becoming/being-and-becoming-04.jpg"]
      }
    ]
  },
  {
    id: "operation",
    title: "Operation Design",
    description: "Selected operation design projects including art operation, campaign visuals, campus activities, offline materials and social communication design.",
    projects: [
      {
        id: "autumn-leaves-with-art",
        title: "Autumn Leaves with Art",
        subtitle: "Project Operations",
        year: "2026",
        type: "Art Operation",
        tags: ["Art Operation", "Cultural IP", "Public Engagement"],
        description: "Autumn Leaves Art transforms and reuses fallen autumn leaves to create a regionally recognised cultural and creative sculpture IP. The project develops three integrated directions: autumn-leaf sculpture making, autumn-themed art education workshops, and an Autumn Art Market combining sculpture, art education and cultural products. It also collaborates with schools, government bodies and enterprises to promote the project across multiple platforms.",
        images: ["assets/autumn-leaves-with-art/autumn-leaves-with-art-01.jpg", "assets/autumn-leaves-with-art/autumn-leaves-with-art-02.jpg", "assets/autumn-leaves-with-art/autumn-leaves-with-art-03.jpg", "assets/autumn-leaves-with-art/autumn-leaves-with-art-04.jpg", "assets/autumn-leaves-with-art/autumn-leaves-with-art-05.jpg"]
      },
      {
        id: "campus-event-design",
        title: "Campus Event & Communication Design",
        subtitle: "Campus Communication / Event Visual System",
        year: "2024",
        type: "Operation Design",
        tags: ["Content Operation", "Event Visual System", "Campus Communication"],
        description: "Campus Event & Communication Design brings together a series of visual communication and content operation projects developed during my work with the China Academy of Art Student Union. The project includes WeChat Official Account operation, article planning, event visual systems, offline materials, posters, schedules and social media promotion. Through these works, I explored how design can support campus communication beyond single posters — from building visual consistency to organising information, guiding audience attention and extending event influence across online and offline platforms.",
        coverImage: "assets/campus-event-communication-design/campus-event-communication-02.jpg",
        directGallery: true,
        images: ["assets/campus-event-communication-design/campus-event-communication-01.jpg", "assets/campus-event-communication-design/campus-event-communication-02.jpg", "assets/campus-event-communication-design/campus-event-communication-03.jpg"]
      }
    ]
  }
];

const state = {
  currentCategoryId: categories[0].id,
  currentProjectId: categories[0].projects[0].id,
  lightboxProject: null
};

const content = document.querySelector("#content");
const categoryNav = document.querySelector("#categoryNav");
const lightbox = document.querySelector("#lightbox");
const lightboxGallery = document.querySelector("#lightboxGallery");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxCounter = document.querySelector("#lightboxCounter");
const lightboxTip = document.querySelector("#lightboxTip");
const aboutPanel = document.querySelector("#aboutPanel");
const siteNameLink = document.querySelector(".site-name");
const copyright = document.querySelector(".copyright");
const profileLinks = document.querySelector(".profile-links");

function t(value) {
  return value || "";
}

function ui(key) {
  return uiText[key];
}

function getAllProjects() {
  return categories.flatMap(category => category.projects.map(project => ({ ...project, category })));
}

function findProject(projectId) {
  return getAllProjects().find(item => item.id === projectId);
}

function findCategory(categoryId) {
  return categories.find(category => category.id === categoryId);
}

function syncProfile() {
  siteNameLink.textContent = siteProfile.siteName;
  copyright.textContent = siteProfile.copyright;
  profileLinks.innerHTML = `
    <a href="#about" data-render-about id="aboutLink">${ui("aboutLink")}</a>
    <a href="mailto:${siteProfile.email}">Email</a>
    <a href="${siteProfile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="${siteProfile.instagram}" target="_blank" rel="noreferrer">Instagram</a>
  `;
  document.querySelector("[data-render-about]").addEventListener("click", event => {
    event.preventDefault();
    renderAbout();
  });
}

function syncStaticText() {
  document.documentElement.lang = "en";
  document.querySelector("#aboutEyebrow").textContent = ui("aboutEyebrow");
  document.querySelector("#aboutTitle").textContent = ui("aboutTitle");
  document.querySelector("#aboutBody").textContent = ui("aboutBody");
  document.querySelector("#aboutNote").textContent = ui("aboutNote");
  lightboxTip.textContent = ui("lightboxTip");
  syncProfile();
}

function renderNav() {
  categoryNav.innerHTML = categories.map(category => `
    <section class="category-block">
      <button class="category-button ${category.id === state.currentCategoryId ? "is-active" : ""}" data-category="${category.id}" type="button">${t(category.title)}</button>
      <ul class="project-list">
        ${category.projects.map(project => `
          <li><button class="project-link ${project.id === state.currentProjectId ? "is-active" : ""}" data-project="${project.id}" type="button">${t(project.title)}</button></li>
        `).join("")}
      </ul>
    </section>
  `).join("");
}

function projectSectionTemplate(item) {
  const project = item.category ? item : { ...item, category: findCategory(state.currentCategoryId) };

  if (project.directGallery) {
    return `
      <section class="project-section direct-gallery-section" data-project-section="${project.id}">
        <header class="section-head">
          <div>
            <p class="section-kicker">${t(project.category.title)} / ${t(project.type)}</p>
            <h1 class="section-title">${t(project.title)}</h1>
            <p class="section-meta">${ui("designBy")}<br>${project.year}</p>
            <p class="section-note">${t(project.description)}</p>
          </div>
          <button class="next-button" type="button" data-next-project="${project.id}">${ui("next")}</button>
        </header>
        <div class="direct-gallery">
          ${project.images.map((src, index) => `
            <figure class="direct-gallery-page">
              <img src="${src}" alt="${t(project.title)} page ${index + 1}">
            </figure>
          `).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="project-section" data-project-section="${project.id}">
      <header class="section-head">
        <div>
          <p class="section-kicker">${t(project.category.title)} / ${t(project.type)}</p>
          <h1 class="section-title">${t(project.title)}</h1>
          <p class="section-meta">${ui("designBy")}<br>${project.year}</p>
          ${project.projectNote ? `<p class="section-note">${project.projectNote}</p>` : ""}
        </div>
        <button class="next-button" type="button" data-next-project="${project.id}">${ui("next")}</button>
      </header>
      <div class="project-layout">
        <button class="project-cover" type="button" data-open-project="${project.id}" aria-label="${ui("openProject")} ${t(project.title)}">
          <img src="${(project.coverImage || project.images[0])}" alt="${t(project.title)} cover">
          <span class="cover-hint">${ui("coverHint")}</span>
        </button>
        <article class="project-info">
          <h3>${t(project.subtitle)}</h3>
          <p>${t(project.description)}</p>
          ${project.video ? `<p class="project-video">Video: <a href="${project.video}" target="_blank" rel="noreferrer">${project.video}</a></p>` : ""}
          <div class="project-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
          <button class="open-button" type="button" data-open-project="${project.id}">${ui("openProject")}</button>

        </article>
      </div>
    </section>
  `;
}


function renderAbout() {
  syncStaticText();
  state.currentProjectId = "";
  content.innerHTML = `
    <section class="about-page">
      <header class="about-hero">
        <p class="section-kicker">ABOUT ME</p>
        <h1>Yuyuan Zhu</h1>
        <p class="about-lead">I am a designer working across graphic design, brand identity, exhibition communication and speculative design. My work moves between commercial clarity and research-led imagination, using visual systems, objects and narratives to make complex ideas feel tangible.</p>
      </header>

      <div class="about-grid-page">
        <section class="about-section about-section-wide">
          <h2>Profile</h2>
          <p>I studied Art and Science at the China Academy of Art, where my practice focused on biodesign and speculative design. I am currently studying Information Experience Design at the Royal College of Art.</p>
          <p>Much of my work begins with existing scientific knowledge and asks how it might be used to imagine possible futures. I often approach technology through a more-than-human perspective, considering design not only as a way to make or solve, but as a method of observing, questioning and reflecting on the world. Alongside this research practice, I am passionate about graphic design, brand design and exhibition design, with experience in visual identity, product communication, book layout and event-based visual systems.</p>
        </section>

        <section class="about-section">
          <h2>Internship Experience</h2>
          <article class="about-entry">
            <p class="about-date">2024/12–2025/02</p>
            <h3>752 Design Studio</h3>
            <p>Graphic Design / Operations</p>
            <ul>
              <li>Assisted with book graphic design and high-precision product renderings.</li>
              <li>Coordinated communication with an international artist.</li>
              <li>Supported the domestic publication and promotion of the <em>Speculative EDU</em> book.</li>
            </ul>
          </article>
          <article class="about-entry">
            <p class="about-date">2026/01–2026/02</p>
            <h3>Hangzhou Keda Technology Co., Ltd.</h3>
            <p>Graphic Layout / Teaching Support</p>
            <ul>
              <li>Supported students with portfolio organisation and layout.</li>
              <li>Participated in academic exchanges with tutors from international institutions.</li>
              <li>Assisted in design workshops and visual communication tasks.</li>
            </ul>
          </article>
        </section>

        <section class="about-section">
          <h2>Education</h2>
          <article class="about-entry">
            <p class="about-date">2025–2026</p>
            <h3>Royal College of Art</h3>
            <p>MA Information Experience Design</p>
          </article>
          <article class="about-entry">
            <p class="about-date">2021–2025</p>
            <h3>China Academy of Art</h3>
            <p>BA Art and Science</p>
          </article>
        </section>

        <section class="about-section about-section-wide">
          <h2>Organisational & Operations Experience</h2>
          <div class="about-columns">
            <article class="about-entry">
              <h3>Project Executive · Qiuye Youyi — Nature + Art: Urban Environmental Placemakers</h3>
              <p>A large-scale art and public education project covering 14 provinces and 34 regions, with more than 160 lectures and extensive media exposure.</p>
            </article>
            <article class="about-entry">
              <h3>Head of Publicity Department · Student Union, China Academy of Art</h3>
              <p>Responsible for content planning, visual promotion and communication on the university’s official platforms.</p>
            </article>
            <article class="about-entry">
              <h3>Head of Publicity Department · Voice of CAA</h3>
              <p>Managed publicity content and contributed to posts with strong readership and engagement.</p>
            </article>
          </div>
        </section>

        <section class="about-section">
          <h2>Exhibitions</h2>
          <ul class="about-list">
            <li>3rd Zhejiang Young Scientists Open Day</li>
            <li>5th Art & Design Innovation Future Education Expo</li>
            <li>5th Shanghai West Bund Art & Design FutureLab Education Expo</li>
            <li>6th Shanghai West Bund Design Fair</li>
            <li>Art-D 2023</li>
            <li>Milan Design Week</li>
            <li>4th London Chinese Art Exchange Exhibition</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>Awards</h2>
          <ul class="about-list compact-list">
            <li>BICC China–Britain International Design Competition, Bronze Award ×2</li>
            <li>Asian Young Talent Award, Second Prize</li>
            <li>C-IDEA Design Award 2023</li>
            <li>2023 SGADC, Silver Award ×2</li>
            <li>9th Academy Awards, Second Prize</li>
            <li>2023 British Eco Design Award, Silver & Bronze</li>
            <li>Hong Kong Contemporary Design Award, Bronze</li>
            <li>International Environmental Public Welfare Design Competition, Silver & Bronze</li>
            <li>G-CROSS, Silver Award</li>
            <li>2024 CADA Japan Concept Art Design Award, Silver & Bronze</li>
            <li>2024 ROCA Graphic and Space Design Award, Bronze ×2</li>
            <li>Annual First-Class Scholarship / Merit Student / Outstanding Graduate</li>
          </ul>
        </section>
      </div>
    </section>
  `;
  content.scrollTop = 0;
  renderNav();
}

function renderHome() {
  syncStaticText();
  const projects = getAllProjects();
  content.innerHTML = projects.map(projectSectionTemplate).join("");
  content.scrollTop = 0;
  bindContentEvents();
  renderNav();
}

function renderCategory(categoryId) {
  syncStaticText();
  const category = findCategory(categoryId);
  if (!category) return;
  state.currentCategoryId = category.id;
  state.currentProjectId = category.projects[0]?.id || state.currentProjectId;

  content.innerHTML = `
    <section class="category-overview">
      <p class="section-kicker">${ui("categoryOverview")}</p>
      <h1>${t(category.title)}</h1>
      <p class="intro">${t(category.description)}</p>
      <div class="overview-grid">
        ${category.projects.map(project => `
          <article class="overview-card" data-project-card="${project.id}">
            <img src="${(project.coverImage || project.images[0])}" alt="${t(project.title)} cover">
            <div class="overview-card-body">
              <p>${t(project.type)} / ${project.year}</p>
              <h2>${t(project.title)}</h2>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
  content.scrollTop = 0;
  bindContentEvents();
  renderNav();
}

function renderProject(projectId) {
  syncStaticText();
  const project = findProject(projectId);
  if (!project) return;
  state.currentCategoryId = project.category.id;
  state.currentProjectId = project.id;
  content.innerHTML = projectSectionTemplate(project);
  content.scrollTop = 0;
  bindContentEvents();
  renderNav();
}

function bindContentEvents() {
  content.querySelectorAll("[data-open-project]").forEach(button => {
    button.addEventListener("click", () => openLightbox(button.dataset.openProject));
  });

  content.querySelectorAll("[data-next-project]").forEach(button => {
    button.addEventListener("click", () => {
      const projects = getAllProjects();
      const currentIndex = projects.findIndex(project => project.id === button.dataset.nextProject);
      const nextProject = projects[(currentIndex + 1) % projects.length];
      renderProject(nextProject.id);
    });
  });

  content.querySelectorAll("[data-project-card]").forEach(card => {
    card.addEventListener("click", () => renderProject(card.dataset.projectCard));
  });
}

function openLightbox(projectId) {
  const project = findProject(projectId);
  if (!project) return;
  state.lightboxProject = project;
  lightboxTitle.textContent = t(project.title);
  lightboxCategory.textContent = `${t(project.category.title)} / ${t(project.type)}`;
  lightboxCounter.textContent = `${String(project.images.length).padStart(2, "0")} pages`;
  lightboxGallery.innerHTML = project.images.map((src, index) => `
    <figure class="lightbox-page">
      <img src="${src}" alt="${t(project.title)} page ${index + 1}">
    </figure>
  `).join("");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxGallery.innerHTML = "";
  document.body.style.overflow = "";
}

categoryNav.addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");
  const projectButton = event.target.closest("[data-project]");

  if (categoryButton) {
    renderCategory(categoryButton.dataset.category);
  }

  if (projectButton) {
    renderProject(projectButton.dataset.project);
  }
});

document.querySelector("[data-home]").addEventListener("click", event => {
  event.preventDefault();
  renderHome();
});

document.querySelector("[data-close-about]").addEventListener("click", () => {
  aboutPanel.classList.remove("is-open");
  aboutPanel.setAttribute("aria-hidden", "true");
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
    aboutPanel.classList.remove("is-open");
    aboutPanel.setAttribute("aria-hidden", "true");
  }
});

renderHome();
