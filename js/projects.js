const data = [
  {
    title: "Canteen Automation",
    source: "https://github.com/n-aeee-m/CanteenAutomation",
    exeternal: "https://github.com/n-aeee-m/CanteenAutomation",
    desc: "Canteen Automation Using Django and Flutter",
    tech: [{ stack: "Django" }, { stack: "Sqlite3" }, { stack: "Flutter" }],
  },
  {
    title: "Bridgeon Projects",
    source: "https://github.com/n-aeee-m/bridgeon.git",
    exeternal: "https://github.com/n-aeee-m/bridgeon.git/",
    desc: "Bridgeon Projects",
    tech: [{ stack: "HTML" }, { stack: "CSS" }, { stack: "JS" }],
  },
];

const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {
  return `
    <div class="col-lg-6" key=${i}>
        <div class="card shadow">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>Featured Project</h5>
                    <div class="links">
                        <a href="${project.source}"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href="${project.exeternal}"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p class="mt-3">${project.desc}</p>
                ${project.tech.map((stack, i) =>{
                    return `
                        <span class="badge rounded-pill">${stack.stack}</span>
                    `
                })}
            </div>
        </div>
    </div>
      `;
}).join('');

projectContainer.innerHTML = projects;
