/* =========================================================
   A&B Tours and Travels — Shared code for every page
   Loaded on: index, about, packages, contact
   ========================================================= */

const K_PKG = "ab_packages_v1";
const K_SET = "ab_settings_v1";
const K_TES = "ab_testimonials_v1";

function abLoad(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(!raw) return JSON.parse(JSON.stringify(fallback));
    const val = JSON.parse(raw);
    return (val && (Array.isArray(val) ? val.length : Object.keys(val).length))
      ? val : JSON.parse(JSON.stringify(fallback));
  }catch(e){ return JSON.parse(JSON.stringify(fallback)); }
}

let SET  = Object.assign({}, AB_DEFAULT_SETTINGS, abLoad(K_SET, {}));
let PKGS = abLoad(K_PKG, AB_DEFAULT_PACKAGES);
let TES  = abLoad(K_TES, AB_DEFAULT_TESTIMONIALS);

const money   = n => "₹" + Number(n||0).toLocaleString("en-IN");
const waBase  = () => "https://wa.me/" + String(SET.whatsapp||"").replace(/\D/g,"");
const telHref = p => "tel:+91" + String(p||"").replace(/\D/g,"");
const esc     = s => String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;")
                     .replace(/>/g,"&gt;").replace(/"/g,"&quot;");

/* ---------- destinations ---------- */
const DESTS = AB_DESTINATIONS;
const destOf   = id => DESTS.find(d => d.id === id) || DESTS[0];
const destName = id => (DESTS.find(d => d.id === id) || {}).name || "Tour";
/* destinations that actually have at least one live package */
const liveDests = () => DESTS.filter(d => PKGS.some(p => p.active !== false && p.dest === d.id));
/* Image stack for a destination: your photo first, shipped illustration behind.
   If the .jpg isn't there the browser silently skips that layer and the
   illustration shows, so a card never renders empty. Returned as a CSS value
   for the --art custom property, which the stylesheet paints on a ::before. */
function destArt(destId, extra){
  const d = destOf(destId);
  const layers = [];
  if(extra)   layers.push(`url('${extra}')`);
  if(d.image) layers.push(`url('${d.image}')`);
  if(d.art)   layers.push(`url('${d.art}')`);
  return layers.length ? layers.join(",") : "none";
}
/* which part of the photo to keep when it gets cropped */
const destFocus = id => (destOf(id) || {}).focus || "center";

/* cheapest confirmed package for a destination, as a display string.
   Destinations whose prices are all still drafts show "Price on request". */
function destFrom(id){
  const set = PKGS.filter(p => p.active !== false && p.dest === id && !p.draft);
  if(!set.length) return null;
  const p = set.reduce((a,b) => (Number(a.price)||0) <= (Number(b.price)||0) ? a : b);
  return money(p.price) + (p.priceType === "person" ? " per person" : "");
}

/* Generic "hello" WhatsApp link used by header, footer and the float button */
function waHello(extra){
  return waBase() + "?text=" + encodeURIComponent(
    "Hello " + SET.company + ", " + (extra || "I would like to enquire about a Kodaikanal tour package."));
}

/* =========================================================
   NAVIGATION + FOOTER  (injected into every page)
   ========================================================= */
const AB_NAV = [
  { href:"index.html",    label:"Home" },
  { href:"packages.html", label:"Our Packages" },
  { href:"about.html",    label:"About Us" },
  { href:"contact.html",  label:"Contact" }
];

function buildHeader(current){
  const ph1 = (SET.phones && SET.phones[0]) || "99529 53045";
  return `
  <div class="wrap nav">
    <a href="index.html" class="logo">
      <img class="logo-mark" src="Images/logo.png" alt="A&amp;B Tours and Travels logo">
      <div class="logo-text"><b>${esc(SET.company)}</b><span>Dindigul</span></div>
    </a>
    <nav class="menu" id="menu">
      ${AB_NAV.map(n=>`<a href="${n.href}" class="${n.href===current?'active':''}">${n.label}</a>`).join("")}
      <a class="menu-wa" href="${waHello()}" target="_blank" rel="noopener">
        <i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
    </nav>
    <a class="btn-call" href="${telHref(ph1)}"><i class="fa-solid fa-phone"></i>&nbsp; ${esc(ph1)}</a>
    <button class="burger" id="burger" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
  </div>`;
}

function buildFooter(){
  return `
  <div class="wrap">
    <div class="fgrid">
      <div>
        <div class="logo" style="margin-bottom:14px">
          <img class="logo-mark" src="Images/logo.png" alt="A&amp;B Tours and Travels logo">
          <div class="logo-text"><b style="color:#fff">${esc(SET.company)}</b><span>Dindigul</span></div>
        </div>
        <p style="margin-bottom:14px">Kodaikanal tour package specialists based in Dindigul. Cab, stay, food and full sightseeing — arranged end to end.</p>
        <p><i class="fa-solid fa-location-dot"></i> ${esc(SET.address)}</p>
        <div class="fsocial">
          <a href="${waHello()}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="${esc(SET.instagram)}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="${telHref((SET.phones||[])[0])}" aria-label="Call"><i class="fa-solid fa-phone"></i></a>
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="flinks">
          ${AB_NAV.map(n=>`<li><a href="${n.href}">${n.label}</a></li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Our Packages</h4>
        <ul class="flinks">
          <li><a href="packages.html?type=couple">Couple Packages</a></li>
          <li><a href="packages.html?type=family">Family Packages</a></li>
          <li><a href="packages.html?type=offer">Group Offer Packages</a></li>
          <li><a href="packages.html">View All</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul class="flinks">
          ${(SET.phones||[]).map(p=>`<li><a href="${telHref(p)}"><i class="fa-solid fa-phone"></i> ${esc(p)}</a></li>`).join("")}
          <li><a href="${waHello()}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp Us</a></li>
          <li><a href="${esc(SET.instagram)}" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="fbot">
      <span>© <span id="yr"></span> ${esc(SET.company)}, Dindigul. All rights reserved.</span>
      <span><a href="admin.html">Admin Panel</a></span>
    </div>
  </div>`;
}

/* =========================================================
   MATCHING ENGINE (shared by home preview + packages page)
   ========================================================= */
function matchPackages(q){
  const pax = q.adults + q.kids;
  const payingPax = q.adults;

  const pool = PKGS.filter(p => p.active !== false)
                   .filter(p => !q.dest || q.dest === "all" || p.dest === q.dest);

  const scored = pool.map(p => {
    let score = 0;
    const min = Number(p.minPax)||1, max = Number(p.maxPax)||99;

    if(pax >= min && pax <= max) score += 50;
    else if(pax < min) score -= (min - pax) * 14;
    else score -= (pax - max) * 10;

    const dd = Math.abs((Number(p.days)||0) - q.days);
    const nn = Math.abs((Number(p.nights)||0) - q.nights);
    if(dd === 0) score += 30; else score -= dd * 18;
    if(nn === 0) score += 18; else score -= nn * 10;

    if(q.adults === 2 && q.kids === 0 && p.type === "couple") score += 25;
    if(q.kids > 0 && p.type === "family") score += 18;
    if(pax >= 7 && p.type === "offer") score += 22;
    if(pax >= 7 && p.priceType === "total" && p.type !== "offer") score -= 25;
    if(q.adults === 2 && q.kids === 0 && p.type === "offer") score -= 30;

    const total = p.priceType === "person"
      ? Number(p.price) * Math.max(payingPax, min)
      : Number(p.price);

    return { p, score, total, pax };
  });

  scored.sort((a,b) => b.score - a.score || a.total - b.total);
  const good = scored.filter(s => s.score >= 40);
  if(good.length) return { list: good, all: scored, exact: true };

  const fits = scored.filter(s => pax >= (Number(s.p.minPax)||1) && pax <= (Number(s.p.maxPax)||99));
  return { list: (fits.length ? fits : scored).slice(0,3), all: scored, exact: false };
}

/* =========================================================
   WHATSAPP BOOKING MESSAGE
   ========================================================= */
function waLink(pkg, q, total){
  const L = [];
  L.push("*Booking Enquiry — " + SET.company + "*");
  L.push("");
  if(pkg){
    L.push("📍 *Destination:* " + destName(pkg.dest));
    L.push("📦 *Package:* " + pkg.name);
    L.push("🗓 *Duration:* " + pkg.days + " Days / " + pkg.nights + (pkg.nights === 1 ? " Night" : " Nights"));
    L.push("💰 *Quoted Price:* " + (pkg.draft ? "On request" : money(total) +
      (pkg.priceType === "person"
        ? "  (" + money(pkg.price) + " × " + Math.max(q.adults, Number(pkg.minPax)||1) + " persons)" : "")));
    L.push("");
  } else if(q.dest && q.dest !== "all"){
    L.push("📍 *Destination:* " + destName(q.dest));
    L.push("");
  }
  L.push("👥 *Adults:* " + q.adults);
  L.push("🧒 *Kids:* " + q.kids);
  L.push("📅 *Days / Nights:* " + q.days + " / " + q.nights);
  if(q.pickup) L.push("📍 *Pickup:* " + q.pickup);
  if(q.date)   L.push("🗓 *Travel Date:* " + q.date);
  L.push("");
  L.push("Please confirm availability and the final quote. Thank you!");
  return waBase() + "?text=" + encodeURIComponent(L.join("\n"));
}

/* =========================================================
   FINDER FORM  — markup + wiring (used on home & packages)
   ========================================================= */
function finderHTML(o){
  o = o || {};
  const dl = liveDests();
  return `
  <div class="f-grid">
    <div class="field full">
      <label>Destination</label>
      <select id="dest">
        <option value="all" ${(!o.dest||o.dest==="all")?"selected":""}>All Destinations</option>
        ${dl.map(d=>`<option value="${d.id}" ${o.dest===d.id?"selected":""}>${esc(d.name)}, ${esc(d.state)}</option>`).join("")}
      </select>
    </div>
    <div class="field">
      <label>Adults</label>
      <div class="stepper">
        <button type="button" data-step="adults" data-dir="-1">−</button>
        <input type="number" id="adults" value="${o.adults||2}" min="1" max="60">
        <button type="button" data-step="adults" data-dir="1">+</button>
      </div>
    </div>
    <div class="field">
      <label>Kids (below 7 yrs)</label>
      <div class="stepper">
        <button type="button" data-step="kids" data-dir="-1">−</button>
        <input type="number" id="kids" value="${o.kids||0}" min="0" max="30">
        <button type="button" data-step="kids" data-dir="1">+</button>
      </div>
    </div>
    <div class="field">
      <label>Days</label>
      <div class="stepper">
        <button type="button" data-step="days" data-dir="-1">−</button>
        <input type="number" id="days" value="${o.days||2}" min="1" max="10">
        <button type="button" data-step="days" data-dir="1">+</button>
      </div>
    </div>
    <div class="field">
      <label>Nights</label>
      <div class="stepper">
        <button type="button" data-step="nights" data-dir="-1">−</button>
        <input type="number" id="nights" value="${o.nights==null?1:o.nights}" min="0" max="9">
        <button type="button" data-step="nights" data-dir="1">+</button>
      </div>
    </div>
    <div class="field">
      <label>Pickup Point</label>
      <select id="pickup">${(SET.pickupPoints||["Dindigul"]).map(p=>
        `<option ${p===o.pickup?"selected":""}>${esc(p)}</option>`).join("")}</select>
    </div>
    <div class="field">
      <label>Travel Date (optional)</label>
      <input type="date" id="tdate" value="${esc(o.date||"")}">
    </div>
  </div>`;
}

function readFinder(){
  const num = id => Number((document.getElementById(id)||{}).value) || 0;
  const val = id => (document.getElementById(id)||{}).value || "";
  return {
    adults: Math.max(1, num("adults")),
    kids:   Math.max(0, num("kids")),
    days:   Math.max(1, num("days")),
    nights: Math.max(0, num("nights")),
    pickup: val("pickup"),
    date:   val("tdate"),
    dest:   val("dest") || "all"
  };
}

/* keeps nights = days - 1 automatically, then runs onChange */
function wireFinder(onChange){
  document.querySelectorAll("[data-step]").forEach(btn => {
    btn.addEventListener("click", () => {
      const inp = document.getElementById(btn.dataset.step);
      const min = Number(inp.min)||0, max = Number(inp.max)||99;
      inp.value = Math.min(max, Math.max(min, (Number(inp.value)||0) + Number(btn.dataset.dir)));
      const d = document.getElementById("days"), n = document.getElementById("nights");
      if(btn.dataset.step === "days")   n.value = Math.max(0, Number(d.value) - 1);
      if(Number(n.value) >= Number(d.value)) d.value = Number(n.value) + 1;
      if(onChange) onChange();
    });
  });
  ["adults","kids","days","nights","pickup","tdate","dest"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener("change", () => { if(onChange) onChange(); });
  });
}

/* read finder values back out of the URL (?adults=4&days=3...) */
function finderFromURL(){
  const u = new URLSearchParams(location.search);
  const n = (k,d) => u.has(k) ? Number(u.get(k)) : d;
  return {
    adults: n("adults",2), kids: n("kids",0),
    days: n("days",2), nights: n("nights",1),
    pickup: u.get("pickup") || "", date: u.get("date") || "",
    dest: u.get("dest") || "all",
    type: u.get("type") || "all",
    searched: u.has("adults") || u.has("type") || u.has("dest")
  };
}
function finderToQuery(q){
  return "?" + new URLSearchParams({
    adults:q.adults, kids:q.kids, days:q.days, nights:q.nights,
    pickup:q.pickup||"", date:q.date||"", dest:q.dest||"all"
  }).toString();
}

/* =========================================================
   PACKAGE CARD  (shared markup)
   ========================================================= */
function cardHTML(m, q, best){
  const p = m.p;
  const bg = `style="--art:${destArt(p.dest, p.image)};--focus:${destFocus(p.dest)}"`;
  const perPerson = p.priceType === "person";
  const units = Math.max(q.adults, Number(p.minPax)||1);
  const d = destOf(p.dest);
  return `
  <article class="card ${best?'best':''}">
    <div class="card-top has-art" ${bg}>
      ${p.badge ? `<span class="ribbon">${esc(p.badge)}</span>` : ""}
      ${best ? `<span class="match-badge"><i class="fa-solid fa-star"></i> Best Match</span>` : ""}
      <span class="dest-tag"><i class="fa-solid ${esc(d.icon)}"></i> ${esc(d.name)}</span>
      <h3>${esc(p.name)}</h3>
    </div>
    <div class="card-body">
      ${p.draft ? `
      <div class="price-row"><span class="price" style="font-size:1.5rem">On Request</span></div>
      <div class="price-calc">Message us for today's ${esc(d.name)} rate</div>` : `
      <div class="price-row">
        <span class="price">${money(p.price)}</span>
        <span class="price-sub">${perPerson ? "per person" : "total package"}</span>
      </div>
      ${perPerson
        ? `<div class="price-calc">≈ ${money(m.total)} for ${units} persons</div>`
        : `<div class="price-calc">All inclusive for your group</div>`}`}
      <div class="meta">
        <span><i class="fa-regular fa-calendar"></i> ${p.days}D / ${p.nights}N</span>
        <span><i class="fa-solid fa-users"></i> ${p.minPax}–${p.maxPax} pax</span>
        <span><i class="fa-solid fa-tag"></i> ${esc(p.type.charAt(0).toUpperCase()+p.type.slice(1))}</span>
      </div>
      <ul class="feat">
        <li>${esc(p.vehicle)}</li>
        <li>${esc(p.room)}</li>
        <li>${esc(p.breakfast)}</li>
        <li>${esc(p.dinner)}</li>
      </ul>
      ${p.note ? `<div class="note-line"><i class="fa-solid fa-circle-info"></i> ${esc(p.note)}</div>` : ""}
      <div class="card-actions">
        <a class="btn-wa" href="${waLink(p,q,m.total)}" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> Book on WhatsApp</a>
        <button class="btn-ghost" data-view="${esc(p.id)}">Details</button>
      </div>
    </div>
  </article>`;
}

/* =========================================================
   DESTINATION TILES (home + about)
   ========================================================= */
function destTilesHTML(){
  return liveDests().map(d => {
    const from = destFrom(d.id);
    const n = PKGS.filter(p => p.active !== false && p.dest === d.id).length;
    const bg = `style="--art:${destArt(d.id)};--focus:${destFocus(d.id)}"`;
    return `<a class="dest-tile has-art reveal" href="packages.html?dest=${esc(d.id)}" data-d="${esc(d.id)}" ${bg}>
      <i class="fa-solid ${esc(d.icon)} dt-ico"></i>
      <span class="dt-state">${esc(d.state)}</span>
      <h3>${esc(d.name)}</h3>
      <p>${esc(d.blurb)}</p>
      <div class="dt-foot">
        <span class="dt-from">${from ? "From " + from : "Price on request"}</span>
        <span class="dt-count">${n} package${n>1?"s":""}</span>
      </div>
      <span class="tt-btn">View Packages <i class="fa-solid fa-arrow-right"></i></span>
    </a>`;
  }).join("");
}

/* =========================================================
   DETAILS MODAL (shared)
   ========================================================= */
function openModal(id, q){
  const p = PKGS.find(x => x.id === id);
  if(!p) return;
  const total = p.priceType === "person"
    ? p.price * Math.max(q.adults, Number(p.minPax)||1) : p.price;

  const dst = destOf(p.dest);
  document.getElementById("mTitle").textContent = p.name;
  document.getElementById("mSub").textContent =
    dst.name + ", " + dst.state + " · " + p.days + " Days / " + p.nights + " Nights · " +
    (p.draft ? "Price on request"
             : money(p.price) + (p.priceType === "person" ? " per person" : " total"));

  document.getElementById("mBody").innerHTML = `
    <div class="mb-block">
      <h4><i class="fa-solid fa-circle-info"></i> Package Details</h4>
      <div class="spec">
        <div><b>Destination</b><span>${esc(dst.name)}, ${esc(dst.state)}</span></div>
        <div><b>Vehicle</b><span>${esc(p.vehicle)}</span></div>
        <div><b>Room</b><span>${esc(p.room)}</span></div>
        <div><b>Pickup Time</b><span>${esc(p.pickupTime||"5:00 AM")}</span></div>
        <div><b>Drop Time</b><span>${esc(p.dropTime||"8:00 PM – 9:00 PM")}</span></div>
        <div><b>Check In</b><span>${esc(p.checkIn||"10:00 AM")}</span></div>
        <div><b>Check Out</b><span>${esc(p.checkOut||"10:00 AM")}</span></div>
        <div><b>Sightseeing</b><span>${esc(p.sightseeing||"9:00 AM – 6:00 PM")}</span></div>
        <div><b>Your Price</b><span style="color:var(--deep);font-weight:700">${p.draft ? "On request" : money(total)}</span></div>
      </div>
    </div>
    <div class="mb-block">
      <h4><i class="fa-solid fa-utensils"></i> Food Included</h4>
      <ul class="inc-list"><li>${esc(p.breakfast)}</li><li>${esc(p.dinner)}</li></ul>
    </div>
    ${(p.itinerary||[]).map(d => `
      <div class="mb-block">
        <h4><i class="fa-solid fa-route"></i> ${esc(d.day)}</h4>
        <div class="pill-list">${(d.places||[]).map(x=>`<span class="pill">📍 ${esc(x)}</span>`).join("")}</div>
      </div>`).join("")}
    <div class="mb-block two-col">
      <div>
        <h4><i class="fa-solid fa-check"></i> Includes</h4>
        <ul class="inc-list">${(p.includes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      </div>
      <div>
        <h4><i class="fa-solid fa-xmark"></i> Excludes</h4>
        <ul class="inc-list exc-list">${(p.excludes||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      </div>
    </div>
    ${p.note ? `<div class="note-line">${esc(p.note)}</div>` : ""}
    <div class="mb-block">
      <h4><i class="fa-solid fa-location-dot"></i> Pickup &amp; Drop</h4>
      <div class="pill-list">${(SET.pickupPoints||[]).map(x=>`<span class="pill">${esc(x)}</span>`).join("")}</div>
    </div>`;

  document.getElementById("mWa").href = waLink(p, q, total);
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  const m = document.getElementById("modal");
  if(m) m.classList.remove("open");
  document.body.style.overflow = "";
}

const MODAL_HTML = `
<div class="modal" id="modal">
  <div class="modal-in">
    <div class="modal-head">
      <div><h3 id="mTitle"></h3><p id="mSub"></p></div>
      <button class="x" id="mClose">✕</button>
    </div>
    <div class="modal-body" id="mBody"></div>
    <div class="modal-foot">
      <a class="btn-wa" id="mWa" href="#" target="_blank" rel="noopener">
        <i class="fa-brands fa-whatsapp"></i> Book on WhatsApp</a>
      <button class="btn-ghost" id="mClose2">Close</button>
    </div>
  </div>
</div>`;

/* =========================================================
   PAGE BOOTSTRAP — call abInit() on every page
   ========================================================= */
function abInit(currentPage){
  const hdr = document.getElementById("hdr");
  if(hdr) hdr.innerHTML = buildHeader(currentPage);

  const ftr = document.getElementById("ftr");
  if(ftr) ftr.innerHTML = buildFooter();

  const yr = document.getElementById("yr");
  if(yr) yr.textContent = new Date().getFullYear();

  // floating WhatsApp button
  if(!document.getElementById("fab")){
    const a = document.createElement("a");
    a.id = "fab"; a.className = "fab"; a.href = waHello();
    a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label","WhatsApp");
    a.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    document.body.appendChild(a);
  }

  // details modal
  if(!document.getElementById("modal")){
    const div = document.createElement("div");
    div.innerHTML = MODAL_HTML;
    document.body.appendChild(div.firstElementChild);
  }
  const mc = document.getElementById("mClose"), mc2 = document.getElementById("mClose2");
  if(mc)  mc.addEventListener("click", closeModal);
  if(mc2) mc2.addEventListener("click", closeModal);
  const md = document.getElementById("modal");
  if(md) md.addEventListener("click", e => { if(e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

  // sticky header state — inner pages start solid
  const inner = currentPage !== "index.html";
  const onScroll = () => hdr && hdr.classList.toggle("scrolled", inner || window.scrollY > 60);
  window.addEventListener("scroll", onScroll); onScroll();
  if(inner) document.body.classList.add("inner");

  // mobile menu
  const burger = document.getElementById("burger"), menu = document.getElementById("menu");
  if(burger && menu){
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  abReveal();
}

/* fade-up on scroll, re-scanned when new cards are injected */
function abReveal(){
  if(typeof IntersectionObserver === "undefined"){
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  }), {threshold:.1});
  const watch = () => document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  watch();
  new MutationObserver(watch).observe(document.body, {childList:true, subtree:true});
}
