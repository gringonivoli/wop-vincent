import { Component, Element } from '@stencil/core';

@Component({
  tag: 'wop-vincent',
  styleUrl: 'wop-vincent.scss'
})
export class Vincent {

  images: string[] = [];
  indexImages: number = 0;
  mainIntervalId: number;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setImages();
    this.setBackground();
    this.play();
  }

  componentDidUnload() {
    window.clearInterval(this.mainIntervalId);
  }

  iCanPlay(): boolean {
    return this.images.length > 1;
  }

  setImages() {
    const vincentImages = this.el.getElementsByTagName('wop-vincent-img');
    for (let index = 0; index < vincentImages.length; index++) {
      this.images = [...this.images, vincentImages.item(index).getAttribute('data-src')];
    }
  }

  setBackground(index: number = 0) {
    const img = this.images[index];
    if (this.images.length) {
      let div = document.createElement('div');
      div.setAttribute('class', img);
      div.style.backgroundImage = `url(${img})`;
      this.el.appendChild(div);
      window.setTimeout(() => div.classList.add('load'), 0);
    }
  }

  play() {
    if (this.iCanPlay()) {
      this.mainIntervalId = window.setInterval(() => this.next(), 8500);
    }
  }

  next() {
    const oldIndex = this.indexImages;
    this.indexImages = (this.indexImages + 1) % (this.images.length);
    this.setBackground(this.indexImages);
    this.removeOldBackground(oldIndex);
  }

  removeOldBackground(index: number) {
    if (this.iCanPlay() && this.el.getElementsByClassName(this.images[index]).length) {
      window.setTimeout(() => {
        this.el.getElementsByClassName(this.images[index]).item(0).remove();
      }, 2200);
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
