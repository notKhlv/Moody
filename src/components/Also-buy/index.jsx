import { Fragment, useState, useEffect, useContext } from "react";
import Container from "../container";
import "./also-buy.scss";
import Cart from "../Cart";
import Product from "../../images/product3-0.png";
import { Flex } from "antd";
import Img from "../image";
import ArrowLeft from "../../images/arrow-left.svg";
import ArrowRight from "../../images/arrow-right.svg";
import Title from "../Title";
import { ContextAPI } from "../../context/API";
import axios from "axios";

const AlsoBuy = ({ className }) => {
  className = `Also-buy ${className}`;

  const [Products, setProducts] = useState([]);

  const { API } = useContext(ContextAPI);

  useEffect(() => {
    try {
      axios
        .get(API + "/products/")
        .then((response) => {
          setProducts(response.data?.slice(response.data.length - 4));
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      setProducts(null);
      console.warn(error?.message);
    }
  }, []);

  // console.log(Products);

  const productItem = Products.map((item, index) => {
    return (
      <Fragment key={index}>
        <Cart         
          type={"product"}
          vertical         
          href={`/catalog/products/` + item.id} {...item}
        />
      </Fragment>
    );
  });

  return (
    <Fragment>
      <section className={className}>
        <Container className={`Also-buy__container`}>
          <Title level={"h2"}>Also You May Like</Title>
          <Flex gap={24} align={"center"}>
            {productItem}
          </Flex>

          <Flex className="Also-buy__arrows" justify={"space-between"}>
            <Img src={ArrowLeft} alt={`Arrow`} />
            <Img src={ArrowRight} alt={`Arrow`} />
          </Flex>
        </Container>
      </section>
    </Fragment>
  );
};

export default AlsoBuy;
