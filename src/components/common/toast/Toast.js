import PropTypes from 'prop-types';
import { SnackBarContainer } from './styled';
import images from 'assets/images';
import { ToastTypes } from 'config/shared';

export const Toasts = {
  BOOKMARK_ADDED: {
    type: ToastTypes.SUCCESS,
    icon: images.bookmarkOnIcon,
    text: 'Saved to Bookmarks',
  },
  BOOKMARK_REMOVED: {
    type: ToastTypes.ERROR,
    icon: images.bookmarkOffIcon,
    text: 'Removed from Bookmarks',
  },
};

const Toast = ({
  visible,
  type,
  icon,
  text,
}) => (
  <SnackBarContainer
    visible={visible}
    className={visible && 'show'}
    type={type}
  >
    <img className="toast-icon" src={icon} alt="" />
    <span className="toast-text">{text}</span>
  </SnackBarContainer>
);

Toast.propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.oneOf([ToastTypes.SUCCESS, ToastTypes.ERROR]),
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default Toast;
