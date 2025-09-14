import React from 'react';
// This is how we import the styles for our component.
// The 'styles' object will contain all the class names from our CSS file.
import styles from './Button.module.css';

// Define the props (properties) that our Button component can accept.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Optional: 'primary' or 'secondary' style
  size?: 'small' | 'medium' | 'large';   // Optional: size of the button
}

export const Button = ({ 
  children, 
  variant = 'primary', // Default to 'primary' if no variant is provided
  size = 'medium',     // Default to 'medium' if no size is provided
  className, 
  ...props 
}: ButtonProps) => {

  // We build the list of CSS classes dynamically.
  // It always starts with the base 'button' style.
  // Then we add the class for the specific variant (e.g., styles.primary).
  // Then we add the class for the specific size (e.g., styles.medium).
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className // Allows for adding extra custom classes if needed
  ].join(' '); // Join them all into a single string like "button primary medium"

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

