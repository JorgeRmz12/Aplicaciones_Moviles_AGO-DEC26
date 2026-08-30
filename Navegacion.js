import { StyleSheet, View, Pressable, Text } from 'react-native';

export function Navegacion() {

    return (
        <View style={styles.container}>

            <Pressable style={styles.boton}>
                <Text style={styles.texto}>
                    Inicio
                </Text>
            </Pressable>

            <Pressable style={styles.boton}>
                <Text style={styles.texto}>
                    Alumnos
                </Text>
            </Pressable>

            <Pressable style={styles.boton}>
                <Text style={styles.texto}>
                    Materias
                </Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginTop: 20
    },

    boton: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    texto: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});