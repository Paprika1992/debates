function Button({children, test})
{
    console.log(test)
    return (
        <button className={test}> {children} </button>
    )
}


export default Button