import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Touchable, TouchableOpacity } from "react-native";

const deviceWidth = Dimensions.get('window').width;

function app() {

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();

  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = notes;
      notesCpy.push(note);
      setNotes(notesCpy);
      setNote("");
    }
  }

  return (
    <View>
      <Text style={styles.heading}>Take Your Notes</Text>
      <View style={styles.form}>

        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter the task"
          style={styles.field}

        />
        <View>
          <TouchableOpacity onPress={addNote}>

            <Text style={styles.btn}>+</Text>

          </TouchableOpacity>

        </View>
      </View>
      {
        (notes.length === 0) ? <Text style={{ fontSize: 28, marginTop: 20, textAlign: 'center' }}>
          No Task added..
        </Text>
          : (<Text>
            {notes.map((note, index) => (
              <View key={index}>
                <Text style={{ fontSize: 22, backgroundColor: 'grey', margin: 10, borderRadius: 10, paddingLeft: 10 }}>
                  {note}
                </Text>
              </View>
            ))}
          </Text>
          )}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    heading: {
      fontSize: 28,
      marginVertical: 40,
      width: deviceWidth,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      textShadowColor: 'blue',
      textShadowRadius: 5,
    },
    field: {
      borderColor: 'black',
      borderWidth: 1,
      width: 3 * (deviceWidth / 4),
      borderRadius: 40,
      paddingLeft: 20,


    },
    form: {
      display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'
    },
    btn: {
      fontSize: 22, height: 50, width: 50, textAlign: 'center', backgroundColor: 'grey', borderRadius: 50, paddingTop: 6
    }
  })

export default app;






