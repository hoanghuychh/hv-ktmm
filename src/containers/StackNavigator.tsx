import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Inevitable from './Inevitable';
import Home from './Home';
import CNTT from './CNTT';
import ATTT from './ATTT';
import DTVT from './DTVT';
import Thanks from './Thanks';
import IntroACT from './IntroACT';
import Share from './Share';
import ChooseGift from './ChooseGift';
import ThanksIntroACT from './ThanksIntroACT';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Inevitable" component={Inevitable} />
      <Stack.Screen name="CNTT" component={CNTT} />
      <Stack.Screen name="ATTT" component={ATTT} />
      <Stack.Screen name="DTVT" component={DTVT} />
      <Stack.Screen name="Thanks" component={Thanks} />
      <Stack.Screen name="IntroACT" component={IntroACT} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="ChooseGift" component={ChooseGift} />
      <Stack.Screen name="Thanks2" component={ThanksIntroACT} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
