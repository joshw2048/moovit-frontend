// TODO this is temporarily being used to represent the ExerciseInList component, will need to fix that (ex: active timer, sets, etc)
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ExerciseInList from '@/features/exercises/ExerciseInList';

// Example usage with multiple exercises
const WorkoutTemplate: React.FC = () => {
  const handleNotesChange = (notes: string): void => {
    console.log('Notes changed:', notes);
  };

  return (
    <ScrollView style={styles.templateContainer}>
      <View style={styles.templateHeader}>
        <Text style={styles.templateTitle}>Template title</Text>
          <AntDesign name="ellipsis1" size={20} color="#9CA3AF" />
      </View>

      <View style={styles.notesSection}>
        <Text style={styles.notesLink}>Notes</Text>
      </View>

      <ExerciseInList exerciseName='Test 1'></ExerciseInList>
      <ExerciseInList exerciseName='Test 2'></ExerciseInList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3B82F6',
  },
  iconButton: {
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesContainer: {
    marginBottom: 16,
  },
  notesInput: {
    fontSize: 14,
    color: '#6B7280',
    padding: 0,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  timerText: {
    fontSize: 14,
    color: '#60A5FA',
  },
  timerControls: {
    flexDirection: 'row',
    gap: 4,
  },
  supersetButton: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  supersetButtonActive: {
    backgroundColor: '#DC2626',
  },
  supersetButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#DC2626',
  },
  supersetButtonTextActive: {
    color: '#FFFFFF',
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  setColumn: {
    width: 50,
    alignItems: 'center',
    marginRight: 12,
  },
  previousColumn: {
    flex: 1,
    alignItems: 'center',
  },
  inputColumn: {
    width: 80,
    alignItems: 'center',
    marginLeft: 8,
  },
  setNumber: {
    width: 42,
    height: 32,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setNumberText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  previousText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  input: {
    width: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
  addSetButton: {
    backgroundColor: '#9CA3AF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  addSetButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  templateContainer: {
    flex: 1,
    padding: 16,
  },
  templateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  templateTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#374151',
  },
  notesSection: {
    marginBottom: 16,
  },
  notesLink: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3B82F6',
    textDecorationLine: 'underline',
  },
  addExerciseButton: {
    backgroundColor: '#BFDBFE',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  addExerciseButtonText: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default WorkoutTemplate;