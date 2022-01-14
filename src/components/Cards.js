import React from 'react';
import video from './Video';
import ReactPlayer from 'react-player';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Cards = () => {
    return (
        <div class="bg-black">
            <h1 class="bg-sky-500/50 flex justify-center p-10">HERE ARE THE AVAILABLE VIDEOS</h1>
            <DragDropContext>
                <Droppable droppableId='videoId'>
                    {
                        (provided) =>
                        (video.map((list) => {
                            const { id, address } = list;
                            return (
                                <><li  ref={provided.innerRef} {...provided.droppableProps} class="flex justify-center p-8 space-x-16" style={{ listStyleType: "none" }} key={id}>
                                   <Draggable draggableId={id}>
                                       {
                                           (provided)=> ( <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.gragHandleProps}><ReactPlayer url={address} controls={true} height={300} width={400} /></div>)
                                       }
                                   </Draggable>
                                </li>
                                </>
                            )
                        }
                        ))
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Cards;
