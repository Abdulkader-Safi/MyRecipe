import React from "react";
import { Card, Paragraph } from "react-native-paper";

const FoodCart = (meal) => {
  return (
    <Card key={meal.idMeal}>
      <Card.Cover source={{uri: meal.strMealThumb}} />
      <Card.Title title={meal.strMeal} />
      <Card.Content>
        <Paragraph>{meal.idMeal}</Paragraph>
      </Card.Content>
    </Card>
  )
}

export default FoodCart