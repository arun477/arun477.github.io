/* The hive: five agent bees take a request, brief, work together, deliver, remember and dream. About banner only.
   Palette follows the site: bees in the leaf colours (ochre, slate-teal, indigo, rust, plum), seal red for signals,
   matcha for done; paper, ink and rules are read from the CSS tokens on each render, so it follows light and dark. */
(() => {

/* ================= character ================= */
function roundPoly(pts, r) {
  let d = "";
  pts.forEach((p, i) => {
    const a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length];
    const v1 = [a[0] - p[0], a[1] - p[1]], v2 = [b[0] - p[0], b[1] - p[1]], l1 = Math.hypot(...v1), l2 = Math.hypot(...v2);
    const p1 = [p[0] + v1[0] / l1 * r, p[1] + v1[1] / l1 * r], p2 = [p[0] + v2[0] / l2 * r, p[1] + v2[1] / l2 * r];
    d += (i ? "L" : "M") + p1.map(n => n.toFixed(2)).join(",") + "Q" + p.join(",") + " " + p2.map(n => n.toFixed(2)).join(",");
  });
  return d + "Z";
}
const hexPath = (cx, cy, R, r) => roundPoly([...Array(6)].map((_, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [+(cx + R * Math.cos(a)).toFixed(2), +(cy + R * 1.03 * Math.sin(a)).toFixed(2)]; }), r);
const BODY = hexPath(100, 112, 58, 16), GLOW = "#B94A31", JADE = "#6F8A55";
const KEYS = ["coord", "scholar", "msg", "build", "keeper"];
const BEES = {
  coord:   { body: "#C49A3E", ink: "#3A2A10", wing: "#F6ECD6", blush: "#C8664D", acc: "headset", sc: .5 },
  scholar: { body: "#5E7F86", ink: "#17292D", wing: "#E2EBEA", blush: "#C98A78", acc: "glasses", sc: .42 },
  msg:     { body: "#4A6283", ink: "#131D2E", wing: "#E3E7EE", blush: "#CF8E86", acc: "bag", sc: .42 },
  build:   { body: "#B85C38", ink: "#3B160A", wing: "#F4E2D6", blush: "#A3412E", acc: "hat", sc: .42 },
  keeper:  { body: "#86607A", ink: "#2B1626", wing: "#EFE5EA", blush: "#C98A8E", acc: "sprout", sc: .42 },
};
const ACC = {
  headset: (P, s) => `<path d="M60,112 C58,70 76,50 100,50 C124,50 142,70 140,112" fill="none" stroke="${P.ink}" stroke-width="4" stroke-linecap="round"/><rect x="53" y="100" width="12" height="22" rx="6" fill="${P.ink}"/><rect x="135" y="100" width="12" height="22" rx="6" fill="${P.ink}"/><path d="M59,120 C62,132 74,134 84,130" fill="none" stroke="${P.ink}" stroke-width="2.6" stroke-linecap="round"/><circle cx="86" cy="129.5" r="${(3.6 + s.talk * 1.8).toFixed(2)}" fill="${GLOW}"/>`,
  hat: P => `<path d="M68,66 C68,44 82,34 100,34 C118,34 132,44 132,66 Z" fill="#F7F1E4"/><path d="M100,34 L100,66" stroke="${P.ink}" stroke-opacity=".16" stroke-width="2"/><rect x="60" y="64" width="80" height="7" rx="3.5" fill="#EDE4D2"/>`,
  glasses: P => `<g fill="#fff" fill-opacity=".2" stroke="${P.ink}" stroke-width="2.4"><circle cx="85" cy="102" r="11.5"/><circle cx="115" cy="102" r="11.5"/></g><path d="M96.5,101 Q100,98 103.5,101 M73.5,100 L64,97 M126.5,100 L136,97" fill="none" stroke="${P.ink}" stroke-width="2.4" stroke-linecap="round"/>`,
  bag: P => `<path d="M58,124 L124,158" stroke="${P.ink}" stroke-opacity=".7" stroke-width="3.2" stroke-linecap="round"/><rect x="118" y="148" width="26" height="20" rx="3" fill="#F7F1E4"/><path d="M118,154 L144,154" stroke="${P.ink}" stroke-opacity=".25" stroke-width="1.6"/><circle cx="131" cy="154" r="2.2" fill="${GLOW}"/>`,
  sprout: P => `<path d="M100,58 C100,46 100,36 102,24" fill="none" stroke="#6B7A45" stroke-width="3.2" stroke-linecap="round"/><path d="M102,32 C112,20 126,21 128,28 C122,38 110,38 102,32 Z" fill="#7D7A4E"/><path d="M100,42 C90,32 76,33 74,40 C80,49 92,49 100,42 Z" fill="#97965F"/>`,
};
function drawBee(key, b, t) {
  const P = BEES[key], sc = P.sc, sleep = b.sleep, happy = b.happy, think = b.think, talk = b.talk;
  const base = lerp(.58, .9, sleep), f1 = base + (1 - base) * Math.abs(Math.sin(b.flapPh)), f2 = base + (1 - base) * Math.abs(Math.sin(b.flapPh - .9));
  const lx = b.look[0] * 5, ly = b.look[1] * 4, ex = b.look[0] * 2.4, ey = b.look[1] * 2.2;
  const tx = 83 + sleep * 3 + b.look[0] * 2, ty = 37 + b.ant + sleep * 5;
  const closed = Math.max(sleep, b.calm);
  const eyes = closed > .5
    ? `<path d="M78,102 Q85,106.5 92,102 M108,102 Q115,106.5 122,102" fill="none" stroke="${P.ink}" stroke-width="4" stroke-linecap="round"/>`
    : happy > .5
    ? `<path d="M77.5,104 Q85,95 92.5,104 M107.5,104 Q115,95 122.5,104" fill="none" stroke="${P.ink}" stroke-width="4.2" stroke-linecap="round"/>`
    : [85, 115].map(cx => `<g transform="translate(${cx},102) scale(1,${b.blinkK.toFixed(2)}) translate(${-cx},-102)"><circle cx="${cx + ex}" cy="${102 + ey}" r="7.5" fill="${P.ink}"/><circle cx="${cx + ex - 2.4}" cy="${99.4 + ey}" r="2.5" fill="#fff"/></g>`).join("");
  const open = talk * (.45 + .55 * Math.abs(Math.sin(t * 12)));
  const mouth = open > .15
    ? `<ellipse cx="100" cy="121" rx="${(5 + open * 1.5).toFixed(2)}" ry="${(2 + open * 4.5).toFixed(2)}" fill="${P.ink}"/>`
    : `<path d="M${100 - 7 - happy * 2.5},118 Q100,${118 + 7 + happy * 5 - sleep * 4} ${100 + 7 + happy * 2.5},118" fill="none" stroke="${P.ink}" stroke-width="3.6" stroke-linecap="round"/>`;
  const wing = (cx, f, op) => `<g transform="translate(${cx},60) scale(1,${f.toFixed(3)}) translate(${-cx},-60)"><ellipse cx="${cx}" cy="58" rx="25" ry="22" fill="${P.wing}" opacity="${op}"/></g>`;
  return `<g transform="translate(${b.x.toFixed(1)},${b.y.toFixed(1)}) rotate(${b.tilt.toFixed(2)}) scale(${(sc * b.sx).toFixed(4)},${(sc * b.sy).toFixed(4)}) translate(-100,-118)">
    ${wing(64, f2, .4)}${wing(136, f2, .4)}${wing(64, f1, .95)}${wing(136, f1, .95)}
    <g fill="none" stroke="${P.ink}" stroke-width="4" stroke-linecap="round"><path d="M90,58 Q${((tx + 90) / 2 - 2).toFixed(1)},${((58 + ty) / 2).toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)}"/><path d="M110,58 Q${((310 - tx) / 2 + 2).toFixed(1)},${((58 + ty) / 2).toFixed(1)} ${(200 - tx).toFixed(1)},${ty.toFixed(1)}"/></g>
    ${think > .05 ? [tx, 200 - tx].map(ax => `<circle cx="${ax.toFixed(1)}" cy="${ty.toFixed(1)}" r="12" fill="${GLOW}" opacity="${(think * (.16 + .18 * Math.abs(Math.sin(t * 5)))).toFixed(2)}"/>`).join("") : ""}
    <circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="5.5" fill="${think > .4 ? GLOW : P.ink}"/><circle cx="${(200 - tx).toFixed(1)}" cy="${ty.toFixed(1)}" r="5.5" fill="${think > .4 ? GLOW : P.ink}"/>
    <path d="${BODY}" fill="${P.body}"/>
    <g clip-path="url(#bc)"><path d="M30,132 L100,158 L170,132 L170,190 L30,190 Z" fill="#000" opacity=".1"/></g>
    <ellipse cx="76" cy="76" rx="20" ry="10" fill="#fff" opacity=".22" transform="rotate(-28 76 76)"/>
    <g transform="translate(${lx.toFixed(2)},${ly.toFixed(2)})">
      <circle cx="71" cy="114" r="7.5" fill="${P.blush}" opacity="${(Math.max(happy, b.blush) * .5).toFixed(2)}"/><circle cx="129" cy="114" r="7.5" fill="${P.blush}" opacity="${(Math.max(happy, b.blush) * .5).toFixed(2)}"/>
      ${eyes}${mouth}${P.acc === "glasses" ? ACC.glasses(P) : ""}
    </g>
    ${P.acc !== "glasses" ? ACC[P.acc](P, b) : ""}
  </g>`;
}

/* ================= helpers ================= */
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v)), seg = (t, a, b) => clamp((t - a) / (b - a));
const lerp = (a, b, v) => a + (b - a) * v;
const ease = v => { v = clamp(v); return v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2; };
const out = v => 1 - Math.pow(1 - clamp(v), 3);
const pop = v => { v = clamp(v); if (!v) return 0; const c = 1.7; return 1 + (c + 1) * Math.pow(v - 1, 3) + c * Math.pow(v - 1, 2); };
/* a crafted flight: a touch of anticipation, a smooth cruise, a soft settle */
const flight = v => { v = clamp(v); const c1 = .7, c2 = c1 * 1.525; return v < .5 ? (Math.pow(2 * v, 2) * ((c2 + 1) * 2 * v - c2)) / 2 : (Math.pow(2 * v - 2, 2) * ((c2 + 1) * (v * 2 - 2) + c2) + 2) / 2; };
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const dark = () => { const h = css("--bg").replace("#", ""); return parseInt(h.slice(0, 2), 16) < 80; };

/* ================= the set ================= */
const LOOP = 36;
const CHAP = [["wake", 0], ["gather", 2], ["ask", 3.6], ["brief", 7.4], ["work", 12.6], ["assemble", 24.4], ["deliver", 27.6], ["remember", 29.8], ["dream", 32]];
const HUD = { coord: [380, 222], scholar: [282, 304], msg: [342, 350], build: [418, 350], keeper: [478, 304] };
const STEP = { scholar: [306, 288], build: [408, 328], keeper: [454, 288], msg: [352, 328] };
const NEST = { coord: [640, 420], scholar: [712, 428], msg: [784, 420], build: [856, 428], keeper: [928, 420] };
const DOC = { x: 540, y: 52, w: 168, h: 178, o: "scholar" }, CANVAS = { x: 724, y: 52, w: 232, h: 178, o: "build" }, CHECK = { x: 980, y: 52, w: 150, h: 178, o: "keeper" };
const DESKS = { scholar: DOC, build: CANVAS, keeper: CHECK };
const SPOT = { scholar: [624, 298], msg: [690, 344], keeper: [1055, 298] };
const PROMPT = { x: 40, y: 438, w: 400, h: 44 };
const RESULT_AT = [380, 142], DOCK = [250, 388];
const BLOCKS = (() => { const w = CANVAS.w; return [[12, 28, w - 24, 12], [12, 48, 92, 66], [112, 50, w - 124, 9], [112, 98, 58, 15], [12, 124, (w - 36) / 3, 42], [24 + (w - 36) / 3, 124, (w - 36) / 3, 42], [36 + 2 * (w - 36) / 3, 124, (w - 36) / 3, 42]]; })();
const BLOCK_T = [12.95, 13.9, 14.85, 15.6, 17.0, 17.95, 18.9];
const blockX = j => CANVAS.x + BLOCKS[j][0] + BLOCKS[j][2] / 2;
const HL = [{ line: 1, t: 13.6 }, { line: 4, t: 15.1 }, { line: 7, t: 16.6 }];
const TICKS = [17.45, 23.6, 23.85, 24.1];
const rowY = r => CHECK.y + 46 + r * 34;
const BUILD_RECV = [CANVAS.x + 170, 298];

/* itineraries: [t0, t1, x, y] — fly to (x,y) between t0 and t1, hold otherwise */
const MOVES = {
  coord: [[2.0, 3.0, ...HUD.coord], [27.7, 28.6, DOCK[0], DOCK[1] - 60], [28.9, 29.7, ...HUD.coord], [32.2, 33.2, ...NEST.coord]],
  scholar: [[2.15, 3.15, ...HUD.scholar], [7.9, 8.3, ...STEP.scholar], [11.4, 12.3, ...SPOT.scholar, 40], [24.4, 25.3, ...HUD.scholar], [32.35, 33.35, ...NEST.scholar]],
  msg: [[2.3, 3.3, ...HUD.msg], [10.6, 11.0, ...STEP.msg], [12.45, 13.15, ...SPOT.msg, -20], [17.6, 18.2, SPOT.scholar[0] + 62, 298], [19.3, 20.1, BUILD_RECV[0] - 62, 298], [21.4, 22.0, ...SPOT.msg], [24.85, 25.7, ...HUD.msg], [32.5, 33.5, ...NEST.msg]],
  build: [[2.45, 3.45, ...HUD.build], [8.8, 9.2, ...STEP.build], [11.75, 12.65, blockX(0), 298, -30], ...BLOCK_T.slice(1).map((bt, j) => [bt - .6, bt - .1, blockX(j + 1), 298]), [19.4, 19.95, ...BUILD_RECV], [24.55, 25.45, ...HUD.build], [32.65, 33.65, ...NEST.build]],
  keeper: [[2.6, 3.6, ...HUD.keeper], [9.7, 10.1, ...STEP.keeper], [12.1, 13.0, ...SPOT.keeper, 95], [15.15, 15.75, blockX(3) + 64, 296, 30], [16.75, 17.25, CHECK.x + CHECK.w + 26, rowY(0) + 8], [17.6, 18.0, ...SPOT.keeper], [21.55, 22.05, BUILD_RECV[0] + 64, 296, 30], [23.1, 23.45, CHECK.x + CHECK.w + 26, rowY(1) + 8], [23.6, 23.75, CHECK.x + CHECK.w + 26, rowY(2) + 8], [23.85, 24.0, CHECK.x + CHECK.w + 26, rowY(3) + 8], [24.7, 25.6, ...HUD.keeper], [32.8, 33.8, ...NEST.keeper]],
};
function posAt(key, t) {
  let p = [...NEST[key]];
  for (const [t0, t1, x, y, arcH] of MOVES[key]) {
    if (t >= t1) { p = [x, y]; continue; }
    if (t > t0) { const u = (t - t0) / (t1 - t0), e = flight(u), d = Math.hypot(x - p[0], y - p[1]), h = arcH ?? Math.min(70, d * .22); return [lerp(p[0], x, e), lerp(p[1], y, e) - Math.sin(Math.PI * u) * h, 1]; }
    break;
  }
  return [p[0], p[1], 0];
}

/* conversations: speaker, listener, start, duration, what */
const TALK = [
  ["coord", "scholar", 7.9, 1.1, "task"], ["scholar", "coord", 8.6, .85, "ok"],
  ["coord", "build", 8.8, 1.1, "task"], ["build", "coord", 9.5, .85, "ok"],
  ["coord", "keeper", 9.7, 1.1, "task"], ["keeper", "coord", 10.4, .85, "ok"],
  ["coord", "msg", 10.6, 1.0, "relay"], ["msg", "coord", 11.15, .7, "ok"],
  ["keeper", "build", 15.8, .85, "ok"], ["build", "keeper", 16.25, .55, "happy"],
  ["scholar", "msg", 18.2, 1.1, "lines"], ["msg", "scholar", 19.0, .6, "ok"],
  ["msg", "build", 20.1, 1.1, "lines"], ["build", "msg", 21.0, .75, "ok"],
  ["keeper", "build", 22.15, 1.0, "ok"], ["build", "keeper", 22.85, .7, "happy"],
];
/* things that change hands: what, from, to, start, end */
const HANDS = [["card:scholar", "coord", "scholar", 8.3, 8.65], ["card:build", "coord", "build", 9.2, 9.55], ["card:keeper", "coord", "keeper", 10.1, 10.45], ["quotes", "scholar", "msg", 18.75, 19.1], ["quotes", "msg", "build", 20.6, 20.95]];
const NODS = [[8.75, "scholar"], [9.65, "build"], [10.55, "keeper"], [11.25, "msg"], [19.15, "msg"], [21.0, "build"], [16.0, "build"], [22.95, "build"], [28.75, "coord"], ...TICKS.map(t => [t, "keeper"])];
const TAPS = BLOCK_T.map(bt => [bt, "build"]);
const HOPS = [...KEYS.map((k, i) => [1.6 + i * .07, k, 10]), ...KEYS.map((k, i) => [26.9 + i * .06, k, 20]), ...KEYS.map((k, i) => [27.3 + i * .06, k, 14])];

function lookTarget(key, t) {
  const c = TALK.find(([a, b, s, d]) => (a === key || b === key) && t > s && t < s + d);
  if (c) return pos(c[0] === key ? c[1] : c[0], t);
  if (t > 3.6 && t < 6) return [PROMPT.x + 220, PROMPT.y];
  if (t > 6 && t < 7.8 && key !== "coord") return pos("coord", t);
  if (t > 6.4 && t < 7.8 && key === "coord") return [380, 120];
  if (key === "scholar" && t > 12.8 && t < 17.3) return [DOC.x + 84, DOC.y + 40 + seg(t, 12.8, 17.2) * 140];
  if (key === "build" && t > 12.4 && t < 19.3) { const j = Math.max(0, BLOCK_T.findIndex(bt => t < bt + .3)); return [blockX(j), CANVAS.y + BLOCKS[j][1]]; }
  if (key === "keeper" && ((t > 15.75 && t < 16.7) || (t > 22.05 && t < 22.15))) return pos("build", t);
  if (key === "keeper" && t > 16.9 && t < 24.2) return [CHECK.x + 40, pos("keeper", t)[1]];
  if (key === "coord" && t > 12.6 && t < 24.4) { const act = TALK.find(([a, b, s, d]) => t > s && t < s + d); return act ? pos(act[0], t) : [800, 160]; }
  if (t > 25.6 && t < 27.6) return RESULT_AT;
  return null;
}
function pos(key, t) {
  const [x, y] = posAt(key, t);
  let dy = 0;
  NODS.forEach(([at, k]) => { if (k === key && t > at && t < at + .35) dy += Math.sin((t - at) / .35 * Math.PI) * 5; });
  TAPS.forEach(([at, k]) => { if (k === key && t > at - .15 && t < at + .25) dy += Math.sin((t - at + .15) / .4 * Math.PI) * -7; });
  HOPS.forEach(([at, k, h]) => { if (k === key && t > at && t < at + .42) dy -= Math.sin((t - at) / .42 * Math.PI) * h; });
  return [x, y + dy];
}

/* ================= the living state (expressions only) ================= */
const sim = Object.fromEntries(KEYS.map((k, i) => [k, { look: [0, 0], think: 0, happy: 0, sleep: 1, talk: 0, calm: 0, blush: 0, ant: 0, antV: 0, flapPh: i * 1.3, tilt: 0 }]));
let days = [], loop = 0;
function wants(key, t) {
  const w = { think: 0, happy: 0, sleep: 0, talk: 0, calm: 0, blush: 0 };
  w.sleep = t < 1.0 ? 1 : t < 1.6 ? 1 - seg(t, 1, 1.6) : t > 33.4 ? seg(t, 33.4, 34.2) : 0;
  if (t > 1.0 && t < 1.7) w.talk = Math.sin(seg(t, 1.0, 1.7) * Math.PI) * .9;
  if (TALK.some(([a, , s, d]) => a === key && t > s + .3 && t < s + d - .1)) w.talk = 1;
  if (key === "coord" && ((t > 6.4 && t < 7.6) || (t > 25.7 && t < 26.3))) w.think = 1;
  if (key === "scholar" && t > 12.8 && t < 17.3) w.think = 1;
  if (key === "keeper" && ((t > 15.5 && t < 15.85) || (t > 21.85 && t < 22.2))) w.think = 1;
  if (key === "scholar") HL.forEach(h => { if (t > h.t && t < h.t + .6) w.blush = 1; });
  if (t > 26.6 && t < 27.8) w.happy = 1;
  if (key === "coord" && t > 28.6 && t < 29.6) w.happy = 1;
  if (TALK.some(([a, , s, d, kind]) => a === key && kind === "happy" && t > s && t < s + d)) w.happy = 1;
  if (t > 29.9 && t < 31.1) w.calm = 1;
  return w;
}
function step(t, dt) {
  KEYS.forEach((key, i) => {
    const s = sim[key], w = wants(key, t);
    Object.keys(w).forEach(p => s[p] = lerp(s[p], w[p], 1 - Math.exp(-dt * (p === "talk" ? 14 : 6))));
    const lt = lookTarget(key, t), [x, y] = pos(key, t);
    let L = [0, 0];
    if (lt) { const dx = lt[0] - x, dy = lt[1] - y, d = Math.hypot(dx, dy) || 1, k = clamp(d / 140); L = [dx / d * k, dy / d * k]; }
    const e = 1 - Math.exp(-dt * 8); s.look[0] = lerp(s.look[0], L[0], e); s.look[1] = lerp(s.look[1], L[1], e);
    const [x2, y2] = pos(key, t + dt), vx = (x2 - x) / dt, vy = (y2 - y) / dt, sp = Math.hypot(vx, vy);
    s.tilt = lerp(s.tilt, clamp(vx * .035, -14, 14), 1 - Math.exp(-dt * 9));
    s.sx = 1 - clamp(sp * .00035, 0, .05); s.sy = 1 + clamp(sp * .0005, 0, .07);
    s.antV += (240 * (clamp(-vy * .018, -7, 7) - s.ant) - 15 * s.antV) * dt; s.ant += s.antV * dt;
    s.flapPh += (20 + clamp(sp * .05, 0, 16)) * dt * lerp(1, .25, s.sleep);
    const cyc = (t + i * 1.37 * 2.3) % 4.6; s.blinkK = cyc < .14 ? Math.max(.1, Math.abs(Math.cos(cyc / .14 * Math.PI))) : 1;
  });
  if (t > 30.8 && !days.some(d => d.loop === loop)) { const n = days.length ? days[days.length - 1].n + 1 : 0; days.push({ loop, n }); if (days.length > 9) days.shift(); }
}
const daySlot = n => [130 + (n % 9) * 118, 62 + [0, 38, 14, 52, 22, 46, 8, 34, 18][n % 9]];
const nightAt = t => t < 1.8 ? 1 - ease(seg(t, 0, 1.8)) : t > 32 ? ease(seg(t, 32, 33.4)) : 0;

/* ================= drawing ================= */
const STARS = [...Array(44)].map((_, i) => [(i * 263.7) % 1200, ((i * 97.3) % 220) + 10, (i * .71) % 6.28, i % 6 === 0 ? 1.6 : 1]);
function card(T, k, name) {
  const P = BEES[T.o];
  return `<rect x="${T.x}" y="${T.y}" width="${T.w}" height="${T.h}" rx="6" fill="${k.card}" stroke="${k.line}" filter="url(#sh)"/>
    <path d="M${T.x},${T.y + 6} a6,6 0 0 1 6,-6 h${T.w - 12} a6,6 0 0 1 6,6 v14 h${-T.w} Z" fill="${P.wing}"/>
    <circle cx="${T.x + 12}" cy="${T.y + 10}" r="4" fill="${P.body}"/><rect x="${T.x + 22}" y="${T.y + 8}" width="${{ scholar: 44, build: 58, keeper: 40 }[T.o]}" height="4" rx="2" fill="${P.ink}" opacity=".35"/>
    ${[0, 1, 2].map(i => `<circle cx="${T.x + T.w - 26 + i * 8}" cy="${T.y + 10}" r="2" fill="${P.ink}" opacity=".18"/>`).join("")}`;
}
const miniCard = (owner, s = 1) => `<g transform="scale(${s})"><rect x="-17" y="-12" width="34" height="24" rx="4" fill="#fff" filter="url(#sh)"/><rect x="-17" y="-12" width="34" height="8" rx="3" fill="${BEES[owner].body}"/><rect x="-11" y="0" width="22" height="3" rx="1.5" fill="#000" opacity=".2"/><rect x="-11" y="5" width="14" height="3" rx="1.5" fill="#000" opacity=".12"/></g>`;
const quotes = n => [...Array(n)].map((_, i) => `<rect x="-14" y="${-6 - i * 8}" width="28" height="10" rx="5" fill="${JADE}" filter="url(#sh)"/><rect x="-8" y="${-2.5 - i * 8}" width="16" height="3" rx="1.5" fill="#fff" opacity=".85"/>`).join("");
function bubble(a, b, kind, v, t, k) {
  if (v <= 0 || v >= 1) return "";
  const P = BEES[a], [ax, ay] = pos(a, t), [bx] = pos(b, t), side = Math.sign(bx - ax) || 1;
  const s = pop(seg(v, 0, .22)) * (1 - ease(seg(v, .85, 1))), comp = seg(v, .28, .4), w = kind === "task" ? 60 : 52, h = 30;
  const x = ax + side * 16, y = ay - 72 * P.sc / .42;
  const dots = [0, 1, 2].map(i => `<circle cx="${-11 + i * 11}" cy="${(Math.sin(t * 9 - i * .9) * 2).toFixed(1)}" r="3.2" fill="${P.ink}" opacity=".7"/>`).join("");
  const O = BEES[b];
  const content = {
    task: `<rect x="-17" y="-10" width="34" height="20" rx="3" fill="#fff" stroke="${O.body}" stroke-opacity=".6"/><rect x="-17" y="-10" width="34" height="6" rx="2" fill="${O.body}"/><rect x="-11" y="0" width="22" height="2.6" rx="1.3" fill="${P.ink}" opacity=".4"/>`,
    ok: `<path d="M-8,0 L-2,6 L9,-6" fill="none" stroke="${P.ink}" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="30" stroke-dashoffset="${(30 * (1 - seg(v, .4, .58))).toFixed(1)}"/>`,
    lines: `<rect x="-17" y="-6" width="${(34 * seg(v, .4, .58)).toFixed(1)}" height="4" rx="2" fill="${JADE}"/><rect x="-17" y="2" width="${(22 * seg(v, .48, .64)).toFixed(1)}" height="4" rx="2" fill="${JADE}" opacity=".6"/>`,
    relay: `<rect x="-13" y="-9" width="26" height="18" rx="2.5" fill="#fff" stroke="${O.body}"/><path d="M-13,-8 L0,2 L13,-8" fill="none" stroke="${O.body}" stroke-width="1.8"/>`,
    happy: `<path d="M-9,-3 q4,-6 8,0 M1,-3 q4,-6 8,0 M-7,4 q7,7 14,0" fill="none" stroke="${P.ink}" stroke-width="2.6" stroke-linecap="round"/>`,
  }[kind];
  return `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${s.toFixed(3)})">
    <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="15" fill="${P.wing}" stroke="${P.body}" stroke-opacity=".3"/>
    <path d="M${-side * 8 - 5},${h / 2 - 1} L${-side * 12},${h / 2 + 7} L${-side * 8 + 5},${h / 2 - 1} Z" fill="${P.wing}"/>
    <g opacity="${(1 - comp).toFixed(2)}">${dots}</g><g opacity="${comp.toFixed(2)}">${content}</g>
  </g>`;
}
function attach(key, t, inner) { const [x, y] = pos(key, t), sc = BEES[key].sc; return `<g transform="translate(${x.toFixed(1)},${(y + 46 * sc / .42).toFixed(1)})">${inner}</g>`; }
function between(from, to, v, t, inner) { const [x1, y1] = pos(from, t), [x2, y2] = pos(to, t), e = ease(v); return `<g transform="translate(${lerp(x1, x2, e).toFixed(1)},${(lerp(y1, y2, e) + 22 - Math.sin(Math.PI * v) * 26).toFixed(1)})">${inner}</g>`; }

function render(t) {
  const k = { text: css("--text"), line: css("--line"), card: css("--card"), bg: css("--bg") }, o = [], night = nightAt(t);
  // sky, stars, the chain of days
  if (night > 0) { STARS.forEach(([x, y, ph, r]) => o.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${k.text}" opacity="${(night * (.2 + .35 * (Math.sin(t * 1.3 + ph) + 1) / 2)).toFixed(2)}"/>`)); }
  days.forEach((d, i) => {
    const [x, y] = daySlot(d.n), today = d.loop === loop, rise = today ? ease(seg(t, 31.2, 32.4)) : 1;
    if (today && t < 31.2) return;
    const cx = lerp(RESULT_AT[0], x, rise), cy = lerp(RESULT_AT[1] + 20, y, rise) - Math.sin(Math.PI * rise) * 40;
    if (i > 0) { const [px, py] = daySlot(days[i - 1].n), g = today ? ease(seg(t, 33.6, 34.8)) : 1; if (g > 0 && !(days[i - 1].n % 9 === 8)) o.push(`<line x1="${px}" y1="${py}" x2="${lerp(px, cx, g).toFixed(1)}" y2="${lerp(py, cy, g).toFixed(1)}" stroke="${today ? GLOW : k.text}" stroke-opacity="${((today ? .55 : .14) * (.25 + night * .75)).toFixed(2)}" stroke-width="${today ? 1.6 : 1.1}"/>`); }
    const a = today ? 1 : .12 + night * .78, r = 5 + (today ? 1 : 0);
    o.push(`<g opacity="${a.toFixed(2)}"><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r * 3.2}" fill="${BEES.coord.body}" opacity=".12"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${BEES.coord.body}"/>
      ${KEYS.slice(1).map((kk, j) => { const an = t * .8 + j * Math.PI / 2 + d.n; return `<circle cx="${(cx + Math.cos(an) * (r + 6)).toFixed(1)}" cy="${(cy + Math.sin(an) * (r + 6) * .6).toFixed(1)}" r="1.8" fill="${BEES[kk].body}"/>`; }).join("")}</g>`);
  });

  const fadeWork = 1 - seg(t, 32, 32.8);
  o.push(`<g opacity="${fadeWork.toFixed(3)}">`);
  // the meeting place
  const pad = out(seg(t, 1.8, 2.8));
  o.push(`<ellipse cx="380" cy="392" rx="${(150 * pad).toFixed(1)}" ry="12" fill="none" stroke="${k.text}" stroke-opacity=".08" stroke-width="1.5"/><ellipse cx="380" cy="392" rx="${(150 * pad).toFixed(1)}" ry="12" fill="${k.text}" opacity=".02"/>`);
  // the prompt
  const pIn = out(seg(t, 3.6, 4.1));
  if (pIn > 0) {
    const P = PROMPT, words = [40, 22, 56, 30, 46, 26, 38], wt = [4.1, 4.35, 4.6, 4.9, 5.15, 5.4, 5.6];
    let x = P.x + 22, typed = "";
    const clear = seg(t, 6.15, 6.5);
    words.forEach((w, i) => { const v = seg(t, wt[i], wt[i] + .2); if (v > 0) typed += `<rect x="${x}" y="${P.y + 19}" width="${(w * out(v)).toFixed(1)}" height="6" rx="3" fill="${k.text}" opacity="${(.6 * (1 - clear)).toFixed(2)}"/>`; x += w + 7; });
    const caretX = P.x + 22 + words.reduce((a, w, i) => a + (t > wt[i] ? w + 7 : 0), 0);
    const press = t > 5.9 && t < 6.12 ? .86 : 1, ready = t > 5.7 && t < 6.15, done = seg(t, 28.6, 28.9), bx = P.x + P.w - 22, by = P.y + 22;
    o.push(`<g transform="translate(0,${((1 - pIn) * 16).toFixed(1)})" opacity="${pIn.toFixed(2)}">
      <rect x="${P.x}" y="${P.y}" width="${P.w}" height="${P.h}" rx="22" fill="${k.card}" stroke="${done ? JADE : k.line}" stroke-width="1.5" filter="url(#sh)"/>
      ${typed}
      ${t > 4 && t < 6.15 ? `<rect x="${caretX}" y="${P.y + 13}" width="2" height="18" rx="1" fill="${GLOW}" opacity="${Math.floor(t * 2.2) % 2 ? .95 : .15}"/>` : ""}
      ${t > 6.5 && !done ? `<rect x="${P.x + 22}" y="${P.y + 19}" width="90" height="6" rx="3" fill="${k.text}" opacity=".07"/>` : ""}
      <g transform="translate(${bx},${by}) scale(${press})"><circle r="13" fill="${done ? JADE : ready ? k.text : k.line}"/>
      ${done ? `<path d="M-6,0 L-2,4 L6,-5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="20" stroke-dashoffset="${(20 * (1 - done)).toFixed(1)}"/>` : `<path d="M0,6 L0,-6 M-5,-1 L0,-6 L5,-1" fill="none" stroke="${ready ? k.bg : k.card}" stroke-width="2.4" stroke-linecap="round"/>`}</g>
    </g>`);
    if (t > 5.95 && t < 6.75) { const v = ease(seg(t, 5.95, 6.6)), [cx, cy] = pos("coord", t), xm = lerp(P.x + 200, cx, v), ym = lerp(P.y + 22, cy - 30, v) - Math.sin(v * Math.PI) * 50, s = 1 - seg(t, 6.45, 6.75);
      o.push(`<g transform="translate(${xm.toFixed(1)},${ym.toFixed(1)}) scale(${s.toFixed(3)})"><rect x="-30" y="-11" width="60" height="22" rx="11" fill="${k.card}" stroke="${k.line}" filter="url(#sh)"/><rect x="-20" y="-2" width="40" height="4" rx="2" fill="${k.text}" opacity=".5"/></g>`); }
  }
  // the brief: task cards held above the coordinator, then handed over
  const owners = ["scholar", "build", "keeper"];
  owners.forEach((ow, i) => {
    const fan = pop(seg(t, 7.4 + i * .12, 7.9 + i * .12)), [cx, cy] = pos("coord", t), hand = HANDS.find(h => h[0] === "card:" + ow);
    if (fan <= 0) return;
    if (t < hand[3]) o.push(`<g transform="translate(${(cx + (i - 1) * 40).toFixed(1)},${(cy - 78).toFixed(1)}) rotate(${(i - 1) * 7}) scale(${fan.toFixed(3)})">${miniCard(ow)}</g>`);
    else if (t < hand[4]) o.push(between("coord", ow, seg(t, hand[3], hand[4]), t, miniCard(ow)));
    else if (t < { scholar: 12.3, build: 12.65, keeper: 13.0 }[ow]) o.push(attach(ow, t, miniCard(ow, .9)));
  });
  // desks: each card opens where its bee lands, and folds back into its bee at the end
  let progress = 0;
  [["scholar", 12.3, 24.4], ["build", 12.65, 24.55], ["keeper", 13.0, 24.7]].forEach(([ow, open, fold]) => {
    const T = DESKS[ow], v = out(seg(t, open, open + .55)), f = ease(seg(t, fold, fold + .5));
    if (v <= 0 || f >= 1) return;
    const [bx, by] = pos(ow, t), cx = T.x + T.w / 2, cy = T.y + T.h / 2;
    const s = lerp(.15, 1, v) * lerp(1, .15, f), tx = lerp(bx + 0 - cx, 0, v) * (1 - f) + lerp(0, bx - cx, f), ty = lerp(by + 40 - cy, 0, v) * (1 - f) + lerp(0, by + 40 - cy, f);
    o.push(`<g transform="translate(${(cx + tx).toFixed(1)},${(cy + ty).toFixed(1)}) scale(${s.toFixed(3)}) translate(${-cx},${-cy})" opacity="${clamp(v * 2 - f).toFixed(2)}">`);
    o.push(card(T, k, ow));
    if (ow === "scholar") {
      const scan = seg(t, 12.8, 17.2);
      for (let l = 0; l < 10; l++) {
        const ly = T.y + 32 + l * 14, w = T.w - 28 - ((l * 37) % 4) * 14, h = HL.find(q => q.line === l), hv = h ? out(seg(t, h.t, h.t + .4)) : 0;
        o.push(`<rect x="${T.x + 14}" y="${ly}" width="${w}" height="5" rx="2.5" fill="${k.text}" opacity=".15"/>`);
        if (hv) o.push(`<rect x="${T.x + 12}" y="${ly - 2}" width="${((w + 4) * hv).toFixed(1)}" height="9" rx="3" fill="${JADE}" opacity=".2"/><rect x="${T.x + 14}" y="${ly}" width="${(w * hv).toFixed(1)}" height="5" rx="2.5" fill="${JADE}"/>`);
      }
      if (scan > 0 && scan < 1) { const sy = T.y + 26 + scan * 140; o.push(`<rect x="${T.x + 6}" y="${sy}" width="${T.w - 12}" height="16" fill="url(#scan)"/><rect x="${T.x + 6}" y="${sy + 15}" width="${T.w - 12}" height="1.5" fill="${JADE}"/>`); }
      progress += HL.filter(h => t > h.t).length;
    }
    if (ow === "build") {
      BLOCKS.forEach(([bx2, by2, bw, bh], j) => {
        o.push(`<rect x="${T.x + bx2}" y="${T.y + by2}" width="${bw}" height="${bh}" rx="3" fill="none" stroke="${k.text}" stroke-opacity=".12" stroke-dasharray="3 3"/>`);
        const p = pop(seg(t, BLOCK_T[j], BLOCK_T[j] + .45)); if (!p) return;
        const cx2 = T.x + bx2 + bw / 2, cy2 = T.y + by2 + bh / 2, drop = (1 - out(seg(t, BLOCK_T[j], BLOCK_T[j] + .3))) * 14;
        const fill = [BEES.build.wing, BEES.scholar.wing, k.text, BEES.build.body, BEES.msg.wing, BEES.keeper.wing, BEES.coord.wing][j];
        o.push(`<g transform="translate(${cx2},${cy2 - drop}) scale(${p.toFixed(3)}) translate(${-cx2},${-cy2})"><rect x="${T.x + bx2}" y="${T.y + by2}" width="${bw}" height="${bh}" rx="3" fill="${fill}" opacity="${j === 2 ? .7 : 1}"/>
          ${j === 1 ? `<path d="M${T.x + bx2 + 14},${T.y + by2 + bh - 12} l18,-22 l12,14 l8,-8 l18,16 Z" fill="${JADE}" opacity=".45"/><circle cx="${T.x + bx2 + bw - 20}" cy="${T.y + by2 + 16}" r="6" fill="${BEES.coord.body}" opacity=".8"/>` : ""}
          ${j >= 4 ? `<rect x="${T.x + bx2 + 8}" y="${T.y + by2 + 11}" width="${bw * .5}" height="4" rx="2" fill="#000" opacity=".15"/><rect x="${T.x + bx2 + 8}" y="${T.y + by2 + 21}" width="${bw * .7}" height="3" rx="1.5" fill="#000" opacity=".1"/>` : ""}</g>`);
      });
      if (t > BLOCK_T[2]) [0, 1, 2].forEach(i => { const w = [T.w - 136, T.w - 150, T.w - 140][i], y = T.y + 66 + i * 10, land = out(seg(t, 21.0 + i * .15, 21.35 + i * .15));
        o.push(`<rect x="${T.x + 112}" y="${y}" width="${w}" height="5" rx="2.5" fill="${k.text}" opacity=".15"/>`); if (land) o.push(`<rect x="${T.x + 112}" y="${y}" width="${(w * land).toFixed(1)}" height="5" rx="2.5" fill="${JADE}"/>`); });
      progress += BLOCK_T.filter(bt => t > bt).length + (t > 21.3 ? 1 : 0);
    }
    if (ow === "keeper") {
      for (let r = 0; r < 4; r++) {
        const ry = rowY(r) - 8, tick = seg(t, TICKS[r], TICKS[r] + .3), s2 = tick ? pop(tick) : 1, cx3 = T.x + 23, cy3 = ry + 8;
        o.push(`<g transform="translate(${cx3},${cy3}) scale(${s2.toFixed(3)}) translate(${-cx3},${-cy3})"><rect x="${T.x + 15}" y="${ry}" width="16" height="16" rx="4" fill="${tick ? BEES.keeper.body : "none"}" stroke="${tick ? BEES.keeper.body : k.text}" stroke-opacity="${tick ? 1 : .25}" stroke-width="1.6"/>${tick ? `<path d="M${T.x + 19},${ry + 8} L${T.x + 22},${ry + 11} L${T.x + 28},${ry + 4.5}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="16" stroke-dashoffset="${(16 * (1 - tick)).toFixed(1)}"/>` : ""}</g>
          <rect x="${T.x + 40}" y="${ry + 6}" width="${T.w - 58 - r * 10}" height="5" rx="2.5" fill="${k.text}" opacity="${tick ? .1 : .2}"/>${tick ? `<rect x="${T.x + 38}" y="${ry + 8}" width="${((T.w - 54 - r * 10) * out(seg(t, TICKS[r] + .15, TICKS[r] + .5))).toFixed(1)}" height="1.6" fill="${BEES.keeper.body}"/>` : ""}`);
      }
      progress += TICKS.filter(tt => t > tt).length;
    }
    o.push(`</g>`);
  });
  // the scholar's quotes: a little stack, handed to the messenger, then to the builder
  const qn = HL.filter(h => t > h.t + .4).length;
  if (qn && t < 18.75) o.push(`<g transform="translate(${(pos("scholar", t)[0] + 34).toFixed(1)},${(pos("scholar", t)[1] + 6).toFixed(1)})">${quotes(qn)}</g>`);
  HANDS.filter(h => h[0] === "quotes").forEach(([, from, to, a, b], i) => { if (t >= a && t < b) o.push(between(from, to, seg(t, a, b), t, quotes(3))); });
  if (t >= 19.1 && t < 20.6) o.push(attach("msg", t, quotes(3)));
  if (t >= 20.95 && t < 21.05) o.push(attach("build", t, quotes(3)));
  // pieces carried back to the meeting place, then combined
  [["scholar", 24.4, 25.3], ["build", 24.55, 25.45], ["keeper", 24.7, 25.6]].forEach(([ow, a, b], i) => {
    if (t > a + .5 && t < 25.7 + i * .1) o.push(attach(ow, t, miniCard(ow, 1.1)));
    const v = seg(t, 25.7 + i * .1, 26.15 + i * .1); if (v > 0 && v < 1) { const [x, y] = pos(ow, t); o.push(`<g transform="translate(${lerp(x, RESULT_AT[0], ease(v)).toFixed(1)},${(lerp(y + 46, RESULT_AT[1], ease(v)) - Math.sin(Math.PI * v) * 30).toFixed(1)}) scale(${lerp(1.1, .6, v).toFixed(2)})">${miniCard(ow)}</g>`); }
  });
  // coordinator's progress ring
  if (t > 12.6 && t < 24.6) { const R = 34, a = Math.min(.999, progress / 15) * Math.PI * 2, [cx, cy] = pos("coord", t), f = seg(t, 12.6, 13.1) * (1 - seg(t, 24.1, 24.6));
    o.push(`<g opacity="${f.toFixed(2)}"><circle cx="${cx}" cy="${cy + 2}" r="${R}" fill="none" stroke="${k.text}" stroke-opacity=".08" stroke-width="3"/>${a > .01 ? `<path d="M${cx},${cy + 2 - R} A${R},${R} 0 ${a > Math.PI ? 1 : 0} 1 ${(cx + Math.sin(a) * R).toFixed(2)},${(cy + 2 - Math.cos(a) * R).toFixed(2)}" fill="none" stroke="${BEES.coord.body}" stroke-width="3" stroke-linecap="round"/>` : ""}</g>`); }
  // the result: born above the meeting place, carried by the coordinator, docked above your prompt
  if (t > 26.15 && t < 33) {
    const sIn = pop(seg(t, 26.15, 26.6)), badge = pop(seg(t, 26.6, 26.95));
    let x = RESULT_AT[0], y = RESULT_AT[1], s = sIn;
    if (t > 27.6) { const [cx, cy] = pos("coord", t); const g = ease(seg(t, 27.6, 27.75)); x = lerp(RESULT_AT[0], cx, g); y = lerp(RESULT_AT[1], cy + 62, g); s = lerp(1, .5, g); }
    if (t > 28.6) { x = DOCK[0]; y = DOCK[1]; s = .5; }
    o.push(`<g transform="translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${s.toFixed(3)})">
      <rect x="-150" y="-92" width="300" height="184" rx="8" fill="${k.card}" stroke="${k.line}" filter="url(#sh)"/>
      <path d="M-150,-84 a8,8 0 0 1 8,-8 h284 a8,8 0 0 1 8,8 v14 h-300 Z" fill="${BEES.coord.wing}"/>
      ${KEYS.map((kk, i) => `<circle cx="${-136 + i * 12}" cy="-80" r="4.2" fill="${BEES[kk].body}"/>`).join("")}
      <rect x="-134" y="-58" width="268" height="14" rx="3" fill="${BEES.build.wing}"/>
      <rect x="-134" y="-36" width="104" height="72" rx="3" fill="${BEES.scholar.wing}"/><path d="M-120,26 l20,-26 l14,16 l9,-9 l22,19 Z" fill="${JADE}" opacity=".45"/>
      <rect x="-20" y="-34" width="130" height="9" rx="2" fill="${k.text}" opacity=".7"/>${[0, 1, 2].map(i => `<rect x="-20" y="${-16 + i * 11}" width="${[136, 118, 128][i]}" height="5" rx="2.5" fill="${JADE}"/>`).join("")}
      <rect x="-20" y="20" width="62" height="16" rx="3" fill="${BEES.build.body}"/>${[0, 1, 2].map(i => `<rect x="${-134 + i * 92}" y="46" width="84" height="34" rx="3" fill="${[BEES.msg.wing, BEES.keeper.wing, BEES.coord.wing][i]}"/>`).join("")}
      <g transform="translate(140,82) scale(${badge.toFixed(3)})"><circle r="18" fill="${JADE}"/><path d="M-8,0 L-2,6 L9,-6" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></g>
    </g>`);
  }
  o.push(`</g>`);

  // remember: five small lights flow together into one memory of the day
  if (t > 29.9 && t < 31.3) KEYS.forEach((key, i) => {
    const v = seg(t, 30 + i * .08, 30.8 + i * .08), [x, y] = pos(key, t), form = out(seg(t, 29.9 + i * .08, 30.2 + i * .08));
    const px = lerp(x, RESULT_AT[0], ease(v)), py = lerp(y - 40, RESULT_AT[1] + 20, ease(v)) - Math.sin(Math.PI * v) * 30;
    if (v < 1) o.push(`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${(4 * form * 3).toFixed(1)}" fill="${BEES[key].body}" opacity=".14"/><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${(4 * form).toFixed(1)}" fill="${BEES[key].body}"/>`);
  });

  // bees, back to front, with soft floor shadows
  const order = [...KEYS].sort((a, b) => pos(a, t)[1] - pos(b, t)[1]);
  order.forEach(key => { const [x, y] = pos(key, t), s = sim[key]; const bob = Math.sin(t * 2 + KEYS.indexOf(key) * 1.1) * lerp(2, .8, s.sleep); o.push(drawBee(key, { ...s, x, y: y + bob }, t)); });
  KEYS.forEach((key, i) => { const s = sim[key]; if (s.sleep > .6) { const [x, y] = pos(key, t), z = (t * .45 + i * .21) % 1; o.push(`<text x="${(x + 14 + z * 12).toFixed(1)}" y="${(y - 30 - z * 26).toFixed(1)}" font-family="Georgia,serif" font-style="italic" font-size="${(12 + z * 4).toFixed(1)}" fill="${k.text}" opacity="${((1 - z) * .55 * (s.sleep - .6) / .4).toFixed(2)}">z</text>`); } });
  TALK.forEach(([a, b, s0, d, kind]) => o.push(bubble(a, b, kind, seg(t, s0, s0 + d), t, k)));

  svg.innerHTML = `<defs><clipPath id="bc"><path d="${BODY}"/></clipPath>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#2a1d0a" flood-opacity=".08"/></filter>
    ${dark() ? `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26313A" stop-opacity=".6"/><stop offset=".6" stop-color="#1D2329" stop-opacity=".28"/><stop offset="1" stop-color="#16181B" stop-opacity="0"/></linearGradient>` : `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9B48C" stop-opacity=".38"/><stop offset=".55" stop-color="#E0D2B6" stop-opacity=".22"/><stop offset="1" stop-color="#F3ECDF" stop-opacity="0"/></linearGradient>`}
    <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${JADE}" stop-opacity="0"/><stop offset="1" stop-color="${JADE}" stop-opacity=".18"/></linearGradient></defs>` + o.join("");
}

/* ================= run ================= */
const svg = document.getElementById("hive");
const DT = 1 / 60;
if (svg) {
  const freeze = new URLSearchParams(location.search).get("hive"), still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (still || freeze !== null) { const at = freeze !== null ? +freeze : 19.3; for (let tt = 0; tt < at; tt += DT) step(tt, DT); render(at); }
  else {
    let t = 0, last = performance.now(), acc = 0, visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; last = performance.now(); }).observe(svg);
    const theme = new MutationObserver(() => render(t)); theme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    (function frame(now) {
      if (visible && !document.hidden) {
        acc += Math.min(.1, (now - last) / 1000);
        while (acc >= DT) { step(t, DT); t += DT; acc -= DT; if (t >= LOOP) { t -= LOOP; loop++; } }
        render(t);
      }
      last = now; requestAnimationFrame(frame);
    })(last);
  }
}

})();
