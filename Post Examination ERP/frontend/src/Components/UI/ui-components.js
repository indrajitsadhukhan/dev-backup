import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export function ProfileRow({ fieldKey, fieldValue }) {
  return (
    <div className="section-items">
      <p className="section-items-head">
        {' '}
        {fieldKey}
      </p>
      <p className="section-items-details">{fieldValue}</p>
    </div>
  );
}

export function ButtonComp({
  className, text, onClick, id,
}) {
  return (
    <Button className={className} id={id} variant="contained" onClick={onClick}>{text}</Button>
  );
}

// export function Button(props)
// {
// <button type="button" className="btn btn-primary">{props.text}</button>
// }

export function Line() {
  return (
    <div style={
  {
    borderTop: '1px solid #000',
  }
}
    />
  );
}

ProfileRow.propTypes = {
  fieldKey: PropTypes.string,
  fieldValue: PropTypes.string,
};
ButtonComp.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
};
