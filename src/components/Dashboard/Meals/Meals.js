import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import Header from '../../layout/Header';
const Meals = () => {
  return (
    <Fragment>
      <Header/>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;