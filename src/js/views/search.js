import View from './view.js'

class Search extends View {
    _parentElement = document.querySelector('.search-box');
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
}

export default new Search();