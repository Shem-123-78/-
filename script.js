document.addEventListener("DOMContentLoaded", () => {
  console.log("Lam3a Pro UI Loaded");
});
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ تم تأكيد الحجز بنجاح!");
});
// نطبق الحركة على كل رابط من نوع <a> مع href
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const url = this.getAttribute('href');
    // فقط إذا كان href موجود وغير # (لتجنب الروابط الداخلية)
    if(url && url !== "#") {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = url;
      }, 500); // مدة التلاشي
    }
  });
});
const carousel = document.querySelector('#reviewsCarousel');
if (carousel) {
  carousel.addEventListener('slide.bs.carousel', (e) => {
    carousel.style.transition = 'transform 0.6s ease-in-out';
  });
}


