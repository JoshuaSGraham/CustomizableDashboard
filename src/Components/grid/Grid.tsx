import React, { MouseEventHandler } from 'react'
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout'
import './Grid.css'


const layout: Layout[] = [
    {i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1},
    {i: "dark-magician", x: 1, y: 0, w:1, h: 1 },
    {i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    {i: "spell-caster", x: 3, y: 0, w: 1, h: 1},
    {i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const ResponsiveGridLayout = WidthProvider(Responsive);
const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
}

export const Grid = () => {
    const handleLayoutChange = (layout: Layout[], layouts: Layouts) => {
        localStorage.setItem("grid-layout", JSON.stringify(layouts));
    }

    return (
        <ResponsiveGridLayout
            layouts={getLayouts()}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1}}
            rowHeight={300}
            width={1000}
            compactType={'vertical'}
            onLayoutChange={handleLayoutChange}
        >
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
        </ResponsiveGridLayout>
    )
};

export default Grid;