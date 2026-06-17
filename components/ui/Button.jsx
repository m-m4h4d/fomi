import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#FF6B4A] hover:bg-[#FF5A36] text-white focus:ring-[#FF6B4A]",
    secondary: "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 focus:ring-slate-200",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 focus:ring-slate-200",
    active: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
