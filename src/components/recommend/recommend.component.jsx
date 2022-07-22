import { useEffect, useState } from "react";
import './recommend.styles.css'
import axios from 'axios'
import GoodsCard from "../goodsCard/goodsCard.component";

const Recommend = () => {
  const [ recommends, setRecommends] = useState( [] )


// const localhost = axios.create({
//   baseURL: 'http://localhost:8080'
// })

// useEffect(() => {
//   async function getPost() {
//     const response = await localhost.get('/goodsInfo')
//     setRecommends(response.data.data)
//   }
//   getPost()
// })
  useEffect(() => {
    axios.get("http://localhost:8080/Goodses?configType=5").then(({data}) => {
      console.log(data);
      setRecommends(data.data)
    });
  }, []);
  
    return (
        <section className = "main">
          <h3>おすすめ商品</h3>
          <div className="recommends" >
            {recommends.map((goodsInfo) => {
              return <GoodsCard key={goodsInfo.goodsId} goodsInfo={goodsInfo} />
            })}
          </div>
            {/* <recommendList /> */}
        </section>
    )
}

export default Recommend