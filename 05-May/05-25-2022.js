//P: input will be an array with at least one entry and an integer between -12 and 12
//R: return should be the updated array. the notes should be incremented, or decremented, by the integer provided
//E: ['G'] -> 5 steps -> ['C']
//   ['Db'] -> -4 steps -> ['A#']
//   ['E', 'F'] -> 1 step -> ['F', 'F#']

//function transpose(song, interval){
    //create an object for the note entry
    //determine index of current value
    //increase or decrease index of current value and return new value

//}

function transpose(song, interval){
    let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    song = song.map(x => x == 'Bb' ? 'A#' : x == 'Db' ? 'C#' : x== 'Eb' ? 'D#' : x == 'Gb' ? 'F#' : x == 'Ab' ? 'G#' : x)
    return song.map(x => {
      let i = (notes.indexOf(x) + interval) % notes.length
      if (i >= 0){return notes[i]}
      else {return notes[notes.length + i] }
    })
  }

//*****I was a bit frustrated with this code as I found the .at() method that would have streamlined my code a bit more, but looking through the solutions I was able to refactor my code below:

function transpose(song, interval){
    let sharp = 'A, A#, B, C, C#, D, D#, E, F, F#, G, G#'.split(', ')
    let flat = 'A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab'.split(', ')
    return song.map(x => sharp[((x[1] == 'b' ? flat : sharp).indexOf(x) + interval + sharp.length) % sharp.length])
  }