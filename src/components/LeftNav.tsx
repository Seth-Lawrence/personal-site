import Button from "./Button";

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

const LeftNav = ({ handleClick }: leftNavProps) => {

  return (
    <div className='LeftNav'>
      <Button handleClick={handleClick} text='About' />
      <Button handleClick={handleClick} text='Skills' />
      <Button handleClick={handleClick} text='Projects' />
      <Button handleClick={handleClick} text='Home' />
    </div>
  );
}

export default LeftNav;
