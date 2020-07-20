import SpatialNavigation from 'spatial-navigation-js';

window.addEventListener('load', function() {
  SpatialNavigation.init();
  SpatialNavigation.add({
    selector: 'a, input, button'
  });
  SpatialNavigation.makeFocusable();
  SpatialNavigation.focus();
});