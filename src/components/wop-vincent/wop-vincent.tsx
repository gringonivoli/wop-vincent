import { Component, Element } from '@stencil/core';

@Component({
  tag: 'wop-vincent',
  styleUrl: 'wop-vincent.scss',
  shadow: true
})
export class Vincent {

  @Element() el: HTMLElement;

  render() {
    return (
      <slot />
    );
  }
}
