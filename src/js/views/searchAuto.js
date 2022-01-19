import View from './view.js';
import searchList from './searchList.js';

class SearchAuto extends View{
    _parentElement = document.querySelector('.suggestions');

    searchAutoHandler(handler){
        // causes to appear one after clicking on list items
        // document.querySelector('.input-search').addEventListener('change', function(e){
        //     e.preventDefault();
        //     handler(this.value);
        //     // console.log(`value from change: ${this.value}`);
        // });
        document.querySelector('.input-search').addEventListener('keyup', function(e){
            if(!this.value) return
            e.preventDefault();
            handler(this.value);
            // console.log(`value from keyup: ${this.value}`);
        });
    };
    // used listNav instead
    // hideList(){
    //     this._parentElement.addEventListener('click', function(e){
    //         const btn = e.target.closest('.search-list');
    //         if(!btn) return
    //         btn.parentElement.innerHTML = '';
    //         // console.log(btn.parentElement);
            
    //     });
    // };

    hideList(){
        document.querySelector('.container').addEventListener('click', function(){
            const btn = document.querySelector('.search-list');
            if(!btn) return;
            document.querySelector('.suggestions').innerHTML = '';
        });
    };

    _generateMarkup(){
      return this._data.map(result=>searchList.render(result, false)).join('');
    }
};

export default new SearchAuto();