import './SeeBundleModal.scss';

function SeeBundleModal({ onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <div className='modal__details'>
            <h2>Bundle Details</h2>
            <p>Your personalized bundle details will go here.</p>
        </div>
      </div>
    </div>
  );
}

export default SeeBundleModal;
