import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { DATA } from '../../utils/data';
import MyHeader from './components/Header'
import { Item } from './components/Item';

const ProductList = () => {
    return(
        <View style={{marginHorizontal: 24}}>
            <FlatList
                numColumns={2}
                data={DATA}
                renderItem ={(item) => <Item {...item.item}/>}
                keyExtractor = {item => item.id}
                ListHeaderComponent={
                    <MyHeader/>
                }
            ></FlatList>
        </View>
    );
};

export default ProductList;