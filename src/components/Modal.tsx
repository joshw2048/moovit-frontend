import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import MoovitText from './MoovitText';
import MoovitHeaderText from './MoovitHeading3';

/**
 * A simple modal component that displays centered title and text
 * 
 * @param {function} onClose - Function called when modal is closed
 * @param {string} title - Title text to display
 * @param {string} text - Main text content to display
 * @param {object} styles - Optional custom styles object
 */
// TODO figure out what to do with onClose and customStyles
// TODO right now, modal handles its background - consider moving this to the parent component
interface CenteredTextModalProps {
  onClose?: () => void;
  title?: string;
  text?: string;
  customStyles?: {
    // modalContainer?: object;
    // title?: object;
    // text?: object;
  };
}

const CenteredTextModal: React.FC<CenteredTextModalProps> = ({
  onClose,
  title,
  text,
  customStyles = {}
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
    //   onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View>
              {/* Close button */}
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={onClose}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                {/* TODO: turn this into an icon */}
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              
              {/* Title */}
              {title ? (
                <MoovitHeaderText style={[styles.title]}>
                  {title}
                </MoovitHeaderText>
              ) : null}
              
              {/* Main text content */}
              {text ? (
                <MoovitText>
                  {text}
                </MoovitText>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
  },
});

export default CenteredTextModal;