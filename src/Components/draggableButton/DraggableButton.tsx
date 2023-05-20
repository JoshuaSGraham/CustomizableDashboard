import React, { MouseEventHandler } from 'react'
import GridLayout from 'react-grid-layout'
import './DraggableButton.css'


const layout = [
    {i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1},
    {i: "dark-magician", x: 1, y: 0, w:1, h: 1 },
    {i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    {i: "spell-caster", x: 3, y: 0, w: 1, h: 1},
    {i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
]

const DraggableButton = () => {
    return (
        <GridLayout layout={layout} cols={5} rowHeight={300} width={1000} compactType={'vertical'}>
            <div key="blue-eyes-dragon" className='grid-item-wrapper'>
                <div className='grid-item-content'>
                    Blue Eyes Dragon
                </div>
            </div>
            <div key="dark-magician" className='grid-item-wrapper'>
                <div className='grid-item-content'>
                    Dark Magician
                </div>
            </div>
            <div key="kuriboh" className='grid-item-wrapper'>
                <div className='grid-item-content'>
                    Kuriboh
                </div>
            </div>
            <div key="spell-caster" className='grid-item-wrapper'>
                <div className='grid-item-content'>
                    Spell Caster
                </div>
            </div>
            <div key="summoned-skull" className='grid-item-wrapper'>
                <div className='grid-item-content'>
                    Summoned Skull
                </div>
            </div>
        </GridLayout>
    )
}

export default DraggableButton;