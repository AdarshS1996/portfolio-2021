loadAppreciations();
function loadAppreciations() {
    var appreciationSwiper = document.getElementById("appreciation-swiper");
    appreciationSwiper.innerHTML = `
                                    <div class="swiper mySwiper">
                                        <div class="swiper-wrapper">
                                            ${loadAppreciationQuotes()}
                                        </div>
                                        <div class="swiper-button-next"></div>
                                        <div class="swiper-button-prev"></div>
                                    </div>
                                    `;

}

function loadAppreciationQuotes() {
    var appreciationQuoteHTML = "";
    appreciations.forEach(appreciation => {
        appreciationQuoteHTML += `
                                 <div class="swiper-slide">
                                    <div class="row quote-row">
                                        <div class="col-md-12 col-sm-12 col-xs-12 quote">
                                            <div>
                                                <div>
                                                    ${appreciation.comment}
                                                </div>
                                                <div class="person">
                                                    - ${appreciation.by}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 `;
    });
    return appreciationQuoteHTML;
}

// var swiper = new Swiper(".mySwiper", {
//     speed: 1500,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     }
// });

// setTimeout(() => {
//     swiper.autoplay.start();
// }, 5000);