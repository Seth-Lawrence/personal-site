import Button from "./Button";
import ProfilePicture from "./ProfilePicture";

interface leftNavProps {
  handleClick: Function
}

/**
 * renders left navigation
 *
 * props: handleClick
 *
 * state: none
 *
 * App => LeftNav => { Button }
 */

function LeftNav({ handleClick }: leftNavProps) {

  return (
    <div className='LeftNav'>
      <ProfilePicture />
      <Button handleClick={handleClick} text='About' />
      <Button handleClick={handleClick} text='Skills' />
      <Button handleClick={handleClick} text='Projects' />
      <Button handleClick={handleClick} text='Home' />
    </div>
  );
}

export default LeftNav;
