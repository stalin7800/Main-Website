import { c as create_ssr_component } from "../../../chunks/index-f651982d.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-1ap67ue.svelte-1ap67ue{text-align:center}form.svelte-1ap67ue.svelte-1ap67ue{width:85%;margin-inline:auto;border-radius:5px;border:1px solid black;;}form.svelte-1ap67ue>.svelte-1ap67ue{margin-left:10%}textarea.svelte-1ap67ue.svelte-1ap67ue{resize:none;width:80%}button.svelte-1ap67ue.svelte-1ap67ue{display:block;margin-top:2em;margin-bottom:2em;margin-inline:auto;background-color:deepskyblue;width:25%;height:3em}")();
const css = {
  code: "h1.svelte-1ap67ue.svelte-1ap67ue{text-align:center}form.svelte-1ap67ue.svelte-1ap67ue{width:85%;margin-inline:auto;border-radius:5px;border:1px solid black;;}form.svelte-1ap67ue>.svelte-1ap67ue{margin-left:10%}textarea.svelte-1ap67ue.svelte-1ap67ue{resize:none;width:80%}button.svelte-1ap67ue.svelte-1ap67ue{display:block;margin-top:2em;margin-bottom:2em;margin-inline:auto;background-color:deepskyblue;width:25%;height:3em}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-1ap67ue"}">Contact Form</h1>
<form class="${"svelte-1ap67ue"}"><p class="${"svelte-1ap67ue"}">Your name</p>
    <input type="${"text"}" name="${"name"}" placeholder="${"Your name"}" class="${"svelte-1ap67ue"}">
    <p class="${"svelte-1ap67ue"}">Your message</p>
    <textarea name="${"message"}" id="${""}" rows="${"10"}" class="${"svelte-1ap67ue"}"></textarea>
    <br class="${"svelte-1ap67ue"}">
    <button type="${"submit"}" class="${"svelte-1ap67ue"}">Submit</button>
</form>`;
});
export { Contact as default };
