import View from './view.js';

class Pagination extends View{
    _parentElement = document.querySelector('.pagination');

    addHandlerPage(handler){
        this._parentElement.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    // add number of page on the button
    _generateMarkup(){
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.totalResults/10);
        // console.log(`curPage: curPage: ${curPage}, numPages: ${numPages}`);

        // Page 1, and there are other pages
        if(curPage ===1 && numPages>1) 
        return `
        <button class="pagination__btn--next btn--inline" data-goto="${curPage+1}"><i class="fas fa-arrow-circle-right"></i></button>
        `
        // Last page 
        if(curPage === numPages && numPages > 1)
        return `
        <button class="pagination__btn--prev btn--inline" data-goto="${curPage-1}"><i class="fas fa-arrow-circle-left"></i></button>
        `

        // Other pages 
        if(curPage<numPages)
        return `
        <button class="pagination__btn--prev btn--inline" data-goto="${curPage-1}"><i class="fas fa-arrow-circle-left"></i></button>
        <button class="pagination__btn--next btn--inline" data-goto="${curPage+1}"><i class="fas fa-arrow-circle-right"></i></button>
        `
        // Page 1, and there are no other pages
        return ''
    }
}

export default new Pagination();