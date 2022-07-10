import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index-f651982d.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const theme = writable("light");
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-1kdvnv7{text-decoration:none}a.svelte-1kdvnv7:visited{color:var(--col)}ul.svelte-1kdvnv7{display:flex;justify-content:space-evenly;list-style:none;color:var(--col)}nav.svelte-1kdvnv7{background-color:var(--bgc);border:1px solid var(--col);border-radius:5px;width:95%;margin-left:2.5%;max-width:100vw;position:fixed;top:0}")();
const css$2 = {
  code: "a.svelte-1kdvnv7{text-decoration:none}a.svelte-1kdvnv7:visited{color:var(--col)}ul.svelte-1kdvnv7{display:flex;justify-content:space-evenly;list-style:none;color:var(--col)}nav.svelte-1kdvnv7{background-color:var(--bgc);border:1px solid var(--col);border-radius:5px;width:95%;margin-left:2.5%;max-width:100vw;position:fixed;top:0}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="${"svelte-1kdvnv7"}"><ul class="${"svelte-1kdvnv7"}"><li><a href="${"/"}" class="${"svelte-1kdvnv7"}">Home</a></li>
        <li><a href="${"/about"}" class="${"svelte-1kdvnv7"}">About</a></li>
        <li><a href="${"/contact"}" class="${"svelte-1kdvnv7"}">Contact</a></li></ul>
</nav>`;
});
var Slider_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.switch.svelte-noyf3i.svelte-noyf3i{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-noyf3i input.svelte-noyf3i{opacity:0;width:0;height:0}.slider.svelte-noyf3i.svelte-noyf3i{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc !important;-webkit-transition:.4s;transition:.4s}.slider.svelte-noyf3i.svelte-noyf3i:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white !important;-webkit-transition:.4s;transition:.4s}input.svelte-noyf3i:checked+.slider.svelte-noyf3i{background-color:#324954 !important}input.svelte-noyf3i:focus+.slider.svelte-noyf3i{box-shadow:0 0 1px #324954 !important}input.svelte-noyf3i:checked+.slider.svelte-noyf3i:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-noyf3i.svelte-noyf3i{border-radius:34px}.slider.round.svelte-noyf3i.svelte-noyf3i:before{border-radius:50%}')();
const css$1 = {
  code: '.switch.svelte-noyf3i.svelte-noyf3i{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-noyf3i input.svelte-noyf3i{opacity:0;width:0;height:0}.slider.svelte-noyf3i.svelte-noyf3i{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc !important;-webkit-transition:.4s;transition:.4s}.slider.svelte-noyf3i.svelte-noyf3i:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white !important;-webkit-transition:.4s;transition:.4s}input.svelte-noyf3i:checked+.slider.svelte-noyf3i{background-color:#324954 !important}input.svelte-noyf3i:focus+.slider.svelte-noyf3i{box-shadow:0 0 1px #324954 !important}input.svelte-noyf3i:checked+.slider.svelte-noyf3i:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-noyf3i.svelte-noyf3i{border-radius:34px}.slider.round.svelte-noyf3i.svelte-noyf3i:before{border-radius:50%}',
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<label class="${"switch svelte-noyf3i"}"><input type="${"checkbox"}" class="${"svelte-noyf3i"}">
    <span class="${"slider round svelte-noyf3i"}"></span>
  </label>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "footer.svelte-14zn0k8{text-align:center;border-radius:5px;width:95%;margin-top:1em;margin-left:2.5%;bottom:0;display:flex;justify-content:space-between;align-items:center;border:1px solid var(--col);background-color:var(--bgc)}")();
const css = {
  code: "footer.svelte-14zn0k8{text-align:center;border-radius:5px;width:95%;margin-top:1em;margin-left:2.5%;bottom:0;display:flex;justify-content:space-between;align-items:center;border:1px solid var(--col);background-color:var(--bgc)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `<footer class="${"svelte-14zn0k8"}"><p>Test Thing</p>
    ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}</footer>



${$theme == "light" ? `<style>footer {
            background-color: white !important;
            border-color: black !important;
            color: black !important;
        }
    </style>` : `<style>footer {
            background-color: black !important;
            border-color: white !important;
            color: white !important;
        }
    </style>`}`;
});
var global = /* @__PURE__ */ (() => "* {\r\n    color: var(--col);\r\n    background-color: var(--bgc);\r\n    transition: all 1s ease-in;\r\n}")();
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <br>
    ${slots.default ? slots.default({}) : ``}

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

    ${$theme == "light" ? `<style>:root {
            --col: black;
            --bgc: white;
        }
        
    </style>` : `<style>:root {
            --col: white;
            --bgc: black;
        }

    </style>`}`;
});
export { _layout as default };
