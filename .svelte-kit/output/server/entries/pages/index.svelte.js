import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-f651982d.js";
const info = [
  {
    title: "Machine Learning",
    gendesc: "A basic machine learning projectI created in my data science 2010 class. This project provided an overview of machine learning, and the differences between various machine learning models",
    tabs: [
      {
        name: "Data Overview",
        img: "url",
        description: `
            Our dataset is a collection of samples of different wines, and the rating given to them by a professional wine taster in a range from zero to ten. The predictor variables given to us in our dataset were: Fixed Acidity, Volatile Acidity, Citric  Acid, Residual Sugar, Free Sugar Dioxide, Chlorides, Total Sulfur Dioxide, Density, pH, Sulphates, Alcohol`
      },
      {
        name: "Unfiltered Linear Model",
        img: "url2",
        description: `
                dfdsf
                
                `
      }
    ]
  }
];
var SampleProject_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cont.svelte-mbd5t1{width:85%;margin-inline:auto;border:1px dotted;border-color:var(--col);margin-bottom:1em;padding:1em;border-radius:5px}")();
var Interest_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".interest.svelte-1exfgdy.svelte-1exfgdy{border:1px dashed var(--col);border-radius:5px;margin-top:5em;color:var(--col);background-color:var(--bgc) ;padding:1em}button.svelte-1exfgdy.svelte-1exfgdy{cursor:pointer}.interest.svelte-1exfgdy>button.svelte-1exfgdy{margin-inline:50%;margin-bottom:2.5em;background-color:green;padding:1em;border:1px solid var(--col);border-radius:5px}.tabviewer.svelte-1exfgdy.svelte-1exfgdy{display:flex;align-items:center}.tabviewer.svelte-1exfgdy>p.svelte-1exfgdy{cursor:pointer;border:1px solid var(--col);border-radius:100%;aspect-ratio:1;transition:all .5s ease-in;user-select:none}.tabviewer.svelte-1exfgdy>p.svelte-1exfgdy:hover{background-color:lightblue}")();
const css = {
  code: ".interest.svelte-1exfgdy.svelte-1exfgdy{border:1px dashed var(--col);border-radius:5px;margin-top:5em;color:var(--col);background-color:var(--bgc) ;padding:1em}button.svelte-1exfgdy.svelte-1exfgdy{cursor:pointer}.interest.svelte-1exfgdy>button.svelte-1exfgdy{margin-inline:50%;margin-bottom:2.5em;background-color:green;padding:1em;border:1px solid var(--col);border-radius:5px}.tabviewer.svelte-1exfgdy.svelte-1exfgdy{display:flex;align-items:center}.tabviewer.svelte-1exfgdy>p.svelte-1exfgdy{cursor:pointer;border:1px solid var(--col);border-radius:100%;aspect-ratio:1;transition:all .5s ease-in;user-select:none}.tabviewer.svelte-1exfgdy>p.svelte-1exfgdy:hover{background-color:lightblue}",
  map: null
};
const Interest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cat } = $$props;
  if ($$props.cat === void 0 && $$bindings.cat && cat !== void 0)
    $$bindings.cat(cat);
  $$result.css.add(css);
  return `<div class="${"interest svelte-1exfgdy"}"><h1>${escape(cat.title)}</h1>
    <p>${escape(cat.gendesc)}</p>
    <button class="${"svelte-1exfgdy"}">${escape("Expand")}</button>

   

    ${``}</div>




${``}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Interest, "Interest").$$render($$result, { cat: info[0] }, {}, {})}`;
});
export { Routes as default };
