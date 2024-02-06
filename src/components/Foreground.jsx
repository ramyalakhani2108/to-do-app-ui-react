import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"
function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "this is javascript",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "this is javascript",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "this is javascript",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" }
        },

    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {/* <Card /> */}
            {data.map((items, index) => (
                <Card data={items} reference={ref} />
            ))}
        </div>

    )
}

export default Foreground