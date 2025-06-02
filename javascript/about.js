loadAboutSection();

function loadAboutSection() {
    var aboutDescriptions = document.getElementById("about-descriptions");
    aboutDescriptions.innerHTML = `
                                  <div class="row">
                                    <div class="col-md-8 col-sm-12 col-xs-12">
                                        ${loadAboutDescriptions()}
                                        ${loadTechnologyAndSkills()}
                                    </div>
                                    <div class="col-md-4 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                        <div class="mb-28 zi-10">
                                            <img class="profile-image" src="./assets/profile-img.jpg" height="150px" />
                                        </div>
                                    </div>
                                  </div>
                                  `;

}

function loadAboutDescriptions() {
    var aboutDescriptionsHTML = "";
    abouts.forEach(about => {
        aboutDescriptionsHTML += `
                                 <div class="about-text">${about}</div>
                                 `;
    });
    return aboutDescriptionsHTML;
}

function loadTechnologyAndSkills() {
    var technologyAndSkillsSection = "";
    technologyAndSkillsSection = `
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    ${loadTechAndSkillsAccordion(technologiesAndSkills)}
                                </div>
                                `;
    return technologyAndSkillsSection;
}

function loadTechAndSkillsAccordion(technologiesAndSkills) {
    techAndSkillsHTML = "";
    Object.keys(technologiesAndSkills).forEach((techAndSkills, index) => {
        techAndSkillsHTML = techAndSkillsHTML + 
        `
        <div class="panel panel-default" data-aos="fade-up" data-aos-duration="500" data-aos-delay="${100 * (index+1)}">
            <div class="panel-heading" role="tab" id="headingOne">
                <div class="panel-title">
                    <div class="collapse-button" role="button" data-toggle="collapse" data-parent="#accordion" 
                    href="#${techAndSkills.slice(0,4)}" aria-expanded="false" aria-controls="collapseOne"
                    onClick="toggleAccordionSymbol('${techAndSkills.slice(0,4)}')">
                    ${techAndSkills}
                    <i name="${techAndSkills.slice(0,4)}" class="fa fa-lg fa-angle-down float-right" style="padding-top: 5px;"></i>
                    </div>
                </div>
            </div>
            <div id="${techAndSkills.slice(0,4)}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body about-panel-body">
                    <div class="row about-panel-border-radius">
                        ${loadTechnologyAndSkillValues(technologiesAndSkills[techAndSkills])}
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    return techAndSkillsHTML;
}

function loadTechnologyAndSkillValues(technologyAndSkillValues) {
    techAndSkillCards = "";
    technologyAndSkillValues.forEach(techAndSkills => {
        techAndSkillCards = techAndSkillCards + 
        `
            <div class="card-about-padding col-md-3 col-sm-6 col-xs-12">
                <div class="card about-card h-100">
                    <div class="card-body about-card-body">${techAndSkills}</div>
                </div>
            </div>
        `;
    });
    return techAndSkillCards;
}

function toggleAccordionSymbol(accordionId) {
    var accordionAngle = document.getElementsByName(accordionId)[0];
    accordionAngle.style.transition = "transform 0.25s";
    if (accordionAngle.style.transform == "rotate(-180deg)") {
        accordionAngle.style.transform = "rotate(0deg)";
    }
    else if (accordionAngle.style.transform == "" || accordionAngle.style.transform == "rotate(0deg)") {
        accordionAngle.style.transform = "rotate(-180deg)";
    }
}