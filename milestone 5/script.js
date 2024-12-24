let form = document.querySelector("#input");
let ready = document.querySelector("#ready");
let body = document.querySelector("body");
let title = document.querySelectorAll(".title");
let left = document.querySelectorAll("#left");
let generate = document.querySelector("#generate");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  let name = document.querySelector("input[name='name']").value;
  let designation = document.querySelector("input[name='designation']").value;
  let mobile = document.querySelector("input[name='mobile']").value;
  let email = document.querySelector("input[name='email']").value;
  let linkedin = document.querySelector("input[name='website']").value;
  let github = document.querySelector("input[name='website1']").value;
  let summary = document.querySelector("textarea[name='summary']").value;
  let experience = document.querySelector("textarea[name='Experience']").value;
  let education = document.querySelector("textarea[name='Education']").value;
  let certifications = document.querySelector("textarea[name='Certifications']").value;
  let skills = document.querySelector("textarea[name='Skills']").value;

  let username = name.replace(/\s+/g, '-').toLowerCase();
  let uniqueURL = `${window.location.origin}/resume/${username}`;

  let resume = 
  `<body>
  <div class="title" >
    <h1 contenteditable="true">${name}</h1>
    <h2 contenteditable="true">${designation}</h2>
    <p contenteditable="true">
       ${mobile} . ${email} .  <a href="${linkedin}" target="_blank">${linkedin}</a> . <a href="${github}" target="_blank">${github}</a>
    </p>
    <h3>Summary</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title" >
    <h4 contenteditable="true">${summary}</h4>
    <h3>Experience</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title" >
    <h4 id="left">
    <ul contenteditable="true">
      ${experience.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h4>
    <h3>Education</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title" >
    <h4 id="left">
    <ul contenteditable="true">
      ${education.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </h4>
    <h3>Certifications</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title">
    <h4 id="left">
    <ul contenteditable="true">
      ${certifications.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h3>Skills</h3>
    <hr size="4" color="black" />
    </div>
    <div>
    <h4 id="left">
    <ul contenteditable="true">
      ${skills.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </h4>
    </div>
    </body>
    
    <div class="actions">
    <p>Share your resume: <a href="${uniqueURL}" target="_blank">${uniqueURL}</a></p>
    <button id="downloadPdf">Download as PDF</button>
  </div>
    `;

  ready.innerHTML = resume;

  document.querySelector("#downloadPdf").addEventListener("click", () => {
  console.log("this is running")
    const doc = new jsPDF();
    doc.html(ready, {
      callback: function (doc) {
        doc.save(`${username}_resume.pdf`);
      },
    });
  }); 
});

