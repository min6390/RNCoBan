import React from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 10, flexDirection: 'row'}}>
                <View style={{flex: 2, backgroundColor: 'pink'}}>
                    <View style={{flex: 5, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 5, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
                </View>
                <View style={{flex: 8, backgroundColor: 'red'}}>
                    <View style={{flex: 8, backgroundColor: 'pink'}}>
                        <View
                            style={{flex: 5, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>3</Text>
                        </View>
                        <View style={{
                            flex: 5,
                            backgroundColor: 'yellow',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>4</Text>
                        </View>
                    </View>
                    <View style={{flex: 8, backgroundColor: 'red', flexDirection: 'row'}}>
                        <View style={{flex: 6, backgroundColor: 'blue'}}>
                            <View style={{
                                flex: 5,
                                backgroundColor: 'silver',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>5</Text>
                            </View>
                            <View style={{
                                flex: 5,
                                backgroundColor: 'whitesmoke',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>6</Text>
                            </View>
                        </View>
                        <View style={{flex: 4, backgroundColor: 'red', }}>
                            <View style={{
                                flex: 5,
                                backgroundColor: '#00ffff',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>7</Text>
                            </View>
                            <View style={{
                                flex: 5,
                                backgroundColor: 'antiquewhite',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>8</Text>
                            </View>
                            <View style={{
                                flex: 5,
                                backgroundColor: 'bisque',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>9</Text>
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
