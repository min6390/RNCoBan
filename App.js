import React, {Component} from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet, TextInput, Dimensions,
} from 'react-native';
import Box from './state/Box';
import dimensions from './src/ultils/dimensions';

// const DATA = [{id: 1, en: 'One', vn: 'Mot', isMemorized: false},
//     {id: 2, en: 'Two', vn: 'Hai', isMemorized: true},
//     {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
//     {id: 4, en: 'Four', vn: 'Bon', isMemorized: true}];
//
const windowWidth = Dimensions.get('window').width;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            togglePlus: false,
            words: [
                {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
                {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
                {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
                {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
            ],
        };
    }

    togglePlus = () => {
        this.setState({togglePlus: true});
    };
    toggleCancel = () => {
        this.setState({togglePlus: false});
    };

    render() {
        let {togglePlus} = this.state;
        return (
            <View>
                {togglePlus ?
                    <View style={styles.wordgroup}>
                        <TextInput style={styles.txView}
                                   placeholder={'English'}/>
                        <TextInput style={styles.txView}
                                   placeholder={'Vietnamese'}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={[styles.btnView, {backgroundColor: 'pink'}]}>
                                <Text>Add word</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnView, {backgroundColor: 'aqua'}]}
                                              onPress={this.toggleCancel}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <TouchableOpacity style={styles.btnPlus}
                                      onPress={this.togglePlus}>
                        <Text style={{fontSize: 30, color: 'white'}}> ....</Text>
                    </TouchableOpacity>
                }
                <View>
                    {this.state.words.map(word => {
                        return (
                            <View
                                key={word.id}
                                style={styles.wordgroup}>
                                <View style={styles.textgroup}>
                                    <Text style={styles.textEn}>{word.en}</Text>
                                    <Text style={styles.textVn}>
                                        {word.isMemorized ? '----' : word.vn}
                                    </Text>
                                </View>
                                <View style={styles.textgroup}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newWords = this.state.words.map(item => {
                                                if (item.id == word.id) {
                                                    return {...item, isMemorized: !item.isMemorized};
                                                }
                                                return item;
                                            });
                                            this.setState({words: newWords});
                                        }}
                                        style={word.isMemorized ? styles.buttonisForgot : styles.buttonisMemorized}
                                    >
                                        <Text
                                            style={styles.textisMemorized}>
                                            {word.isMemorized ? 'Forgot' : 'isMemorized'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newWords = this.state.words.filter(item => {
                                                if (item.id == word.id) {
                                                    return false;
                                                }
                                                return true;
                                            });
                                            this.setState({words: newWords});
                                        }}
                                        style={styles.buttonRemove}
                                    >
                                        <Text style={styles.textRemove}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })
                    }
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    wordgroup: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingVertical: 5,
        margin: 10,
    },
    textgroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    buttonisMemorized: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    buttonisForgot: {
        padding: 10,
        backgroundColor: '#218838',
        borderRadius: 5,
    },
    buttonRemove: {
        padding: 10,
        backgroundColor: '#E0A800',
        borderRadius: 5,
    },
    textisMemorized: {
        fontSize: 20,
        color: 'white',
    },
    textRemove: {
        fontSize: 20,
        color: 'white',
    },
    textEn: {
        color: '#45B157',
        fontSize: dimensions.getWidth() / 15,
        fontWeight: '500',
    },
    textVn: {
        color: '#DA2846',
        fontSize: dimensions.getWidth() / 15,
        fontWeight: '500',
    },
    txView: {
        padding: 10,
        height: 60,
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
    },
    btnView: {
        borderWidth: 1,
        borderRadius: 15,
        height: windowWidth / 6,
        width: windowWidth / 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnPlus: {
        height: 60,
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
