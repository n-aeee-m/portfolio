const data = [
  {
    title: "Canteen Automation",
    source: "https://github.com/n-aeee-m/CanteenAutomation",
    exeternal: "https://github.com/n-aeee-m/CanteenAutomation",
    desc: "Canteen Automation Using Django and Flutter",
    tech: [{ stack: "Django" }, { stack: "Sqlite3" }, { stack: "Flutter" }],
  },
  // {
  //   title: "Apni Career",
  //   source: "https://github.com/akhil-s-kumar/apnicareer-webapp",
  //   exeternal: "https://www.apnicareer.com/",
  //   desc: "Easiest tool to find your perfect job",
  //   tech: [{ stack: "React" }, { stack: "GraphQL" }, { stack: "Node JS" }],
  // },
  // {
  //   title: "Django Blog App",
  //   source: "https://github.com/akhil-s-kumar/django-blog-app",
  //   exeternal: "https://akhil-s-kumar.github.io/projects",
  //   desc: "A complete Blog application",
  //   tech: [{ stack: "React" }, { stack: "GraphQL" }, { stack: "Django" }],
  // },
  // {
  //   title: "Covid-19 Stats",
  //   source: "https://github.com/akhil-s-kumar/COVID-19",
  //   exeternal: "https://akhil-s-kumar.github.io/COVID-19/",
  //   desc: "Tool to find complete stats and vaccination availability",
  //   tech: [{ stack: "HTML" }, { stack: "CSS" }, { stack: "Django" }],
  // },
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
