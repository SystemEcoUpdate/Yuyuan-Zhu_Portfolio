const projects = [
  {
    id: "naphtholife-pulse",
    title: "NaphthoLife Pulse",
    subtitle: "Future Product Device",
    year: "2023",
    type: "Speculative Device",
    tags: ["Speculative Design", "Future Device", "Prop Making"],
    description: "In a future devastated by severe pollution, Earth’s oxygen levels can no longer sustain traditional breathing. Humanity adapts to anal-assisted respiration using perfluoronaphthalene solutions. Inspired by the brainless salpa’s clonal reproduction and propulsion, a new engineered species emerges, proposing a post-respiration era in which anal respiration becomes the new societal norm.",
    note: "Exhibited at the 3rd Zhejiang Young Scientists Open Day.",
    video: "https://youtu.be/TT_YiU4VZOs",
    images: [
      "assets/naphtholife-pulse/naphtholife-pulse-01.jpg",
      "assets/naphtholife-pulse/naphtholife-pulse-02.jpg",
      "assets/naphtholife-pulse/naphtholife-pulse-03.jpg",
      "assets/naphtholife-pulse/naphtholife-pulse-04.jpg",
      "assets/naphtholife-pulse/naphtholife-pulse-05.jpg"
    ]
  },
  {
    id: "cosmic-labtoratory",
    title: "COSMIC LABORATORY",
    subtitle: "Future Symbiotic Device",
    year: "2024",
    type: "Interactive Installation",
    tags: ["Arduino Programming", "Speculative Design", "3D Printing"],
    description: "Welcome to the Cosmic Laboratory. This speculative project imagines using CRISPR-Cas9 technology to revive extinct species and invites viewers to contribute their DNA to the process. Through high-tech devices and a ‘cloud nurturing’ interaction, the work explores the integration of technology and nature while reimagining new relationships between humans and revived life.",
    note: "Exhibited at the 5th Shanghai West Bund Art & Design FutureLab Education Expo.",
    video: "https://youtu.be/bQr6c4gp0AU",
    images: [
      "assets/cosmic-laboratory/cosmic-laboratory-01.jpg",
      "assets/cosmic-laboratory/cosmic-laboratory-02.jpg",
      "assets/cosmic-laboratory/cosmic-laboratory-03.jpg",
      "assets/cosmic-laboratory/cosmic-laboratory-04.jpg"
    ]
  },
  {
    id: "moisture-biofield",
    title: "Moisture Biofield",
    subtitle: "Biodesign / Material Design",
    year: "2025",
    type: "Biodesign",
    tags: ["Biodesign", "Material Design", "Speculative Futures"],
    description: "Moisture Biofield envisions cacti as sustainable resources for producing bacterial cellulose in response to desertification and humidity imbalance. The project proposes bacterial cellulose as both ‘living soil’ for ecological restoration and adaptive material for climate-responsive structures. These bio-fields integrate humidity regulation, ecological symbiosis, and intelligent control, offering speculative strategies for human and non-human coexistence.",
    note: "Graduation project · Exhibited at the 6th Shanghai West Bund Design Fair · Collected.",
    video: "https://youtu.be/iQ5COafmyHo",
    images: [
      "assets/moisture-biofield/moisture-biofield-01.jpg",
      "assets/moisture-biofield/moisture-biofield-02.jpg",
      "assets/moisture-biofield/moisture-biofield-03.jpg",
      "assets/moisture-biofield/moisture-biofield-04.jpg",
      "assets/moisture-biofield/moisture-biofield-05.jpg"
    ]
  },
  {
    id: "material-resonance-field",
    title: "Material Resonance Field",
    subtitle: "Art-led Research Around the Thames",
    year: "2026",
    type: "Installation / Research",
    tags: ["Installation", "River", "Material Memory"],
    description: "Material Resonance Field is an art-led research project that uses the tidal Thames as an entry point to think about rivers as living bodies. Centring on five representative foreshore objects from the sixteenth century onwards, it follows how discarded matter is rewritten by tides, microbes and sediment into layers of material memory. The project reframes ‘rubbish’ as evidence of shared histories, showing how damage to the river ultimately returns to shape human life and responsibility.",
    note: "In progress.",
    images: [
      "assets/material-resonance-field/material-resonance-field-01.jpg",
      "assets/material-resonance-field/material-resonance-field-02.jpg",
      "assets/material-resonance-field/material-resonance-field-03.jpg",
      "assets/material-resonance-field/material-resonance-field-04.jpg",
      "assets/material-resonance-field/material-resonance-field-05.jpg"
    ]
  },
  {
    id: "being-and-becoming",
    title: "Being & Becoming",
    subtitle: "Publication Design / Spatial Narrative",
    year: "2026",
    type: "Spatial Narrative",
    tags: ["Publication Design", "Spatial Narrative", "Prototype System"],
    description: "Being & Becoming explores how prototypes evolve into transformed spatial narratives. Developed through publication design, the project brings together diagrams, models, scenes and documentation to trace a process of analysis, variation and reconfiguration. It reflects on how structures, behaviours and environments can be reinterpreted through design.",
    images: [
      "assets/being-and-becoming/being-and-becoming-01.jpg",
      "assets/being-and-becoming/being-and-becoming-02.jpg",
      "assets/being-and-becoming/being-and-becoming-03.jpg",
      "assets/being-and-becoming/being-and-becoming-04.jpg"
    ]
  }
];

const intro = document.querySelector("#intro");
const site = document.querySelector("#site");
const enterButton = document.querySelector("#enterButton");
const brandButton = document.querySelector("#brandButton");
const projectGrid = document.querySelector("#projectGrid");
const projectStrip = document.querySelector("#projectStrip");
const projectModal = document.querySelector("#projectModal");
const projectDetail = document.querySelector("#projectDetail");
const projectClose = document.querySelector("#projectClose");
const projectNext = document.querySelector("#projectNext");
const modalCounter = document.querySelector("#modalCounter");
const aboutModal = document.querySelector("#aboutModal");
const aboutButton = document.querySelector("#aboutButton");
const aboutClose = document.querySelector("#aboutClose");

let activeProjectIndex = 0;

function twoDigits(index) {
  return String(index + 1).padStart(2, "0");
}

function renderIndex() {
  projectStrip.innerHTML = projects.map((project, index) => `
    <button type="button" data-strip-project="${project.id}">
      <span>${twoDigits(index)}</span>
      <span>${project.title}</span>
    </button>
  `).join("");

  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card project-card-${index + 1}">
      <button class="project-card-button" type="button" data-project="${project.id}" aria-label="Open ${project.title}">
        <figure class="project-image-wrap">
          <img src="${project.images[0]}" alt="${project.title}" loading="${index > 1 ? "lazy" : "eager"}" />
          <span class="project-open">OPEN ↗</span>
        </figure>
        <div class="project-card-meta">
          <div>
            <p class="project-number">${twoDigits(index)} / ${project.year}</p>
            <h3>${project.title}</h3>
          </div>
          <p>${project.type}</p>
        </div>
      </button>
    </article>
  `).join("");
}

function enterSite() {
  intro.classList.add("is-hidden");
  intro.setAttribute("aria-hidden", "true");
  site.classList.add("is-visible");
  site.setAttribute("aria-hidden", "false");
  window.setTimeout(() => {
    document.querySelector("#works")?.focus?.();
  }, 450);
}

function showIntro() {
  closeProject();
  closeAbout();
  intro.classList.remove("is-hidden");
  intro.setAttribute("aria-hidden", "false");
  site.classList.remove("is-visible");
  site.setAttribute("aria-hidden", "true");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getProjectIndex(id) {
  return projects.findIndex(project => project.id === id);
}

function openProject(id) {
  const index = getProjectIndex(id);
  if (index < 0) return;

  activeProjectIndex = index;
  const project = projects[index];

  modalCounter.textContent = `PROJECT ${twoDigits(index)}`;
  projectDetail.innerHTML = `
    <section class="detail-hero">
      <div class="detail-heading">
        <p class="micro-label">${project.type} / ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="detail-subtitle">${project.subtitle}</p>
      </div>
      <div class="detail-copy">
        <p>${project.description}</p>
        ${project.note ? `<p class="detail-note">${project.note}</p>` : ""}
        <div class="detail-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        ${project.video ? `<a class="video-link" href="${project.video}" target="_blank" rel="noreferrer">WATCH VIDEO ↗</a>` : ""}
      </div>
    </section>
    <section class="detail-gallery">
      ${project.images.map((src, imageIndex) => `
        <figure class="detail-image detail-image-${imageIndex + 1}">
          <img src="${src}" alt="${project.title} — image ${imageIndex + 1}" loading="${imageIndex > 1 ? "lazy" : "eager"}" />
          <figcaption>${twoDigits(imageIndex)} / ${project.title}</figcaption>
        </figure>
      `).join("")}
    </section>
    <button class="detail-next" type="button" data-next-project>
      <span>NEXT PROJECT</span>
      <span>${projects[(index + 1) % projects.length].title} ↘</span>
    </button>
  `;

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModal.scrollTop = 0;

  projectDetail.querySelector("[data-next-project]")?.addEventListener("click", openNextProject);
}

function closeProject() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openNextProject() {
  const nextIndex = (activeProjectIndex + 1) % projects.length;
  openProject(projects[nextIndex].id);
}

function openAbout() {
  aboutModal.classList.add("is-open");
  aboutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  aboutModal.scrollTop = 0;
}

function closeAbout() {
  aboutModal.classList.remove("is-open");
  aboutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setIntroPointer(clientX, clientY) {
  if (!intro) return;
  const rect = intro.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

  intro.style.setProperty("--pointer-x", x.toFixed(4));
  intro.style.setProperty("--pointer-y", y.toFixed(4));
}

function resetIntroPointer() {
  intro.style.setProperty("--pointer-x", "0");
  intro.style.setProperty("--pointer-y", "0");
}

renderIndex();
resetIntroPointer();

enterButton.addEventListener("click", enterSite);
brandButton.addEventListener("click", showIntro);
aboutButton.addEventListener("click", openAbout);
aboutClose.addEventListener("click", closeAbout);
projectClose.addEventListener("click", closeProject);
projectNext.addEventListener("click", openNextProject);

projectGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) openProject(button.dataset.project);
});

projectStrip.addEventListener("click", event => {
  const button = event.target.closest("[data-strip-project]");
  if (!button) return;
  const target = document.querySelector(`[data-project="${button.dataset.stripProject}"]`);
  target?.scrollIntoView({ behavior: "smooth", block: "center" });
});

intro.addEventListener("pointermove", event => {
  setIntroPointer(event.clientX, event.clientY);
});

intro.addEventListener("pointerleave", resetIntroPointer);
intro.addEventListener("touchend", resetIntroPointer, { passive: true });
intro.addEventListener("touchcancel", resetIntroPointer, { passive: true });

intro.addEventListener("touchmove", event => {
  const touch = event.touches?.[0];
  if (touch) setIntroPointer(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (projectModal.classList.contains("is-open")) closeProject();
    else if (aboutModal.classList.contains("is-open")) closeAbout();
  }
});
