import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

export const showToastBL = (jsx, overrides = {}) => {
    toast(jsx, {
      position: toast.POSITION.BOTTOM_LEFT,
      className: 'toastBL',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      ...overrides,
    });
  };