
const pages=[
["dashboard.html","Dashboard","⌂"],["students.html","Students","●"],["applications.html","Applications","▣"],
["documents.html","Documents","▤"],["universities.html","Universities & Courses","⌘"],["counseling.html","Counseling","◎"],
["appointments.html","Appointments & Follow-ups","◷"],["staff.html","Staff & Sub-Agents","♙"],["finance.html","Finance","৳"],["reports.html","Reports & Settings","◫"]
];
function initPage(active){
 const u=JSON.parse(localStorage.getItem("omsUser")||"null");
 if(!u){location.href="index.html";return}
 document.getElementById("userName").textContent=u.email.split("@")[0];
 document.getElementById("userRole").textContent=u.role;
 document.getElementById("avatar").textContent=u.role[0];
 const nav=document.getElementById("nav");
 nav.innerHTML=pages.map(p=>`<a class="${p[0]===active?'active':''}" href="${p[0]}"><span>${p[2]}</span>${p[1]}</a>`).join("");
 document.getElementById("logout").onclick=()=>{localStorage.removeItem("omsUser");location.href="index.html"};
 document.getElementById("theme").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("dark",document.body.classList.contains("dark"))};
 if(localStorage.getItem("dark")==="true")document.body.classList.add("dark");
 document.getElementById("menu").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
}
