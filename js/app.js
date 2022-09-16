
const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("nav")) {
    menu.classList.remove("nav");
    menu.style.display = "none"
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("nav");
    menu.style.display = "block"
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

const mapPin = document.querySelector("#Qoraqalpogiston-pin")
const navoiyPin = document.querySelector("#Navoiy-pin")
const buxoroPin = document.querySelector("#Buxoro-pin")
const xorazmPin = document.querySelector("#Xorazm-pin")
const qashqadaryoPin = document.querySelector("#Qashqadaryo-pin")
const samarqandPin = document.querySelector("#Samarqand-pin")
const surxondaryoPin = document.querySelector("#Surxondaryo-pin")
const jizzaxPin = document.querySelector("#Jizzax-pin")
const sirdaryoPin = document.querySelector("#Sirdaryo-pin")
const toshkentPin = document.querySelector("#Toshkent-pin")
const namanganPin = document.querySelector("#Namangan-pin")
const fargonaPin = document.querySelector("#Fargona-pin")
const andijonPin = document.querySelector("#Andijon-pin")
const pin = document.querySelector(".pin")
const pulse = document.querySelector(".pulse")
const qoraqalpogiston = document.querySelector(".Qoraqalpogiston")
const Navoiy = document.querySelector(".Navoiy")
const Buxoro = document.querySelector(".Buxoro")
const Xorazm = document.querySelector(".Xorazm")
const Qashqadaryo = document.querySelector(".Qashqadaryo")
const Samarqand = document.querySelector(".Samarqand")
const Surxondaryo = document.querySelector(".Surxondaryo")
const Jizzax = document.querySelector(".Jizzax")
const Sirdaryo = document.querySelector(".Sirdaryo")
const Toshkent = document.querySelector(".Toshkent")
const Namangan = document.querySelector(".Namangan")
const Fargona = document.querySelector(".Fargona")
const Andijon = document.querySelector(".Andijon")

  function qorqalpoq() {
    if (qoraqalpogiston.classList.contains(".Qoraqalpogiston")) {
        mapPin.style.display = "none";
    } else {
        qoraqalpogiston.style.fill = "#E2DAC9"
        mapPin.style.display = "block";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  qoraqalpogiston.addEventListener("click", qorqalpoq);

  function navoiyFun() {
    if (Navoiy.classList.contains(".Navoiy")) {
        navoiyPin.style.display = "none";
    } else {
        Navoiy.style.fill = "#E2DAC9";
        navoiyPin.style.display = "block";
        qoraqalpogiston.style.fill = "";
        mapPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Navoiy.addEventListener("click", navoiyFun);

  function buxoroFun() {
    if (Buxoro.classList.contains(".Buxoro")) {
        buxoroPin.style.display = "none";
    } else {
        Buxoro.style.fill = "#E2DAC9";
        buxoroPin.style.display = "block";
        qoraqalpogiston.style.fill = "";
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Buxoro.addEventListener("click", buxoroFun);

  function xorazmFun() {
    if (Xorazm.classList.contains(".Xorazm")) {
        xorazmPin.style.display = "none";
    } else {
        Xorazm.style.fill = "#E2DAC9";
        xorazmPin.style.display = "block";
        qoraqalpogiston.style.fill = "";
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Xorazm.addEventListener("click", xorazmFun);

  function qashqadaryoFun() {
    if (Qashqadaryo.classList.contains(".Qashqadaryo")) {
        qashqadaryoPin.style.display = "none";
    } else {
        Qashqadaryo.style.fill = "#E2DAC9";
        qashqadaryoPin.style.display = "block";
        qoraqalpogiston.style.fill = "";
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Qashqadaryo.addEventListener("click", qashqadaryoFun);

  function samarqandFun() {
    if (Samarqand.classList.contains(".Samarqand")) {
        samarqandPin.style.display = "none";
    } else {
        Samarqand.style.fill = "#E2DAC9";
        samarqandPin.style.display = "block";
        qoraqalpogiston.style.fill = "";
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Samarqand.addEventListener("click", samarqandFun);

  function surxondaryoFun() {
    if (Surxondaryo.classList.contains(".Qoraqalpogiston")) {
        samarqandPin.style.display = "none";
    } else {
        Surxondaryo.style.fill = "#E2DAC9"
        surxondaryoPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Surxondaryo.addEventListener("click", surxondaryoFun);

  function jizzaxFun() {
    if (Jizzax.classList.contains(".Jizzax")) {
        jizzaxPin.style.display = "none";
    } else {
        Jizzax.style.fill = "#E2DAC9";
        jizzaxPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Jizzax.addEventListener("click", jizzaxFun);

  function sirdaryoFun() {
    if (Sirdaryo.classList.contains(".Sirdaryo")) {
        sirdaryoPin.style.display = "none";
    } else {
      Sirdaryo.style.fill = "#E2DAC9"
      sirdaryoPin.style.display = "block";
      qoraqalpogiston.style.fill = ""
      mapPin.style.display = "none";
      Navoiy.style.fill = "";
      navoiyPin.style.display = "none";
      Buxoro.style.fill = "";
      buxoroPin.style.display = "none";
      Xorazm.style.fill = "";
      xorazmPin.style.display = "none";
      Qashqadaryo.style.fill = "";
      qashqadaryoPin.style.display = "none";
      Samarqand.style.fill = "";
      samarqandPin.style.display = "none";
      Surxondaryo.style.fill = "";
      surxondaryoPin.style.display = "none";
      Jizzax.style.fill = "";
      jizzaxPin.style.display = "none";
      Toshkent.style.fill = "";
      toshkentPin.style.display = "none";
      Namangan.style.fill = "";
      namanganPin.style.display = "none";
      Fargona.style.fill = "";
      fargonaPin.style.display = "none";
      Andijon.style.fill = ""
      andijonPin.style.display = "none";
    }
  }
  Sirdaryo.addEventListener("click", sirdaryoFun);

  function toshkentFun() {
    if (Toshkent.classList.contains(".Toshkent")) {
        toshkentPin.style.display = "none";
    } else {
        Toshkent.style.fill = "#E2DAC9"
        toshkentPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Toshkent.addEventListener("click", toshkentFun);

  function namanganFun() {
    if (Namangan.classList.contains(".Namangan")) {
        namanganPin.style.display = "none";
    } else {
        Namangan.style.fill = "#E2DAC9"
        namanganPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Namangan.addEventListener("click", namanganFun);

  function fargonaFun() {
    if (Fargona.classList.contains(".Fargona")) {
        fargonaPin.style.display = "none";
    } else {
        Fargona.style.fill = "#E2DAC9"
        fargonaPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Andijon.style.fill = ""
        andijonPin.style.display = "none";
    }
  }
  Fargona.addEventListener("click", fargonaFun);

  function andijonFun() {
    if (Andijon.classList.contains(".Andijon")) {
        andijonPin.style.display = "none";
    } else {
        Andijon.style.fill = "#E2DAC9"
        andijonPin.style.display = "block";
        qoraqalpogiston.style.fill = ""
        mapPin.style.display = "none";
        Navoiy.style.fill = "";
        navoiyPin.style.display = "none";
        Buxoro.style.fill = "";
        buxoroPin.style.display = "none";
        Xorazm.style.fill = "";
        xorazmPin.style.display = "none";
        Qashqadaryo.style.fill = "";
        qashqadaryoPin.style.display = "none";
        Samarqand.style.fill = "";
        samarqandPin.style.display = "none";
        Surxondaryo.style.fill = "";
        surxondaryoPin.style.display = "none";
        Jizzax.style.fill = "";
        jizzaxPin.style.display = "none";
        Sirdaryo.style.fill = "";
        sirdaryoPin.style.display = "none";
        Toshkent.style.fill = "";
        toshkentPin.style.display = "none";
        Namangan.style.fill = "";
        namanganPin.style.display = "none";
        Fargona.style.fill = "";
        fargonaPin.style.display = "none";
    }
  }
  Andijon.addEventListener("click", andijonFun);

