// TODO this is temporarily being used to represent the ExerciseInList component, will need to fix that (ex: active timer, sets, etc)
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "@/constants/styles"

// Type Definitions
interface Set {
  id: number;
  previous: string;
  lbs: string;
  reps: string;
}

interface IconButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

interface WorkoutExerciseProps {
  exerciseName?: string;
  initialSets?: number;
  restTimeMinutes?: number;
  onNotesChange?: (notes: string) => void;
  initialNotes?: string;
}

const SCREEN_WIDTH = Dimensions.get('window').width; // added

// Icon Button Component
const IconButton: React.FC<IconButtonProps> = ({ onPress, children, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
    {children}
  </TouchableOpacity>
);

// Main Workout Exercise Component
const ExerciseInList: React.FC<WorkoutExerciseProps> = ({
  exerciseName,
  initialSets = 3,
  restTimeMinutes = 1,
  onNotesChange,
  initialNotes = ""
}) => {
  const [sets, setSets] = useState<Set[]>([
    { id: 1, previous: "200 lb x 10", lbs: "200", reps: "10" },
    { id: 2, previous: "200 lb x 10", lbs: "", reps: "" },
    { id: 3, previous: "200 lb x 10", lbs: "", reps: "" }
  ]);

  const [notes, setNotes] = useState<string>(initialNotes);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(restTimeMinutes * 60);
  const [isSuperset, setIsSuperset] = useState<boolean>(false);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeRemaining]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = (): void => {
    setTimeRemaining(restTimeMinutes * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = (): void => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (): void => {
    setIsTimerRunning(false);
    setTimeRemaining(restTimeMinutes * 60);
  };

  const updateSet = (setId: number, field: keyof Omit<Set, 'id' | 'previous'>, value: string): void => {
    setSets(prevSets =>
      prevSets.map(set =>
        set.id === setId ? { ...set, [field]: value } : set
      )
    );
  };

  const addSet = (): void => {
    const newSetId = Math.max(...sets.map(s => s.id)) + 1;
    setSets(prevSets => [...prevSets, {
      id: newSetId,
      previous: "———",
      lbs: "",
      reps: ""
    }]);
  };

  const removeSet = (setId: number) => { // added
    setSets(prevSets => prevSets.filter(set => set.id !== setId));
  };

  const handleNotesChange = (value: string): void => {
    setNotes(value);
    if (onNotesChange) {
      onNotesChange(value);
    }
  };

  const getPreviousDisplay = (set: Set) => {
    if (set.lbs && set.reps) {
      return `${set.lbs} x ${set.reps}`;
    }
    return "———";
  };

  const SwipeableSetRow = ({ set, children }: { set: Set, children: React.ReactNode }) => { // added
    const translateX = React.useRef(new Animated.Value(0)).current;
    const [showDelete, setShowDelete] = useState(false);

    const panResponder = React.useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 10,
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dx > 0) { // Only allow right swipe
            translateX.setValue(Math.min(gestureState.dx, 80));
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dx > 60) {
            Animated.timing(translateX, {
              toValue: 80,
              duration: 150,
              useNativeDriver: true,
            }).start(() => setShowDelete(true));
          } else {
            Animated.timing(translateX, {
              toValue: 0,
              duration: 150,
              useNativeDriver: true,
            }).start(() => setShowDelete(false));
          }
        },
        onPanResponderTerminate: () => {
          Animated.timing(translateX, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }).start(() => setShowDelete(false));
        },
      })
    ).current;

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showDelete && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => removeSet(set.id)}
            activeOpacity={0.7}
          >
            <AntDesign name="delete" size={22} color="#fff" />
          </TouchableOpacity>
        )}
        <Animated.View
          style={{
            flex: 1,
            transform: [{ translateX }],
            zIndex: 1,
          }}
          {...panResponder.panHandlers}
        >
          {children}
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.exerciseName}>{exerciseName}</Text>
        <TouchableOpacity style={styles.blueIconButton} onPress={() => {}}>
          <AntDesign name="ellipsis1" size={20} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Notes */}
      <View style={styles.notesContainer}>
        <TextInput
          style={styles.notesInput}
          placeholder="Add notes here..."
          placeholderTextColor="#9CA3AF"
          value={notes}
          onChangeText={handleNotesChange}
        />
      </View>

      {/* Rest Timer */}
      <View style={styles.timerContainer}>
        <TouchableOpacity style={styles.restTimerButton} onPress={() => {}}>
          <Text style={styles.restTimerText}>Rest timer: {restTimeMinutes} minutes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsSuperset(prev => !prev)}
          style={[
            styles.supersetButton,
            isSuperset && styles.supersetButtonActive
          ]}
        >
          <Text style={[
            styles.supersetButtonText,
            isSuperset && styles.supersetButtonTextActive
          ]}>
            {isSuperset ? 'Superset' : 'Superset'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sets Table Header */}
      <View style={styles.tableHeader}>
        <View style={styles.setColumn}>
          <Text style={styles.headerText}>Set</Text>
        </View>
        <View style={styles.previousColumn}>
          <Text style={styles.headerText}>Previous</Text>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.headerText}>lbs</Text>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.headerText}>Reps</Text>
        </View>
      </View>

      {/* Sets */}
      {/* TODO: fix the weird way the delete button appears */}
      {sets.map((set) => (
        <SwipeableSetRow set={set} key={set.id}> {/* changed */}
          <View style={styles.setRow}>
            <View style={styles.setColumn}>
              <View style={styles.setNumber}>
                <Text style={styles.setNumberText}>{set.id}</Text>
              </View>
            </View>

            <View style={styles.previousColumn}>
              <Text
                style={
                  set.lbs && set.reps
                    ? styles.previousTextFilled
                    : styles.previousTextDash
                }
              >
                {getPreviousDisplay(set)}
              </Text>
            </View>

            <View style={styles.inputColumn}>
              <TextInput
                style={styles.input}
                value={set.lbs}
                onChangeText={(value: string) => updateSet(set.id, 'lbs', value)}
                placeholder="0"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                textAlign="center"
              />
            </View>

            <View style={styles.inputColumn}>
              <TextInput
                style={styles.input}
                value={set.reps}
                onChangeText={(value: string) => updateSet(set.id, 'reps', value)}
                placeholder="0"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                textAlign="center"
              />
            </View>
          </View>
        </SwipeableSetRow>
      ))}

      {/* Add Set Button */}
      <TouchableOpacity onPress={addSet} style={styles.addSetButton}>
        <Text style={styles.addSetButtonText}>+ Add Set</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
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
  restTimerButton: {
    marginLeft: 12,
  },
  restTimerText: {
    fontSize: 14,
    color: '#6CA2FE',
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
    fontFamily: 'InterBold',
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
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 8,
  },
  addSetButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  templateContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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
  previousTextDash: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: Colors.darkGrey,
    textAlign: 'center', 
  },
  previousTextFilled: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.darkGrey,
    textAlign: 'center',
  },
  blueIconButton: {
    backgroundColor: Colors.moovitBlue,
    borderRadius: 6,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: { // added
    width: 48,
    height: 48,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    zIndex: 2,
  },
});

export default ExerciseInList;