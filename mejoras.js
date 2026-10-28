// ============================================================================
// CLEVERHOME MRP v1.4 — MÓDULO DE MEJORAS (PARTE 1 DE 2)
// ============================================================================

// 1. AMPLIACIÓN DEL CATÁLOGO DE STOCK (SIN PISAR TUS DATOS ACTUALES)
const EXTRA_CATALOG_ITEMS = [
  { key: "cacahuete_polvo", name: "Cacahuete en polvo desgrasado", cat: "Hidratos y Despensa", stock: 250, minStock: 150, unit: "g", pricePerKg: 14.50, boughtChecked: false },
  { key: "proteina_iso", name: "Proteína Whey ISO / Caseína", cat: "Huevos y Lácteos 0%", stock: 500, minStock: 250, unit: "g", pricePerKg: 28.00, boughtChecked: false },
  { key: "leche_almendras", name: "Leche de Almendras Zero", cat: "Huevos y Lácteos 0%", stock: 1000, minStock: 1000, unit: "ml", pricePerKg: 1.45, boughtChecked: false },
  { key: "cereales_0", name: "Cereales sin azúcar / Corn Flakes 0%", cat: "Hidratos y Despensa", stock: 300, minStock: 200, unit: "g", pricePerKg: 5.20, boughtChecked: false },
  { key: "harina_avena", name: "Harina de avena / Copos avena", cat: "Hidratos y Despensa", stock: 500, minStock: 250, unit: "g", pricePerKg: 2.40, boughtChecked: false },
  { key: "queso_untar_sl", name: "Queso untar Light Sin Lactosa / Burgos 0%", cat: "Huevos y Lácteos 0%", stock: 250, minStock: 200, unit: "g", pricePerKg: 6.80, boughtChecked: false },
  { key: "jamon_serrano", name: "Jamón serrano / Lomo embuchado", cat: "Carnes", stock: 150, minStock: 120, unit: "g", pricePerKg: 18.50, boughtChecked: false },
  { key: "atun_natural", name: "Atún al natural en lata", cat: "Pescados", stock: 240, minStock: 160, unit: "g", pricePerKg: 9.50, boughtChecked: false },
  { key: "frutos_secos", name: "Frutos secos naturales (Nueces/Almendras)", cat: "Grasas Saludables", stock: 200, minStock: 100, unit: "g", pricePerKg: 12.00, boughtChecked: false },
  { key: "legumbres_bote", name: "Garbanzos / Lentejas cocidas", cat: "Hidratos y Despensa", stock: 400, minStock: 400, unit: "g", pricePerKg: 1.90, boughtChecked: false }
];

// 2. DESGLOSE EXACTO DE PESOS EN DESAYUNOS Y SNACKS (NOELIA vs NANDO)
const SIMPLE_SLOTS_WEIGHTS = {
  d1: [
    { name: "Yogur proteico 0% sin lactosa", noe: 1, nan: 1, unit: "ud" },
    { name: "Cereales sin azúcar", noe: 30, nan: 40, unit: "g" },
    { name: "Proteína ISO / Caseína", noe: 20, nan: 25, unit: "g" },
    { name: "Frutos secos naturales", noe: 8, nan: 12, unit: "g" }
  ],
  d2: [
    { name: "Yogures 0% sin lactosa", noe: 2, nan: 2, unit: "uds" },
    { name: "Cereales sin azúcar", noe: 15, nan: 25, unit: "g" },
    { name: "Cacahuete en polvo desgrasado", noe: 40, nan: 50, unit: "g" }
  ],
  d3: [
    { name: "Yogur 0% sin lactosa", noe: 1, nan: 1, unit: "ud" },
    { name: "Frutos rojos / Arándanos", noe: 25, nan: 35, unit: "g" },
    { name: "Cereales sin azúcar", noe: 25, nan: 35, unit: "g" },
    { name: "Cacahuete en polvo", noe: 25, nan: 30, unit: "g" },
    { name: "Frutos secos", noe: 8, nan: 12, unit: "g" }
  ],
  d4: [
    { name: "Tortitas de arroz o maíz", noe: 5, nan: 6, unit: "uds" },
    { name: "Proteína ISO para sirope", noe: 25, nan: 30, unit: "g" },
    { name: "Leche de almendras Zero", noe: 100, nan: 120, unit: "ml" },
    { name: "Frutos secos picados", noe: 8, nan: 12, unit: "g" }
  ],
  d5: [
    { name: "Tortitas de arroz o maíz", noe: 6, nan: 7, unit: "uds" },
    { name: "Jamón cocido extra / Pavo / Atún", noe: 80, nan: 100, unit: "g" },
    { name: "AOVE (o 8g frutos secos)", noe: 5, nan: 8, unit: "ml" }
  ],
  d6: [
    { name: "Pan masa madre / Pan finito", noe: 60, nan: 80, unit: "g" },
    { name: "Pavo en lonchas", noe: 40, nan: 60, unit: "g" },
    { name: "Queso untar light sin lactosa", noe: 20, nan: 25, unit: "g" },
    { name: "AOVE", noe: 5, nan: 8, unit: "ml" }
  ],
  d7: [
    { name: "Harina de avena", noe: 30, nan: 45, unit: "g" },
    { name: "Claras líquidas", noe: 100, nan: 130, unit: "ml" },
    { name: "Yogur 0% sin lactosa", noe: 1, nan: 1, unit: "ud" },
    { name: "Cacao puro 0% + Frutos secos", noe: 18, nan: 22, unit: "g" }
  ],
  d8: [
    { name: "Pan de masa madre", noe: 60, nan: 80, unit: "g" },
    { name: "Jamón serrano", noe: 40, nan: 55, unit: "g" },
    { name: "Tomate natural rallado", noe: 50, nan: 60, unit: "g" },
    { name: "AOVE", noe: 5, nan: 8, unit: "ml" }
  ],
  d9: [
    { name: "Pan de masa madre", noe: 55, nan: 75, unit: "g" },
    { name: "Huevo M a la plancha", noe: 1, nan: 2, unit: "uds" },
    { name: "Aguacate fresco", noe: 20, nan: 30, unit: "g" },
    { name: "Tomate natural + AOVE (5ml)", noe: 45, nan: 55, unit: "g" }
  ],
  d10: [
    { name: "Pan de masa madre", noe: 70, nan: 90, unit: "g" },
    { name: "Queso Burgos 0% sin lactosa", noe: 50, nan: 65, unit: "g" },
    { name: "Fiambre de pavo extra", noe: 40, nan: 55, unit: "g" },
    { name: "AOVE", noe: 5, nan: 8, unit: "ml" }
  ],
  d11: [
    { name: "Yogur 0% sin lactosa", noe: 1, nan: 1, unit: "ud" },
    { name: "Fruta (Fresas 250g / Kiwi 130g / Arándanos 140g)", noe: 1, nan: 1, unit: "ración" },
    { name: "Proteína ISO", noe: 20, nan: 25, unit: "g" },
    { name: "Cereales 0% (13g) + Frutos secos (8g)", noe: 21, nan: 28, unit: "g" }
  ],
  d12: [
    { name: "Yogures 0% sin lactosa", noe: 2, nan: 2, unit: "uds" },
    { name: "Fruta (Fresas 150g / Kiwi 70g)", noe: 1, nan: 1, unit: "ración" },
    { name: "Cacahuete en polvo desgrasado", noe: 40, nan: 50, unit: "g" }
  ],
  sc1: [
    { name: "Tortitas de arroz o maíz", noe: 3, nan: 4, unit: "uds" }
  ],
  sc2: [
    { name: "Fresas (250g) | Kiwi (130g) | Arándanos (140g) | Naranja (170g) | Piña (160g)", noe: 1, nan: 1, unit: "ración" }
  ],
  sc3: [
    { name: "Ciruela (180g) | Melocotón (200g) | Manzana (150g) | Uva (110g) ⚠️ Vigilar fructosa", noe: 1, nan: 1, unit: "ración" }
  ],
  st1: [
    { name: "Yogur 0% sin lactosa", noe: 0.5, nan: 1, unit: "ud" },
    { name: "Cereales sin azúcar", noe: 20, nan: 25, unit: "g" },
    { name: "Proteína ISO", noe: 20, nan: 25, unit: "g" }
  ],
  st2: [
    { name: "Yogur 0% sin lactosa", noe: 1, nan: 1, unit: "ud" },
    { name: "Frutos rojos congelados/frescos", noe: 30, nan: 40, unit: "g" },
    { name: "Cereales sin azúcar", noe: 20, nan: 25, unit: "g" },
    { name: "Cacahuete en polvo", noe: 10, nan: 15, unit: "g" }
  ],
  st3: [
    { name: "Tortitas de arroz o maíz", noe: 3, nan: 4, unit: "uds" },
    { name: "Proteína ISO", noe: 25, nan: 30, unit: "g" },
    { name: "Leche de almendras Zero", noe: 100, nan: 120, unit: "ml" }
  ],
  st4: [
    { name: "Tortitas de arroz o maíz", noe: 4, nan: 5, unit: "uds" },
    { name: "Pavo / Jamón cocido extra / Atún natural", noe: 80, nan: 100, unit: "g" }
  ],
  st5: [
    { name: "Pan masa madre / Pan finito", noe: 40, nan: 55, unit: "g" },
    { name: "Pavo en lonchas", noe: 40, nan: 55, unit: "g" },
    { name: "Queso untar light sin lactosa", noe: 18, nan: 25, unit: "g" }
  ]
};

// 3. MIGRACIÓN NO DESTRUCTIVA DEL ESTADO Y CONEXIÓN NUBE AMPLIADA
function ensureV14StateStructure() {
  if (!state.desfases) state.desfases = [];
  if (!state.stockHistory) state.stockHistory = {};
  if (!state.health) state.health = { weights: [], measurements: [], steps: [] };
  if (!state.health.steps) state.health.steps = [];

  // Añadir artículos nuevos del catálogo sin tocar los que ya existen
  EXTRA_CATALOG_ITEMS.forEach(extra => {
    if (!state.inventory.some(it => it.key === extra.key)) {
      state.inventory.push(JSON.parse(JSON.stringify(extra)));
    }
  });
}

// Registrar movimiento en el Kardex de un artículo
function recordStockMovement(itemKey, deltaG, reason) {
  if (!state.stockHistory) state.stockHistory = {};
  if (!state.stockHistory[itemKey]) state.stockHistory[itemKey] = [];
  const invItem = state.inventory.find(x => x.key === itemKey);
  if (!invItem) return;

  const currentStock = invItem.stock;
  const prevStock = Math.max(0, currentStock - deltaG);

  state.stockHistory[itemKey].unshift({
    id: Date.now() + Math.random(),
    date: new Date().toLocaleString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }),
    reason,
    prev: prevStock,
    delta: deltaG,
    after: currentStock,
    unit: invItem.unit || "g"
  });
  // Mantener últimos 40 movimientos por producto
  if (state.stockHistory[itemKey].length > 40) {
    state.stockHistory[itemKey] = state.stockHistory[itemKey].slice(0, 40);
  }
}

// 4. SEMÁFORO MINIMALISTA DE NUBE (SOLO EL PUNTO 🟢 / 🟡 / 🔴)
window.setCloudBadge = function(status) {
  const badge = document.getElementById("cloudStatusBadge");
  if (!badge) return;
  if (status === "ok") {
    badge.className = "cursor-pointer text-[11px] leading-none px-1 py-0.5 rounded-full bg-emerald-50 border border-emerald-200";
    badge.textContent = "🟢";
    badge.title = "Sincronizado en tiempo real con Firebase";
  } else if (status === "syncing") {
    badge.className = "cursor-pointer text-[11px] leading-none px-1 py-0.5 rounded-full bg-amber-50 border border-amber-200 animate-pulse";
    badge.textContent = "🟡";
    badge.title = "Sincronizando cambios...";
  } else {
    badge.className = "cursor-pointer text-[11px] leading-none px-1 py-0.5 rounded-full bg-rose-50 border border-rose-200";
    badge.textContent = "🔴";
    badge.title = "Modo local (toca para reconectar)";
  }
};

// Sobrescribir saveState para guardar también Desfases, Kardex y Pasos en Firebase
window.saveState = function(skipCloud = false) {
  ensureV14StateStructure();
  try {
    localStorage.setItem("cleverHomeMrpState_v1", JSON.stringify(state));
  } catch (e) { console.error(e); }

  if (!skipCloud && !isApplyingRemoteUpdate && firebaseRef) {
    setCloudBadge("syncing");
    const sharedPayload = {
      updatedAt: Date.now(),
      nando: state.nando,
      customDishes: state.customDishes || {},
      weeks: state.weeks,
      inventory: state.inventory,
      logs: state.logs || [],
      health: state.health,
      desfases: state.desfases || [],
      stockHistory: state.stockHistory || {}
    };
    firebaseRef.set(sharedPayload)
      .then(() => setCloudBadge("ok"))
      .catch(err => {
        console.error("Error Firebase:", err);
        setCloudBadge("offline");
      });
  }
};

// 5. NANDO ACTUALIZADO A 2.000 KCAL EN CABECERA Y OBJETIVOS
window. getNandoGoalMacros = function() {
  const kcal = state.nando.defMode ? 1850 : 2000;
  const p = Math.round(140 * state.nando.multProt + 12); // ~165g
  const hc = state.nando.defMode ? 158 : 195;
  const g = state.nando.defMode ? 50 : 60;
  return { kcal, p, hc, g };
};

window.renderMacroSummaryBar = function() {
  const bar = document.getElementById("macroSummaryBar");
  const sub = document.getElementById("headerSubtitle");
  const nan = getNandoGoalMacros();

  if (state.profile === "noelia") {
    sub.textContent = "Perfil Noelia · Filtro Fructosa Activo ⚠️";
    bar.innerHTML = `
      <div><span class="text-slate-400 block">Objetivo</span><b class="text-emerald-700">1.600 kcal</b></div>
      <div><span class="text-slate-400 block">Proteína</span><b>140 g</b></div>
      <div><span class="text-slate-400 block">Hidratos</span><b>158 g</b></div>
      <div><span class="text-slate-400 block">Grasas</span><b>45 g</b></div>
    `;
  } else if (state.profile === "nando") {
    sub.textContent = `Perfil Nando (${state.nando.defMode ? 'Definición' : 'Meta 2.000 kcal'})`;
    bar.innerHTML = `
      <div><span class="text-slate-400 block">Objetivo</span><b class="text-indigo-700">${nan.kcal} kcal</b></div>
      <div><span class="text-slate-400 block">Proteína</span><b>${nan.p} g</b></div>
      <div><span class="text-slate-400 block">Hidratos</span><b>${nan.hc} g</b></div>
      <div><span class="text-slate-400 block">Grasas</span><b>${nan.g} g</b></div>
    `;
  } else {
    sub.textContent = "Vista Conjunta · Pesos Sumados + Alerta Fructosa ⚠️";
    bar.innerHTML = `
      <div><span class="text-slate-400 block">Noelia</span><b class="text-emerald-700">1.600 kcal</b></div>
      <div><span class="text-slate-400 block">Nando</span><b class="text-indigo-700">${nan.kcal} kcal</b></div>
      <div><span class="text-slate-400 block">Fructosa</span><b class="text-amber-700">⚠️ Activa</b></div>
      <div><span class="text-slate-400 block">Modo</span><b>Doble Ración</b></div>
    `;
  }
};

// 6. PESTAÑA SEMANA: DESAYUNOS Y SNACKS CON MODAL DE PESOS + LÍNEA DE "DESFASE"
window.openSimpleSlotModal = function(slotType, itemId) {
  let catalog = DESAYUNOS_PDF;
  let badgeText = "Desayuno · 300 kcal (20P | 30HC | 10G)";
  if (slotType === "sc") {
    catalog = SNACK_COMODIN_PDF;
    badgeText = "Snack Comodín · 80 kcal (20HC)";
  } else if (slotType === "st") {
    catalog = SNACK_TARDE_PDF;
    badgeText = "Merienda · 200 kcal (20P | 20HC | 4G)";
  }

  const item = catalog.find(x => x.id === itemId) || catalog[0];
  const weights = SIMPLE_SLOTS_WEIGHTS[item.id] || [];

  document.getElementById("modalMealBadge").textContent = badgeText;
  document.getElementById("modalRecipeTitle").textContent = item.name;

  const rowsHtml = weights.map(w => `
    <div class="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/60 last:border-0">
      <span class="font-semibold text-slate-800">${w.name}</span>
      <div class="text-right">
        <span class="font-bold text-emerald-700">Total: ${Number((w.noe + w.nan).toFixed(1))} ${w.unit}</span>
        <span class="text-[10px] text-slate-500 block">Noelia: ${w.noe}${w.unit} | Nando: ${w.nan}${w.unit}</span>
      </div>
    </div>
  `).join("");

  document.getElementById("modalWeightsBox").innerHTML = `
    <div class="text-[10px] font-bold uppercase text-slate-500 mb-1">⚖️ Medidas y Gramos Exactos por Usuario</div>
    ${rowsHtml}
    <div class="mt-2 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
      <b>Resumen de composición:</b> ${item.desc}
    </div>
  `;

  const fructBox = document.getElementById("modalFructoseBox");
  if (shouldShowFructoseAlert() && item.fructose && FRUCTOSE_ALERTS[item.fructose]) {
    const fa = FRUCTOSE_ALERTS[item.fructose];
    fructBox.classList.remove("hidden");
    fructBox.innerHTML = `
      <div class="text-xs font-bold text-amber-900">⚠️ Aviso Clínico Noelia: ${fa.name}</div>
      <p class="text-[11px] text-amber-800">${fa.reason}</p>
      <p class="text-[11px] font-semibold text-emerald-900 bg-white/90 p-2 rounded-xl border border-amber-200">✅ Priorizar: ${fa.alt}</p>
    `;
  } else {
    fructBox.classList.add("hidden");
  }

  document.getElementById("modalStepsBox").innerHTML = `
    <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
      🍴 <b>Preparación rápida:</b> Pesar en crudo según el perfil activo. Si incluye tostada de masa madre o pan finito, tostar en <b>Sandwichera/Tostador (2 min)</b>. Si incluye huevo, hacer a la plancha en <b>Sartén Mediana (Vitro Nivel 6)</b>.
    </div>
    <div class="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200 text-[11px]">
      🍓 <b>Equivalencias Oficiales de 1 Ración de Fruta:</b> 250g Fresas · 130g Kiwi · 140g Arándanos · 150g Frambuesas · 170g Naranja · 160g Piña · 200g Melón/Sandía.
    </div>
  `;

  document.getElementById("modalConservationBox").innerHTML = `
    <div class="font-bold text-indigo-950">❄️ Conservación:</div>
    <p class="text-indigo-900">Preparar en el momento o dejar el bocadillo/tupper montado la noche anterior en nevera (4°C).</p>
  `;

  document.getElementById("recipeModal").classList.remove("hidden");
};

window.renderDailyMeals = function() {
  ensureV14StateStructure();
  const container = document.getElementById("dailyMealsContainer");
  const dayIdx = state.selectedDayIdx;
  const dayObj = state.weeks[state.weekHorizon][dayIdx];
  const dItem = DESAYUNOS_PDF.find(x => x.id === dayObj.d) || DESAYUNOS_PDF[0];
  const lDish = DISHES_DB[dayObj.l] || DISHES_DB["m1_l"];
  const scItem = SNACK_COMODIN_PDF.find(x => x.id === dayObj.sc) || SNACK_COMODIN_PDF[0];
  const stItem = SNACK_TARDE_PDF.find(x => x.id === dayObj.st) || SNACK_TARDE_PDF[0];
  const cDish = DISHES_DB[dayObj.c] || DISHES_DB["m1_d"];
  const showFruct = shouldShowFructoseAlert();

  const dayDesfases = (state.desfases || []).filter(
    df => df.horizon === state.weekHorizon && df.dayIdx === dayIdx
  );

  container.innerHTML = `
    <!-- DESAYUNO (300 KCAL) - FORMATO UNIFICADO CLICABLE -->
    <div class="bg-white rounded-2xl p-3.5 shadow-sm border-l-4 border-l-amber-500 border border-slate-200 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-800">
          ☕ Desayuno · 300 kcal
        </span>
        <select onchange="changeDaySimpleSlot('d', this.value)" class="text-[11px] bg-slate-100 rounded-lg px-2 py-1 font-semibold text-slate-700 max-w-[175px] truncate">
          ${DESAYUNOS_PDF.map(op => `<option value="${op.id}" ${op.id === dItem.id ? "selected" : ""}>${op.name}</option>`).join("")}
        </select>
      </div>
      <h3 onclick="openSimpleSlotModal('d', '${dItem.id}')" class="text-sm font-bold text-slate-900 leading-snug cursor-pointer hover:text-amber-700">
        ${dItem.name}
      </h3>
      <div class="flex items-center justify-between pt-0.5">
        <div>
          ${showFruct && dItem.fructose ? `<button onclick="openFructosePopup('${dItem.fructose}')" class="px-2 py-0.5 text-[10px] rounded-full bg-amber-100 text-amber-900 font-bold">⚠️ Fructosa</button>` : `<span class="text-[10px] text-slate-400 font-semibold">20P | 30HC | 10G</span>`}
        </div>
        <button onclick="openSimpleSlotModal('d', '${dItem.id}')" class="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-xl transition">
          Ver Receta y Pesos →
        </button>
      </div>
    </div>

    <!-- ALMUERZO (511 KCAL) -->
    <div class="bg-white rounded-2xl p-3.5 shadow-sm border-l-4 border-l-emerald-600 border border-slate-200 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
          🍽️ Almuerzo · 511 kcal
        </span>
        <select onchange="handleMainDishSelectChange(${dayIdx}, 'l', this.value)" class="text-[11px] bg-slate-100 rounded-lg px-2 py-1 font-semibold text-slate-700 max-w-[175px] truncate">
          ${buildMainDishSelectOptions(lDish.id)}
        </select>
      </div>
      <h3 onclick="openRecipeModal(${dayIdx}, 'l', '${lDish.id}')" class="text-sm font-bold text-slate-900 leading-snug cursor-pointer hover:text-emerald-700">
        ${lDish.title}
      </h3>
      <div class="flex items-center justify-between pt-0.5">
        <div class="flex items-center gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
            ${lDish.proteinType === 'pescado' ? '🐟 Pescado' : '🍗 Carne/Huevo'}
          </span>
          ${showFruct && lDish.fructoseAlert ? `<button onclick="openFructosePopup('${lDish.fructoseAlert}')" class="px-2 py-0.5 text-[10px] rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">⚠️ Fructosa</button>` : ""}
        </div>
        <button onclick="openRecipeModal(${dayIdx}, 'l', '${lDish.id}')" class="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-xl transition">
          Ver Receta y Pesos →
        </button>
      </div>
    </div>

    <!-- SNACKS (COMODÍN 80 KCAL + MERIENDA 200 KCAL) - FORMATO UNIFICADO CLICABLE -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div class="bg-white rounded-2xl p-3 shadow-sm border-l-4 border-l-pink-500 border border-slate-200 space-y-1.5">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-50 text-pink-800">🍓 Comodín · 80 kcal</span>
          <select onchange="changeDaySimpleSlot('sc', this.value)" class="text-[10px] bg-slate-100 rounded px-1.5 py-0.5 font-semibold max-w-[120px] truncate">
            ${SNACK_COMODIN_PDF.map(op => `<option value="${op.id}" ${op.id === scItem.id ? "selected" : ""}>${op.name}</option>`).join("")}
          </select>
        </div>
        <div onclick="openSimpleSlotModal('sc', '${scItem.id}')" class="text-xs font-bold text-slate-900 cursor-pointer hover:text-pink-700">
          ${scItem.name}
        </div>
        <div class="flex items-center justify-between pt-0.5">
          ${showFruct && scItem.fructose ? `<button onclick="openFructosePopup('${scItem.fructose}')" class="px-1.5 py-0.5 text-[10px] rounded bg-amber-100 text-amber-900 font-bold">⚠️ Fructosa</button>` : `<span class="text-[10px] text-slate-400">20g HC</span>`}
          <button onclick="openSimpleSlotModal('sc', '${scItem.id}')" class="text-[11px] font-bold text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-lg">
            Ver Pesos →
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-3 shadow-sm border-l-4 border-l-purple-500 border border-slate-200 space-y-1.5">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-800">🥪 Merienda · 200 kcal</span>
          <select onchange="changeDaySimpleSlot('st', this.value)" class="text-[10px] bg-slate-100 rounded px-1.5 py-0.5 font-semibold max-w-[120px] truncate">
            ${SNACK_TARDE_PDF.map(op => `<option value="${op.id}" ${op.id === stItem.id ? "selected" : ""}>${op.name}</option>`).join("")}
          </select>
        </div>
        <div onclick="openSimpleSlotModal('st', '${stItem.id}')" class="text-xs font-bold text-slate-900 cursor-pointer hover:text-purple-700">
          ${stItem.name}
        </div>
        <div class="flex items-center justify-between pt-0.5">
          <span class="text-[10px] text-slate-400">20P | 20HC | 4G</span>
          <button onclick="openSimpleSlotModal('st', '${stItem.id}')" class="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-lg">
            Ver Pesos →
          </button>
        </div>
      </div>
    </div>

    <!-- CENA (511 KCAL) -->
    <div class="bg-white rounded-2xl p-3.5 shadow-sm border-l-4 border-l-indigo-600 border border-slate-200 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800">
          🌙 Cena · 511 kcal
        </span>
        <select onchange="handleMainDishSelectChange(${dayIdx}, 'c', this.value)" class="text-[11px] bg-slate-100 rounded-lg px-2 py-1 font-semibold text-slate-700 max-w-[175px] truncate">
          ${buildMainDishSelectOptions(cDish.id)}
        </select>
      </div>
      <h3 onclick="openRecipeModal(${dayIdx}, 'c', '${cDish.id}')" class="text-sm font-bold text-slate-900 leading-snug cursor-pointer hover:text-indigo-700">
        ${cDish.title}
      </h3>
      <div class="flex items-center justify-between pt-0.5">
        <div class="flex items-center gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
            ${cDish.proteinType === 'pescado' ? '🐟 Pescado' : '🍗 Carne/Huevo'}
          </span>
          ${showFruct && cDish.fructoseAlert ? `<button onclick="openFructosePopup('${cDish.fructoseAlert}')" class="px-2 py-0.5 text-[10px] rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">⚠️ Fructosa</button>` : ""}
        </div>
        <button onclick="openRecipeModal(${dayIdx}, 'c', '${cDish.id}')" class="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-xl transition">
          Ver Receta y Pesos →
        </button>
      </div>
    </div>

    <!-- NUEVA LÍNEA 5: DESFASE / EXTRA FUERA DE DIETA (NO AFECTA AL STOCK DE DIETA) -->
    <div class="bg-rose-50/70 rounded-2xl p-3.5 shadow-sm border border-rose-200 space-y-2.5">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-100 text-rose-800">
            🚨 Desfase / Extra Fuera de Dieta (${dayObj.day})
          </span>
          <p class="text-[10px] text-rose-600 mt-0.5">Registra extras para el nutricionista (no descuenta del stock de dieta)</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-1.5 text-xs">
        <select id="desfaseUser" class="bg-white border border-rose-200 rounded-xl p-2 font-semibold text-xs">
          <option value="Ambos">👩‍❤️‍👨 Ambos</option>
          <option value="Noelia">👩 Noelia</option>
          <option value="Nando">👨 Nando</option>
        </select>
        <input type="text" id="desfaseDesc" placeholder="Ej: 2 cervezas y tapa, helado, chocolate..." class="sm:col-span-2 bg-white border border-rose-200 rounded-xl p-2 text-xs" />
        <div class="flex gap-1">
          <input type="number" id="desfaseKcal" placeholder="+Kcal (ej 300)" class="w-full bg-white border border-rose-200 rounded-xl p-2 text-xs font-bold" />
          <button onclick="addDesfaseEntry(${dayIdx})" class="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 rounded-xl text-xs flex-shrink-0">
            ➕
          </button>
        </div>
      </div>

      <div class="flex gap-1.5 text-[10px]">
        <button onclick="document.getElementById('desfaseKcal').value=150" class="px-2 py-0.5 rounded bg-white border border-rose-200 text-rose-700 font-semibold">Ligero (+150 kcal)</button>
        <button onclick="document.getElementById('desfaseKcal').value=350" class="px-2 py-0.5 rounded bg-white border border-rose-200 text-rose-700 font-semibold">Medio (+350 kcal)</button>
        <button onclick="document.getElementById('desfaseKcal').value=600" class="px-2 py-0.5 rounded bg-white border border-rose-200 text-rose-700 font-semibold">Comida libre (+600 kcal)</button>
      </div>

      ${dayDesfases.length > 0 ? `
        <div class="space-y-1 pt-1 border-t border-rose-200/80">
          ${dayDesfases.map(df => `
            <div class="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-xl border border-rose-100 text-xs">
              <div>
                <span class="font-bold text-rose-800">${df.user}:</span>
                <span class="text-slate-700">${df.desc}</span>
                <span class="text-[10px] font-bold text-rose-600 ml-1">(+${df.kcal} kcal)</span>
              </div>
              <button onclick="deleteDesfaseEntry(${df.id})" class="text-slate-400 hover:text-rose-600 font-bold text-xs px-1">✕</button>
            </div>
          `).join("")}
        </div>
      ` : `<div class="text-[11px] text-emerald-700 font-semibold">✅ Cero desfases este día (100% adherencia).</div>`}
    </div>
  `;
};

window.addDesfaseEntry = function(dayIdx) {
  ensureV14StateStructure();
  const user = document.getElementById("desfaseUser").value;
  const desc = document.getElementById("desfaseDesc").value.trim();
  const kcal = parseInt(document.getElementById("desfaseKcal").value, 10) || 250;
  if (!desc) {
    alert("Escribe qué alimento o bebida fuera de la dieta has tomado.");
    return;
  }
  const dayName = state.weeks[state.weekHorizon][dayIdx].day;
  state.desfases.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString("es-ES"),
    horizon: state.weekHorizon,
    dayIdx,
    dayName,
    user,
    desc,
    kcal
  });
  saveState(false);
  renderDailyMeals();
  renderRegistroAdherencePanel();
};

window.deleteDesfaseEntry = function(id) {
  state.desfases = (state.desfases || []).filter(x => x.id !== id);
  saveState(false);
  renderDailyMeals();
  renderRegistroAdherencePanel();
};

// 7. PANEL DE CONTROL DE KCAL, MACROS Y ADHERENCIA EN PESTAÑA "REGISTRO"
let regDashUser = "Noelia";
let regDashPeriod = "dia"; // 'dia' | 'semana'

window.setRegDashFilter = function(user, period) {
  if (user) regDashUser = user;
  if (period) regDashPeriod = period;
  renderRegistroAdherencePanel();
};

window.renderRegistroAdherencePanel = function() {
  ensureV14StateStructure();
  let panel = document.getElementById("registroAdherenceCard");
  const tabReg = document.getElementById("tab-registro");
  if (!tabReg) return;

  if (!panel) {
    panel = document.createElement("div");
    panel.id = "registroAdherenceCard";
    panel.className = "bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200 space-y-3";
    tabReg.insertBefore(panel, tabReg.firstChild);
  }

  const nan = getNandoGoalMacros();
  const multDays = regDashPeriod === "semana" ? 7 : 1;
  const goalKcal = (regDashUser === "Noelia" ? 1600 : nan.kcal) * multDays;
  const goalP = (regDashUser === "Noelia" ? 140 : nan.p) * multDays;
  const goalHC = (regDashUser === "Noelia" ? 158 : nan.hc) * multDays;
  const goalG = (regDashUser === "Noelia" ? 45 : nan.g) * multDays;

  const todayStr = new Date().toLocaleDateString("es-ES");
  let planKcal = 0, sumP = 0, sumHC = 0, sumG = 0;

  (state.logs || []).forEach(l => {
    const matchesUser = l.user === regDashUser || l.user === "Conjunta";
    const matchesTime = regDashPeriod === "semana" ? true : (l.dayKey === todayStr);
    if (matchesUser && matchesTime) {
      // Ajustar escala si es Nando
      const factor = (regDashUser === "Nando" && l.user === "Conjunta") ? (nan.kcal / 1600) : 1;
      planKcal += Math.round(l.kcal * factor);
      sumP += Math.round(l.p * factor);
      sumHC += Math.round(l.hc * factor);
      sumG += Math.round(l.g * factor);
    }
  });

  let extraDesfaseKcal = 0;
  (state.desfases || []).forEach(df => {
    const matchesUser = df.user === regDashUser || df.user === "Ambos";
    const matchesTime = regDashPeriod === "semana" ? (df.horizon === state.weekHorizon) : (df.date === todayStr);
    if (matchesUser && matchesTime) {
      extraDesfaseKcal += df.kcal;
    }
  });

  const totalKcal = planKcal + extraDesfaseKcal;
  const diffKcal = goalKcal - totalKcal;
  // Cálculo de % de adherencia penalizando desfases
  const desfasePenalty = Math.min(40, Math.round((extraDesfaseKcal / goalKcal) * 100));
  const adherencePct = Math.max(0, 100 - desfasePenalty);

  const adhColor = adherencePct >= 90
    ? "bg-emerald-100 text-emerald-800 border-emerald-300"
    : (adherencePct >= 75 ? "bg-amber-100 text-amber-800 border-amber-300" : "bg-rose-100 text-rose-800 border-rose-300");

  panel.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h3 class="text-xs font-bold text-slate-900">🎯 Control de Cumplimiento y Adherencia</h3>
        <p class="text-[10px] text-slate-500">Compara tus comidas registradas + desfases frente a tu meta</p>
      </div>
      <span class="text-[11px] font-extrabold px-2.5 py-1 rounded-xl border ${adhColor}">
        Adherencia: ${adherencePct}%
      </span>
    </div>

    <div class="flex items-center justify-between gap-2">
      <div class="inline-flex rounded-xl bg-slate-100 p-0.5 text-[11px] font-bold">
        <button onclick="setRegDashFilter('Noelia', null)" class="px-2.5 py-1 rounded-lg ${regDashUser === 'Noelia' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600'}">👩 Noelia</button>
        <button onclick="setRegDashFilter('Nando', null)" class="px-2.5 py-1 rounded-lg ${regDashUser === 'Nando' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600'}">👨 Nando</button>
      </div>
      <div class="inline-flex rounded-xl bg-slate-100 p-0.5 text-[11px] font-bold">
        <button onclick="setRegDashFilter(null, 'dia')" class="px-2.5 py-1 rounded-lg ${regDashPeriod === 'dia' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'}">📅 Hoy</button>
        <button onclick="setRegDashFilter(null, 'semana')" class="px-2.5 py-1 rounded-lg ${regDashPeriod === 'semana' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'}">🗓️ Semanal (x7)</button>
      </div>
    </div>

    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
      <div>
        <span class="text-[10px] text-slate-400 block font-semibold">Total Consumido (${regDashPeriod === 'dia' ? 'Hoy' : 'Semana'})</span>
        <b class="text-sm text-slate-900">${totalKcal}</b> <span class="text-slate-500">/ ${goalKcal} kcal</span>
        ${extraDesfaseKcal > 0 ? `<span class="text-[10px] text-rose-600 font-bold block">🚨 Incluye +${extraDesfaseKcal} kcal de desfases</span>` : ""}
      </div>
      <div class="text-right">
        <span class="text-[10px] text-slate-400 block font-semibold">Margen Restante</span>
        <b class="text-xs ${diffKcal >= 0 ? 'text-emerald-700' : 'text-rose-700'}">
          ${diffKcal >= 0 ? `Quedan ${diffKcal} kcal` : `Exceso +${Math.abs(diffKcal)} kcal`}
        </b>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
      <div class="bg-slate-50 p-2 rounded-xl border border-slate-200">
        <span class="text-[10px] text-slate-500 block">Proteína</span>
        <b>${sumP} / ${goalP}g</b>
      </div>
      <div class="bg-slate-50 p-2 rounded-xl border border-slate-200">
        <span class="text-[10px] text-slate-500 block">Hidratos</span>
        <b>${sumHC} / ${goalHC}g</b>
      </div>
      <div class="bg-slate-50 p-2 rounded-xl border border-slate-200">
        <span class="text-[10px] text-slate-500 block">Grasas</span>
        <b>${sumG} / ${goalG}g</b>
      </div>
    </div>
  `;
};

// 8. STOCK EDITABLE, NUEVOS ARTÍCULOS, COMPRA PRÓXIMOS 2 DÍAS Y KARDEX DE HISTÓRICO
window.calculateNextTwoDaysMap = function() {
  const req2d = {};
  state.inventory.forEach(it => { req2d[it.key] = 0; });
  const todayJs = new Date().getDay();
  const startIdx = todayJs === 0 ? 6 : todayJs - 1;
  const activeWeek = state.weeks[state.weekHorizon];

  for (let offset = 0; offset < 2; offset++) {
    const dayObj = activeWeek[(startIdx + offset) % 7];
    if (!dayObj) continue;
    ["l", "c"].forEach(slot => {
      const dish = DISHES_DB[dayObj[slot]];
      if (dish) {
        dish.items.forEach(it => {
          const totalW = it.gNoelia + getNandoWeight(it.gNoelia, it.key);
          if (req2d[it.key] !== undefined) req2d[it.key] += totalW;
        });
      }
    });
    req2d["yogur_sl"] = (req2d["yogur_sl"] || 0) + 2;
    req2d["pan_mm"] = (req2d["pan_mm"] || 0) + 110;
    req2d["fiambre_pavo"] = (req2d["fiambre_pavo"] || 0) + 90;
    req2d["fruta_segura"] = (req2d["fruta_segura"] || 0) + 200;
  }
  return req2d;
};

window.renameInventoryItem = function(idx, newName) {
  if (!newName || !newName.trim()) return;
  state.inventory[idx].name = newName.trim();
  saveState(false);
};

window.setExactStock = function(idx, valStr) {
  const val = parseInt(valStr, 10);
  if (isNaN(val) || val < 0) return;
  const item = state.inventory[idx];
  const delta = val - item.stock;
  item.stock = val;
  if (delta !== 0) {
    recordStockMovement(item.key, delta, "✏️ Ajuste manual en Stock");
  }
  saveState(false);
  renderMrpList();
};

window.addNewCustomInventoryItem = function() {
  const name = prompt("Nombre del nuevo artículo para Stock/Compra:");
  if (!name || !name.trim()) return;
  const cat = prompt("Categoría (Carnes, Pescados, Hidratos y Despensa, Verduras y Frutas, Otros):", "Otros") || "Otros";
  const unit = prompt("Unidad de medida (g, ml, uds):", "g") || "g";
  const stock = parseInt(prompt("Cantidad actual en casa:", "0"), 10) || 0;
  const minStock = parseInt(prompt("Cantidad mínima recomendada en casa:", "200"), 10) || 200;

  const newKey = "item_" + Date.now();
  state.inventory.unshift({
    key: newKey,
    name: name.trim(),
    cat: cat.trim(),
    stock,
    minStock,
    unit: unit.trim(),
    pricePerKg: 5.0,
    boughtChecked: false
  });
  if (stock > 0) {
    recordStockMovement(newKey, stock, "➕ Alta inicial de artículo");
  }
  saveState(false);
  renderMrpList();
};

window.openStockHistoryModal = function(itemKey) {
  ensureV14StateStructure();
  const item = state.inventory.find(x => x.key === itemKey);
  if (!item) return;
  const history = state.stockHistory[itemKey] || [];

  document.getElementById("modalMealBadge").textContent = `Trazabilidad de Inventario · ${item.cat}`;
  document.getElementById("modalRecipeTitle").textContent = `🕒 Histórico de Gramos: ${item.name}`;

  document.getElementById("modalWeightsBox").innerHTML = `
    <div class="flex items-center justify-between text-xs">
      <span>🏡 <b>Stock Actual en Casa:</b></span>
      <b class="text-emerald-700 text-sm">${item.stock} ${item.unit}</b>
    </div>
  `;
  document.getElementById("modalFructoseBox").classList.add("hidden");

  if (history.length === 0) {
    document.getElementById("modalStepsBox").innerHTML = `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
        Aún no hay movimientos registrados para este artículo. En cuanto registres una comida que lo lleve o edites su stock, verás aquí cada descuento y entrada con fecha y hora.
      </div>
    `;
  } else {
    document.getElementById("modalStepsBox").innerHTML = history.map(h => `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
        <div>
          <span class="text-[10px] text-slate-400 font-bold block">${h.date}</span>
          <span class="font-semibold text-slate-800">${h.reason}</span>
        </div>
        <div class="text-right">
          <span class="font-bold ${h.delta >= 0 ? 'text-emerald-700' : 'text-rose-700'}">
            ${h.delta >= 0 ? '+' + h.delta : h.delta} ${h.unit}
          </span>
          <span class="text-[10px] text-slate-500 block">Antes: ${h.prev}${h.unit} → Ahora: ${h.after}${h.unit}</span>
        </div>
      </div>
    `).join("");
  }

  document.getElementById("modalConservationBox").innerHTML = `
    <div class="text-[11px] text-indigo-900">💡 Cada vez que pulsas <b>Registrar Plato</b> en la pestaña Registro, el sistema descuenta los gramos en crudo de este artículo e incrementa tu necesidad de compra.</div>
  `;
  document.getElementById("recipeModal").classList.remove("hidden");
};

// Sobrescribir saveMealLog para que deje rastro en el Kardex de Stock
const _origSaveMealLog = window.saveMealLog;
window.saveMealLog = function() {
  const user = document.getElementById("logUser").value;
  const mealType = document.getElementById("logMealType").value;
  const dishId = document.getElementById("logDishSelect").value;

  // Guardar copia previa del stock para registrar el movimiento exacto en Kardex
  const prevStocks = {};
  state.inventory.forEach(it => { prevStocks[it.key] = it.stock; });

  _origSaveMealLog();

  if (mealType === "almuerzo" || mealType === "cena") {
    const dObj = DISHES_DB[dishId];
    if (dObj) {
      dObj.items.forEach(it => {
        const inv = state.inventory.find(x => x.key === it.key);
        if (inv && prevStocks[it.key] !== undefined) {
          const diff = inv.stock - prevStocks[it.key];
          if (diff !== 0) {
            recordStockMovement(it.key, diff, `🍽️ Consumo (${user}): ${dObj.title.substring(0, 28)}...`);
          }
        }
      });
      saveState(false);
    }
  }
  renderRegistroAdherencePanel();
};

// Inyectar botón "⚡ Compra Próx. 2 Días" y botón "➕ Nuevo Artículo" en Stock/Compra
function injectStockButtonsV14() {
  const filterRow = document.getElementById("mrp-stock")?.parentElement;
  if (filterRow && !document.getElementById("mrp-next2d")) {
    const btn2d = document.createElement("button");
    btn2d.id = "mrp-next2d";
    btn2d.onclick = function() { setMrpFilter("next2d"); };
    btn2d.className = "px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-300 flex-shrink-0";
    btn2d.innerHTML = "⚡ Compra Próx. 2 Días";
    filterRow.appendChild(btn2d);

    const btnAdd = document.createElement("button");
    btnAdd.id = "mrp-add-custom";
    btnAdd.onclick = addNewCustomInventoryItem;
    btnAdd.className = "px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex-shrink-0";
    btnAdd.innerHTML = "➕ Añadir Artículo";
    filterRow.appendChild(btnAdd);
  }
}

window.setMrpFilter = function(f) {
  mrpFilter = f;
  ["all", "buy", "stock", "next2d"].forEach(k => {
    const b = document.getElementById("mrp-" + k);
    if (!b) return;
    if (k === f) b.className = "px-3 py-1.5 rounded-xl bg-slate-900 text-white flex-shrink-0";
    else if (k === "buy") b.className = "px-3 py-1.5 rounded-xl bg-red-50 text-red-700 border border-red-200 flex-shrink-0";
    else if (k === "stock") b.className = "px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0";
    else if (k === "next2d") b.className = "px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-300 flex-shrink-0";
    else b.className = "px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 flex-shrink-0";
  });
  renderMrpList();
};

window.renderMrpList = function() {
  ensureV14StateStructure();
  injectStockButtonsV14();
  const reqMap = calculateRequiredMap();
  const req2dMap = calculateNextTwoDaysMap();
  const container = document.getElementById("mrpListContainer");

  let totalBuyCost = 0;
  let totalStockValue = 0;

  const rows = state.inventory.map((item, idx) => {
    const is2dMode = mrpFilter === "next2d";
    const neededPlan = is2dMode ? (req2dMap[item.key] || 0) : (reqMap[item.key] || 0);
    const targetLevel = is2dMode ? neededPlan : Math.max(neededPlan, item.minStock);
    const toBuy = Math.max(0, targetLevel - item.stock);

    const unitDivisor = item.unit === "uds" ? 1 : 1000;
    const buyCost = (toBuy / unitDivisor) * (item.pricePerKg || 0);
    const stockVal = (item.stock / unitDivisor) * (item.pricePerKg || 0);
    totalBuyCost += buyCost;
    totalStockValue += stockVal;

    if (mrpFilter === "buy" && toBuy <= 0) return "";
    if (mrpFilter === "next2d" && toBuy <= 0) return "";
    if (mrpFilter === "stock" && item.stock <= 0) return "";

    const histCount = (state.stockHistory && state.stockHistory[item.key]) ? state.stockHistory[item.key].length : 0;

    return `
      <div class="p-3 rounded-2xl bg-slate-50 border ${toBuy > 0 ? 'border-amber-300' : 'border-slate-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div class="flex items-start gap-2 flex-1 min-w-0">
          <input type="checkbox" ${item.boughtChecked ? "checked" : ""} onchange="toggleItemBought(${idx}, this.checked)" class="mt-1 w-4 h-4 accent-emerald-600 rounded flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <!-- Nombre 100% editable -->
              <input type="text" value="${item.name}" onchange="renameInventoryItem(${idx}, this.value)" class="text-xs font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none w-full truncate" title="Toca para editar el nombre" />
              <span class="text-[10px] font-normal px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 flex-shrink-0">${item.cat}</span>
            </div>
            <div class="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
              <span>${is2dMode ? 'Necesidad Próx. 2 Días:' : 'Necesidad ' + shoppingHorizon + ':'} <b>${neededPlan}${item.unit}</b></span>
              <button onclick="openStockHistoryModal('${item.key}')" class="text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded-lg font-bold">
                🕒 Ver Histórico (${histCount})
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 sm:w-64 text-center">
          <div class="bg-white rounded-xl p-1.5 border border-slate-200">
            <span class="text-[10px] text-slate-400 block font-semibold">🏡 En Casa (${item.unit})</span>
            <input type="number" value="${item.stock}" onchange="setExactStock(${idx}, this.value)" class="w-full text-center text-xs font-bold text-emerald-700 bg-transparent focus:outline-none border-b border-dashed border-emerald-300" />
          </div>

          <div class="${toBuy > 0 ? 'bg-red-50 border-red-200 text-red-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800'} rounded-xl p-1.5 border flex flex-col justify-center">
            <span class="text-[10px] block font-semibold">${toBuy > 0 ? (is2dMode ? '⚡ Urgente 2d' : '🛒 Comprar') : '✅ Cubierto'}</span>
            <span class="text-xs font-bold">${toBuy > 0 ? `${toBuy} ${item.unit}` : `0 ${item.unit}`}</span>
            ${toBuy > 0 ? `<span class="text-[9px] text-red-600">~${buyCost.toFixed(2)} €</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("mrpCostSummaryBar").innerHTML = `
    <div><span class="text-slate-400 block">Valor en Casa</span><b class="text-emerald-700">${totalStockValue.toFixed(2)} €</b></div>
    <div><span class="text-slate-400 block">Est. a Comprar</span><b class="text-rose-700">${totalBuyCost.toFixed(2)} €</b></div>
    <div><span class="text-slate-400 block">Filtro Activo</span><b class="uppercase">${mrpFilter === 'next2d' ? 'Próx. 2 Días' : shoppingHorizon}</b></div>
  `;

  container.innerHTML = rows || `<div class="text-xs text-slate-400 text-center py-3">Todo cubierto en este filtro.</div>`;
};
// ============================================================================
// CLEVERHOME MRP v1.4 — MÓDULO DE MEJORAS (PARTE 2 DE 2)
// ============================================================================

// 9. LIMPIEZA AUTOMÁTICA DE PESOS ANTERIORES AL 26/10/2026
function cleanOldWeightsPre26Oct() {
  if (!state.health || !Array.isArray(state.health.weights)) return;
  const oldDates = ["01/10", "25/10", "1/10", "25/10/2026", "01/10/2026"];
  state.health.weights = state.health.weights.filter(w => !oldDates.includes(String(w.date).trim()));
}

// 10. PESTAÑA SALUD: BÍCEPS BILATERAL, PASOS DIARIOS Y EDICIÓN/BORRADO DE PESOS Y MEDIDAS
function injectHealthV14UI() {
  // A) Inyectar casillas de Bíceps Der. y Bíceps Izq. en el formulario de medidas
  const thighRInput = document.getElementById("measThighR");
  if (thighRInput && !document.getElementById("measBicepsR")) {
    const grid = thighRInput.closest(".grid");
    if (grid) {
      const bicRDiv = document.createElement("div");
      bicRDiv.className = "bg-slate-50 p-2 rounded-xl border border-slate-200";
      bicRDiv.innerHTML = `
        <label class="block text-[10px] text-slate-500">Bíceps Der. (cm)</label>
        <input type="number" step="0.5" id="measBicepsR" value="31.0" class="w-full font-bold bg-transparent focus:outline-none text-emerald-700" />
      `;
      const bicLDiv = document.createElement("div");
      bicLDiv.className = "bg-slate-50 p-2 rounded-xl border border-slate-200";
      bicLDiv.innerHTML = `
        <label class="block text-[10px] text-slate-500">Bíceps Izq. (cm)</label>
        <input type="number" step="0.5" id="measBicepsL" value="30.5" class="w-full font-bold bg-transparent focus:outline-none text-indigo-700" />
      `;
      const userMeasDiv = document.createElement("div");
      userMeasDiv.className = "bg-slate-50 p-2 rounded-xl border border-slate-200";
      userMeasDiv.innerHTML = `
        <label class="block text-[10px] text-slate-500">Usuario Medida</label>
        <select id="measUserSelect" class="w-full font-bold bg-transparent focus:outline-none text-slate-800">
          <option value="Noelia">👩 Noelia</option>
          <option value="Nando">👨 Nando</option>
        </select>
      `;
      grid.insertBefore(userMeasDiv, grid.firstChild);
      grid.insertBefore(bicRDiv, thighRInput.parentElement);
      grid.insertBefore(bicLDiv, thighRInput.parentElement);
    }
  }

  // B) Inyectar tarjeta de Registro de Pasos Diarios en la pestaña Salud
  const tabSalud = document.getElementById("tab-salud");
  if (tabSalud && !document.getElementById("stepsTrackerCard")) {
    const stepsCard = document.createElement("div");
    stepsCard.id = "stepsTrackerCard";
    stepsCard.className = "bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200 space-y-3";
    const todayIso = new Date().toISOString().split("T")[0];
    stepsCard.innerHTML = `
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-xs font-bold text-slate-900">👟 Registro de Pasos Diarios</h3>
          <p class="text-[11px] text-slate-500">Registra la actividad diaria por fecha y usuario</p>
        </div>
        <span id="stepsAvgBadge" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Media: 0 pasos
        </span>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <select id="stepsUserSelect" onchange="renderStepsHistory()" class="bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold">
          <option value="Noelia">👩 Noelia</option>
          <option value="Nando">👨 Nando</option>
        </select>
        <input type="date" id="stepsDateInput" value="${todayIso}" class="bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold" />
        <input type="number" step="100" id="stepsCountInput" placeholder="Ej: 10000" class="bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold" />
        <button onclick="addStepsEntry()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl p-2">
          Guardar Pasos
        </button>
      </div>
      <div id="stepsHistoryBox" class="space-y-1.5 text-xs"></div>
    `;
    tabSalud.appendChild(stepsCard);
  }
}

window.addStepsEntry = function() {
  ensureV14StateStructure();
  const user = document.getElementById("stepsUserSelect").value;
  const rawDate = document.getElementById("stepsDateInput").value;
  const steps = parseInt(document.getElementById("stepsCountInput").value, 10);
  if (isNaN(steps) || steps < 0) {
    alert("Introduce un número de pasos válido.");
    return;
  }
  const parts = rawDate ? rawDate.split("-") : [];
  const formattedDate = parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : new Date().toLocaleDateString("es-ES");

  state.health.steps.unshift({
    id: Date.now(),
    date: formattedDate,
    user,
    steps
  });
  document.getElementById("stepsCountInput").value = "";
  saveState(false);
  renderStepsHistory();
};

window.editStepsEntry = function(id) {
  const entry = (state.health.steps || []).find(s => s.id === id);
  if (!entry) return;
  const newSteps = parseInt(prompt(`Editar pasos del ${entry.date} (${entry.user}):`, entry.steps), 10);
  if (!isNaN(newSteps) && newSteps >= 0) {
    entry.steps = newSteps;
    saveState(false);
    renderStepsHistory();
  }
};

window.deleteStepsEntry = function(id) {
  state.health.steps = (state.health.steps || []).filter(s => s.id !== id);
  saveState(false);
  renderStepsHistory();
};

window.renderStepsHistory = function() {
  ensureV14StateStructure();
  const box = document.getElementById("stepsHistoryBox");
  if (!box) return;
  const sUser = document.getElementById("stepsUserSelect")?.value || "Noelia";
  const list = (state.health.steps || []).filter(s => s.user === sUser);

  const avg = list.length > 0
    ? Math.round(list.reduce((a, b) => a + b.steps, 0) / list.length)
    : 0;
  const badge = document.getElementById("stepsAvgBadge");
  if (badge) badge.textContent = `Media ${sUser}: ${avg.toLocaleString("es-ES")} pasos`;

  if (list.length === 0) {
    box.innerHTML = `<div class="text-slate-400 text-center py-2">Sin registros de pasos para ${sUser}.</div>`;
    return;
  }

  box.innerHTML = list.slice(0, 10).map(s => `
    <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
      <div>
        <span class="font-bold text-slate-800">${s.date}</span>
        <span class="ml-2 font-extrabold text-emerald-700">${s.steps.toLocaleString("es-ES")} pasos</span>
      </div>
      <div class="flex gap-1.5">
        <button onclick="editStepsEntry(${s.id})" class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-600">✏️</button>
        <button onclick="deleteStepsEntry(${s.id})" class="px-2 py-0.5 rounded bg-white border border-rose-200 text-[10px] font-bold text-rose-600">🗑️</button>
      </div>
    </div>
  `).join("");
};

// Edición y borrado de Pesos
window.editWeightEntry = function(idxInAll) {
  const entry = state.health.weights[idxInAll];
  if (!entry) return;
  const newDate = prompt("Editar fecha (DD/MM):", entry.date) || entry.date;
  const newKg = parseFloat(prompt(`Editar peso en kg (${entry.user}):`, entry.kg));
  if (!isNaN(newKg) && newKg > 30) {
    entry.date = newDate.trim();
    entry.kg = newKg;
    saveState(false);
    renderHealthDashboard();
  }
};

window.deleteWeightEntry = function(idxInAll) {
  if (!confirm("¿Eliminar este registro de peso?")) return;
  state.health.weights.splice(idxInAll, 1);
  saveState(false);
  renderHealthDashboard();
};

// Guardar, editar y borrar Medidas Corporales con Bíceps Der. / Izq.
window.saveBodyMeasurements = function() {
  ensureV14StateStructure();
  const user = document.getElementById("measUserSelect")?.value || "Noelia";
  const waist = parseFloat(document.getElementById("measWaist").value) || 68;
  const hip = parseFloat(document.getElementById("measHip").value) || 96;
  const neck = parseFloat(document.getElementById("measNeck").value) || 32;
  const bicepsR = parseFloat(document.getElementById("measBicepsR")?.value) || 31.0;
  const bicepsL = parseFloat(document.getElementById("measBicepsL")?.value) || 30.5;
  const thighR = parseFloat(document.getElementById("measThighR").value) || 53.5;
  const thighL = parseFloat(document.getElementById("measThighL").value) || 51.0;

  const height = user === "Noelia" ? 168 : 175;
  const bf = user === "Noelia"
    ? Math.max(12, Math.min(45, (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387))).toFixed(1)
    : Math.max(8, Math.min(40, (86.010 * Math.log10(Math.max(10, waist - neck)) - 70.041 * Math.log10(height) + 36.76))).toFixed(1);

  const dateStr = new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });

  state.health.measurements.unshift({
    id: Date.now(),
    date: dateStr,
    user,
    waist,
    hip,
    neck,
    bicepsR,
    bicepsL,
    thighR,
    thighL,
    bf
  });
  saveState(false);
  renderHealthDashboard();
};

window.editMeasurementEntry = function(idx) {
  const m = state.health.measurements[idx];
  if (!m) return;
  const waist = parseFloat(prompt("Cintura (cm):", m.waist));
  const hip = parseFloat(prompt("Cadera (cm):", m.hip));
  const bicR = parseFloat(prompt("Bíceps Der. (cm):", m.bicepsR || 31));
  const bicL = parseFloat(prompt("Bíceps Izq. (cm):", m.bicepsL || 30.5));
  const thR = parseFloat(prompt("Muslo Der. (cm):", m.thighR));
  const thL = parseFloat(prompt("Muslo Izq. (cm):", m.thighL));

  if (!isNaN(waist)) m.waist = waist;
  if (!isNaN(hip)) m.hip = hip;
  if (!isNaN(bicR)) m.bicepsR = bicR;
  if (!isNaN(bicL)) m.bicepsL = bicL;
  if (!isNaN(thR)) m.thighR = thR;
  if (!isNaN(thL)) m.thighL = thL;

  saveState(false);
  renderHealthDashboard();
};

window.deleteMeasurementEntry = function(idx) {
  if (!confirm("¿Eliminar este registro de medidas corporales?")) return;
  state.health.measurements.splice(idx, 1);
  saveState(false);
  renderHealthDashboard();
};

// Renderizado completo de la Pestaña Salud v1.4
window.renderHealthDashboard = function() {
  ensureV14StateStructure();
  cleanOldWeightsPre26Oct();
  injectHealthV14UI();

  const targetUser = state.profile === "nando" ? "Nando" : "Noelia";
  document.getElementById("healthActiveProfileBadge").textContent = targetUser;

  const nan = getNandoGoalMacros();
  const goalKcal = targetUser === "Noelia" ? 1600 : nan.kcal;
  const goalP = targetUser === "Noelia" ? 140 : nan.p;
  const goalHC = targetUser === "Noelia" ? 158 : nan.hc;
  const goalG = targetUser === "Noelia" ? 45 : nan.g;

  const todayKey = new Date().toLocaleDateString("es-ES");
  let sumKcal = 0, sumP = 0, sumHC = 0, sumG = 0;
  (state.logs || []).forEach(l => {
    if ((l.dayKey === todayKey || !l.dayKey) && (l.user === targetUser || l.user === "Conjunta")) {
      const factor = (targetUser === "Nando" && l.user === "Conjunta") ? (nan.kcal / 1600) : 1;
      sumKcal += Math.round(l.kcal * factor);
      sumP += Math.round(l.p * factor);
      sumHC += Math.round(l.hc * factor);
      sumG += Math.round(l.g * factor);
    }
  });

  // Sumar desfases del día si los hubiera
  (state.desfases || []).forEach(df => {
    if (df.date === todayKey && (df.user === targetUser || df.user === "Ambos")) {
      sumKcal += df.kcal;
    }
  });

  const metrics = [
    { label: "Energía", val: sumKcal, goal: goalKcal, unit: "kcal", color: "bg-rose-500" },
    { label: "Proteína", val: sumP, goal: goalP, unit: "g", color: "bg-emerald-500" },
    { label: "Hidratos", val: sumHC, goal: goalHC, unit: "g", color: "bg-indigo-500" },
    { label: "Grasas", val: sumG, goal: goalG, unit: "g", color: "bg-amber-500" }
  ];

  document.getElementById("healthRingsContainer").innerHTML = metrics.map(m => {
    const pct = Math.min(100, Math.round((m.val / m.goal) * 100));
    return `
      <div class="bg-slate-50 p-2.5 rounded-2xl border border-slate-200 space-y-1.5">
        <span class="text-[10px] font-bold text-slate-500 block">${m.label}</span>
        <div class="text-xs font-extrabold text-slate-900">${m.val}<span class="text-[10px] font-normal text-slate-400">/${m.goal}${m.unit}</span></div>
        <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div class="${m.color} h-full rounded-full" style="width:${pct}%"></div>
        </div>
        <span class="text-[10px] font-bold text-slate-600 block">${pct}%</span>
      </div>
    `;
  }).join("");

  // Pesos desde 26/10/2026 con botones de editar y borrar
  const wUser = document.getElementById("weightUserSelect")?.value || "Noelia";
  const allWeightsWithIdx = (state.health.weights || []).map((w, idx) => ({ ...w, origIdx: idx }));
  const userWeights = allWeightsWithIdx.filter(w => w.user === wUser);

  const avgWeight = userWeights.length > 0
    ? (userWeights.slice(-7).reduce((a, b) => a + b.kg, 0) / Math.min(7, userWeights.length)).toFixed(2)
    : "--";

  document.getElementById("weightHistoryBox").innerHTML = `
    <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
      <span>📈 <b>Media Móvil (${wUser} desde 26/10):</b></span>
      <b class="text-emerald-800 text-sm">${avgWeight} kg</b>
    </div>
    <div class="space-y-1 pt-1">
      ${userWeights.length === 0 ? `<div class="text-slate-400 text-center py-2">Sin pesos registrados desde el 26/10/2026.</div>` : userWeights.slice().reverse().map(w => `
        <div class="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div>
            <span class="text-[11px] font-semibold text-slate-500">${w.date}</span>
            <b class="text-xs text-slate-900 ml-2">${w.kg} kg</b>
          </div>
          <div class="flex gap-1.5">
            <button onclick="editWeightEntry(${w.origIdx})" class="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-bold text-slate-600" title="Editar">✏️</button>
            <button onclick="deleteWeightEntry(${w.origIdx})" class="px-2 py-0.5 rounded bg-white border border-rose-200 text-[10px] font-bold text-rose-600" title="Borrar">🗑️</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  // Medidas Corporales con Bíceps Der./Izq., Muslos y botones Editar/Borrar
  document.getElementById("measurementsHistoryBox").innerHTML = (state.health.measurements || []).map((m, idx) => {
    const diffThigh = (m.thighR - m.thighL).toFixed(1);
    const bicR = m.bicepsR !== undefined ? m.bicepsR : "--";
    const bicL = m.bicepsL !== undefined ? m.bicepsL : "--";
    return `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
        <div class="space-y-0.5">
          <div class="font-bold text-slate-900">${m.date} (${m.user || 'Noelia'}) · Cintura: ${m.waist}cm | Cadera: ${m.hip}cm | Cuello: ${m.neck}cm</div>
          <div class="text-[11px] text-slate-600">
            💪 Bíceps Der: <b>${bicR}cm</b> vs Izq: <b>${bicL}cm</b> · 🦵 Muslo Der: <b>${m.thighR}cm</b> vs Izq: <b>${m.thighL}cm</b> <span class="text-indigo-600 font-semibold">(Dif: ${diffThigh}cm)</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <div class="text-right mr-1">
            <span class="text-[9px] text-slate-400 block">% Grasa</span>
            <b class="text-emerald-700 text-xs">${m.bf}%</b>
          </div>
          <button onclick="editMeasurementEntry(${idx})" class="px-2 py-1 rounded bg-white border border-slate-200 text-[10px]">✏️</button>
          <button onclick="deleteMeasurementEntry(${idx})" class="px-2 py-1 rounded bg-white border border-rose-200 text-[10px]">🗑️</button>
        </div>
      </div>
    `;
  }).join("");

  renderStepsHistory();
  renderRegistroAdherencePanel();
};

// 11. DOS GENERADORES DE PDF INDEPENDIENTES EN A4 (NEVERA SEMANAL vs DASHBOARD MENSUAL NUTRICIONISTA)
function injectDualPdfButtons() {
  const printBtn = document.querySelector("button[onclick='window.print()']");
  if (!printBtn || document.getElementById("pdfFridgeBtn")) return;

  const parentGrid = printBtn.parentElement;
  parentGrid.className = "grid grid-cols-1 sm:grid-cols-3 gap-2";

  printBtn.id = "pdfFridgeBtn";
  printBtn.setAttribute("onclick", "printWeeklyFridgePDF()");
  printBtn.innerHTML = `<span>冷蔵庫</span> PDF Menú Nevera (A4)`;

  const mBtn = document.createElement("button");
  mBtn.id = "pdfMonthlyNutriBtn";
  mBtn.setAttribute("onclick", "printMonthlyNutritionistPDF()");
  mBtn.className = "flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs shadow-sm";
  mBtn.innerHTML = `<span>📊</span> PDF Mensual Nutricionista`;
  parentGrid.appendChild(mBtn);
}

// PDF 1: Menú Semanal de Nevera con Gramos por Usuario
window.printWeeklyFridgePDF = function() {
  const weekArr = state.weeks[state.weekHorizon];
  const nan = getNandoGoalMacros();

  const rowsHtml = weekArr.map(dObj => {
    const dItem = DESAYUNOS_PDF.find(x => x.id === dObj.d) || DESAYUNOS_PDF[0];
    const dWeights = (SIMPLE_SLOTS_WEIGHTS[dItem.id] || []).map(w => `${w.name}: Noe ${w.noe}${w.unit} | Nan ${w.nan}${w.unit}`).join(" · ");

    const lDish = DISHES_DB[dObj.l] || DISHES_DB["m1_l"];
    const lWeights = lDish.items.map(it => `${it.name}: Noe ${it.gNoelia}${it.unit} | Nan ${getNandoWeight(it.gNoelia, it.key)}${it.unit}`).join(" · ");

    const scItem = SNACK_COMODIN_PDF.find(x => x.id === dObj.sc) || SNACK_COMODIN_PDF[0];
    const stItem = SNACK_TARDE_PDF.find(x => x.id === dObj.st) || SNACK_TARDE_PDF[0];
    const stWeights = (SIMPLE_SLOTS_WEIGHTS[stItem.id] || []).map(w => `${w.name}: Noe ${w.noe}${w.unit} | Nan ${w.nan}${w.unit}`).join(" · ");

    const cDish = DISHES_DB[dObj.c] || DISHES_DB["m1_d"];
    const cWeights = cDish.items.map(it => `${it.name}: Noe ${it.gNoelia}${it.unit} | Nan ${getNandoWeight(it.gNoelia, it.key)}${it.unit}`).join(" · ");

    return `
      <tr>
        <td style="font-weight:bold; background:#f8fafc; width:9%;">${dObj.day}</td>
        <td style="width:21%;"><b>${dItem.name}</b><br><span style="font-size:9px; color:#475569;">${dWeights}</span></td>
        <td style="width:25%;"><b>${lDish.title}</b><br><span style="font-size:9px; color:#047857;">${lWeights}</span></td>
        <td style="width:20%;"><b>${scItem.name.split(':')[0]}</b> + <b>${stItem.name}</b><br><span style="font-size:9px; color:#475569;">${stWeights}</span></td>
        <td style="width:25%;"><b>${cDish.title}</b><br><span style="font-size:9px; color:#3730a3;">${cWeights}</span></td>
      </tr>
    `;
  }).join("");

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Menú Semanal de Nevera — Noelia & Nando</title>
      <style>
        @page { size: A4 landscape; margin: 8mm; }
        body { font-family: Arial, sans-serif; color: #0f172a; margin: 0; }
        h1 { font-size: 16px; margin: 0 0 4px 0; color: #065f46; }
        p.sub { font-size: 11px; margin: 0 0 8px 0; color: #475569; }
        table { width: 100%; border-collapse: collapse; font-size: 10.5px; }
        th, td { border: 1px solid #cbd5e1; padding: 6px; vertical-align: top; text-align: left; }
        th { background: #0f172a; color: white; font-size: 11px; }
      </style>
    </head>
    <body>
      <h1>🗓️ PLANIFICADOR SEMANAL DE NEVERA — NOELIA (1.600 kcal) & NANDO (${nan.kcal} kcal)</h1>
      <p class="sub">Pesos en crudo desglosados por comensal · Semana: ${state.weekHorizon.toUpperCase()} · Impreso el ${new Date().toLocaleDateString("es-ES")}</p>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>☕ Desayuno (300 kcal)</th>
            <th>🍽️ Almuerzo (511 kcal)</th>
            <th>🍓 Comodín + 🥪 Merienda</th>
            <th>🌙 Cena (511 kcal)</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <script>window.onload = function() { window.print(); };<\/script>
    </body>
    </html>
  `;

  const w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
};

// PDF 2: Dashboard Mensual Clínico para el Nutricionista
window.printMonthlyNutritionistPDF = function() {
  const targetUser = prompt("¿Para qué usuario quieres generar el Dashboard Mensual del Nutricionista? (Escribe Noelia o Nando):", "Noelia") || "Noelia";
  const nan = getNandoGoalMacros();
  const goalKcal = targetUser.toLowerCase().includes("nan") ? nan.kcal : 1600;
  const canonicalUser = targetUser.toLowerCase().includes("nan") ? "Nando" : "Noelia";

  const userLogs = (state.logs || []).filter(l => l.user === canonicalUser || l.user === "Conjunta");
  const userDesfases = (state.desfases || []).filter(d => d.user === canonicalUser || d.user === "Ambos");
  const userWeights = (state.health.weights || []).filter(w => w.user === canonicalUser);
  const userMeas = (state.health.measurements || []).filter(m => (m.user || "Noelia") === canonicalUser);
  const userSteps = (state.health.steps || []).filter(s => s.user === canonicalUser);

  const avgSteps = userSteps.length > 0 ? Math.round(userSteps.reduce((a, b) => a + b.steps, 0) / userSteps.length) : 0;
  const startW = userWeights.length > 0 ? userWeights[0].kg : "--";
  const endW = userWeights.length > 0 ? userWeights[userWeights.length - 1].kg : "--";
  const diffW = (userWeights.length > 1) ? (endW - startW).toFixed(2) + " kg" : "0.0 kg";

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Dashboard Mensual Nutricionista — ${canonicalUser}</title>
      <style>
        @page { size: A4 portrait; margin: 12mm; }
        body { font-family: Arial, sans-serif; color: #1e293b; margin: 0; font-size: 11px; }
        h1 { font-size: 18px; margin: 0; color: #0f172a; }
        h2 { font-size: 13px; margin: 14px 0 6px 0; color: #047857; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; }
        .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px; }
        .kpi-card { border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px; background: #f8fafc; }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5px; }
        th, td { border: 1px solid #cbd5e1; padding: 5px; text-align: left; }
        th { background: #f1f5f9; }
      </style>
    </head>
    <body>
      <h1>📊 INFORME MENSUAL DE NUTRICIÓN Y SALUD — ${canonicalUser.toUpperCase()}</h1>
      <p>Objetivo Diario Pautado: <b>${goalKcal} kcal</b> · Fecha de emisión: ${new Date().toLocaleDateString("es-ES")}</p>

      <div class="kpi-grid">
        <div class="kpi-card"><b>Platos Registrados</b><br><span style="font-size:15px; font-weight:bold;">${userLogs.length} tomas</span></div>
        <div class="kpi-card"><b>Desfases Mes</b><br><span style="font-size:15px; font-weight:bold; color:#be123c;">${userDesfases.length} extras</span></div>
        <div class="kpi-card"><b>Evolución Peso</b><br><span style="font-size:15px; font-weight:bold;">${startW} → ${endW} kg (${diffW})</span></div>
        <div class="kpi-card"><b>Media de Pasos</b><br><span style="font-size:15px; font-weight:bold; color:#047857;">${avgSteps.toLocaleString("es-ES")} / día</span></div>
      </div>

      <h2>1. Evolución Antropométrica y Simetría Muscular (Bíceps y Muslos)</h2>
      <table>
        <thead>
          <tr><th>Fecha</th><th>Cintura</th><th>Cadera</th><th>Cuello</th><th>Bíceps Der/Izq</th><th>Muslo Der/Izq</th><th>% Grasa Est.</th></tr>
        </thead>
        <tbody>
          ${userMeas.length === 0 ? `<tr><td colspan="7">Sin registros en el periodo.</td></tr>` : userMeas.map(m => `
            <tr>
              <td>${m.date}</td><td>${m.waist} cm</td><td>${m.hip} cm</td><td>${m.neck} cm</td>
              <td>${m.bicepsR || '--'} / ${m.bicepsL || '--'} cm</td>
              <td>${m.thighR} / ${m.thighL} cm</td>
              <td><b>${m.bf}%</b></td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <h2>2. Registro de "Desfases" / Extras fuera de la pauta</h2>
      <table>
        <thead><tr><th>Fecha / Día</th><th>Descripción del Alimento o Bebida Extra</th><th>Impacto Calórico Est.</th></tr></thead>
        <tbody>
          ${userDesfases.length === 0 ? `<tr><td colspan="3">0 desfases registrados (100% cumplimiento).</td></tr>` : userDesfases.map(d => `
            <tr><td>${d.date} (${d.dayName})</td><td>${d.desc}</td><td>+${d.kcal} kcal</td></tr>
          `).join("")}
        </tbody>
      </table>

      <h2>3. Histórico de Comidas Registradas y Sensaciones Digestivas</h2>
      <table>
        <thead><tr><th>Fecha</th><th>Toma</th><th>Plato</th><th>% Ingerido</th><th>Kcal</th><th>Notas Digestivas</th></tr></thead>
        <tbody>
          ${userLogs.slice(0, 25).map(l => `
            <tr><td>${l.date}</td><td>${l.mealType}</td><td>${l.title}</td><td>${l.pct}%</td><td>${l.kcal} kcal</td><td>${l.notes}</td></tr>
          `).join("")}
        </tbody>
      </table>
      <script>window.onload = function() { window.print(); };<\/script>
    </body>
    </html>
  `;

  const w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
};

// 12. SINCRONIZACIÓN FIREBASE ACTUALIZADA PARA INCLUIR DESFASES, PASOS Y KARDEX
window.initFirebaseSync = function() {
  try {
    if (typeof firebase === "undefined") {
      setCloudBadge("offline");
      return;
    }
    if (!firebase.apps.length) {
      firebase.initializeApp({ databaseURL: FIREBASE_DB_URL });
    }
    const db = firebase.database();
    firebaseRef = db.ref("cleverhome_shared_v1");

    firebaseRef.on("value", (snapshot) => {
      const cloudData = snapshot.val();
      if (!cloudData) {
        saveState(false);
        return;
      }
      isApplyingRemoteUpdate = true;
      if (cloudData.nando) state.nando = cloudData.nando;
      if (cloudData.customDishes) {
        state.customDishes = cloudData.customDishes;
        DISHES_DB = Object.assign({}, INITIAL_DISHES_DB, state.customDishes);
      }
      if (cloudData.weeks) state.weeks = cloudData.weeks;
      if (cloudData.inventory) state.inventory = cloudData.inventory;
      state.logs = cloudData.logs || [];
      state.desfases = cloudData.desfases || [];
      state.stockHistory = cloudData.stockHistory || {};
      if (cloudData.health) {
        state.health = {
          weights: cloudData.health.weights || [],
          measurements: cloudData.health.measurements || [],
          steps: cloudData.health.steps || []
        };
      }
      cleanOldWeightsPre26Oct();
      ensureV14StateStructure();
      saveState(true);
      refreshAllViewsFromState();
      setCloudBadge("ok");
      isApplyingRemoteUpdate = false;
    }, () => setCloudBadge("offline"));
  } catch (e) {
    setCloudBadge("offline");
  }
};

// Inicializador automático al cargar la página
window.addEventListener("DOMContentLoaded", function() {
  ensureV14StateStructure();
  cleanOldWeightsPre26Oct();
  injectDualPdfButtons();
  injectStockButtonsV14();
  injectHealthV14UI();
  renderMacroSummaryBar();
  renderWeekContent();
  renderRegistroAdherencePanel();
  renderMrpList();
  renderHealthDashboard();
});
// ============================================================================
// PARCHE v1.4.1 — DESCUENTO DE STOCK EN DESAYUNOS/SNACKS + ARTÍCULOS CREADOS
// ============================================================================

// 1. Mapa completo de claves para todos los Desayunos, Comodines y Meriendas
const SLOT_KEY_HINTS = {
  "yogur": "yogur_sl",
  "cereales": "cereales_0",
  "proteína": "proteina_iso",
  "frutos secos": "frutos_secos",
  "cacahuete": "cacahuete_polvo",
  "frutos rojos": "fruta_segura",
  "fruta": "fruta_segura",
  "fresas": "fruta_segura",
  "ciruela": "fruta_segura",
  "tortitas": "tortitas_arroz",
  "leche de almendras": "leche_almendras",
  "jamón cocido": "fiambre_pavo",
  "fiambre de pavo": "fiambre_pavo",
  "pavo en lonchas": "fiambre_pavo",
  "pavo / jamón": "fiambre_pavo",
  "aove": "aove",
  "pan": "pan_mm",
  "queso": "queso_untar_sl",
  "harina de avena": "harina_avena",
  "claras": "claras",
  "jamón serrano": "jamon_serrano",
  "tomate": "tomate_natural",
  "huevo": "huevos",
  "aguacate": "aguacate"
};

function normalizeStr(s) {
  return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

// 2. Buscador inteligente: prioriza los artículos que tú hayas creado o renombrado
window.findInventoryItemSmart = function(ingKey, ingName) {
  const normIng = normalizeStr(ingName);
  const words = normIng.split(/\s+/).filter(w => w.length >= 3 && !["para", "con", "sin", "del", "las", "los"].includes(w));

  // A) Buscar coincidencia directa por nombre en artículos creados por el usuario o con stock
  let candidates = state.inventory.filter(it => {
    const normIt = normalizeStr(it.name);
    if (normIt === normIng) return true;
    if (normIng.includes("jamon serrano") && normIt.includes("jamon serrano")) return true;
    if (normIng.includes("tomate") && normIt.includes("tomate")) return true;
    if (normIng.includes("pan") && normIt.includes("pan") && !normIt.includes("empan")) return true;
    return words.length > 0 && words.every(w => normIt.includes(w));
  });

  if (candidates.length > 0) {
    // Priorizar artículos personalizados (item_...) o el que tenga más stock actual
    candidates.sort((a, b) => {
      const aCustom = String(a.key).startsWith("item_") ? 1 : 0;
      const bCustom = String(b.key).startsWith("item_") ? 1 : 0;
      if (aCustom !== bCustom) return bCustom - aCustom;
      return (b.stock || 0) - (a.stock || 0);
    });
    return candidates[0];
  }

  // B) Buscar por clave interna (ej. pan_mm aunque lo hayas renombrado a "Pan integral")
  let guessedKey = ingKey;
  if (!guessedKey) {
    for (const [kWord, mapKey] of Object.entries(SLOT_KEY_HINTS)) {
      if (normIng.includes(normalizeStr(kWord))) {
        guessedKey = mapKey;
        break;
      }
    }
  }
  if (guessedKey) {
    const byKey = state.inventory.find(x => x.key === guessedKey);
    if (byKey) return byKey;
  }

  // C) Coincidencia parcial por primera palabra clave
  if (words.length > 0) {
    const partial = state.inventory.find(it => normalizeStr(it.name).includes(words[0]));
    if (partial) return partial;
  }
  return null;
};

// 3. Obtener lista de ingredientes y gramos según usuario para CUALQUIER comida (Desayuno, Almuerzo, Snack, Cena)
window.getMealIngredientsForLog = function(mealType, dishId, user) {
  const list = [];
  if (mealType === "almuerzo" || mealType === "cena") {
    const dObj = DISHES_DB[dishId];
    if (!dObj) return list;
    dObj.items.forEach(it => {
      const gNoe = it.gNoelia;
      const gNan = getNandoWeight(gNoe, it.key);
      const qty = user === "Noelia" ? gNoe : (user === "Nando" ? gNan : gNoe + gNan);
      const inv = findInventoryItemSmart(it.key, it.name);
      list.push({
        ingName: it.name,
        invKey: inv ? inv.key : it.key,
        invName: inv ? inv.name : it.name,
        qty,
        unit: inv ? inv.unit : it.unit
      });
    });
  } else {
    const weights = SIMPLE_SLOTS_WEIGHTS[dishId] || [];
    weights.forEach(w => {
      // Omitir si es "1 ración" genérica sin gramos salvo que sea yogur/huevos/tortitas
      let baseNoe = w.noe;
      let baseNan = w.nan;
      if (w.unit === "ración") {
        baseNoe = 180;
        baseNan = 200;
      }
      const qty = user === "Noelia" ? baseNoe : (user === "Nando" ? baseNan : Number((baseNoe + baseNan).toFixed(1)));
      const inv = findInventoryItemSmart(null, w.name);
      list.push({
        ingName: w.name,
        invKey: inv ? inv.key : null,
        invName: inv ? inv.name : w.name,
        qty,
        unit: inv ? inv.unit : (w.unit === "ración" ? "g" : w.unit)
      });
    });
  }
  return list;
};

// 4. Caja en "Registro" para ver y ajustar los gramos exactos antes de descontar de Stock
window.renderLogIngredientsPreview = function() {
  const user = document.getElementById("logUser")?.value || "Conjunta";
  const mealType = document.getElementById("logMealType")?.value || "almuerzo";
  const dishId = document.getElementById("logDishSelect")?.value;
  if (!dishId) return;

  let box = document.getElementById("logIngredientsAdjustBox");
  const dishSel = document.getElementById("logDishSelect");
  if (!box && dishSel) {
    box = document.createElement("div");
    box.id = "logIngredientsAdjustBox";
    box.className = "bg-slate-50 rounded-2xl p-2.5 border border-slate-200 space-y-1.5";
    dishSel.parentElement.after(box);
  }
  if (!box) return;

  const ings = getMealIngredientsForLog(mealType, dishId, user);
  if (ings.length === 0) {
    box.innerHTML = "";
    return;
  }

  box.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="text-[10px] font-bold uppercase text-slate-500">⚖️ Gramos a descontar de Stock (Editables si usaste otra cantidad):</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
      ${ings.map((ing, i) => `
        <div class="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs">
          <div class="truncate pr-2">
            <span class="font-semibold text-slate-800 block truncate">${ing.invName}</span>
            <span class="text-[9px] ${ing.invKey ? 'text-emerald-600' : 'text-amber-600'}">${ing.invKey ? '✓ Vinculado a Stock' : '⚠️ No está en Stock'}</span>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0">
            <input type="number" step="1" data-invkey="${ing.invKey || ''}" data-ingname="${ing.ingName}" value="${ing.qty}" class="log-ing-qty-input w-14 text-right font-bold text-emerald-700 bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-0.5 text-xs focus:outline-none" />
            <span class="text-[10px] text-slate-500">${ing.unit}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
};

// Conectar cambios de selector en Registro para actualizar la vista previa de gramos
const _origPopulateLog = window.populateLogDishOptions;
window.populateLogDishOptions = function() {
  _origPopulateLog();
  renderLogIngredientsPreview();
};

document.addEventListener("change", function(e) {
  if (e.target && (e.target.id === "logUser" || e.target.id === "logDishSelect")) {
    renderLogIngredientsPreview();
  }
});

// 5. Nuevo saveMealLog que descuenta Desayunos, Comodines, Meriendas, Almuerzos y Cenas usando los gramos reales
window.saveMealLog = function() {
  ensureV14StateStructure();
  const user = document.getElementById("logUser").value;
  const mealType = document.getElementById("logMealType").value;
  const dishId = document.getElementById("logDishSelect").value;
  const notes = document.getElementById("logDigestiveNotes").value.trim();

  let baseKcal = 511, baseP = 48, baseHC = 44, baseG = 13, title = "";
  if (mealType === "desayuno") {
    baseKcal = 300; baseP = 20; baseHC = 30; baseG = 10;
    title = (DESAYUNOS_PDF.find(x => x.id === dishId) || {}).name || "Desayuno";
  } else if (mealType === "snackTarde") {
    baseKcal = 200; baseP = 20; baseHC = 20; baseG = 4;
    title = (SNACK_TARDE_PDF.find(x => x.id === dishId) || {}).name || "Merienda";
  } else if (mealType === "snackComodin") {
    baseKcal = 80; baseP = 1; baseHC = 20; baseG = 0;
    title = (SNACK_COMODIN_PDF.find(x => x.id === dishId) || {}).name || "Comodín";
  } else {
    const dObj = DISHES_DB[dishId];
    title = dObj ? dObj.title : "Plato Principal";
  }

  // Leer los gramos de las cajitas editables (o calcular por defecto) y descontar del inventario
  const qtyInputs = document.querySelectorAll(".log-ing-qty-input");
  if (qtyInputs.length > 0) {
    qtyInputs.forEach(inp => {
      const invKey = inp.getAttribute("data-invkey");
      const ingName = inp.getAttribute("data-ingname");
      const consumed = parseFloat(inp.value) || 0;
      if (consumed > 0) {
        let invItem = invKey ? state.inventory.find(x => x.key === invKey) : findInventoryItemSmart(null, ingName);
        if (invItem) {
          invItem.stock = Math.max(0, Number((invItem.stock - consumed).toFixed(1)));
          recordStockMovement(invItem.key, -consumed, `🍽️ Consumo (${user}): ${title.substring(0, 26)}...`);
        }
      }
    });
  }

  const ratio = currentEatenPct / 100;
  const entry = {
    id: Date.now(),
    dayKey: new Date().toLocaleDateString("es-ES"),
    date: new Date().toLocaleString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }),
    user,
    mealType,
    title,
    pct: currentEatenPct,
    kcal: Math.round(baseKcal * ratio),
    p: Math.round(baseP * ratio),
    hc: Math.round(baseHC * ratio),
    g: Math.round(baseG * ratio),
    notes: notes || "Digestión bien tolerada.",
    photo: currentPhotoDataUrl || ""
  };

  state.logs.unshift(entry);
  saveState(false);

  currentPhotoDataUrl = null;
  document.getElementById("photoPreviewContainer").classList.add("hidden");
  document.getElementById("photoLabelText").textContent = "Hacer Foto / Galería";
  document.getElementById("logDigestiveNotes").value = "";
  setEatenPct(100);

  renderMealLogsFeed();
  renderMrpList();
  renderHealthDashboard();
  renderRegistroAdherencePanel();
  renderLogIngredientsPreview();
  alert("✅ Comida registrada y gramos descontados del Stock en Casa.");
};

// 6. Sumar también los ingredientes reales de Desayunos y Meriendas en las Necesidades de Compra
window.calculateRequiredMap = function() {
  const req = {};
  state.inventory.forEach(it => { req[it.key] = 0; });

  const activeWeek = state.weeks[state.weekHorizon];
  activeWeek.forEach(dayObj => {
    // Almuerzo y Cena
    ["l", "c"].forEach(slot => {
      const dish = DISHES_DB[dayObj[slot]];
      if (dish) {
        dish.items.forEach(it => {
          const inv = findInventoryItemSmart(it.key, it.name);
          const targetKey = inv ? inv.key : it.key;
          const totalW = it.gNoelia + getNandoWeight(it.gNoelia, it.key);
          if (req[targetKey] !== undefined) req[targetKey] += totalW;
        });
      }
    });
    // Desayuno, Comodín y Merienda reales configurados ese día
    ["d", "sc", "st"].forEach(slot => {
      const weights = SIMPLE_SLOTS_WEIGHTS[dayObj[slot]] || [];
      weights.forEach(w => {
        const inv = findInventoryItemSmart(null, w.name);
        if (inv && req[inv.key] !== undefined) {
          const addW = w.unit === "ración" ? 350 : (w.noe + w.nan);
          req[inv.key] += addW;
        }
      });
    });
  });

  if (shoppingHorizon === "mensual") {
    Object.keys(req).forEach(k => { req[k] = req[k] * 4; });
  }
  return req;
};

// 7. Corregir título "EJECUCIÓN EN TUS EQUIPOS" al abrir el Histórico de Stock
const _origOpenStockHist = window.openStockHistoryModal;
window.openStockHistoryModal = function(itemKey) {
  _origOpenStockHist(itemKey);
  const stepsHeader = document.getElementById("modalStepsBox")?.previousElementSibling;
  if (stepsHeader) {
    stepsHeader.textContent = "📊 HISTÓRICO DE MOVIMIENTOS (ENTRADAS Y SALIDAS)";
  }
};

const _origOpenRecipeModal = window.openRecipeModal;
window.openRecipeModal = function(dayIdx, slotKey, dishId) {
  const stepsHeader = document.getElementById("modalStepsBox")?.previousElementSibling;
  if (stepsHeader) {
    stepsHeader.textContent = "⚙️ EJECUCIÓN EN TUS EQUIPOS";
  }
  _origOpenRecipeModal(dayIdx, slotKey, dishId);
};

window.addEventListener("DOMContentLoaded", function() {
  setTimeout(renderLogIngredientsPreview, 300);
});
// ============================================================================
// PARCHE v1.4.2 — EDICIÓN/BORRADO DE REGISTROS + NUEVO PDF A4 (VERTICAL + HORIZONTAL)
// ============================================================================

// 1. INYECTAR MODAL DE EDICIÓN DE REGISTROS EN EL DOM
function ensureEditLogModal() {
  if (document.getElementById("editLogModal")) return;
  const modal = document.createElement("div");
  modal.id = "editLogModal";
  modal.className = "fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 no-print";
  modal.innerHTML = `
    <div class="bg-white w-full max-w-md rounded-3xl p-5 space-y-3 shadow-2xl border border-slate-200">
      <div class="flex items-center justify-between border-b border-slate-100 pb-2">
        <h3 class="text-sm font-bold text-slate-900">✏️ Editar Registro de Comida</h3>
        <button onclick="closeEditLogModal()" class="w-7 h-7 rounded-full bg-slate-100 text-slate-600 font-bold">✕</button>
      </div>
      <input type="hidden" id="editLogIdx" value="" />
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div>
          <label class="block text-[10px] font-bold text-slate-500 mb-0.5">Comensal</label>
          <select id="editLogUser" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold">
            <option value="Conjunta">👩‍❤️‍👨 Ambos (Conjunta)</option>
            <option value="Noelia">👩 Noelia</option>
            <option value="Nando">👨 Nando</option>
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-500 mb-0.5">Fecha y Hora</label>
          <input type="text" id="editLogDate" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold" />
        </div>
      </div>
      <div class="text-xs">
        <label class="block text-[10px] font-bold text-slate-500 mb-0.5">Plato / Opción Registrada</label>
        <input type="text" id="editLogTitle" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold text-slate-900" />
      </div>
      <div class="grid grid-cols-5 gap-1.5 text-xs">
        <div>
          <label class="block text-[9px] font-bold text-slate-500">% Comido</label>
          <input type="number" id="editLogPct" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 font-bold text-center" />
        </div>
        <div>
          <label class="block text-[9px] font-bold text-slate-500">Kcal</label>
          <input type="number" id="editLogKcal" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 font-bold text-center text-emerald-700" />
        </div>
        <div>
          <label class="block text-[9px] font-bold text-slate-500">Prot (g)</label>
          <input type="number" id="editLogP" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 font-bold text-center" />
        </div>
        <div>
          <label class="block text-[9px] font-bold text-slate-500">Hidr (g)</label>
          <input type="number" id="editLogHC" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 font-bold text-center" />
        </div>
        <div>
          <label class="block text-[9px] font-bold text-slate-500">Grasa (g)</label>
          <input type="number" id="editLogG" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 font-bold text-center" />
        </div>
      </div>
      <div class="text-xs">
        <label class="block text-[10px] font-bold text-slate-500 mb-0.5">Notas para el Nutricionista</label>
        <textarea id="editLogNotes" rows="2" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2"></textarea>
      </div>
      <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
        <button onclick="deleteMealLogFromModal()" class="py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs">
          🗑️ Eliminar
        </button>
        <div class="flex gap-2">
          <button onclick="closeEditLogModal()" class="py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs">
            Cancelar
          </button>
          <button onclick="saveEditedMealLog()" class="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm">
            💾 Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// 2. RENDERIZAR HISTÓRICO DE REGISTROS CON BOTONES ✏️ Y 🗑️
window.renderMealLogsFeed = function() {
  ensureEditLogModal();
  const feed = document.getElementById("mealLogsFeed");
  const badge = document.getElementById("logCountBadge");
  if (badge) badge.textContent = `${(state.logs || []).length} registros`;
  if (!feed) return;

  if (!state.logs || state.logs.length === 0) {
    feed.innerHTML = `<div class="text-xs text-slate-400 text-center py-3">Aún no hay comidas registradas.</div>`;
    return;
  }

  feed.innerHTML = state.logs.map((l, idx) => `
    <div class="flex gap-2.5 p-2.5 rounded-2xl bg-slate-50 border border-slate-200 items-start">
      ${l.photo ? `<img src="${l.photo}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-slate-200" />` : `<div class="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base flex-shrink-0">🍽️</div>`}
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-1 text-[10px] text-slate-500">
          <span class="font-bold text-slate-700 truncate">${l.user} · ${l.date}</span>
          <div class="flex items-center gap-1 flex-shrink-0">
            <span class="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">${l.pct}%</span>
            <button onclick="openEditLogModal(${idx})" class="px-2 py-0.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold shadow-sm" title="Editar registro">✏️</button>
            <button onclick="deleteMealLogEntry(${idx})" class="px-2 py-0.5 rounded-lg bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 font-bold shadow-sm" title="Eliminar registro">🗑️</button>
          </div>
        </div>
        <h4 class="text-xs font-bold text-slate-900 truncate mt-0.5">${l.title}</h4>
        <div class="text-[11px] font-semibold text-emerald-700">${l.kcal} kcal · ${l.p}P | ${l.hc}HC | ${l.g}G</div>
        <p class="text-[10px] text-slate-500 italic">"\${l.notes}"</p>
      </div>
    </div>
  `.replace("\\${l.notes}", l.notes || "")).join("");
};

window.openEditLogModal = function(idx) {
  ensureEditLogModal();
  const l = state.logs[idx];
  if (!l) return;
  document.getElementById("editLogIdx").value = String(idx);
  document.getElementById("editLogUser").value = l.user || "Conjunta";
  document.getElementById("editLogDate").value = l.date || "";
  document.getElementById("editLogTitle").value = l.title || "";
  document.getElementById("editLogPct").value = l.pct !== undefined ? l.pct : 100;
  document.getElementById("editLogKcal").value = l.kcal || 0;
  document.getElementById("editLogP").value = l.p || 0;
  document.getElementById("editLogHC").value = l.hc || 0;
  document.getElementById("editLogG").value = l.g || 0;
  document.getElementById("editLogNotes").value = l.notes || "";
  document.getElementById("editLogModal").classList.remove("hidden");
};

window.closeEditLogModal = function() {
  const m = document.getElementById("editLogModal");
  if (m) m.classList.add("hidden");
};

window.saveEditedMealLog = function() {
  const idx = parseInt(document.getElementById("editLogIdx").value, 10);
  if (isNaN(idx) || !state.logs[idx]) return;

  state.logs[idx].user = document.getElementById("editLogUser").value;
  state.logs[idx].date = document.getElementById("editLogDate").value.trim();
  state.logs[idx].title = document.getElementById("editLogTitle").value.trim();
  state.logs[idx].pct = parseInt(document.getElementById("editLogPct").value, 10) || 100;
  state.logs[idx].kcal = parseInt(document.getElementById("editLogKcal").value, 10) || 0;
  state.logs[idx].p = parseInt(document.getElementById("editLogP").value, 10) || 0;
  state.logs[idx].hc = parseInt(document.getElementById("editLogHC").value, 10) || 0;
  state.logs[idx].g = parseInt(document.getElementById("editLogG").value, 10) || 0;
  state.logs[idx].notes = document.getElementById("editLogNotes").value.trim();

  saveState(false);
  closeEditLogModal();
  renderMealLogsFeed();
  renderHealthDashboard();
  renderRegistroAdherencePanel();
};

window.deleteMealLogEntry = function(idx) {
  const l = state.logs[idx];
  if (!l) return;
  if (!confirm(`¿Eliminar el registro "${l.title}" (${l.user} · ${l.date})?`)) return;
  state.logs.splice(idx, 1);
  saveState(false);
  closeEditLogModal();
  renderMealLogsFeed();
  renderHealthDashboard();
  renderRegistroAdherencePanel();
};

window.deleteMealLogFromModal = function() {
  const idx = parseInt(document.getElementById("editLogIdx").value, 10);
  if (!isNaN(idx)) deleteMealLogEntry(idx);
};

// 3. NUEVO MOTOR PDF SEMANAL: HOJAS 1-2 VERTICAL (ALMUERZOS/CENAS/PASO A PASO) + HOJA 3 HORIZONTAL (3 COLUMNAS)
window.printWeeklyFridgePDF = function() {
  const weekArr = state.weeks[state.weekHorizon];
  const nan = getNandoGoalMacros();

  function buildMainTableRows(daysSubset) {
    return daysSubset.map(dObj => {
      const lDish = DISHES_DB[dObj.l] || DISHES_DB["m1_l"];
      const cDish = DISHES_DB[dObj.c] || DISHES_DB["m1_d"];

      const lIngs = lDish.items.map(it => {
        const gNoe = it.gNoelia;
        const gNan = getNandoWeight(gNoe, it.key);
        return `<li><b>${it.name}:</b> Noe ${gNoe}${it.unit} | Nan ${gNan}${it.unit} <span style="color:#047857; font-weight:bold;">(Total: ${gNoe + gNan}${it.unit})</span></li>`;
      }).join("");

      const cIngs = cDish.items.map(it => {
        const gNoe = it.gNoelia;
        const gNan = getNandoWeight(gNoe, it.key);
        return `<li><b>${it.name}:</b> Noe ${gNoe}${it.unit} | Nan ${gNan}${it.unit} <span style="color:#3730a3; font-weight:bold;">(Total: ${gNoe + gNan}${it.unit})</span></li>`;
      }).join("");

      const lSteps = (lDish.appliances || []).map(s => `<div style="margin-bottom:4px;">${s}</div>`).join("");
      const cSteps = (cDish.appliances || []).map(s => `<div style="margin-bottom:4px;">${s}</div>`).join("");

      return `
        <tr>
          <td class="day-col">${dObj.day}</td>
          <td class="meal-col">
            <div class="dish-title lunch-title">🍽️ ${lDish.title}</div>
            <ul class="ing-list">${lIngs}</ul>
          </td>
          <td class="meal-col">
            <div class="dish-title dinner-title">🌙 ${cDish.title}</div>
            <ul class="ing-list">${cIngs}</ul>
          </td>
          <td class="steps-col">
            <div class="step-block"><b style="color:#065f46;">☀️ Almuerzo:</b> ${lSteps}</div>
            <div class="step-block" style="margin-top:6px; padding-top:5px; border-top:1px dashed #cbd5e1;"><b style="color:#3730a3;">🌙 Cena:</b> ${cSteps}</div>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Filas para la Hoja Horizontal en 3 Columnas (Desayunos, Meriendas, Comodines)
  const breakfastColHtml = weekArr.map(dObj => {
    const dItem = DESAYUNOS_PDF.find(x => x.id === dObj.d) || DESAYUNOS_PDF[0];
    const wList = (SIMPLE_SLOTS_WEIGHTS[dItem.id] || []).map(w =>
      `<li><b>${w.name}:</b> Noe ${w.noe}${w.unit} | Nan ${w.nan}${w.unit} (Tot: ${Number((w.noe + w.nan).toFixed(1))}${w.unit})</li>`
    ).join("");
    return `
      <div class="slot-card">
        <div class="slot-day">${dObj.day} — ${dItem.name}</div>
        <ul class="ing-list">${wList}</ul>
      </div>
    `;
  }).join("");

  const meriendaColHtml = weekArr.map(dObj => {
    const stItem = SNACK_TARDE_PDF.find(x => x.id === dObj.st) || SNACK_TARDE_PDF[0];
    const wList = (SIMPLE_SLOTS_WEIGHTS[stItem.id] || []).map(w =>
      `<li><b>${w.name}:</b> Noe ${w.noe}${w.unit} | Nan ${w.nan}${w.unit} (Tot: ${Number((w.noe + w.nan).toFixed(1))}${w.unit})</li>`
    ).join("");
    return `
      <div class="slot-card">
        <div class="slot-day">${dObj.day} — ${stItem.name}</div>
        <ul class="ing-list">${wList}</ul>
      </div>
    `;
  }).join("");

  const comodinColHtml = weekArr.map(dObj => {
    const scItem = SNACK_COMODIN_PDF.find(x => x.id === dObj.sc) || SNACK_COMODIN_PDF[0];
    const wList = (SIMPLE_SLOTS_WEIGHTS[scItem.id] || []).map(w =>
      `<li><b>${w.name}:</b> Noe ${w.noe}${w.unit} | Nan ${w.nan}${w.unit}</li>`
    ).join("");
    return `
      <div class="slot-card">
        <div class="slot-day">${dObj.day} — ${scItem.name}</div>
        <ul class="ing-list">${wList}</ul>
      </div>
    `;
  }).join("");

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Menú Semanal A4 — Noelia & Nando</title>
      <style id="pageOrientationStyle">
        @page { size: A4 portrait; margin: 10mm; }
      </style>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #0f172a; margin: 0; padding: 0; font-size: 11px; line-height: 1.35; }
        .top-bar { background: #0f172a; color: white; padding: 10px 16px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; position: sticky; top: 0; z-index: 50; }
        .top-bar button { cursor: pointer; border: none; border-radius: 8px; padding: 7px 12px; font-weight: bold; font-size: 12px; }
        .btn-active { background: #10b981; color: white; }
        .btn-inactive { background: #334155; color: #e2e8f0; }
        .btn-print { background: #f59e0b; color: #0f172a; }
        .sheet-container { padding: 12px 16px; max-width: 1050px; margin: 0 auto; }
        h1 { font-size: 16px; margin: 0 0 3px 0; color: #065f46; }
        p.sub { font-size: 11px; margin: 0 0 10px 0; color: #475569; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 14px; }
        th, td { border: 1px solid #94a3b8; padding: 8px; vertical-align: top; text-align: left; }
        th { background: #0f172a; color: white; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.3px; }
        .day-col { width: 9%; font-weight: 800; font-size: 12px; background: #f8fafc; text-align: center; }
        .meal-col { width: 29%; }
        .steps-col { width: 33%; font-size: 10.5px; background: #fcfcfd; }
        .dish-title { font-weight: 800; font-size: 12px; margin-bottom: 5px; }
        .lunch-title { color: #065f46; }
        .dinner-title { color: #3730a3; }
        .ing-list { margin: 0; padding-left: 15px; font-size: 10.5px; }
        .ing-list li { margin-bottom: 3px; }
        .page-break { page-break-after: always; break-after: page; }
        /* Tres columnas para la hoja horizontal */
        .three-col-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .col-box { border: 1px solid #94a3b8; border-radius: 10px; overflow: hidden; }
        .col-header { padding: 8px 10px; font-weight: 800; font-size: 12px; color: white; }
        .col-body { padding: 8px; space-y: 6px; }
        .slot-card { border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 6px; }
        .slot-card:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .slot-day { font-weight: 800; font-size: 11px; color: #0f172a; margin-bottom: 3px; }
        @media print {
          .no-print { display: none !important; }
          .sheet-container { padding: 0; max-width: none; }
        }
      </style>
    </head>
    <body>
      <!-- Barra de control no imprimible -->
      <div class="top-bar no-print">
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button id="btnViewVert" class="btn-active" onclick="switchPdfPart('vertical')">
            📄 Hojas 1 y 2 (Vertical): Almuerzos, Cenas y Paso a Paso
          </button>
          <button id="btnViewHoriz" class="btn-inactive" onclick="switchPdfPart('horizontal')">
            📆 Hoja 3 (Horizontal 3 Columnas): Desayunos, Meriendas y Comodines
          </button>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Guardar este PDF</button>
          <button class="btn-inactive" onclick="window.close()">✕ Cerrar</button>
        </div>
      </div>

      <!-- PARTE A: 2 HOJAS EN VERTICAL (LUNES A JUEVES / VIERNES A DOMINGO) -->
      <div id="pdfPartVertical" class="sheet-container">
        <h1>🗓️ HOJA 1 (VERTICAL): ALMUERZOS, CENAS Y PASO A PASO (LUNES A JUEVES)</h1>
        <p class="sub">Noelia (1.600 kcal) & Nando (${nan.kcal} kcal) · Cantidades en crudo exactas (g, ml, uds) · Semana: ${state.weekHorizon.toUpperCase()}</p>
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>🍽️ Almuerzo (511 kcal)</th>
              <th>🌙 Cena (511 kcal)</th>
              <th>👨‍🍳 Paso a Paso Resumido</th>
            </tr>
          </thead>
          <tbody>
            ${buildMainTableRows(weekArr.slice(0, 4))}
          </tbody>
        </table>

        <div class="page-break"></div>

        <h1>🗓️ HOJA 2 (VERTICAL): ALMUERZOS, CENAS Y PASO A PASO (VIERNES A DOMINGO)</h1>
        <p class="sub">Noelia (1.600 kcal) & Nando (${nan.kcal} kcal) · Cantidades en crudo exactas (g, ml, uds) · Semana: ${state.weekHorizon.toUpperCase()}</p>
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>🍽️ Almuerzo (511 kcal)</th>
              <th>🌙 Cena (511 kcal)</th>
              <th>👨‍🍳 Paso a Paso Resumido</th>
            </tr>
          </thead>
          <tbody>
            ${buildMainTableRows(weekArr.slice(4, 7))}
          </tbody>
        </table>
      </div>

      <!-- PARTE B: 1 HOJA EN HORIZONTAL EN 3 COLUMNAS (DESAYUNOS, MERIENDAS Y COMODINES) -->
      <div id="pdfPartHorizontal" class="sheet-container" style="display:none;">
        <h1>☕ HOJA DE DESAYUNOS, MERIENDAS Y COMODINES (FORMATO HORIZONTAL · 3 COLUMNAS)</h1>
        <p class="sub">Medidas exactas (g, ml, uds) desglosadas para Noelia y Nando · Semana: ${state.weekHorizon.toUpperCase()}</p>
        <div class="three-col-grid">
          <div class="col-box">
            <div class="col-header" style="background:#b45309;">1. ☕ DESAYUNOS (300 KCAL · 20P | 30HC | 10G)</div>
            <div class="col-body">${breakfastColHtml}</div>
          </div>
          <div class="col-box">
            <div class="col-header" style="background:#6d28d9;">2. 🥪 MERIENDAS (200 KCAL · 20P | 20HC | 4G)</div>
            <div class="col-body">${meriendaColHtml}</div>
          </div>
          <div class="col-box">
            <div class="col-header" style="background:#be185d;">3. 🍓 COMODINES (80 KCAL · 20HC)</div>
            <div class="col-body">
              ${comodinColHtml}
              <div style="margin-top:8px; padding:6px; background:#fdf2f8; border-radius:6px; font-size:10px; color:#831843;">
                <b>🍓 Equivalencias 1 ración de Fruta:</b> 250g Fresas · 130g Kiwi · 140g Arándanos · 150g Frambuesas · 170g Naranja · 160g Piña.
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>
        function switchPdfPart(mode) {
          const styleTag = document.getElementById("pageOrientationStyle");
          const pVert = document.getElementById("pdfPartVertical");
          const pHoriz = document.getElementById("pdfPartHorizontal");
          const bVert = document.getElementById("btnViewVert");
          const bHoriz = document.getElementById("btnViewHoriz");

          if (mode === "horizontal") {
            styleTag.innerHTML = "@page { size: A4 landscape; margin: 8mm; }";
            pVert.style.display = "none";
            pHoriz.style.display = "block";
            bVert.className = "btn-inactive";
            bHoriz.className = "btn-active";
          } else {
            styleTag.innerHTML = "@page { size: A4 portrait; margin: 10mm; }";
            pVert.style.display = "block";
            pHoriz.style.display = "none";
            bVert.className = "btn-active";
            bHoriz.className = "btn-inactive";
          }
        }
      <\/script>
    </body>
    </html>
  `;

  const w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
};

window.addEventListener("DOMContentLoaded", function() {
  setTimeout(renderMealLogsFeed, 200);
});
