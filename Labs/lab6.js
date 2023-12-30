











const src = "https://img.pokemondb.net/sprites/black-white/anim/normal/";

const iChooseYou = () => {
  const pkmn = $(".pkmn");
  pkmn.removeClass("exit");
  setTimeout(() => {
    const poke1 = pokes[Math.floor(Math.random()*pokes.length)];
    const poke2 = pokes[Math.floor(Math.random()*pokes.length)];
    $("#app").attr(`style`,`
      --poke1:url(${src}${poke1}.gif);
      --poke2:url(${src}${poke2}.gif);
    `);
    pkmn.addClass("exit");
  },100);
  clearTimeout(timer);
  timer = setTimeout(iChooseYou,9000);
}

$("body").on("click", iChooseYou);
let timer = setTimeout(iChooseYou,6000);



$("input").on("change", (e) => {
  if ( $(e.currentTarget).is(":checked") ) {
    $("body").attr(`style`,`--slowmo: 5s; --slowsplode: 2s`);
  } else {
    $("body").attr("style","");
  }
})






const pokes = [
  "bulbasaur",
  "squirtle",
  "charmander",
  "chikorita",
  "totodile",
  "cyndaquil",
  "pikachu",
  "eevee",
  "jigglypuff",
  "psyduck",
  "togepi",
  "meowth"
];