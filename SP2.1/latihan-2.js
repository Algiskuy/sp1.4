function balok(p, l, t) {
  document.write("p = ", p, " cm", "<br>");
  document.write("l = ", l, " cm", "<br>");
  document.write("t = ", t, " cm", "<br>");

  var volume = p * l * t;
  var luas1 = 2 * p * l + 2 * p * t + 2 * l * t;

  document.write("Volume balok = p x l x t = ", volume, " cm3", "<br>");
  document.write(
    "Luas permukaan balok = (2.p.l)+(2.p.t)+(2.l.t) = ",
    luas1,
    " cm2"
  );
}
balok(10, 6, 5);
