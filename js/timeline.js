const data = [
  {
    title: "Web Dev Lead at ACM Club 💻",
    date: "Oct 24, 2022",
    desc: "Association for Computing Machinery Club web dev lead at Amrita Vishwa Vidyapeetham, Amritapuri Campus.",
  },
  {
    title: "Tata Elxsi Mentorship 👨‍🏫",
    date: "Jul 24, 2022",
    desc: "Got oppurtunity to get Mentored by V Srikanth, Product and Competency Manager, Tata Elxsi.",
  },
  {
    title: "ISRO Internship 🚀",
    date: "Jan 16, 2022",
    desc: "Got oppurtunity to work on a project based on Identification of Features in a Remote Sensing Data using Deep Learning and Neural Network wich was guided by Scientists at NRSC, Hyderabad.",
  },
  {
    title: "Hacktoberfest 21",
    date: "Oct 16, 2021",
    desc: "Sucessfully merged three PR's for a Open Source Project.",
  },
  {
    title: "Joined amFOSS ✨",
    date: "Dec 16, 2020",
    desc: "amFOSS is the Free and Open Source Software club of Amrita Vishwa Vidyapeetham, Amritapuri.",
  },
];

const timelineContainer = document.getElementById("timelineContainer");
const timelines = data.map((timeline, i) => {
  return `
        <div class="row content" key='${i}'>
            <div class="col-lg-1 col-md-2 col-sm-3">
                <div class="verticalLine"></div>
                <div class="badgeEle mt-2 mb-2"></div>
                <div class="verticalLine"></div>
            </div>
            <div class="col-lg-11 col-md-10 col-sm-9">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>${timeline.title}</h5>
                            <h4>${timeline.date}</h4>
                        </div>
                        <p class="mt-3">${timeline.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}).join('');

timelineContainer.innerHTML = timelines;
