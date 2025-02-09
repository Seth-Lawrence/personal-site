import '../styles/Button.scss'

interface buttonProps {
  handleClick: Function;
  text: string;
}

/**
 * renders button
 *
 * props: handleClick:function, text
 *
 * state: none
 *
 * LeftNav => Button
 *
 */

const Button = (bp: buttonProps) => {

  return (
    <div className='Button-container'>
      <button className='Button' onClick={(): void => { bp.handleClick(bp.text); }}>
        {bp.text}</button>
    </div>
  );
}

export default Button;
