// import icons from 'url:../../../src/img/logo';
import View from './view.js';
import preview from './preview.js';

class Results extends View{
    _parentElement = document.querySelector('.search__results');
    errorMessage = 'No recipe found for your search. Please try again';

    _generateMarkup(){
      return this._data.map(result=>preview.render(result, false)).join('');
  }
}
export default new Results();