# my-component

A simple react components

## Basic Usage

### Modal

```jsx
<Modal
  active={this.state.active1}
  onOverlayClick={this.handleClose1}
>
  <div style={{height: 200, width: 200}}>
    <p>this is 1 Modal</p>
    <button onClick={this.handleOpen2}>this is 2</button>
  </div>
</Modal>
```

### StretchNav

```jsx
let lists = ['哈哈', '哈哈','哈哈', '哈哈','哈哈', '哈哈','哈哈', '哈哈','哈哈', '哈哈'];
<StretchNav 
  lists = {lists}
/>
```

