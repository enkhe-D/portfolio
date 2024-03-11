import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["lists"];

  add_to_list() {
    const containerList = document.createElement("ul");
    const listItem = document.createElement("li");
    listItem.textContent = this.listsTarget.value;
    containerList.appendChild(listItem);
    document.body.appendChild(containerList);
  }
}
