import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = ({ text }) => {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <button
        className='btn'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className='loading loading-spinner'></span>
            submitting...
          </>
        ) : (
          text || "LOGIN"
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
