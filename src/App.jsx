import './App.css'
import './Keyboard.css'
import { useEffect} from 'react'


import NoteC from "./assets/C.mp3"
import NoteDb from "./assets/Db.mp3"
import NoteD from "./assets/D.mp3"
import NoteE from "./assets/E.mp3"
import NoteEb from "./assets/Eb.mp3"
import NoteF from "./assets/F.mp3"
import NoteGb from "./assets/Gb.mp3"
import NoteG from "./assets/G.mp3"
import NoteAb from "./assets/Ab.mp3"
import NoteA from "./assets/A.mp3"
import NoteBb from "./assets/Bb.mp3"
import NoteB from "./assets/B.mp3"


function App() {


  const notes = [
    { label: "C", note: NoteC, key: "Q" },
    { label: "Db", note: NoteDb, key: "2" },
    { label: "D", note: NoteD, key: "W" },
    { label: "Eb", note: NoteEb, key: "3" },
    { label: "E", note: NoteE, key: "E" },
    { label: "F", note: NoteF, key: "R" },
    { label: "Gb", note: NoteGb, key: "5" },
    { label: "G", note: NoteG, key: "T" },
    { label: "Ab", note: NoteAb, key: "6" },
    { label: "A", note: NoteA, key: "Y" },
    { label: "Bb", note: NoteBb, key: "7" },
    { label: "B", note: NoteB, key: "U" },
]

const playNote = (note) => {
    new Audio(note).play()
}


useEffect(() => {
  const handleKeyDown = (e) => {
    const keyPressed = e.key.toUpperCase();
    const noteToPlay = notes.find((note) => note.key === keyPressed)
      if(noteToPlay) {
        playNote(noteToPlay.note)
      }
  }
  window.addEventListener("keydown", handleKeyDown)
  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
},)


return (
    <div>
        <div className="keyboard">
            {notes.map(({label, note}) => (
                <button 
                className={`note${label}`}
                key={label}
                onClick={() => playNote(note)}
                >
                    {label}
                </button>
            ))}
        </div>
    </div>
)
}


export default App


    
   

