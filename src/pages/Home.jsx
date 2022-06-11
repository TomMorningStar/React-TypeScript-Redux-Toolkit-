import React from "react";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/pizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoreId, setCategoreId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности (увел)",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoreId > 0 ? `category=${categoreId}` : "";
    const search = searchValue ? `&search=${searchValue}` : ``;
    fetch(
      `https://629f7c48461f8173e4eaace6.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    //  window.scrollTo(0, 0);
  }, [categoreId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoreId}
          onChangeCategory={(id) => setCategoreId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
