import React from 'react';
import './Task.css';

export type TaskProps = {
    completeStatus: boolean
    title: string
    description: string
}



export const Task = ({
    completeStatus,
    title,
    description,

}: TaskProps)=> {
const mode = completeStatus ? 'Task checkbox-complete Task-complete'  : 'Task-incomplete Task checkbox-incomplete';


    return (
      <>
        <div className={mode}>
            <div>
                <div className= {mode}></div>
                    <h2 className='text-main'>{title}</h2>
                    <h3 className='text-secondary'>{description}</h3>
                </div>
            </div>
      </>
  
  )
  }


  



