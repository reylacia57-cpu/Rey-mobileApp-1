import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Store</Text>

      <Text style={styles.text}>
        Simple React Native Product App
      </Text>

      <Button
        title="View Products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}


// PRODUCT LIST SCREEN
function ProductList({ navigation }) {
  const products = [
    {
      name: 'Laptop',
      price: '₱35,000',
      description: 'A powerful laptop for school and programming.',
    },
    {
      name: 'Smartphone',
      price: '₱15,000',
      description: 'A modern smartphone with a great camera.',
    },
    {
      name: 'Headphones',
      price: '₱2,500',
      description: 'Wireless headphones with clear sound.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.title}>Product List</Text>

      {products.map((product, index) => (
        <View style={styles.product} key={index}>
          <Text style={styles.productName}>
            {product.name}
          </Text>

          <Text style={styles.price}>
            Price: {product.price}
          </Text>

          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate('Details', {
                name: product.name,
                price: product.price,
                description: product.description,
              })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}


// PRODUCT DETAILS SCREEN
function ProductDetails({ route, navigation }) {
  const { name, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>

      <Text style={styles.productName}>
        {name}
      </Text>

      <Text style={styles.price}>
        Price: {price}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


// APP NAVIGATION
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Products"
          component={ProductList}
        />

        <Stack.Screen
          name="Details"
          component={ProductDetails}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  listContainer: {
    padding: 20,
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },

  product: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
  },

  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  price: {
    fontSize: 18,
    marginBottom: 15,
  },

  description: {
    fontSize: 17,
    marginBottom: 30,
    textAlign: 'center',
  },
});