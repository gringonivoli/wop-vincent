import { Component, Element } from '@stencil/core';

@Component({
  tag: 'wop-vincent',
  styleUrl: 'wop-vincent.scss'
})
export class Vincent {

  images: string[] = [];
  test: number = 0;

  @Element() el: HTMLElement;

  componentDidLoad() {
    console.log('componentDidLoad', this.test);
    this.test += 1;
    this.setImages();
    this.setBackground();
  }

  setImages() {
    const vincentImages = this.el.getElementsByTagName('wop-vincent-img');
    for (let index = 0; index < vincentImages.length; index++) {
      this.images = [...this.images, vincentImages.item(index).getAttribute('src')];
      // to avoid duplicates...
      this.images = Array.from(new Set(this.images));
    }
    console.log(this.images);
  }

  setBackground() {
    if (this.images.length) {
      let div = document.createElement('div');
      div.style.backgroundImage = `url(${this.images[0]})`;
      this.el.getElementsByTagName('div').item(0).appendChild(div);
    }
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
