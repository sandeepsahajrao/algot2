const btntheme=(state,action)=>{
    switch(action.type){
        case 'dark':
            state="#626ee3";
            break;
        default:
            state='#15314b'
    }
    return state
}

const btntheme1=(state,action)=>{
    switch(action.type){
        case 'sun':
            state='#626ee3';
            break;
        default:
            state='#15314b'
    }
    return state
}

const Font1=(state,action)=>{
    switch(action.type){
        case '0.8x':
            state='0.8x';
            break;
        case '0.9x':
            state='0.9x';
            break;
        case '1x':
            state='1x';
            break;
        case '1.1x':
            state='1.1x';
            break;
        case '1.2x':
            state='1.2x';
            break;
        case '1.3x':
            state='1.3x';
            break;
        default:
            state='0.9'
    }
    return state
}

const editorthem=(state,action)=>{

    switch(action.type){
        case "Monokai":
            state="Monokai";
            break;
        case "One Dark":
            state="One Dark";
            break;
        case "Material":
            state="Material";
            break;
        case "Dracula":
            state="Dracula";
            break;
        default:
            state="Monokai"

    }

    return state
}
const editorkey=(state,action)=>{

    switch(action.type){
        case "Sublime":
            state="Sublime";
            break;
        case "One Dark":
            state="One Dark";
            break;
        case "Vim":
            state="Vim";
            break;
        case "Emacs":
            state="Emacs";
            break;
        default:
            state="Sublime"

    }

    return state
}



export {btntheme, btntheme1,Font1,editorthem,editorkey};