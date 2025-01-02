import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';

const PopupComponent = (props) => {
  const { chandListItem, onDelete } = props;
  const { id, imageUrl, style } = chandListItem;

  const onClickDelete = () => {
    console.log("its working");
    onDelete(id);
  };

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="delete-btn">
            Delete
          </button>
        }
      >
        {close => (
          <>
            <div>
              <p>Are you sure you want to delete?</p>
              <button
                type="button"
                className="confirm-delete-btn"
                onClick={() => {
                  onClickDelete(); // Trigger the delete logic
                  close(); // Close the popup after deletion
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={close} // Close the popup without deleting
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default PopupComponent;