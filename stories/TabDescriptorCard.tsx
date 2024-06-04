import React from 'react';
import './tabDescriptorCard.css';

// //Bruno: second thing to do
// interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };


export const TabDescriptorCard = ()=> {

  return (
    <>
      <div className='Card'>
        <div className="image-cropper">
          <img className='image-card'src='/stories/assets/image-1.png' alt='Nicki'/>
          </div>
          <h2 className='text-card'>A 28-year-old software engineer who loves AI, hiking, and sci-fi novels. Enjoys traveling and trying new recipes.</h2>
      </div>
    </>

)
}

/* ({interface TabDescriptorCardProps}) */



    //CONST THAT STORES QUESTION ABOUT WHAT CARD IS ON DISPLAY
    