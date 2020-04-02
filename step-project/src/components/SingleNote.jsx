import React, { useContext } from "react";
import styled from "styled-components";

import { NotesContext } from "../context/notes";

export function SingleNote({ history: { push }, match: { params: { id } } }) {
 
  const { notes } = useContext(NotesContext);
  const note = notes.find(item => item.id == id);
  console.log("single-item")

  return (
    <div>
      Single Note
      {note && (
        <SingleItem color={note.color}>
          <p> {note.title}</p>
          <p> {note.text}</p>
          <p> {note.date}</p>
          <p> {note.isCompleted}</p>
        </SingleItem>
      )}

      <button onClick={() => push('/')}> Back </button>
    </div>
  );
}

const SingleItem = styled.div`
  background-color: ${p => p.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  width: 100px;
`;