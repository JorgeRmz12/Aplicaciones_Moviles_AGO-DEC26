import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Alumno } from './Alumno';
import * as alumnos from './alumnos.json';
import { Navegacion } from './Navegacion';

export default function App() {

  const alumnosArray = alumnos.alumnos;

  const materias = {
    1: [
      'Álgebra',
      'Cálculo diferencial',
      'Geometría analítica',
      'Metodología de la programación',
      'Liderazgo, emprendimiento e innovación',
      'Responsabilidad social y desarrollo sustentable'
    ],

    2: [
      'Cálculo integral',
      'Mecánica traslacional y rotacional',
      'Programación básica',
      'Tópicos de álgebra',
      'Igualdad de género, diversidad sexual e inclusión',
      'Ética, transparencia y cultura de la legalidad',
      'Cultura de paz y derechos humanos'
    ],

    3: [
      'Matemáticas discretas',
      'Álgebra lineal',
      'Fundamentos de sistemas operativos',
      'Programación estructurada',
      'Laboratorio de programación estructurada',
      'Física para computación',
      'Laboratorio de física para computación'
    ],

    4: [
      'Estructura de datos',
      'Teoría de autómatas',
      'Circuitos digitales',
      'Laboratorio de circuitos digitales',
      'Teoría de la información',
      'Fundamentos de redes',
      'Laboratorio de fundamentos de redes'
    ],

    5: [
      'Bases de datos',
      'Laboratorio de bases de datos',
      'Teoría de la información aplicada',
      'Algoritmia y optimización',
      'Programación orientada a objetos',
      'Laboratorio de programación orientada a objetos',
      'Análisis numérico para programación'
    ],

    6: [
      'Programación lineal',
      'Arquitectura computacional',
      'Inglés para tecnologías',
      'Inteligencia artificial',
      'Sistemas electrónicos',
      'Aplicaciones móviles'
    ],

    7: [
      'Investigación de operaciones',
      'Cómputo en la nube',
      'Fundamentos de seguridad informática',
      'Compiladores',
      'Minería de datos',
      'Optativa III área curricular de formació',
      'Optativa IV área curricular de formación'
    ],

    8: [
      'Análisis de sistemas',
      'Investigación y desarrollo',
      'Optativa V área curricular de formación',
      'Optativa VI área curricular de formación'
    ],

    9: [
      'Cómputo de alto rendimiento',
      'Ingeniería de software',
      'Servicio social',
      'Optativa VII área curricular de formació'
    ],

    10: [
      'Taller para examen de egreso',
      'Seminario para el desempeño profesional',
      'Administración de proyectos tecnológicos',
      'Modelo de negocios',
      'Analítica de datos e inteligencia de negocio',
      'Transformación digital'
    ]
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>

        <StatusBar style="auto" />

        <View style={styles.encabezado}>
          <Text style={styles.titulo}>MI FACULTAD</Text>
        </View>

        <View style={styles.container}>

          {
            alumnosArray.map((alumno, index) => (

              <Alumno
                key={alumno.matricula}
                registro={index}
                nombre={alumno.nombre}
                matricula={alumno.matricula}
                foto={alumno.foto}
                activo={alumno.activo}
                materias={materias}
              />

            ))
          }

        </View>

        <Navegacion />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'scroll'
  },

  encabezado: {
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  container: {
    flexWrap: 'nowrap',
    backgroundColor: '#fff'
  }

});