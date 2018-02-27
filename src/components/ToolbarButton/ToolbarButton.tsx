
import * as React from 'react';
const styles = require('./ToolbarButton.scss');
const classNames = require('classnames');

export interface ToolbarButtonProps {
}

export const ToolbarButton = (props: React.HTMLAttributes<HTMLButtonElement> & ToolbarButtonProps) => {
  const { className, ...other } = props;
  return (
    <button className={classNames(styles.button, className)} {...other} />
  );
};
