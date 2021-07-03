const btn_filter = document.querySelector("#search .filter .btn_solid");
const filter = document.querySelector("#filter");
const close_filter = document.querySelector("#filter .top .btn_close");
// const title = document.querySelector("#search .title");
// const bar = document.querySelector("#search .bar");

btn_filter.addEventListener("click", () => {
    filter.classList.add("filter_enable");
    // title.classList.add("title_hide");
    // bar.classList.add("bar_hide");
});

close_filter.addEventListener("click", () => {
    filter.classList.remove("filter_enable"); 
    // title.classList.remove("title_hide");
    // bar.classList.remove("bar_hide");
});