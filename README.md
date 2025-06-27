# 3D Sliding Image Panel Gallery

A modern product gallery designed for e-commerce websites with stunning 3D transition effects and interactive features.

## Features

### 3D Visual Effects
- Perspective-based 3D transforms with realistic depth perception
- Multi-layered shadows for professional depth effects
- Smooth animations with physics-based transitions
- Dynamic rotation based on scroll position

### E-commerce Features
- Price tags with regular and discounted price display
- Animated discount badges
- Buy Now button for direct purchase
- Add to Cart button for shopping cart functionality
- Favorite system with heart icon for likes

### Interaction Support
- Mouse wheel horizontal scrolling
- Touch and swipe support for mobile devices
- Keyboard navigation with arrow keys
- Click-to-navigate functionality
- Hover effects with dynamic visual feedback

### Responsive Design
- Mobile-friendly for all screen sizes
- Cross-browser support for modern browsers
- Touch optimization for touchscreen devices

## Installation

### Quick Start
```bash
# Clone the project
git clone https://github.com/Vugarismayil25/3d-sliding-gallery.git

# Navigate to folder
cd 3d-sliding-gallery

# Open HTML file in browser
open index.html
```

### Manual Installation
1. Download the `index.html` file
2. Host it on your web server
3. Open in browser

## Usage

### Basic HTML Structure
```html
<div class="gallery-container">
    <div class="panel-wrapper">
        <div class="image-panel" data-index="0">
            <div class="panel-content">
                <div class="panel-image" style="background-image: url('image.jpg');">
                    <div class="discount-tag">-25%</div>
                    <div class="price-tag">
                        <span class="original-price">$99</span>$74
                    </div>
                </div>
                <div class="panel-info">
                    <div>
                        <div class="panel-title">Product Name</div>
                        <div class="panel-description">Product description...</div>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-buy">Buy Now</button>
                        <button class="btn btn-cart">Add to Cart</button>
                        <button class="favorite-btn" onclick="toggleFavorite(this)">
                            <span class="heart-icon">♡</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Controls
| Action | Method |
|---------|-------|
| Scroll | Mouse wheel or trackpad |
| Mobile Swipe | Finger swipe left/right |
| Keyboard | Left/Right arrow keys |
| Favorite | Click heart icon |
| Purchase | Click Buy Now button |
| Cart | Click Add to Cart button |

## Technologies

- HTML5 - Semantic markup
- CSS3 - Advanced animations and 3D transforms
- Vanilla JavaScript - Pure JS, no frameworks
- CSS Grid/Flexbox - Modern layout
- CSS Transform3d - Hardware acceleration

## File Structure

```
3d-sliding-gallery/
├── index.html              # Main HTML file
├── README.md               # This file
├── assets/
│   ├── images/            # Product images
│   └── icons/             # UI icons
├── css/
│   ├── gallery.css        # Main CSS (embedded)
│   └── responsive.css     # Responsive features
└── js/
    ├── gallery.js         # Main JavaScript (embedded)
    ├── interactions.js    # Interaction management
    └── utils.js           # Helper functions
```

## Customization

### Changing Color Palette
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #2ecc71;
    --danger-color: #e74c3c;
}
```

### Panel Dimensions
```css
.image-panel {
    flex: 0 0 350px;    /* Width */
    height: 500px;      /* Height */
}
```

### Animation Speed
```css
.image-panel {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Adding New Products
```javascript
// Add new panel to HTML
const newPanel = `
<div class="image-panel" data-index="7">
    <div class="panel-content">
        <!-- Panel content -->
    </div>
</div>
`;

// Add indicator dot
const newIndicator = `<div class="indicator-dot" data-panel="7"></div>`;
```

## API Reference

### JavaScript Functions

#### scrollToPanel(index)
Scrolls to specified panel
```javascript
scrollToPanel(2); // Go to 3rd panel
```

#### toggleFavorite(button)
Toggles favorite status
```javascript
toggleFavorite(heartButton); // Add/remove from favorites
```

#### updatePanelStates()
Updates panel states
```javascript
updatePanelStates(); // Refresh positions
```

### CSS Classes

| Class | Description |
|-------|----------|
| `.in-view` | Active/visible panel |
| `.left-view` | Left side panel |
| `.right-view` | Right side panel |
| `.far-view` | Distant panel |
| `.highlighted` | Highlighted panel |
| `.active` | Active favorite |

## Browser Support

| Browser | Version | Status |
|---------|----------|--------|
| Chrome | 60+ | Full support |
| Firefox | 55+ | Full support |
| Safari | 12+ | Full support |
| Edge | 79+ | Full support |
| IE | 11 | Limited support |

## Mobile Compatibility

- iOS Safari 12+
- Android Chrome 60+
- Samsung Internet 8+
- Touch events optimized
- Swipe gestures supported

## Performance

- 60 FPS smooth animations
- Hardware acceleration usage
- Optimized rendering with CSS transforms
- Minimal DOM manipulation
- Efficient event handling

## Known Issues

1. IE11 support - Limited Transform3d
2. Older mobile browsers - Scroll snap not supported
3. Slow devices - Animation delays possible

## Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Code style: Prettier + ESLint
- Commit format: Conventional Commits
- Testing: Manual testing required
- Documentation: New features must be documented

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 3D Sliding Gallery

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Developer

Claude AI - Initial work - Anthropic

## Acknowledgments

- Pixabay for free product images
- CSS Transforms for 3D animation inspiration
- Modern web standards for browser compatibility

## Contact

- Email: contact@vugarismayil.xyz
- GitHub: @Vugarismayil25
- Website: https://vugarismayil.xyz

Star this project if you found it helpful!
