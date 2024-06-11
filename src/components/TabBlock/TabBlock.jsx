import Button from "../Button"

function TabBlock ({ onHide })
{
    console.log(onHide)

    return (
        [
            <Button className="active1" onClick={() => onHide("compOne")}>Блок 1</Button>,
            <Button className="active2" onClick={() => onHide("compTwo")}>Блок 2</Button>
        ]
    )
}

export default TabBlock