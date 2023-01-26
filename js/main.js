const signBtn = document.getElementById("signBtn");


signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Swal.fire({
    icon: "success",
    title: "ثبت نام شما با موفقیت انجام شد",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });
});
