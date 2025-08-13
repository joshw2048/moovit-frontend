import React, { useRef, forwardRef, useImperativeHandle } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const exercises = [
    {
        section: "RECENT",
        data: [
            { name: "Barbell Squat", bodyPart: "Legs", reps: "400 × 10" },
            { name: "Barbell Squat", bodyPart: "Legs", reps: "400 × 10" },
            { name: "Barbell Squat", bodyPart: "Legs", reps: "400 × 10" },
        ],
    },
    {
        section: "A",
        data: [
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
            { name: "Barbell Squat", bodyPart: "Legs" },
        ],
    },
    // Add more sections as needed
    {
        section: "B",
        data: [
            { name: "Bench Press", bodyPart: "Chest" },
            { name: "Bicep Curls", bodyPart: "Arms" },
        ],
    },
];

const ExerciseList = forwardRef<any, {}>((props, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const sectionRefs = useRef<{ [key: string]: number }>({});

    useImperativeHandle(ref, () => ({
        getSectionPosition: (letter: string) => {
            return sectionRefs.current[letter];
        }
    }));

    const handleSectionLayout = (section: string, event: any) => {
        sectionRefs.current[section] = event.nativeEvent.layout.y;
    };

    return (
        <View style={styles.pageContainer}>
            <View style={styles.contentRow}>
                {/* Main Content */}
                <View style={styles.mainContent}>
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Search"
                            placeholderTextColor="#A0A0A0"
                            editable={false}
                        />
                        <View style={styles.filterRow}>
                            <TouchableOpacity style={styles.filterButton}>
                                <Text style={styles.filterButtonText}>Body Part</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterButton}>
                                <Text style={styles.filterButtonText}>Equipment</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add Custom Exercise</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Exercise List */}
                    <View style={styles.exerciseList}>
                        {exercises.map((section) => (
                            <View 
                                key={section.section}
                                onLayout={(event) => handleSectionLayout(section.section, event)}
                            >
                                <View style={styles.sectionHeaderRow}>
                                    <Text style={styles.sectionHeaderText}>{section.section}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
                                {section.data.map((item, idx) => (
                                    <View key={idx} style={styles.exerciseRow}>
                                        <View style={styles.exerciseImagePlaceholder}>
                                            <Text style={styles.imageText}>some{"\n"}image</Text>
                                        </View>
                                        <View style={styles.exerciseInfo}>
                                            <Text style={styles.exerciseName}>{item.name}</Text>
                                            <Text style={styles.exerciseBodyPart}>{item.bodyPart}</Text>
                                        </View>
                                    </View>
                                ))}
                                <View style={styles.sectionSpacer} />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "#fff",
        margin: '7%',
    },
    contentRow: {
        flex: 1,
    },
    mainContent: {
        flex: 1,
    },
    headerContainer: {
        marginBottom: 16,
    },
    searchBar: {
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        height: 36,
        paddingHorizontal: 12,
        fontSize: 18,
        fontWeight: "700",
        color: "#A0A0A0",
        marginBottom: 10,
    },
    filterRow: {
        flexDirection: "row",
        marginBottom: 10,
        gap: 8,
    },
    filterButton: {
        flex: 1,
        backgroundColor: "#E5E5E5",
        borderRadius: 6,
        paddingVertical: 8,
        alignItems: "center",
    },
    filterButtonText: {
        fontWeight: "700",
        color: "#444",
        fontSize: 16,
    },
    addButton: {
        backgroundColor: "#A9C7FF",
        borderRadius: 6,
        paddingVertical: 10,
        alignItems: "center",
        marginBottom: 8,
    },
    addButtonText: {
        color: "#2563EB",
        fontWeight: "700",
        fontSize: 16,
    },
    exerciseList: {
        flex: 1,
    },
    sectionHeaderRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 8,
    },
    sectionHeaderText: {
        color: "#888",
        fontWeight: "700",
        fontSize: 16,
        marginRight: 8,
    },
    sectionDivider: {
        flex: 1,
        height: 1,
        backgroundColor: "#D9D9D9",
    },
    exerciseRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },
    exerciseImagePlaceholder: {
        width: 44,
        height: 44,
        backgroundColor: "#D9D9D9",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    imageText: {
        color: "#888",
        fontSize: 11,
        textAlign: "center",
    },
    exerciseInfo: {
        flex: 1,
    },
    exerciseName: {
        fontWeight: "700",
        fontSize: 16,
        color: "#111",
    },
    exerciseBodyPart: {
        color: "#888",
        fontSize: 14,
    },
    exerciseReps: {
        fontSize: 15,
        color: "#888",
        fontWeight: "500",
        marginLeft: 8,
    },
    sectionSpacer: {
        height: 8,
    },
});

export default ExerciseList;