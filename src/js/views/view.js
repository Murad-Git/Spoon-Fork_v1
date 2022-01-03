export default class View {
    _data;

    render(data, render = true){
        if(!data || (Array.isArray(data)&& data.length ===0))
        return this.errorMessage();

        this._data = data;
        const markup = this._generateMarkup();
        if(!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    errorMessage(message = this.errorMessage){
        const markup = `
            <div class="error">
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}