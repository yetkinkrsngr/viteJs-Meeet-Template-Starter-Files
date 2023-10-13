import "./style.css";
import { displayNavbar } from "./components/nav";
import { displaySection } from "./components/section.js";
document.querySelector("#app").innerHTML = `
<main>
  ${displayNavbar()}
  ${displaySection()}
  </main>
`;
