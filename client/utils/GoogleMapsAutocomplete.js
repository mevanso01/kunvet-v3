import * as VueGoogleMaps from 'vue2-google-maps';

function getInputElement(el) {
  let domel = typeof el.$el !== 'undefined' ? el.$el : el;

  if (domel.tagName.toLowerCase() !== 'input') {
    const inputs = domel.getElementsByTagName('input');
    if (!inputs.length) {
      throw Error(`No input fields found for ${el}`);
    }

    domel = inputs[0];
  }

  return domel;
}

export default {
  async attach(el, onchange = () => {}) {
    console.log(el);
    if (!window.google || !window.google.maps) {
      await VueGoogleMaps.loaded;
    }

    const domel = getInputElement(el);
    domel.setAttribute('placeholder', '');

    if (!domel.googleMapsAutocomplete) {
      domel.googleMapsAutocomplete = new window.google.maps.places.Autocomplete(domel);
      domel.googleMapsAutocomplete.addListener('place_changed', () => {
        onchange(domel.googleMapsAutocomplete.getPlace());
      });
    }
  },
  detach(el) {
    const domel = getInputElement(el);

    if (domel.googleMapsAutocomplete) {
      window.google.maps.event.clearInstanceListeners(domel);
    }
  },
};
