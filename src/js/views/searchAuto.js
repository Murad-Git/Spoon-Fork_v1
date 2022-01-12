import View from './view.js';
import searchList from './searchList.js';

class SearchAuto extends View{
    _parentElement = document.querySelector('.suggestions');

    searchAutoHandler(handler){
        document.querySelector('.input-search').addEventListener('change', function(e){
            e.preventDefault();
            handler(this.value);
            // console.log(`value from change: ${this.value}`);
        });
        document.querySelector('.input-search').addEventListener('keyup', function(e){
            e.preventDefault();
            handler(this.value);
            // console.log(`value from keyup: ${this.value}`);
        });
    }
    hideList(){
        this._parentElement.addEventListener('click', function(e){
            const btn = e.target.closest('.search-list');
            if(!btn) return;
            // console.log(btn.parentElement);
            btn.parentElement.innerHTML = '';
        });
    }

    // _displayMatches (){

    // }

    _generateMarkup(){
      return this._data.map(result=>searchList.render(result, false)).join('');
    }
};

export default new SearchAuto();