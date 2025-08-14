# PollyGlot Translation App - Technical Documentation

## Overview

PollyGlot is a browser-based translation application that provides real-time text translation into French, Spanish, and Japanese. The app features a clean, parrot-themed interface with an intuitive chat-like experience for translations.

## Technologies Used

### Frontend Technologies

#### HTML5
- **Structure**: Modern semantic HTML5 structure with proper document declaration
- **Form Elements**: Radio buttons for language selection with hidden inputs and custom styled labels
- **Accessibility**: Proper labeling and alt attributes for images

#### CSS3
- **Layout**: Flexbox-based responsive layout system
- **Custom Properties**: CSS custom styling for interactive elements
- **Typography**: Google Fonts integration (Poppins font family)
- **Interactive States**: Hover effects and selection states for language flags
- **Background Images**: CSS background-image properties for flags and world map
- **Border Styling**: Custom border effects for selected language flags

#### Vanilla JavaScript (ES6+)
- **Modern Syntax**: ES6+ features including async/await, arrow functions, and template literals
- **DOM Manipulation**: Event listeners and dynamic content generation
- **Event Handling**: Click events for language selection and message sending
- **Module System**: ES6 modules for importing external libraries

### Backend Integration

#### OpenAI API
- **Model**: GPT-3.5-turbo for translation processing
- **Configuration**: Temperature set to 0 for consistent, deterministic translations
- **Error Handling**: Try-catch blocks for API call failures
- **Environment Variables**: Secure API key management through process.env

### Development Features

#### API Integration Pattern
```javascript
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
```

#### Async/Await Implementation
- Promise-based API calls with proper error handling
- Non-blocking user interface during translation requests

#### Dynamic Content Generation
- Template literal usage for generating chat-like message bubbles
- Real-time DOM updates without page refresh


## Key Features

### Language Support
- **French**: Complete translation support with flag selection
- **Spanish**: Full translation capability
- **Japanese**: Advanced character set translation support

### User Interface
- **Responsive Design**: Fixed width (380px) optimized for mobile/extension use
- **Chat Interface**: Message bubble styling for user input and translations
- **Visual Feedback**: Color-coded messages (green for user, blue for system)
- **Flag Selection**: Visual language selection with hover and active states

### Technical Highlights
- **No Framework Dependencies**: Pure vanilla JavaScript implementation
- **Modern Web Standards**: ES6 modules and modern JavaScript features
- **API Security**: Environment variable usage for sensitive data
- **Error Resilience**: Graceful error handling with user feedback

## Browser Compatibility
- Modern browsers supporting ES6+ modules
- Requires environment variable support or bundler for production deployment
- Font loading from Google Fonts CDN
