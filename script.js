let originSearch = {
  src: "weijingjaylin@gmail.com",
  ctz: "America/Los_Angeles"
}
// @ref: https://stackoverflow.com/questions/2269192/use-a-custom-url-to-get-a-customized-printable-version-of-google-calendar
let argKeys = [
  "mode",
  "wkst",
  "hl",
  "pgsz",
  "dates",
  "src",
  "ctz",
  "src",
  "pfs",
  "po",
  "psdec",
  "pbw",
  "pjs",
  "rand",
  "pda",
];
let search = {};
let iframeSrc = "https://calendar.google.com/calendar/embed?";
let ifNewURL = false;
window
  .location
  .search
  .substring(1)
  .split("&")
  .forEach(s => {
    let parts = s.split("=");
    search[parts[0]] = parts[1];
  });

if (Object.keys(search).every(item => argKeys.includes(item))) {
  search = {
    ...originSearch,
    ...search
  };
  for (let key in search) {
    iframeSrc += `${key}=${search[key]}&`;
  }
  ifNewURL = true;
}

if (ifNewURL) document.querySelector("iframe").src = iframeSrc;
