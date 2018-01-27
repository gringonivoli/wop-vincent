import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wop-vincent-img',
  styleUrl: 'wop-vincent-img.scss',
  shadow: true
})
export class VincentImg {

  @Prop() src: string;

  componentWillLoad() {
    this.preload();
  }

  preload() {
    if (this.src) {
      let img = new Image();
      img.src = this.src;
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
