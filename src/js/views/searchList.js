import View from './view.js';

class SearchList extends View{
    _parentElement = '';

    _generateMarkup(){
        return `
        <li class="search-list">
        <a href="#${this._data.id}">
            <span class="name">${this._data.title}</span>
        </a>
        </li>
            `
    }
}

export default new SearchList();