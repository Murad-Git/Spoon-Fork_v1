import View from './view.js'

class Search extends View {
    _parentElement = document.querySelector('.input-search');
    errorMessage = 'Could not find any recipe';

    getQuery(){
        const query = this._parentElement.querySelector('.input-search').value
        this._clearInput();
        return query;
    }

    _clearInput(){
        this._parentElement.querySelector('.input-search').value = ''
    }

    searchHandler(handler){
        document.querySelector('.input-search').addEventListener('keydown', function(e){
            // console.log(e.code);
            if(e.code !== 'Enter') return
            // if(e.code !== 'NumpadEnter') return
            e.preventDefault();
            handler()
        })
    }

    searchTitle(handler){
        document.querySelector('.nav__links').addEventListener('click', function(e){
            const btn = e.target.closest('.nav__links__link');
            if(!btn) return;
            const {linkTo} = btn.dataset;
            handler(linkTo)
        });
    }

}

export default new Search();