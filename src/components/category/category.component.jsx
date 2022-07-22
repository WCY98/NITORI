import { useState , useEffect} from "react"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import axios from 'axios'
import "./category.styles.css"

const Category = () => {
    const [ categories, setCategories ] = useState( [] );

    useEffect(() => {
        axios.get("http://localhost:8080/categories").then(({data}) => {
          console.log(data);
          setCategories(data.data)
        });
      }, []);


    return (
        <Fragment>
            <nav>
        <div className="category">
            <div className="title-category">カテゴリ</div>
            <div className="content-category">
                <ul>
                {categories.map((category) => {
                    return (
                        <li key={category.categoryId}>
                         <div className="parent-category">{ category.categoryName }</div>
                         <div className="children-category">
                            <ul>
                                {category.secondLevelCategoryVOS.map((list) => {
                                    return (
                                        <li key={list.categoryId}> {list.categoryName} </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
        </nav>
        <Outlet />
        </Fragment>
    )


}

export default Category