import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Number from '../Number';
import Rating from '../Rating';
/*
Type:
1. product :halaman Home
2. order-summary
3. in-progress
4. past-orders
*/
const ItemListFood = ({ image, onPress, items, rating, price, type, name, date, status }) => {
    const renderContent = () => {
      switch(type) {
        case 'product':
          // Item List Product seperti di home page
          return (
          <>
            <View style={styles.content}>
              <Text style={styles.text}>{name}</Text>
             <Number number={price} style={styles.price} />
              {/* <Text style={styles.price}>IDR {price}</Text> */}
            </View> 
            <Rating number={rating}/>
          </>
          )
        case 'order-summary':
          // Item order summary
          return (
            <>
              <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <Number number={price} style={styles.price} />
                {/* <Text style={styles.price}>IDR {price}</Text> */}
              </View> 
              <Text style={styles.items}>{items} items</Text>
            </>
          )
        case 'in-progress':
          // Item order progress
          return (
            <>
              <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>{items} items</Text> 
                    <View style={styles.dot}/>
                    <Number number={price} style={styles.price} />
                </View>
              </View> 
            </>
          )
        case 'past-orders':
          // Item Item past order
          const formatedDate = new Date(date).toDateString();
          return (
            <>
              <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>{items} items</Text> 
                    <View style={styles.dot}/>
                    <Number number={price} style={styles.price} />
                </View>
              </View> 
              <View>
                <Text style={styles.date}>{formatedDate}</Text>
                <Text style={styles.status(status)}>{status}</Text>
              </View>
            </>
          )
        default:
          // return item product
          return (
            <>
              <View style={styles.content}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.price}>IDR {price}</Text>
              </View> 
              <Rating/>
            </>
          )
      }
    }

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image}/>
          {renderContent()}
        </View>
      </TouchableOpacity>
        
    )
}

export default ItemListFood;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // paddingHorizontal: 24,
        paddingVertical: 8,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12
      },
      content: {
        flex: 1
      },
      text: {
        color: '#020202',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
      },
      price:{
        color: '#8D92A3',
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
      },
      items : {
        color: '#8D92A3',
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
      },
      date:{
        color: '#8D92A3',
        fontSize: 10,
        fontFamily: 'Poppins-Regular'
      },
      status: (status) => ({
        color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
        fontSize: 10,
        fontFamily: status === 'CANCELLED' ? 'Poppins-Regular' : 'Poppins-Medium'
      }),
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      dot: {
        width: 3,
        height: 3,
        borderRadius: 3,
        backgroundColor: '#8D92A3',
        marginHorizontal: 4
      }
});
