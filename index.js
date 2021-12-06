let count = 1;
function loadData() {
  let i = 0;
  //   console.log("Test");
  const target = document.getElementById("textdiv");
  while (i < 25) {
    const div = document.createElement("div");
    div.innerHTML = `This is line number ${count}`;
    target.append(div);
    i++;
    count++;
  }
}
loadData();

function showDetails() {
  const target = document.getElementById("textdiv");
  let height = target.scrollHeight;
  const heightele = document.getElementById("height");
  heightele.innerHTML = `Height is ${height}`;
}

function showScroll() {
  const target = document.getElementById("textdiv");
  //   const heightele = document.getElementById("scrollheight");
  const top = target.scrollTop;
  //   console.log("top:", top);
  //   heightele.innerHTML = `Scrolled height is ${top}`;
  let height = target.scrollHeight;
  let client = target.clientHeight;
  //   console.log(
  //     height,
  //     client,
  //     Math.round(top),
  //     target.scrollHeight,
  //     Math.abs(target.scrollTop),
  //     target.clientHeight,
  //     "HEIGHTS"
  //   );
  if (
    height === Math.round(top) + client ||
    height - 1 === Math.round(top) + client ||
    height === Math.round(top) + client - 1
  ) {
    console.log("Equals", height, client, Math.round(top));
    loadData();
  }
  if (top === 0) {
    target.innerHTML = null;
    count = 1;
    loadData();
  }
}
