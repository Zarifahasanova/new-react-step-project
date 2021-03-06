import React, { useContext } from 'react';
// import { Route } from 'react-router-dom';
import { NotesContext } from '../../context/notes';
import { Note, SingleNote } from '../../components';
import { Row, Container, Loading } from '../../commons';

export function HomePage() {

    const { notes } = useContext(NotesContext);
    const filteredNotes = notes.filter(note => note.isCompleted === false)
    
    return (
     
        <Container>
            {notes.length !== 0 ?
                <Row>
                    {filteredNotes.map(({ id, title, text, date, color, isCompleted }) => 
                    <Note
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        date={date}
                        color={color}
                        isCompleted={isCompleted}
                    />)}
                </Row>
                :
                <Loading/>}
                
        </Container>
                
     
   
   /*   <div>
     {!!notes.length && 
         <SingleNoteItem id={notes[0].id}
            title={notes[0].title}
            text={notes[0].text}
            date={notes[0].date}
            color={notes[0].color}
            isCompleted={notes[0].isCompleted} />
     }
      </div>
      */
    )
}