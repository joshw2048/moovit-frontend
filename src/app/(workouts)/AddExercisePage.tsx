import React, { useRef } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ExerciseList from "@/features/exercises/ExerciseList";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AddExercisePage: React.FC = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const exerciseListRef = useRef<any>(null);

    const scrollToSection = (letter: string) => {
        if (exerciseListRef.current) {
            const sectionY = exerciseListRef.current.getSectionPosition(letter);
            if (sectionY !== undefined) {
                scrollViewRef.current?.scrollTo({
                    y: sectionY,
                    animated: true,
                });
            }
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView ref={scrollViewRef} style={styles.scrollView}>
                <ExerciseList ref={exerciseListRef} />
            </ScrollView>
            
            {/* Alphabet Sidebar - Fixed to viewport */}
            <View style={styles.alphabetSidebar}>
                <View style={styles.alphabetContainer}>
                    {ALPHABET.map((letter) => (
                        <TouchableOpacity 
                            key={letter} 
                            style={styles.letterButton}
                            onPress={() => scrollToSection(letter)}
                        >
                            <Text style={styles.letterText}>{letter}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    scrollView: {
        flex: 1,
    },
    alphabetSidebar: {
        position: 'absolute',
        right: 4,
        top: 0,
        bottom: 0,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    alphabetContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    letterButton: {
        paddingVertical: 2,
    },
    letterText: {
        color: "#3386FF",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
    },
});

export default AddExercisePage;