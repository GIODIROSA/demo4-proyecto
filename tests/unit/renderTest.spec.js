import { mount } from "@vue/test-utils";
import Inicio from "@/views/Inicio.vue";

describe("Testing the correct rendering of elements", () => {
  const wrapper = mount(Inicio); //cambiar a Inicio para probar

  test("should render 5 section", () => {
    //   UNO bannerInicio

    expect(wrapper.find(".bannerInicio").exists()).toBeTruthy();
    expect(wrapper.find(".bannerInicio").element.tagName).toBe("SECTION");

    // DOS redesInicio

    expect(wrapper.find("redesInicio").exists()).toBeTruthy();
    expect(wrapper.find("redesInicio").element.tagName).toBe("SECTION");

    // TRES cardArtistasAInicio

    expect(wrapper.find("cardArtistasInicio").exists()).toBeTruthy();
    expect(wrapper.find("cardArtistasInicio").element.tagName).toBe("SECTION");

    // CUATRO descansoParallaxInicio

    expect(wrapper.find("descansoParallaxInicio").exists()).toBeTruthy();
    expect(wrapper.find("descansoParallaxInicio").element.tagName).toBe(
      "SECTION"
    );

    // CINCO conciertoInicio

    expect(wrapper.find("areaConciertoInicio").exists()).toBeTruthy();
    expect(
      wrapper.find("areaConciertoInicio").element.tagName.toLowerCase() ==
        "section"
    ).toBeTruthy();
  });

  //   TEST IMG

  test("should render 1 img", () => {
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(
      wrapper.find("img").element.tagName.toLowerCase() == "img"
    ).toBeTruthy();
  });

  //   TEST h1

  test("should render 1 h1", () => {
    expect(wrapper.find("tituloConciertoInicio").exists()).toBeTruthy();
    expect(wrapper.find("tituloConciertoInicio").element.tagName).toBe("H1");
  });

  //   TEST h4

  test("should render 1 h1", () => {
    expect(wrapper.find("subtituloConciertoInicio").exists()).toBeTruthy();
    expect(wrapper.find("subtituloConciertoInicio").element.tagName).toBe("H4");
  });

  //   TEST a

  test("should render 1 h1", () => {
    expect(wrapper.find("a").exists()).toBeTruthy();
    expect(wrapper.find("a").element.tagName).toBe("A");
  });

  console.log(wrapper.html());
});

//
