import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 10}}>
                <View style={{flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{backgroundColor: 'green'}}>1</Text>
                </View>
                <View style={{flex: 8, flexDirection: 'row'}}>
                    <View style={{flex: 2, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                    <View style={{flex: 8, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                            <Text>3</Text>
                        </View>
                        <View style={{flexDirection:'row',flex:5}}>
                            <View style={{flex:5,backgroundColor:'silver',justifyContent:'center',alignItems:'center'}}>
                                <Text>4</Text>
                            </View>
                            <View style={{flex:5,backgroundColor:'whitesmoke',justifyContent:'center',alignItems:'center'}}>
                                <Text>5</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </View>

        );
    }
}
const styles = StyleSheet.create({
        content: {},
    },
);
