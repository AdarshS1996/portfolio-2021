loadMiscCards();

function loadMiscCards() {
    var miscCards = document.getElementById("misc-cards");
    miscCards.innerHTML = "";
    miscs.forEach((misc, index) => {
        miscCards.insertAdjacentHTML("beforeend",
            `
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="${100 * (index+1)}" class="col-md-4 col-sm-6 col-xs-12 card-padding">
                <div class="card h-100 misc-card" onClick="loadSingleMiscInModal(${index})">
                    <div class="card-body">
                        ${misc.shortDescription}
                    </div>
                </div>
            </div>
            `
        );
    });
}

function loadSingleMiscInModal(miscIndex) {
    var misc = miscs[miscIndex];

    document.getElementById("is-project-click").style.display = "none";
    document.getElementById("is-work-click").style.display = "block";

    var modalWorkContent = document.getElementById("modal-work-content");
    var modalMainHeadingBegin = document.getElementById("modal-main-work-heading-begin");
    var modalMainHeadingEnd = document.getElementById("modal-main-work-heading-end");

    modalMainHeadingBegin.innerText = "work";
    
    modalWorkContent.innerText = misc.longDescription;
    

    modalMainHeadingEnd.innerText = "work";

    showModal();
}