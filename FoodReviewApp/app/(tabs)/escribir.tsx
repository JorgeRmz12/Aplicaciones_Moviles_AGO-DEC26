import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EscribirScreen() {
  const router = useRouter();
  const [placeName, setPlaceName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handlePublish = () => {
    if (!placeName || !comment) {
      Alert.alert('Incompleto', 'Escribe el nombre del puesto y tu opinión.');
      return;
    }
    Alert.alert('¡Publicado!', 'Tu reseña se ha guardado con éxito.', [
      { text: 'Ir a Inicio', onPress: () => router.push('/') }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>FoodReviewApp</Text></View>
      <View style={styles.subHeader}><Text style={styles.subTitle}>✍️ Publicar Reseña</Text></View>

      <ScrollView style={styles.body}>
        <Text style={styles.label}>Nombre del Puesto o Local *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Tacos El Paisa"
          value={placeName}
          onChangeText={setPlaceName}
        />

        <Text style={styles.label}>Calificación</Text>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Text style={{ fontSize: 28 }}>{star <= rating ? '⭐' : '🔘'}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Tu Opinión / Reseña *</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          multiline
          placeholder="¿Qué recomendación o detalle darías?"
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handlePublish}>
          <Text style={styles.submitBtnText}>Publicar Reseña</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F5F7' },
  header: { backgroundColor: '#E74C3C', padding: 12, alignItems: 'center' },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  subHeader: { backgroundColor: '#FFF', padding: 10, borderBottomWidth: 1, borderColor: '#DDD' },
  subTitle: { fontSize: 16, fontWeight: 'bold' },
  body: { flex: 1, padding: 16 },
  label: { fontSize: 13, fontWeight: 'bold', color: '#333', marginTop: 12, marginBottom: 6 },
  input: { backgroundColor: '#FFF', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#CCC' },
  starsRow: { flexDirection: 'row', gap: 10, marginVertical: 4 },
  submitBtn: { backgroundColor: '#27AE60', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  submitBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
});