import React, {Component, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

class Summarize extends Component {

    constructor(props) {
        super(props);
        this.state = {summary: {}};
        // this.summary = this.summary.bind(this);
    }

    // summary = () => {
    //     return <Text style={styles.text}> this.state.summary['summary'] </Text>;
    // };

    render() {
        const concepts_keys = Object.keys(this.state.summary["concepts"])
        const concepts_values = Object.values(this.state.summary["concepts"])
        return (
            <View style={styles.container}>
                <div>
                    <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
                </div>
                <View style={styles.border}>
                    <View>
                        <Text style={styles.title}>
                            Summary:
                        </Text>
                    </View>
                    <Text fontSize={'1px'}>
                        {"\n"}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.summary['summary']}
                        
                    </Text>
                </View>
                <View style={styles.border}>
                    <View>
                        <Text style={styles.title}>
                            Key Concepts:
                        </Text>
                    </View>
                    <Text style={styles.number}>
                        1. {concepts_keys[0]}
                    </Text>
                    <Text style={styles.text}>
                        {concepts_values[0]}
                    </Text>
                    <Text style={styles.number}>
                        2. {concepts_keys[1]}
                    </Text>
                    <Text style={styles.text}>
                        {concepts_values[1]}
                    </Text>
                    <Text style={styles.number}>
                        3. {concepts_keys[2]}
                    </Text>
                    <Text style={styles.text}>
                        {concepts_values[2]}
                    </Text>

                </View>
                <View style={styles.border}>
                    <View>
                        <Text style={styles.title}>
                            Concept Images:
                        </Text>
                    </View>
                    <Text style={styles.number}>
                        1. Metaphysics
                    </Text>
                    <Text style={styles.text}>
                        https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiuc.org%2Fthe-value-of-metaphysics-and-
                        of-metaphysical-conversation%2F&psig=AOvVaw0nGpK6RJ0YQ8M1LK_Zf2Em&ust=1636388994933000&source
                        =images&cd=vfe&ved=0CAsQjRxqFwoTCJj6mZjWhvQCFQAAAAAdAAAAABAD
                    </Text>
                    <Text style={styles.number}>
                        2. Mind
                    </Text>
                    <Text style={styles.text}>
                        https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMind&ps
                        ig=AOvVaw3dIy57WbWUvU1maJESMdd2&ust=1636389033382000&source=images&cd=vfe&ved=0CAsQ
                        jRxqFwoTCJjf6arWhvQCFQAAAAAdAAAAABAD
                    </Text>
                    <Text style={styles.number}>
                        3. Ontology
                    </Text>
                    <Text style={styles.text}>
                        https://www.google.com/url?sa=i&url=https%3A%2F%2Friffyn.com%2Fblog%2Fthe-importance
                        -of-controlled-ontology&psig=AOvVaw3_RWwRmaatBAbC4pqmCoFv&ust=1636389051865000&source=
                        images&cd=vfe&ved=0CAsQjRxqFwoTCMigtLPWhvQCFQAAAAAdAAAAABAD
                    </Text>
                </View>
            </View>
        );
    }
}
export default Summarize;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 200,
        paddingHorizontal: 100,
    },

    border: {
        border: '1px solid #707070',
        borderRadius: 25,
        padding: 20,
        margin: 10,
    },
    title: {
        fontSize: '28px',
        color: '#151865'
    },
    number: {
        fontSize: '25px',
        color: '#151865'
    },
    text: {
        fontSize: '17px'
    }
});
