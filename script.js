function renderEducation() {
  const el = document.getElementById("educationList");
  el.innerHTML = EDUCATION.map((e, i) => `
    <article class="education-item">
      <div class="edu-index">${String(i + 1).padStart(2, "0")}</div>
      <div class="edu-body">
        <h3>${e.title}</h3>
        <p>${e.meta}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const el = document.getElementById("skillsList");
  el.innerHTML = SKILLS.map((s, i) => `
    <article class="skill-card">
      <span class="skill-number">0${i + 1}</span>
      <h3>${s.title}</h3>
      <p>${s.meta}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const el = document.getElementById("projectList");
  el.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card ${i === 0 ? "featured" : ""}">
      <div class="project-top">
        <span class="project-number">${String(i + 1).padStart(2, "0")}</span>
        <span class="project-date">${p.date}</span>
      </div>
      <div class="project-content">
        <div class="tag-row">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-bottom">
          <span>${p.role || "Developer"}</span>
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">View on GitHub ↗</a>` : `<span class="private-label">Coursework / Group Project</span>`}
        </div>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const el = document.getElementById("paintingsGallery");
  el.innerHTML = GALLERY_PAINTINGS.map((g, i) => `
    <figure class="art-card ${i === 1 ? "art-tall" : ""}">
      <div class="art-image"><img src="${g.src}" alt="${g.title}" loading="lazy"></div>
      <figcaption>
        <span>Artwork ${String(i + 1).padStart(2, "0")}</span>
        <h3>${g.title}</h3>
        <p>${g.caption}</p>
      </figcaption>
    </figure>
  `).join("");
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function setupNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-25% 0px -60% 0px" });
  sections.forEach(s => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  renderEducation();
  renderSkills();
  renderProjects();
  renderGallery();
  setYear();
  setupNav();
});
