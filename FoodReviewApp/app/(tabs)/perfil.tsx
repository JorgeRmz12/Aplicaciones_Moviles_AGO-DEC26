import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle}>FoodReviewApp</Text></View>
      <View style={styles.subHeader}><Text style={styles.subTitle}>👤 Mi Perfil</Text></View>

      <View style={styles.body}>
        <View style={styles.avatarCircle}><Text style={{ fontSize: 40 }}>🌮</Text></View>
        <Text style={styles.username}>@CriticoUrbano</Text>
        <Text style={styles.badge}>Crítico Gastronómico ⭐</Text>

        <View style={styles.statsCard}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>12</Text>
            <Text style={styles.statLabel}>Reseñas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>5</Text>
            <Text style={styles.statLabel}>Favoritos</Text>
          </View>
        </View>
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
  body: { flex: 1, padding: 20, alignItems: 'center' },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#F0D3C9', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  username: { fontSize: 20, fontWeight: 'bold' },
  badge: { color: '#27AE60', fontWeight: '600', marginTop: 4 },
  statsCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10, padding: 16, borderWidth: 1, borderColor: '#DDD', marginTop: 20, width: '100%', justifyContent: 'space-around' },
  statBox: { alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: 'bold', color: '#E74C3C' },
  statLabel: { color: '#666', fontSize: 12 },
});