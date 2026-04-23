export const OPEN_CONTACT_POPUP_EVENT = "open-contact-popup";

export const openContactPopup = () => {
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_POPUP_EVENT));
};
