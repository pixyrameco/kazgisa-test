import {useState} from "react";

export default function MenuTree(props = {}){
    let treeData = props.treeData
    let id = props.id
    if(!id){
        id = null
    }
    const [focusedItem, setFocusedItem] = useState(null)
    return(
        <div>
            {
                treeData.filter(data => data.parentId === id).map(data => {
                    return (
                        <div
                            style={{
                                width: 100,
                                height: 40,
                                marginTop: 0,
                                marginLeft: 100,
                                border: "black 1px solid",
                                borderRadius: 3,
                                background: data.id === focusedItem ? "#989898" : "none",
                            }}
                            onMouseEnter={() => {
                                setFocusedItem(data.id)
                            }}
                            onMouseLeave={() => {
                                setFocusedItem(null)
                            }}
                        >
                            {data.label}
                            {focusedItem === data.id ? <MenuTree treeData={treeData} id={data.id}/> : <></>}
                        </div>
                    )
                })
            }
        </div>
    )
}