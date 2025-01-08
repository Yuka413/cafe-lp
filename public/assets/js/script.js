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
const intersectionObserver = new IntersectionObserver(function (
  entries,
  observer
) {
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

let winHeight, winScroll, scrollPos;
$(window).on("load scroll", function () {
  winScroll = $(window).scrollTop();
  winHeight = $(window).height();
  scrollPos = winHeight * 0.9 + winScroll;
  $(".slide-in").each(function () {
    if ($(this).offset().top <= scrollPos) {
      $(this).addClass("show");
    }
  });
});

// 一文字ずつ表示
$(document).ready(function () {
  // 初期化: テキストを分割して <span> にラップ
  $(".js-typing").each(function () {
    let text = $(this).text().trim(); // 元のテキストを取得して余計な空白を除去
    let html = "";
    text.split("").forEach(function (char) {
      // 空白文字はそのまま扱う
      html += `<span>${char === " " ? "&nbsp;" : char}</span>`;
    });
    $(this).html(html); // 元のテキストを置き換え
  });

  // タイピングアニメーション関数
 // タイピングアニメーション関数
 function TextTypingAnime() {
  $(".js-typing").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var $this = $(this);

    // 1回だけ発火する条件: 画面内に入り、かつ active クラスが付いていない場合
    if (scroll >= elemPos - windowHeight && !$this.hasClass("active")) {
      $this.addClass("active"); // フラグとして active クラスを付与
      let thisChild = $this.children(); // spanタグを取得
      thisChild.each(function (i) {
        var time = 130; // アニメーション速度
        $(this)
          .delay(time * i)
          .fadeIn(time);
      });
    }
  });
}

  // スクロールイベントでアニメーションを実行
  $(window).on("scroll", function () {
    TextTypingAnime();
  });

  // 初期状態でアニメーションを実行
  TextTypingAnime();
});
