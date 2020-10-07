var dragonHp = 0;
function DealDmg(damage, attacktype, character) {
  if ("Fire" == attacktype){
    dragonHp = dragonHp + damage - 1
    document.body.querySelector(".dragonHP").innerHTML = dragonHp
  }
  if ("Ice" == attacktype) {
    dragonHp = dragonHp + (damage + 1)
    document.body.querySelector(".dragonHP").innerHTML = dragonHp
  }
  if ("Poison" == attacktype) {
    dragonHp = dragonHp + damage
    document.body.querySelector(".dragonHP").innerHTML = dragonHp
  }
  if ((dragonHp >= 10)){
  document.body.querySelector(".dragonHP").innerHTML = "Victory";
}
}
document.body.querySelector("#button1").addEventListener("click", function () {
  DealDmg(3, "Fire", "Lizard Dan");
});
document.body.querySelector("#button2").addEventListener("click", function () {
  DealDmg(1, "Ice", "Lizard Dan");
});
document.body.querySelector("#button3").addEventListener("click", function () {
  DealDmg(4, "Poison", "Lizard Dan");
});
document.body.querySelector(".dragonHP").innerHTML = dragonHp;