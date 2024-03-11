import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"];
  static values = {
    index: Number,
    effect: { type: String, default: "Salut" },
  };

  initialize() {
    console.log(this.indexValue);
    console.log(typeof this.indexValue);
  }

  next() {
    this.indexValue++;
    this.showCurrentSlide();
  }

  previous() {
    this.indexValue--;
    this.showCurrentSlide();
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }
}
