import View from './view.js';
import {Fraction} from 'fractional';

// import icons from 'url:../../src/img/logo'

// Icons
import timeIcon from 'url:../../../src/img/logo/time-icon.png';
import portionIcon from 'url:../../../src/img/logo/portion-icon.png';
import cousineIcon from 'url:../../../src/img/logo/cousine-icon.png';
import dishTypeIcon from 'url:../../../src/img/logo/dish-type-icon.png';
import veganIcon from 'url:../../../src/img/logo/vegan-icon.png';
import vegatarianIcon from 'url:../../../src/img/logo/vegatarian-icon.png';
import glutenFrIcon from 'url:../../../src/img/logo/gluten-free-icon.png';
import cheapIcon from 'url:../../../src/img/logo/cheap-icon-icon.png';
import healtyIcon from 'url:../../../src/img/logo/healty-icon.png';
import defaultWineImg from 'url:../../../src/img/default-wine.png';
import emptySelector from 'url:../../../src/img/logo/empty-selector-icon.svg';
import plusBtn from 'url:../../../src/img/logo/plus-button-icon.svg';
import minusBtn from 'url:../../../src/img/logo/minus-button-icon.svg';
// import iconsSvg from 'url:../../../src/img/logo/icons.svg';

// parcel
// const timeIcon = new URL('../../img//logo/time-icon.png', import.meta.url);
// const portionIcon = new URL('../../img/logo/portion-icon.png', import.meta.url);
// const cousineIcon = new URL('../../img/logo/cousine-icon.png', import.meta.url);
// const dishTypeIcon = new URL('../../img/logo/dish-type-icon.png', import.meta.url);


class Recipe extends View{
    _parentElement = document.querySelector('.main');
    errorMessage = 'Could not find this recipe, please try another';



    renderHandler(handler){
        ['hashchange', 'load'].forEach(ev=> window.addEventListener(ev, handler, false))
    }

    servingsHandler(handler){
      this._parentElement.addEventListener('click', function(e){
        const btn = e.target.closest('.btn__update--servings');
        if(!btn) return;
        const {updateTo} = btn.dataset
        if(+updateTo >0&&+newServings<100) handler(+updateTo);
      });
    };

    servingsHandlerInput(handler){
      this._parentElement.addEventListener('keydown',function(e){
        const btn = e.target.closest('.ingredients__input');
        if(!btn) return;
        if(e.code!=='Enter') return;
        const newServings = btn.value;
        if(+newServings>0 && +newServings<100) handler(+newServings);
      })
    }



    _generateMarkup(){
      console.log(`servings data from recipe.js: ${this._data.servings}`);
      console.log(`type of servings ${typeof this._data.servings}`);
      const curServings = this._data.servings;
        return `
        <div class="section1" id="content--1">
        <h2 class="section1__title">${this._data.title}</h2>
        <p class="section1__description">${this._data.summary}</p>
        <div class="section1__instruction">
          <h2 class="section1__instruction__title">Instruction</h2>
          <p class="section1__instruction__text">${this._data.instruction}</p>
        </div>
      </div>

      <div class="section2" id="content--2">
        <img class="section2__recImg" src="${this._data.image}" alt="food image">
        <div class="section2__container"> 
          <div class="section2__container__foodFeatures">
            <img class="${this._data.vegan?"":"hidden"}" src="${veganIcon}" alt="vegan icon">
            <img class="${this._data.vegetarian?"":"hidden"}" src="${vegatarianIcon}" alt="vegatarian icon">
            <img class="${this._data.glutenFree?"":"hidden"}" src="${glutenFrIcon} alt="gluten free icon">
            <img class="${this._data.cheap?"":"hidden"}" src="${cheapIcon} alt="cheap icon">
            <img class="${this._data.veryHealthy?"":"hidden"}" src="${healtyIcon} alt="healty icon">
          </div>
          <div class="section2__wineRec">
            <h3 class="section2__wineRec__title">Wine recommendation</h3>
            ${this._data.winePairing.pairingText?this._data.winePairing.pairingText:""}
            <div class="section2__wineRec__offer">
              <div class="section2__wineRec__offer__box">
                <h4 class="section2__wineRec__title2">${this._data.winePairing.productMatches[0].title?this._data.winePairing.productMatches[0].title: ''}</h4>
                  <p class="section2__wineRec__text">
                  ${this._data.winePairing.productMatches[0].description?this._data.winePairing.productMatches[0].description: ''}
                  </p>
                  <span class="section2__wineRec__price">Price: ${this._data.winePairing.productMatches[0].price? this._data.winePairing.productMatches[0].price: ''} </span>
              </div>
              <img src="${this._data.winePairing.productMatches[0].imageUrl?this._data.winePairing.productMatches[0].imageUrl:defaultWineImg}" alt="wine pair img">
            </div>
          </div>
        </div>
      </div>

      <div class="section3" id="content--3">
        <div class="section3__timeBox">
          <div class="section3__timeBox__box">
            <img src="${timeIcon}" alt="time-icon">
            <p>${this._data.cookingTime} minutes</p>
          </div>
          <div class="section3__timeBox__box">
            <img src="${portionIcon}" alt="portion-icon">
            <p>${this._data.servings} portions</p>
          </div>
          <div class="section3__timeBox__box">
            <img src="${cousineIcon}" alt="cousine-icon">
            <p>${this._data.cuisines?this._data.cuisines:''}</p>
          </div>
          <div class="section3__timeBox__box">
            <img src="${dishTypeIcon}" alt="dish-type-icon">
            <p>${this._data.dishTypes?this._data.dishTypes.map(dish=>dish): ''} </p>
          </div>
          </div>
        <div class="section3__ingredBox">
          <div class="section3__ingredBox__title">
            <h3>Ingredients</h3>
          </div>
          <div class="section3__ingredBox__portions">
            <p>Portions</p>
            <div class="section3__ingredBox__controller">
              <button class="btn__update--servings" data-update-to="${curServings -1}">
            <svg>
              <use href="${minusBtn}#minus-button"></use>
            </svg></button>

              <input class="ingredients__input" type="number" value="${curServings}" name="portion" id="portion" placeholder="1" min= "1" max="20">

              <button class="btn__update--servings" data-update-to="${curServings +1}">
                <svg>
                  <use href="${plusBtn}#plus-button"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="section3__ingredBox__ingreds">
            <ul>
              ${this._data.ingredients.map(this._generateMarkupIngr).join('')}
            </ul>
          </div>
        </div>
      </div>
        `
    }

    _generateMarkupIngr(ing){
        return `
        <li>
            <svg>
                <use href="${emptySelector}#empty-selector"></use>
            </svg>
            <p class="section3__ingredBox__ingredsText">${ing.amount?new Fraction(ing.amount).toString():''} ${ing.unit} ${ing.nameClean}</p>
        </li>
        `
    }
}

export default new Recipe();