import View from './view.js'

class Search extends View {
    _parentElement = document.querySelector('.search__form');
    errorMessage = 'Could not find any recipe';

    searchHandler(handler){
        document.querySelector('.input-search').addEventListener('keydown', function(e){
            if(e.code !== 'Enter') return
            e.preventDefault();
            handler(this.value);
        });
    }

    searchTitle(handler){
        document.querySelector('.nav__links').addEventListener('click', function(e){
            const btn = e.target.closest('.nav__links__link');
            if(!btn) return;
            const {linkTo} = btn.dataset;
            handler(linkTo)
        });
    }
    _clearInput(){
        this._parentElement.querySelector('.input-search').value = ''
    }

}

export default new Search();