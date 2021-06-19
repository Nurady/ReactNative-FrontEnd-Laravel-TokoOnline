import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import { ItemListFood  } from '..'; Salah cara manggil, jadikan pelajaran
import ItemListFood from '../ItemListFood';
// import { Food1Dummy, Food2Dummy, Food3Dummy, Food4Dummy } from '../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByType } from '../../../redux/action';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
          backgroundColor: '#020202', 
          height: 3,
          width:'15%', 
          marginLeft: '3%' }}
      style={{ 
          backgroundColor: 'white', 
          elevation: 0, 
          shadowOpacity: 0,
          borderBottomColor: '#F2F2f2',
          borderBottomWidth: 1,
        }}
      tabStyle={{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontSize: 14, color: focused ? '#020202' : '#8D92A3' }}>
          {route.title}
        </Text>
      )}
    />
  );
const NewTaste = () => {
  const navigation = useNavigation();
  const {newTaste} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('new_food'));
  }, []);

  return (
    <View style={styles.page}>
      {
        newTaste.map((item) => {
          return (
              <ItemListFood
                key={item.id}
                image={{uri: item.picturePath}} 
                onPress={() => navigation.navigate('FoodDetail', item)}
                type="product"
                price={item.price}
                name={item.name}
                rating={item.rate}
              />
          )
        })
      }
    </View>
  )
}

const Popular = () => {
  const navigation = useNavigation();
  const {popular} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('popular'));
  }, []);

  return (
    <View style={styles.page}>
      {
        popular.map((item) => {
          return (
              <ItemListFood
                key={item.id}
                image={{uri: item.picturePath}} 
                onPress={() => navigation.navigate('FoodDetail', item)}
                type="product"
                price={item.price}
                name={item.name}
                rating={item.rate}
              />
          )
        })
      }
    </View>
  )
};

const Recommended = () => {
  const navigation = useNavigation();
  const {recommended} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('recommended'));
  }, []);

  return (
    <View style={styles.page}>
      {
        recommended.map((item) => {
          return (
              <ItemListFood
                key={item.id}
                image={{uri: item.picturePath}} 
                onPress={() => navigation.navigate('FoodDetail', item)}
                type="product"
                price={item.price}
                name={item.name}
                rating={item.rate}
              />
          )
        })
      }
    </View>
  )
};

const initialLayout={ width: Dimensions.get('window').width }

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Product' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTaste,
        2: Popular,
        3: Recommended,
      });
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{backgroundColor: 'white'}}
        />
    );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  page:{
    paddingTop: 8,
    paddingHorizontal: 24,
  }
});
