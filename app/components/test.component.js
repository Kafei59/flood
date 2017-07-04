import Animation from 'lottie-react-native';

/**
 * Created by pierrick on 03/07/2017.
 */

import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    ListView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Animated,
} from 'react-native';

class Greetings extends Component {
    render() {
        return (
            <Text>Yo {this.props.name}!</Text>
        );
    }
}

class BlinkText extends Component {
    constructor(props) {
        super(props);

        this.state = {showText: true};

        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';

        return (
            <Text>{display}</Text>
        );
    }
}

class RenderImage extends Component {
    render() {
        return (
            <Image
                source=""
                resizeMode="cover"
                style={{height:200}}
            />
        );
    }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);

        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Entrez votre phrase à traduire"
                    onChangeText={(text) => this.setState({text})}
                />

                <Text>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

class BasicFlatList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

class MovieApi extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoading: true};
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );
    }
}

class CustomAnimation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.animation) {
            setTimeout(() => { this.initAnimation(); }, 100);
        } else {
            this.animation.play();
        }
    }

    render() {
        return (
            <Animation
                ref={animation => { this.animation = animation; }}
                style={{
                    width: 200,
                    height: 200,
                }}
                source={require('../../animation/watermelon.json')}
                loop
            />
        );
    }
}

class TestRender extends Component {
    render() {
        return (
            <View>
                {
                    /*
                        ------------------------------
                        Useful code to test components
                        ------------------------------
                    */
                }

                <BlinkText text="ça clignote ptit fdp"/>

                <RenderImage/>
                <PizzaTranslator/>
                <BasicFlatList/>
                <MovieApi/>
                <Button onPress={() => Alert.alert('Oh ! Doucement là !')} title="Chut, je dors"/>
                <CustomAnimation/>

                <View style={{height: 300}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
            </View>
        );
    }
}
export default {
    Greetings,
    BlinkText,
    RenderImage,
    PizzaTranslator,
    BasicFlatList,
    MovieApi,
    CustomAnimation
};
