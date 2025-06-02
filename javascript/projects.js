loadProjects(projects.slice(0,6));

function loadProjects(projects) {
    var projectCards = document.getElementById("project-cards");
    projectCards.innerHTML = "";
    projects.forEach((project, index) => {
        projectCards.insertAdjacentHTML("beforeend",
            `
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="${100 * (index+1)}" class="card-padding col-md-4 col-sm-6 col-xs-12">
                <div class="card projects-card h-100" onClick="loadSingleProjectInModal(${index})">
                    <div class="card-body projects-card-body">
                        <div>
                            <h5 class="card-title project-card-title">${project.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted project-card-subtitle">${project.period}</h6>
                            <p class="card-text">${project.responsibility}</p>
                            </div>
                            <div class="project-card-role">
                            ${loadProjectRoles(project.roles)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
}

function loadProjectRoles(projectRoles) {
    projectRolesHTML = "";
    projectRoles.forEach(role => {
        projectRolesHTML = projectRolesHTML + `<a class="card-link project-role-text">${role}</a>`;
    });
    return projectRolesHTML;
}

function showMoreButtonClick() {
    var projectShowButton = document.getElementById("show-projects");
    var projectsToLoad = projects;
    if (projectShowButton.innerHTML == "Show more") {
        projectShowButton.innerHTML = "Show less";
    }
    else {
        projectShowButton.innerHTML = "Show more";
        projectsToLoad = projects.slice(0,6);
    }
    loadProjects(projectsToLoad);
}

function loadSingleProjectInModal(projectIndex) {
    var project = projects[projectIndex];

    document.getElementById("is-project-click").style.display = "block";
    document.getElementById("is-work-click").style.display = "none";
    var modalMainHeadingBegin = document.getElementById("modal-main-heading-begin");
    var modalMainHeadingEnd = document.getElementById("modal-main-heading-end");
    var modalSubHeading = document.getElementById("modal-sub-heading");
    var modalSubTitle = document.getElementById("modal-sub-title");
    var modalProblemContent = document.getElementById("modal-problem-content");
    var modalSolutionContent = document.getElementById("modal-solution-content");
    var modalResponsibilityContent = document.getElementById("modal-responsibility-content");
    var modalTechUsedContent = document.getElementById("modal-tech-used-content");

    modalMainHeadingBegin.innerText = "project";
    
    modalSubHeading.innerText = project.name;
    modalSubTitle.innerText = project.period;
    modalProblemContent.innerText = project.problem;
    modalSolutionContent.innerText = project.solution;
    modalResponsibilityContent.innerText = project.responsibility;
    modalTechUsedContent.innerText = project.technologiesUsed;

    modalMainHeadingEnd.innerText = "project";

    showModal();
}
