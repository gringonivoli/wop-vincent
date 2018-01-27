import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wop-vincent-img',
  styleUrl: 'wop-vincent-img.scss',
  shadow: true
})
export class VincentImg {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
