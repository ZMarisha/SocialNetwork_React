import f from './MyFriends.module.css'

const MyFriends = (props) => {
    console.log(props.friends.USERS)
    
    let dataFriends = props.friends.USERS.map(data => (
        <div>
            <div className={f.avatarka}>
                <img src={data.avatarka} alt='name' key={data.id} />
            </div>
            <div>
                <p>{data.name}</p>
            </div>  
        </div>
    ))

    return (
        <div>
            {dataFriends}
        </div>
    )
}

export default MyFriends;