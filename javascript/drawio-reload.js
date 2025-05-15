// docs/javascripts/drawio-reload.js
document$.subscribe(({ body }) => {
  GraphViewer.processElements();
});
