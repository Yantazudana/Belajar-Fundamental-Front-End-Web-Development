const main = () => {
    const searchEle = document.querySelector("search-bar");
    const cocktailList = document.querySelector("cocktail-list");

    const searchclicked = async() => {
        try {
            const result = await Data.searchcocktail(searchEle.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        cocktailList.cocktails = results;
    };

    const fallbackResult = (message) => {
        cocktailList.renderError(message);
    };

    searchEle.Click = searchclicked;
};

export default main;
import Data from "../data/datacocktail.js";
import "../component/searchbar.js";
import "../component/cocktaillist.js";