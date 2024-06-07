import './PopupForm.css';
import Button from '../Button.jsx';

function PopupForm (props)
{
    console.log('da')
    // function popupWindow (className)
    // {
    //     let 
    //     switch (className) {
    //         case 'mainQuestion-agree':
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    return (
        <div id='popupForm' className={props.className}>
            Здесь будет форма
        </div>
    )
}

export default PopupForm