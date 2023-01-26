const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  Swal.fire({
    icon: "error",
    title: "اطلاعات وارد شده اشتباه است",
    text: "اگر قبلا ثبت نام نکرده اید وارد بخش ثبت نام شوید!",
    showCloseButton: true,
    showCancelButton: false,
    confirmButtonText: "کنسل"
  });
});
