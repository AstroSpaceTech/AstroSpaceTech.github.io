var coll = document.getElementsByClassName("collapsible");

console.log(coll);
for (let i = 0; i < coll.length; i++) {
  console.log(i);
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    print(content)
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log("none");
    } else {
      content.style.display = "block";
      console.log("block");
    }
  });
}