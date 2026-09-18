import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Review {
  id: string;
  name: string;
  type: string;
  zone: string;
  rating: number;
  summary: string;
  details: string;
  author: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Tacos de Canasta "Don Charly"',
    type: 'Puesto Callejero 🌮',
    zone: 'Centro',
    rating: 5,
    summary: 'Los mejores tacos de chicharrón y adobo a $10 pesos.',
    details: '📍 Ubicación: Afuera del metro/banco.\n⏰ Horario: 8:00 AM - 2:00 PM.\n💡 Recomendación: Pide la salsa verde con aguacate.',
    author: 'JuanPerez99',
  },
  {
    id: '2',
    name: 'Gorditas Doña Lupe',
    type: 'Puesto Callejero 🫓',
    zone: 'Sur',
    rating: 4,
    summary: 'Gorditas de chicharrón prensado y queso hechas a mano.',
    details: '📍 Ubicación: Puesto con lona roja frente a la farmacia.\n⏰ Horario: 9:00 AM - 5:00 PM.',
    author: 'MariaFoodie',
  },
  {
    id: '3',
    name: 'Hamburguesas "El Tizón"',
    type: 'Local Comercial 🍔',
    zone: 'Norte',
    rating: 5,
    summary: 'Hamburguesas al carbón gigantes con papas a la francesa.',
    details: '📍 Ubicación: Local cerrado con mesas al aire libre.\n⏰ Horario: 6:00 PM - 12:00 AM.',
    author: 'GastroRider',
  },
];

const CATEGORIES = ['Todos', 'Puestos Callejeros 🌮', 'Locales 🍔'];
const ZONES = ['Todas las zonas', 'Centro', 'Norte', 'Sur'];

export default function InicioScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedZone, setSelectedZone] = useState('Todas las zonas');

  const filteredReviews = INITIAL_REVIEWS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todos' ||
      (selectedCategory.includes('Callejeros') && item.type.includes('Callejero')) ||
      (selectedCategory.includes('Locales') && item.type.includes('Local'));

    const matchesZone = selectedZone === 'Todas las zonas' || item.zone === selectedZone;

    return matchesSearch && matchesCategory && matchesZone;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>FoodReviewApp</Text></View>
      <View style={styles.subHeader}><Text style={styles.subTitle}>📌 Inicio</Text></View>

      <View style={styles.body}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar tacos, puestos, hamburguesas..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={{ marginBottom: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, selectedCategory === cat && styles.chipActive]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 6 }}>
            {ZONES.map((zone) => (
              <TouchableOpacity
                key={zone}
                style={[styles.zoneChip, selectedZone === zone && styles.zoneChipActive]}
                onPress={() => setSelectedZone(zone)}
              >
                <Text style={[styles.zoneChipText, selectedZone === zone && styles.zoneChipTextActive]}>📌 {zone}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={filteredReviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isExpanded = expandedId === item.id;
            return (
              <View style={styles.card}>
                <TouchableOpacity onPress={() => setExpandedId(isExpanded ? null : item.id)}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardSub}>{item.type} • {item.zone}</Text>
                  <Text style={{ marginVertical: 4 }}>{'⭐'.repeat(item.rating)}</Text>
                  <Text style={styles.cardSummary}>{item.summary}</Text>
                  <Text style={styles.expandText}>{isExpanded ? '▲ Mostrar menos' : '▼ Ver más información'}</Text>
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.detailsBox}>
                    <Text style={styles.detailsText}>{item.details}</Text>
                    <Text style={styles.authorText}>Escrito por: @{item.author}</Text>
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
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
  searchInput: { backgroundColor: '#FFF', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#CCC', marginBottom: 10 },
  chip: { backgroundColor: '#E0E0E0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, marginRight: 8 },
  chipActive: { backgroundColor: '#E74C3C' },
  chipText: { fontSize: 12, color: '#333' },
  chipTextActive: { color: '#FFF', fontWeight: 'bold' },
  zoneChip: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#CCC', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginRight: 6 },
  zoneChipActive: { borderColor: '#2ECC71', backgroundColor: '#E8F8F5' },
  zoneChipText: { fontSize: 11, color: '#555' },
  zoneChipTextActive: { color: '#27AE60', fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', padding: 14, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#DDD' },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSub: { fontSize: 12, color: '#666' },
  cardSummary: { marginTop: 4, color: '#333' },
  expandText: { fontSize: 11, color: '#2980B9', marginTop: 6, fontWeight: 'bold' },
  detailsBox: { marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderColor: '#EEE' },
  detailsText: { fontSize: 12, color: '#444' },
  authorText: { fontSize: 10, color: '#888', marginTop: 4, fontStyle: 'italic' },
});