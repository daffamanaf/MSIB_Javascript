function hitung(itung) {
  //tangkap id form
  var frm = document.getElementById("calcForm");
  var a1 = parseFloat(frm.bilangan1.value);
  var a2 = parseFloat(frm.bilangan2.value);

  switch (itung) {
    case "btn_tambah":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Anda Harus Memasukkan Bilangan");
      } else {
        var total = a1 + a2;
        frm.hasil.value = total;
      }
      break;
    case "btn_kurang":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Anda Harus Memasukkan Bilangan");
      } else {
        var total = a1 - a2; 
        frm.hasil.value = total; 
      }
      break;
    case "btn_bagi":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Anda Harus Memasukkan Bilangan");
      } else {
        var total = a1 / a2;
        frm.hasil.value = total; 
      }
      break;
    case "btn_kali":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Anda Harus Memasukkan Bilangan");
      } else {
        var total = a1 * a2;
        frm.hasil.value = total;
      }
      break;
    case "btn_pangkat":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Anda Harus Memasukkan Bilangan");
      } else {
        var total = a1 ** a2;
        frm.hasil.value = total;
      }
      break;
    default:
      break;
  }
}