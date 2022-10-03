import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={p.avantarka}>
            <img className={p.avantarkaImg} alt='' src='https://previews.123rf.com/images/ismagilov/ismagilov1906/ismagilov190601541/124877185-close-up-of-beautiful-woman-face-with-face-recognition-technology-interface-and-network-hologram-con.jpg?fj=1'></img>
            <div className={p.description}>
              <h1>Marina Zinchenko</h1>
              <p>Date of Birth: <span>27 October</span></p>
              <p>City: <span>Moscow</span></p>
              <p>Education: <span>BNTU</span></p>
              <p>Website: <span>https://my-app</span></p>
            </div>
        </div>
    )
}

export default ProfileInfo;