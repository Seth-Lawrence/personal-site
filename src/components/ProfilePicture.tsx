import '../styles/ProfilePicture.scss';

/**
 * renders profile picture
 *
 * props: none
 *
 * state: none
 *
 * App => ProfilePicture
 */

function ProfilePicture() {

  return (
      <div className='ProfilePicture-container'>
      <img className='ProfilePicture' src='profile-picture.jpg'></img>
      </div>
  )
}

export default ProfilePicture;
