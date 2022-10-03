import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'

const Dialogs = (props) => {

    // const DATA = [
    //     {id: 1, name: 'Victor'},
    //     {id: 2, name: 'Anna'},
    //     {id: 3, name: 'Valerya'},
    //   ];
      
    //   const MESSAGES = [
    //     {id: 1, message: 'Evryone messaage'},
    //     {id: 2, message: 'How is youe job?'},
    //     {id: 3, message: 'I hate to do things which I do not like!'},
    //   ];

    const dialogItem = props.data;
    const messageItem = props.messages

    let person = dialogItem.map( data => [<DialogItem name={data.name} id={data.id} key={data.id} />]);
    let messaage = messageItem.map( m => [<MessageItem message={m.message} key={m.id} />])
    
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={d.dialogs}>
                <div className={d.avatarka}>
                  {person}
                </div>
                <div className={d.messages}>
                    {messaage}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;