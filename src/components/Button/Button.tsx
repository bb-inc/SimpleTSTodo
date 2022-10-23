import React from 'react'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red'
} 

// export const Button: React.FC<ButtonProps> = (children, color, onClick) => {
//     const className = 
// }