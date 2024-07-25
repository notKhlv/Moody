import { Button, Flex, Select } from "antd";
import React from "react";
import Img from "../components/image";
import Title from "../components/Title";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const ProductItem = ({
  image,
  title,
  price,
  id,
  colors,
  size,
  quantity,
  onClose,
  onQuantity
}) => {
  return (
    <Flex gap={18} className={`Shopping-bag__item`}>
      <Img src={image} alt={title} className={`Shopping-bag__image`} />

      <div className="Shopping-bag__item-content">
        <Title bodyText={"p"} className={`Shopping-bag__item-title`}>
          {title}
        </Title>

        <Title level={"h3"} className={`Shopping-bag__item-price`}>
          {price} $
        </Title>

        <ol className={`list-none Shopping-bag__item-list`}>
          <li className={`Shopping-bag__item-list__item`}>Art No. {id}</li>
          <li className={`Shopping-bag__item-list__item`}>
            Color: {colors?.join(", ")}
          </li>
          <li className={`Shopping-bag__item-list__item`}>Size: {size}</li>
          <li className={`Shopping-bag__item-list__item`}>
            Total: {price * quantity}
          </li>
        </ol>

        <Flex gap={6}>
          <Button icon={<IoHeartOutline />} />

          <Select
            defaultValue={"1"}
            options={[
              { value: 1, label: 1,},
              { value: 2, label: 2 },
              { value: 3, label: 3 },
              { value: 4, label: 4 },
              { value: 5, label: 5 },
              { value: 6, label: 6 },
            ]}
            onChange={onQuantity}
          />
        </Flex>
        <Button
          onClick={onClose}
          icon={<IoMdClose />}
          className={`Shopping-bag__item-close`}
        />
      </div>
    </Flex>
  );
};

export default ProductItem;
