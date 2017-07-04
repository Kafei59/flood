/**
 * Created by pierrick on 03/07/2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

/**
 * Tile view component
 */
class Tile extends Component {
    render() {
        return (
            <View style={styles.tile}>
                <View style={styles.tileHeader}>
                    <View style={{flex:1, paddingLeft: 10}}>
                        <Image source={require('../../image/battery.png')} style={{width: 18, height: 18}} />
                    </View>

                    <View style={{flex: 6}}>
                        <Text style={styles.tileHeaderText}>Utilisation de la batterie</Text>
                    </View>
                </View>

                <View style={styles.tileBody}>
                    <View style={styles.tileBodyLine}>
                        <View style={{flex:1, paddingLeft: 10}}>
                            <Image source={require('../../image/phone.png')} style={{width:14, height:14}}/>
                        </View>
                        <Text style={styles.tileBodyText}>Appel</Text>
                        <Text style={styles.tileBodyText}>4h21 mins</Text>
                    </View>

                    <View style={styles.tileBodyLine}>
                        <View style={{flex:1, paddingLeft: 10}}>
                            <Image source={require('../../image/play.png')} style={{width:14, height:14}}/>
                        </View>
                        <Text style={styles.tileBodyText}>Netflix</Text>
                        <Text style={styles.tileBodyText}>3h33 mins</Text>
                    </View>

                    <View style={styles.tileBodyLine}>
                        <View style={{flex:1, paddingLeft: 10}}>
                            <Image source={require('../../image/connection.png')} style={{width:14, height:14}}/>
                        </View>
                        <Text style={styles.tileBodyText}>Utilisation Wifi</Text>
                        <Text style={styles.tileBodyText}>2h45 mins</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        height: 140,
        width: Dimensions.get('window').width - 20,
        margin: 10,
        backgroundColor: '#F5FCFF',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#F5FCFF'
    },
    tileHeader: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingTop: 10,
    },
    tileHeaderText: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 15,
        fontWeight: '600',
        color: 'grey'
    },
    tileBody: {
        flex: 3,
        paddingTop: 20,
    },
    tileBodyLine: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    tileBodyText: {
        fontFamily: 'HelveticaNeue-Light',
        flex: 2,
        fontSize: 10,
        color: 'grey'
    }
});

export default Tile;