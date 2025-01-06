// modalオープン
$(".p-contact__checkbox-text--privacy").on("click", function () {
  $("#js-about-modal")[0].showModal();
});

$(".js-modal-close").on("click", function (event) {
  event.preventDefault();
  $("#js-about-modal")[0].close();
});

// ページトップへ戻るボタン
$("#pagetop").on("click", function (event) {
  event.preventDefault();
  window.scroll({ top: 0, behavior: "smooth" });
});

// aタグのhref属性の最初が＃で始まるものについてという指定
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 1000;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const offset = 130;
  const position = jQuery(target).offset().top - offset;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

//   ふわっと表示
const intersectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
      observer.unobserve(entry.target);
    } 
  });
});

const inViewItems = document.querySelectorAll(".fade-in-up");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});


let winHeight,winScroll,scrollPos;
$(window).on('load scroll',function(){
	winScroll = $(window).scrollTop();
	winHeight = $(window).height();
	scrollPos = winHeight * 0.9 + winScroll;
	$(".slide-in").each(function(){
		if($(this).offset().top <= scrollPos){
			$(this).addClass("show");
		}
	});
});


// 一文字ずつ表示
const typeTarget = document.querySelectorAll('#js-typing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.textContent;
            let typeSprit = typeContent.split('');
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.textContent = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                entry.target.textContent += typeSprit[typeLength];
                typeLength++;
            }, typeSpeed);

        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});