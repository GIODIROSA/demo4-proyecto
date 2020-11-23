import inicio from "@/views/inicio";
import shallowMount from "@vue/test-utils";

describe("Testing integrity of data() properties", () => {
  test("should have ImagenInicio property", () => {
    expect(wrapper.vm.$data).toHaveProperty("imagenInicio");
    expect(typeof wrapper.vm.imagenInicio).toBe("string");
  });
  test("should have parallaxInicio", () => {
    expect(wrapper.vm.$data).toHaveProperty("parallaxInicio");
    expect(typeof wrapper.vm.parallaxInicio).toBe("string");
  });
  test("should have show property", () => {
    expect(wrapper.vm.$data).toHaveProperty("show");
    expect(typeof wrapper.vm.show).toBe("boolean");
  });
  test("should have subtitulo property", () => {
    expect(wrapper.vm.$data).toHaveProperty("subtitulo");
    expect(typeof wrapper.vm.subtitulo).toBe("string");
  });
  test("should have icons property", () => {
    expect(wrapper.vm.$data).toHaveProperty("icons");
    expect(Array.isArray(wrapper.vm.icons)).toBeTruthy();
  });
});
