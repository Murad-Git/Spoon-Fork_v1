'use strict';
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
import glutenFree from 'url:../../../src/img/logo/gluten-free-icon.png';
import cheapIcon from 'url:../../../src/img/logo/cheap-icon-icon.png';
import healtyIcon from 'url:../../../src/img/logo/healty-icon.png';
// imgs
import defaultWineImg from 'url:../../../src/img/default-wine.png';
// svgs
import icons from 'url:../../../src/img/logo/icons.svg'
import emptySelector from 'url:../../../src/img/logo/empty-selector-icon.svg';
import selectedSelector from 'url:../../../src/img/logo/selected-selector-icon.svg';
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
        if(+updateTo >0) handler(+updateTo);
      });
    };

    servingsHandlerInput(handler){
      this._parentElement.addEventListener('keydown',function(e){
        const btn = e.target.closest('.ingredients__input');
        if(!btn) return;
        if(e.code!=='Enter') return;
        const newServings = btn.value;
        if(+newServings>0) handler(+newServings);
      });
    };

    crossOutIngred(){
      this._parentElement.addEventListener('click', function(e){
        const btn = e.target.closest('.js-cross-out');
        if(!btn) return;

        // toggle icon selected and empty
        const iconEl = btn.children[0].children[0];
        iconEl.getAttribute('href') ===`${icons}#empty-selector`?
        iconEl.setAttribute('href',`${icons}#selected-selector`):
        iconEl.setAttribute('href',`${icons}#empty-selector`);

        // crossed out text
        const textEl = btn.children[1];
        textEl.classList.toggle('crossed');

      });
    };

    textTruncToggle(){
      this._parentElement.addEventListener('click',function(e){
        const btn = e.target.classList.contains('trunctParag');
        if(!btn) return;
        e.target.classList.toggle('--trunctText');
  
        // console.log(e.target.classList.contains('trunctParag'));
      });
    };



    _generateMarkup(){
      const curServings = this._data.servings;
        return `
        <div class="section1" id="content--1">
        <h2 class="section1__title">${this._data.title}</h2>
        <p class="section1__description trunctParag ">${this._data.summary} </p>
        <div class="section1__instruction">
          ${this._data.instruction? this._generateMarkupInstruction():''}
        </div>
      </div>

      <div class="section2" id="content--2">
      <figure>
      <img class="section2__recImg" src="${this._data.image}" alt="food-image">
      </figure>
        <div class="section2__container"> 
          <div class="section2__container__foodFeatures">
          <figure class="${this._data.vegan?"":"hidden"}">
          <img src="${veganIcon}" alt="vegan-icon">
          </figure>
          <figure class="${this._data.vegetarian?"":"hidden"}">
          <img src="${vegatarianIcon}" alt="vegatarian-icon">
          </figure>
          <figure class="${this._data.glutenFree?"":"hidden"}">
          <img src="${glutenFree}" alt="gluten-free-icon">
          </figure>
          <figure class="${this._data.cheap?"":"hidden"}">
          <img src="${cheapIcon} alt="cheap-icon">
          </figure>
          <figure class="${this._data.veryHealthy?"":"hidden"}">
          <img src="${healtyIcon}" alt="vegan-icon">
          </figure>
          </div>
          <div class="section2__wineRec">
          <h3 class="section2__wineRec__title">Wine recommendation</h3>
            ${this._data.winePairing.pairingText?this._generateMarkupWine(this._data.winePairing): this._generateMarkupNoWine()}
          </div>
        </div>
      </div>

      <div class="section3" id="content--3">
        <div class="section3__timeBox">
          <div class="section3__timeBox__box">
          <figure>
          <img src="${timeIcon}" alt="time-icon">
          </figure>
            <p>${this._data.cookingTime} minutes</p>
          </div>
          <div class="section3__timeBox__box">
          <figure>
          <img src="${portionIcon}" alt="portion-icon">
          </figure>
            <p>${this._data.servings} portions</p>
          </div>
          <div class="section3__timeBox__box">
          <figure>
          <img src="${cousineIcon}" alt="cousine-icon">
          </figure>
            <p>${this._data.cuisines?this._data.cuisines:''}</p>
          </div>
          <div class="section3__timeBox__box">
          <figure>
          <img src="${dishTypeIcon}" alt="dish-type-icon">
          </figure>
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
        <li class="js-cross-out">
            <svg>
                <use href="${icons}#empty-selector"></use>
            </svg>
            <p class="section3__ingredBox__ingredsText">${ing.amount?new Fraction(ing.amount).toString():''} ${ing.unit} ${ing.nameClean}</p>
        </li>
        `
    }

    _generateMarkupWine(wine){
      return `
      ${wine.pairingText?wine.pairingText:""}
      <div class="section2__wineRec__offer">
      <h4 class="section2__wineRec__title2">${wine.productMatches[0]?wine.productMatches[0].title: ''}</h4>
        <div class="section2__wineRec__offer__box">
            <p class="section2__wineRec__text">
            ${wine.productMatches[0]?wine.productMatches[0].description: ''}
            <span class="section2__wineRec"> ${wine.productMatches[0]?wine.productMatches[0].price: ''} </span>
            </p>
            <figure>
              <img src="${wine.productMatches[0]?wine.productMatches[0].  imageUrl:defaultWineImg}" alt="wine pair img">
            </figure>
        </div>
        </div>
      `
      
    }

    _generateMarkupNoWine(){
      return `
      <p class="section2__wineRec__text">
      No wine was found. You can choose your own drink :)
      </p> 
      `
    }
    _generateMarkupInstruction(){
      return `
      <h2 class="section1__instruction__title">Instruction</h2>
      <p class="section1__instruction__text trunctParag">${this._data.instruction} </p>
      `
    }
    
}

export default new Recipe();