import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wop-vincent-img',
  styleUrl: 'wop-vincent-img.scss'
})
export class VincentImg {

  @Prop() dataSrc: string;

  componentWillLoad() {
    this.preload();
  }

  preload() {
    if (this.dataSrc) {
      let img = new Image();
      img.src = this.dataSrc;
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
