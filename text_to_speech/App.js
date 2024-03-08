import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
    const [textToSpeech, setTextToSpeech] = useState('');

    const speak = async () => {
        try {
            await Speech.speak(textToSpeech, {
                language: 'fi',
            });
        } catch (error) {
            console.error("Speaking no work:", error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write something"
                onChangeText={setTextToSpeech}
                value={textToSpeech}
            />
            <Button title="Puhu" onPress={speak} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});