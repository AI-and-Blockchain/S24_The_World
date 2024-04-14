# HTML Files

> Home Page
>
> `index.html`

# Build the environment and run the frontend
> npm install --global http-server
> http-server

# CSS Files

Primarily component-based development, supplemented by page-specific `CSS`

## CSS File Descriptions

> `reset.css`
>
> Modifies default and container styles

> `*.css`
>
> Page-specific styles

> `components/*.css`
>
> Component styles

## Components

> Instructions for Using Components

Add example HTML tags on pages where components are used, and import the component styles in CSS as needed.

> For example, to use the header component on the home page:
>
> `index.css` as follows

```css
@import "./components/header.css";
```html
<header>
  <div class="container header-container">
    <div class="header-left">
      <div class="logo-container">
        <h1 class="logo-title">NFT Market</h1>
        <img class="logo-image" src="./img/your-logo.png" alt="logo" />
      </div>

      <div class="search-box">
        <div class="search-icon">
          <svg
            height="24"
            viewBox="0 0 512 512"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"
            />
          </svg>
        </div>
        <input type="text" placeholder="Explore" />
      </div>
    </div>

    <nav>
      <a href="/" class="nav-link">main_page</a>
      <a href="/Explore" class="nav-link">discover NFT</a>
      <a href="/create" class="nav-link">create NFT</a>
      <a href="/fnq" class="nav-link">F&Q</a>
      <a class="nav-link">connect wallet</a>
    </nav>
  </div>
</header>
```

```css
@import "./components/header.css";
```

### section 板块组件用例

> The section header containing cta is left and right layout

```html
<section class="example-featured section">
  <div class="container">
    <div class="section-header option">
      <h3 class="section-title">Explore</h3>
    </div>
  </div>
</section>
```

> The section header without cta is centered

```html
<section class="example-section section">
  <div class="container">
    <div class="section-header ">
      <h3 class="section-title">Explore</h3>
    </div>
  </div>
</section>
```

```css
@import "./components/section.css";
```

### avatar

> Pure avatar

```html
<!-- avatar 父元素节点规定头像大小 -->
<div class="avatar-container">
  <div class="avatar">
    <img src="./img/avatars/avatar01.png" alt="Avatar" />
  </div>
</div>
```

> Avatar with tags, such as status tag status or ranking tag index

```css
@import "./components/avatar.css";
```

### gradient-button gradient button

```html
<button class=" gradient-button pink-button">connect wallet</button>
```

```css
@import "./components/gradient-button.css";
```

### NFT card component

```html
<li class="trending-cart">
  <div class="cart-image">
    <img src="./img/image01.png" alt="" />
  </div>
  <h4 class="cart-title">ExBoot #1</h4>

  <div class="cart-bottom">
    <div class="user-info">
      <div class="avatar-container">
        <div class="avatar status">
          <img src="./img/avatars/avatar05.png" alt="" />
          <span class="avatar-status">
            <svg
              style="enable-background: new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="info" />
              <g id="icons">
                <path
                  d="M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6   c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z"
                  id="check"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <p class="username">X_X</p>
    </div>

    <div class="price-info">
      <p>current value</p>
      <p>
        <span class="eth-icon"
          ><svg
            enable-background="new 0 0 226.777 226.777"
            height="20"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 226.777 226.777"
            width="20"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <polygon
                fill="#231F20"
                points="112.553,157 112.553,86.977 44.158,116.937  "
              />
              <polygon
                fill="#231F20"
                points="112.553,82.163 112.553,-0.056 46.362,111.156  "
              />
              <polygon
                fill="#231F20"
                points="116.962,-0.09 116.962,82.163 184.083,111.566  "
              />
              <polygon
                fill="#231F20"
                points="116.962,86.977 116.962,157.002 185.405,116.957  "
              />
              <polygon
                fill="#231F20"
                points="112.553,227.406 112.553,171.085 44.618,131.31  "
              />
              <polygon
                fill="#231F20"
                points="116.962,227.406 184.897,131.31 116.962,171.085  "
              />
            </g></svg
        ></span>
        <span>13.14</span>
      </p>
    </div>
  </div>
</li>
```
