function coisa() {
  console.log("oi");
};

const coisa = () => { console.log("oi"); };

const coisa = () => console.log("oi");

const coisa = function () {
  console.log("oi");
};

//Formas diferentes de passar callback para uma função
function comCallBack(callback) {
  callback()
}

comCallBack(coisa);

comCallBack(() => { console.log("oi"); });

comCallBack(() => console.log("oi"));

comCallBack(function () {
  console.log("oi");
});