/*
 * Vue title plugin
 *
 * Exposes Vue.prototype.$setTitle
 */

function getTitle(title = '') {
  if (!title) {
    return 'Kunvet';
  }
  return `${title} | Kunvet`;
}

export default {
  getTitle,
  install(Vue) {
    Vue.prototype.$setTitle = (title = '') => {
      document.title = getTitle(title);
    };
  },
};
