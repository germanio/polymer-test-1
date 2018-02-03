// Your new element extends the Polymer.Element base class
class MyNewView extends Polymer.Element {
  static get is() { return 'my-new-view'; }
}
//Now, register your new custom element so the browser can use it
customElements.define(MyNewView.is, MyNewView);