import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 10}}>
                <View style={{flex: 2.5, backgroundColor: 'pink', flexDirection: 'row'}}>
                    <View style={{flex: 3, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 7, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                </View>
                <View style={{flex: 5, backgroundColor: 'green', flexDirection: 'row'}}>
                    <View style={{flex: 7, backgroundColor: 'green'}}>
                        <View style={{flex:1, backgroundColor: 'silver', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>3</Text>
                        </View>
                        <View style={{flex:1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>4</Text>
                        </View>
                    </View>
                    <View style={{flex: 3, backgroundColor: 'whitesmoke',justifyContent: 'center', alignItems: 'center'}}>
                        <Text>5</Text>
                    </View>
                </View>
                <View style={{flex: 2.5, backgroundColor: 'blue',flexDirection:'row'}}>
                    <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>5</Text>
                    </View>
                    <View style={{flex:1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>6</Text>
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
