import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Summarize() {
    // state = {
    //     summary : '',
    // };
        return (
        <View style={styles.container}>
          <div>
          <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
        </div>
        <View style={styles.border}>
              <View >
                <Text style={styles.title}>
                    Summary:
                </Text>
              </View>
              <Text fontSize={'1px'}>
                {"\n"}
              </Text>
            <Text style={styles.text}>

                The mind–body problem concerns the explanation of the relationship that exists between minds, or mental processes, and bodily states or processes.[1] The main aim of philosophers working in this area is to determine the nature of the mind and mental states/processes, and how—or even if—minds are affected by and can affect the body.
                Perceptual experiences depend on stimuli that arrive at our various sensory organs from the external world, and these stimuli cause changes in our mental states, ultimately causing us to feel a sensation, which may be pleasant or unpleasant. Someone's desire for a slice of pizza, for example, will tend to cause that person to move his or her body in a specific manner and in a specific direction to obtain what he or she wants. The question, then, is how it can be possible for conscious experiences to arise out of a lump of gray matter endowed with nothing but electrochemical properties.[15]
                A related problem is how someone's propositional attitudes (e.g. beliefs and desires) cause that individual's neurons to fire and muscles to contract. These comprise some of the puzzles that have confronted epistemologists and philosophers of mind from the time of René Descartes.[4]'
            </Text>
          </View>
          <View style={styles.border}>
              <View >
                <Text style={styles.title}>
                    Key Concepts:
                </Text>
              </View>
              <Text style={styles.number}>
                    1. Metaphysics
                </Text>
            <Text style={styles.text}>
                Metaphysics is the branch of philosophy that studies the first principles of being, identity and change, space and time, causality, necessity and possibility.
            </Text>
            <Text style={styles.number}>
                    2. Mind
                </Text>
                <Text style={styles.text}>
                    The mind is the set of faculties responsible for mental phenomena.

            </Text>
            <Text style={styles.number}>
                    3. Ontology
                </Text>
                <Text style={styles.text}>
                    Ontology is the branch of philosophy that studies concepts such as existence, being, becoming, and reality.
            </Text>

          </View>
          <View style={styles.border}>
              <View >
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
