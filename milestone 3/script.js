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

  let resume = 
  `<body>
  <div class="title">
    <h1>${name}</h1>
    <h2>${designation}</h2>
    <p>
       ${mobile} . ${email} .  <a href="${linkedin}" target="_blank">${linkedin}</a> . <a href="${github}" target="_blank">${github}</a>
    </p>
    <h3>Summary</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title">
    <h4>${summary}</h4>
    <h3>Experience</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title">
    <h4 id="left">
    <ul>
      ${experience.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h4>
    <h3>Education</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title">
    <h4 id="left">
    <ul>
      ${education.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </h4>
    <h3>Certifications</h3>
    <hr size="4" color="black" />
    </div>
    <div class="title">
    <h4 id="left">
    <ul>
      ${certifications.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h3>Skills</h3>
    <hr size="4" color="black" />
    </div>
    <h4 id="left">
    <ul>
      ${skills.split("\n").map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </h4>
    </body>`;

  ready.innerHTML = resume;
});
