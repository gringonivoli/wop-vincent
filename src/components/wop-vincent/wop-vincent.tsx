import { Component, Element, Method, Prop } from '@stencil/core';

@Component({
  tag: 'wop-vincent',
  styleUrl: 'wop-vincent.scss'
})
export class Vincent {

  images: string[] = [];
  indexImages: number = 0;
  mainIntervalId: number;

  @Prop() delay: number;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setDelay();
    this.setImages();
    this.setBackground();
    this.play();
  }

  componentDidUnload() {
    this.stop();
  }

  setDelay() {
    if (!this.delay) {
      this.delay = 5000;
    }
    if (this.delay < 3500) {
      this.delay = 3500;
    }
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

  @Method()
  play() {
    if (this.iCanPlay()) {
      this.mainIntervalId = window.setInterval(() => this.next(), this.delay);
    }
  }

  next() {
    const oldIndex = this.indexImages;
    this.indexImages = this.getNextIndex();
    this.setBackground(this.indexImages);
    this.removeOldBackground(oldIndex);
  }

  @Method()
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
