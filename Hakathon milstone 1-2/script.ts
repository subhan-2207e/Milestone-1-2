document.getElementById("resumeform")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const addrElement = document.getElementById("address") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const usernameElement = document.getElementById("username") as HTMLInputElement;
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      addrElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const address = addrElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      // Profile Picture
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
      const resumeOutput = `
          <h2>Curriculum Vitae</h2>
          ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture"><br>` : ""}
          <p><strong>Full Name :</strong> ${name}</p><br>
          <p><strong>Email Address :</strong> ${email}</p><br>
          <p><strong>Contact Number :</strong> ${phone}</p><br>
          <p><strong>Residential Address :</strong> ${address}</p><br>
          <p><strong>Academic Qualifications :</strong><br> ${education}</p><br>
          <p><strong>Work Experience :</strong><br> ${experience}</p><br>
          <p><strong>Professional Skills :</strong><br> ${skills}</p><br>
        `;
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        // PDF Download Button
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download PDF';
        downloadButton.onclick = function () {
          const elementToConvert = document.getElementById("resumeOutput");
          if (elementToConvert) {
            html2pdf().from(elementToConvert).save(`${name.replace(/\s+/g, '_')}_resume.pdf`);
            downloadButton.style.display = 'none';
          }
        };
        resumeOutputElement.appendChild(downloadButton);
        resumeOutputElement.style.display = 'block';
      } else {
        console.error("Resume output element not found");
      }
    } else {
      console.error("One or more input fields are missing");
    }
  });

