module.exports.load = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const link = urlParams.get('link');

  const templateSelector = Handlebars.compile(document.getElementById('template-selector').innerHTML);
  document.getElementById('download').innerHTML = templateSelector({link});
};