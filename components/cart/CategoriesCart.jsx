import React from "react";
import { Card, Paragraph } from "react-native-paper";

const CategoriesCart = ({ meal }) => {
  return (
    <Card key={meal.idCategory}>
      <Card.Cover source={{uri: meal.strCategoryThumb}} />
      <Card.Title title={meal.strCategory} />
      <Card.Content>
        <Paragraph>{meal.strCategoryDescription}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default CategoriesCart;
