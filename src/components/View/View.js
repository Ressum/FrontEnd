import ViewContents from "./ViewContents/ViewContents";
import ViewFirstPage from "./ViewFirstPage/ViewFirstPage";
// import ViewGoods from "./ViewGoods/ViewGoods";
// import ViewProcess from "./ViewProcess/ViewProcess";
 import ViewQuestion from "./ViewQuestion/ViewQuestion";
import './View.scss';

function view() {
    return(
        <div id="view">
            <ViewFirstPage />
            {/* <ViewContents />
            <ViewProcess />
            <ViewGoods /> */}
            <ViewQuestion />
        </div>
    );
}

export default view;