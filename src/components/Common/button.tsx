import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	children?: React.ReactNode;
	icon?: React.ReactNode;
	isIconReverse?: boolean;
	// ... your custom props here
}

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({
	icon,
	children,
	text,
	className,
	isIconReverse,
	...rest
}) => {
	return (
		<button className={`btn btn-primary flex items-center justify-center gap-2 ${isIconReverse ? 'flex-row-reverse' : ''} bg-orange-500 text-white hover:bg-orange-600 ${className}`} {...rest}>
			{icon}
			{children}
			{text}
		</button>
	);
};