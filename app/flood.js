/**
 * Created by pierrick on 03/07/2017.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import Tile from './components/tile.component';

/**
 * Main component
 */
class Flood extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../image/CrimsonTide.jpg')}
                    resizeMode="cover"
                    style={styles.container}
                >
                    <View style={styles.backdropView}>
                        <Text style={styles.headline}>3 heures et 21 minutes</Text>
                        <Text style={styles.subline}>de temps d'utilisation</Text>
                    </View>

                    <View style={styles.tileContainer}>
                        <ScrollView>
                            <Tile/>
                            <Tile/>
                            <Tile/>
                            <Tile/>
                        </ScrollView>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
    },
    backdropView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center'
    },
    tileContainer: {
        flex: 2,
    },
    headline: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white'
    },
    subline: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'center',
        color: 'white'
    }
});

export default Flood;