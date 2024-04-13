# html 文件

> 首页
>
> index.html

# CSS 文件

以组件化开发为主导，页面`CSS`为辅开发

## CSS 文件说明

> reset.css
>
> 更改默认样式及容器样式

> \*.css
>
> 页面样式

> components/\*.css
>
> 组件样式

## 组件

> 组件使用说明

在使用到组件的页面添加用例 html 标签，在 css 中导入组件样式即可

> 例如在首页需要使用 header 组件
>
> index.css 如下

```css
@import "./components/header.css";
```

### 页面 header 组件

```html
<header>
  <div class="container header-container">
    <div class="header-left">
      <div class="logo-container">
        <h1 class="logo-title">NFT 市场</h1>
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
        <input type="text" placeholder="搜索" />
      </div>
    </div>

    <nav>
      <a href="/" class="nav-link">首页</a>
      <a href="/explore" class="nav-link">发现NFT</a>
      <a href="/create" class="nav-link">创建NFT</a>
      <a href="/fnq" class="nav-link">F&Q</a>
      <a class="nav-link">连接钱包</a>
    </nav>
  </div>
</header>
```

```css
@import "./components/header.css";
```

### section 板块组件用例

> 包含 cta 的 section 头部是左右布局

```html
<section class="example-featured section">
  <div class="container">
    <div class="section-header option">
      <h3 class="section-title">探索</h3>
    </div>
  </div>
</section>
```

> 不含 cta 的 section 头部是居中对齐

```html
<section class="example-section section">
  <div class="container">
    <div class="section-header ">
      <h3 class="section-title">探索</h3>
    </div>
  </div>
</section>
```

```css
@import "./components/section.css";
```

### avatar 头像组件

> 纯头像

```html
<!-- avatar 父元素节点规定头像大小 -->
<div class="avatar-container">
  <div class="avatar">
    <img src="./img/avatars/avatar01.png" alt="Avatar" />
  </div>
</div>
```

> 带有标签的头像，比如状态标记 status 或是排名标记 index

```css
@import "./components/avatar.css";
```

### gradient-button 渐变按钮

```html
<button class=" gradient-button pink-button">连接钱包</button>
```

```css
@import "./components/gradient-button.css";
```

### NFT 卡片组件

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
      <p class="username">北京东路的日子</p>
    </div>

    <div class="price-info">
      <p>当前价值</p>
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

```css
@import "./components/trending-card.css";
```
