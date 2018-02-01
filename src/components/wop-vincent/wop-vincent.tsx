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
    this.stop();
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
      const div = document.createElement('div');
      div.setAttribute('class', img);
      div.style.backgroundImage = `url(${img})`;
      this.el.appendChild(div);
      window.setTimeout(() => div.classList.add('load'), 100);
    }
  }

  play() {
    if (this.iCanPlay()) {
      this.mainIntervalId = window.setInterval(() => this.next(), 8500);
    }
  }

  next() {
    const oldIndex = this.indexImages;
    this.indexImages = this.getNextIndex();
    this.setBackground(this.indexImages);
    this.removeOldBackground(oldIndex);
  }

  stop() {
    window.clearInterval(this.mainIntervalId);
  }

  private getNextIndex(): number {
    return (this.indexImages + 1) % (this.images.length);
  }

  removeOldBackground(index: number) {
    const imgDiv = this.el.getElementsByClassName(this.images[index]);
    if (this.iCanPlay() && imgDiv.length) {
      window.setTimeout(() => {
        imgDiv.item(0).remove();
      }, 2200);
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
