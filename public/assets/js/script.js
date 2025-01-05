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
