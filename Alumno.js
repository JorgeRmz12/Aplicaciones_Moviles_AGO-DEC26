import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export function Alumno({
    nombre,
    matricula,
    foto,
    registro,
    activo,
    materias
}) {

    const [estadoActivo, setEstadoActivo] = useState(activo);
    const [semestreSeleccionado, setSemestreSeleccionado] = useState(2);

    return (
        <View style={styles.container}>

            <Text style={styles.nombre}>
                {nombre}
            </Text>

            <Text style={styles.matricula}>
                Matrícula: {matricula}
            </Text>

            {
                foto ? (
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: foto }}
                    />
                ) : (
                    <View style={styles.sinFoto}>
                        <Text>Sin imagen</Text>
                    </View>
                )
            }

            <Text style={styles.subtitulo}>
                Estado:
            </Text>

            <View style={styles.fila}>

                <Pressable
                    style={[
                        styles.botonEstado,
                        estadoActivo && styles.botonSeleccionado
                    ]}
                    onPress={() => setEstadoActivo(true)}
                >
                    <Text style={styles.textoBoton}>
                        ACTIVO
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.botonEstado,
                        !estadoActivo && styles.botonSeleccionado
                    ]}
                    onPress={() => setEstadoActivo(false)}
                >
                    <Text style={styles.textoBoton}>
                        INACTIVO
                    </Text>
                </Pressable>

            </View>

            {
    estadoActivo && (
        <>
            <Text style={styles.subtitulo}>
                Semestre:
            </Text>

            <View style={styles.semestres}>

                {
                    Object.keys(materias).map((semestre) => (

                        <Pressable
                            key={semestre}
                            style={[
                                styles.botonSemestre,
                                semestreSeleccionado === Number(semestre)
                                    && styles.semestreSeleccionado
                            ]}
                            onPress={() =>
                                setSemestreSeleccionado(Number(semestre))
                            }
                        >
                            <Text style={styles.textoSemestre}>
                                {semestre}°
                            </Text>
                        </Pressable>

                    ))
                }

            </View>

            <Text style={styles.subtitulo}>
                Materias del {semestreSeleccionado}° semestre
            </Text>

            <View style={styles.listaMaterias}>

                {
                    materias[semestreSeleccionado].map(
                        (materia, index) => (

                            <Text
                                key={index}
                                style={styles.materia}
                            >
                                {materia}
                            </Text>

                        )
                    )
                }

            </View>
        </>
    )
}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    padding: 15,
    alignSelf: 'center',
    width: '90%'
},

    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },

    matricula: {
        fontSize: 16,
        marginBottom: 10
    },

    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: 9999,
        marginBottom: 10
    },

    sinFoto: {
        width: 200,
        height: 200,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginBottom: 10
    },

    subtitulo: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 8
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    botonEstado: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8
    },

    botonSeleccionado: {
        backgroundColor: '#ddd'
    },

    textoBoton: {
        fontWeight: 'bold'
    },

    semestres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        maxWidth: 400
    },

    botonSemestre: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8
    },

    semestreSeleccionado: {
        backgroundColor: '#ddd'
    },

    textoSemestre: {
        fontWeight: 'bold'
    },

    listaMaterias: {
        width: '90%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },

    materia: {
        paddingVertical: 6,
        textAlign: 'center'
    }

});