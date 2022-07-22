import './goodsCard.styles.css'

const GoodsCard = ( { goodsInfo } ) => {
    const { goodsId , goodsName, goodsCoverImg ,sellingPrice } = goodsInfo;

    return (
        <div className='goods-container' key={ goodsId }>
            <img alt = { goodsName } src={ goodsCoverImg } />
            <p className='goodsName'>{ goodsName }</p>
            <p className='sellingPrice'>{ sellingPrice }円(税込)</p>
        </div>
    )
}

export default GoodsCard