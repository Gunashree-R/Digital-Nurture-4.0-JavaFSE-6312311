import React, { Component } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'book' // 'book' | 'blog' | 'course'
    };
  }

  renderComponent = () => {
    // Method 1: if-else
    if (this.state.active === 'book') {
      return <BookDetails />;
    } else if (this.state.active === 'blog') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  render() {
    const { active } = this.state;

    // Method 2: Element variable
    let content;
    if (active === 'book') content = <BookDetails />;
    else if (active === 'blog') content = <BlogDetails />;
    else content = <CourseDetails />;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>📖 Blogger App</h1>

        {/* Method 3: Using ternary operator */}
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => this.setState({ active: 'book' })}>Book</button>
          <button onClick={() => this.setState({ active: 'blog' })}>Blog</button>
          <button onClick={() => this.setState({ active: 'course' })}>Course</button>
        </div>

        <hr />

        <h3>Using if-else function</h3>
        {this.renderComponent()}

        <h3>Using element variable</h3>
        {content}

        <h3>Using ternary (inline)</h3>
        {active === 'book' ? (
          <BookDetails />
        ) : active === 'blog' ? (
          <BlogDetails />
        ) : (
          <CourseDetails />
        )}
      </div>
    );
  }
}

export default App;