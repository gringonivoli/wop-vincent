import { Component, Element } from '@stencil/core';

@Component({
  tag: 'wop-vincent',
  styleUrl: 'wop-vincent.scss'
})
export class Vincent {

  images: string[] = [];
  indexImages: number = 0;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setImages();
    this.setBackground();
    this.play();
  }

  setImages() {
    const vincentImages = this.el.getElementsByTagName('wop-vincent-img');
    for (let index = 0; index < vincentImages.length; index++) {
      this.images = [...this.images, vincentImages.item(index).getAttribute('src')];
    }
  }

  setBackground(index: number = 0) {
    const img = this.images[index];
    if (this.images.length) {
      let div = document.createElement('div');
      div.setAttribute('class', img);
      div.style.backgroundImage = `url(${img})`;
      this.el.appendChild(div);
    }
  }

  play() {
    setInterval(() => this.next(), 3500);
  }

  next() {
    const oldIndex = this.indexImages;
    this.indexImages = (this.indexImages + 1) % (this.images.length);
    this.setBackground(this.indexImages);
    this.removeOldBackground(oldIndex);
  }

  removeOldBackground(index: number) {
    if (this.el.getElementsByClassName(this.images[index]).length) {
      this.el.getElementsByClassName(this.images[index]).item(0).remove();
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
