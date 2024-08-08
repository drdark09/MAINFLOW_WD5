.slider {
  display: flex;
  align-items: center;
  margin: 20px;

  opacity: 0;
  transform: scale(85%);
  transition: 2s;
}

.slider--zoom {
  opacity: 1;
  transform: scale(100%);
  transition: 2s;
}

.slider__image {
  width: 60%;
}

.slider__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.slider__title {
  text-align: center;
}

@media screen and (max-width: 800px) {
  .slider {
    flex-direction: column;
    background-color: rgb(236, 236, 236);
  }

  .slider__image {
    width: 100%;
  }
}
