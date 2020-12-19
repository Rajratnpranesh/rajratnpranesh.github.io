let coll = document.getElementsByClassName("collapsible-btn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.parentNode.nextElementSibling;
    if (content.style.maxHeight) {
      //this.innerHTML = "<span style='color: #cc3900;'>[TLDR]]</span>";
      this.innerText = "[TLDR]";
      content.style.maxHeight = null;
    } else {
      //this.innerText = "-";
      this.innerHTML = "<span style='font-size: 1.5rem;'>-</span>";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

feather.replace();
