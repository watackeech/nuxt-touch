import { defineComponent, ref, createElementBlock, unref, useSSRContext } from "vue";
import { klona } from "klona";
import { a as useNuxtApp } from "../server.mjs";
import "hookable";
import { defuFn } from "defu";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
const inlineConfig = {
  "nuxt": {
    "buildId": "5a16b2e9-8921-440c-871d-033ff9e7aa2e"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const date = useAppConfig().buildDate;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer>Built Date: ${ssrInterpolate(unref(date))}</footer>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-0Yfoy8nN.js.map
