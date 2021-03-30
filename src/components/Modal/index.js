function Modal({ currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

  return (
    // JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/img/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>Photo Description</p>
        <button type="button">{description}</button>
      </div>
    </div>
  );
}

export default Modal;
