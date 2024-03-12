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

function Button(
  { handleClick, text }: buttonProps) {

  return (
    <div className='Button-container'>
      <button className='Button' onClick={(): void => { handleClick(text); }}>{text}</button>
    </div>
  );
}

export default Button;
