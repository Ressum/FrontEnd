import './GoodsDetail.scss';

function GoodsDetail({ 
    imgUrl="none", 
    itemName="item names", 
    goodsPrice=30000, 
    goodsDescription="ndsjnksnvadkvdbiodavdnalvdancaca\naskvnadlkalknvldanvdoavikadnlkcvnas\nvadlknvsalknvlaksdnvklsacnlsacsa\ncasnklcnadklvnlkcdankccnakscnsalncs\ncaslkcnadklvndalncvladnclakdnclasnc\nascklasnclkasdncldncdanclknadcda\ncadnklcdanklcdanlkcdanlcnadlkndaa"
}) {
    return (
        <form id="goods-detail">
            <img src={imgUrl} id="goods-img" />
            <div id="goods-detail-info">
                <div id="goods-detail-info--text">
                    <h1 id="goods-name">{itemName}</h1>
                    <h2 id="goods-price">{goodsPrice}₩</h2>
                    <div id="goods-info">{goodsDescription}</div>
                </div>
                <button id="goods-detail-info--purchase">걸제</button>
            </div>
        </form>
    );
}

export default GoodsDetail;