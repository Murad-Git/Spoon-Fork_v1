import View from './View.js';
import iconSvg from 'url:../../../src/img/logo/empty-selector-icon.svg';


export default class Ingredients extends View{
    _parentElement = document.querySelector('.section3__ingredbox--ingList');


    
    _generateMarkup(ing){
        return `
            <li>
                <svg>
                    <use href="${iconSvg}#empty-selector"></use>
                </svg>
                <p class="section3__ingredBox__ingredsText">${ing.amount} ${ing.unit} ${ing.nameClean}</p>
            </li>   
        `
    }
}
