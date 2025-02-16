import {Fragment, useState, useEffect, useContext} from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/container";
import {Col, Flex, Image, Row, Select, Typography} from "antd";
import Img from "../components/image";
import Product3_1 from "../images/product3-0.png";
import Product3_2 from "../images/product3-1.png";
import Product3_3 from "../images/product3-2.png";
import Title from "../components/Title";
import {FaLocationDot} from "react-icons/fa6";
import AlsoBuy from "../components/Also-buy";
import {default as Btn} from "../components/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ContextAPI } from "../context/API";
import { useCart } from "react-use-cart";

const Product = () => {
    const [Product, setProduct] = useState(null);
    const [ProductSize, setProductSize] = useState(null)
    const {id} = useParams();
    const {API} = useContext(ContextAPI)
    const {addItem} = useCart()

    useEffect(() => {
        try{
            axios.get(API + "/products/" + id).then(response => {
                setProduct(response.data)
            }).catch(error => {
                console.error(error);
            })
        } catch (error) {
            setProduct(null);
            console.warn(error?.message);
        }
    }, []);

    const handleToAdd = () => {
        if (ProductSize){
            window.alert(`Product ${Product?.title} added to busket`);
            addItem({...Product, size: ProductSize });
        }else{
            window.confirm("Do you want something buy?");
        }
            
    }

  return(
      <Fragment>
          <Breadcrumb current={Product?.title} />

          <section className="Product">
              <Container>
                  <Row className={`Product__row`}>
                      <Col span={16} className="Product__data">
                          <Row justify={"space-between"} className={`Product__data-images`}>
                              <Col span={11}>
                                  <Img className={`Product__imageholder`} src={Product?.image} alt={`Checked Duvet Cover Set`} />
                              </Col>

                              <Col span={11}>
                                  <Img className={`Product__imageholder`} src={Product?.image} alt={`Checked Duvet Cover Set`} />
                              </Col>

                              <Col span={24}>
                                  <Img className={`Product__imageholder`} src={Product?.image} alt={`Checked Duvet Cover Set`} />
                              </Col>
                          </Row>

                          <Row>
                              <Col span={24} className={`Product__data-desc`}>
                                  <Title bodyText={"p"} className={`Product__data-desc__title`}>
                                      Conscious
                                  </Title>

                                  <Title level={"h3"} className={`Product__data-desc__text`}>
                                      Twin duvet cover set in soft, woven fabric made from a Tencel™lyocell and cotton blend with a printed pattern. One pillowcase. Thread count 144.
                                  </Title>

                                  <ul className={'list-none Product__data-desc__list '}>
                                      <li className={`Product__data-desc__item`}>
                                          <Flex>
                                              Composition — <Title level={"h3"}> Cotton 50%, Lyocell 50%</Title>
                                          </Flex>
                                      </li>

                                      <li className={`Product__data-desc__item`}>
                                          <Flex>
                                              Art. No. — <Title level={"h3"}> 0643448004</Title>
                                          </Flex>
                                      </li>
                                  </ul>

                              </Col>
                          </Row>
                      </Col>

                      <Col span={7} className="Product__content">
                          <Title level={"h2"}>{Product?.title}</Title>

                          <Typography.Title level={3}>{Product?.price}</Typography.Title>

                          <Typography.Title level={3} className={`Product__content-desc`}>
                              {Product?.description}
                          </Typography.Title>

                          <Image src={Product?.image} height={72} alt={`Checked Duvet Cover Set`} className={`Product__content-image`} />

                          <Title level={"h3"} className={`Product__content-location`}> <FaLocationDot /> Not available in stores</Title>

                          <Select
                              options={Product?.sizes}
                              onChange={value => setProductSize(value)}
                              defaultValue={`select size`}
                              className={`Product__content-select`}
                          />

                          <div className="Product__content-buttons">
                              <Btn primary onClick={handleToAdd}>Add to shopping bag</Btn>
                          </div>

                      </Col>
                  </Row>
              </Container>
          </section>

          <AlsoBuy />
      </Fragment>
  )
}

export default Product;