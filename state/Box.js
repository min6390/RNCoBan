import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    onPressInCrease = () => {
        this.setState({count: this.state.count + 1});
    };
    onPressDeCrease = () => {
        this.setState({count: this.state.count - 1});
    };
    onPressReset = () => {
        this.setState({count:0});
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        color: 'red',
                    }}>
                    Count : {this.state.count}
                </Text>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity
                        style={{backgroundColor: 'green', padding: 15}}
                        onPress={this.onPressInCrease}
                    >
                        <Text style={{color: 'black', fontWeight: 'bold'}}>InCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: 'red', padding: 15}}
                        onPress={this.onPressDeCrease}
                    >
                        <Text style={{color: 'black', fontWeight: 'bold'}}>DeCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: 'yellow', padding: 15}}
                        onPress={this.onPressReset}
                    >
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
