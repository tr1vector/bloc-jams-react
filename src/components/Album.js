import React, { Component } from 'react';

//** Original function for Album page **
// const Album = () => (
//   <section className="album">
//     Album info listed here
//   </section>
// );

class Album extends Component {
  render() {
    return (
      <section className="album">
        {this.props.match.params.slug} Album will go here
      </section>
    );
  }
}

export default Album;