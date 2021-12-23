import View from './view.js';
import timeIcon from 'url:../../../src/img/logo/time-icon.png';
import portionIcon from 'url:../../../src/img/logo/portion-icon.png';

class Preview extends View{
    _parentElement = '';

    _generateMarkup(){
        // console.log(`data from preview: ${this._data}`);
        console.log(`data from preview: ${this._data.sourceUr}`);
        return `
        <li class="preview" >
            <a class="preview__link preview__link--active" href="${this._data.sourceUrl}">
              <figure class= "preview__fig" >
                <img src="${this._data.image}" alt="food image">
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <div class="preview__dishInfo">
                  <img src="${timeIcon}" alt="time-icon">
                  <p>${this._data.cookingTime} m</p>
                  <img src="${portionIcon}" alt="portion-icon">
                  <p>${this._data.servings} portions</p>
                </div>
              </div>
            </a>
          </li>
        `
    }
}

export default new Preview();