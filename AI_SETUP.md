# AI Mental Health Assistant Setup Guide

## Overview
This AI chat page provides an interactive mental health assistant that can help users with basic mental health support, assessment, and guidance. The assistant is designed to work with Arooj Abbasi's practice and encourages users to book consultations for professional care.

## Features
- **Interactive Chat Interface**: Real-time conversation with AI assistant
- **Crisis Detection**: Automatically detects crisis situations and provides emergency contacts
- **Mental Health Assessment**: Tracks conversation patterns and provides basic assessment
- **Quick Actions**: Pre-defined buttons for common mental health topics
- **Fallback Responses**: Works even when API is not available
- **Professional Integration**: Direct links to book consultations with Arooj

## Setup Instructions

### 1. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 2. Configure the API Key
1. Open `js/ai-config.js`
2. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:
   ```javascript
   apiKey: 'your-actual-api-key-here',
   ```

### 3. Test the Setup
1. Open `ai-chat.html` in your browser
2. Try sending a message like "I feel anxious"
3. Check the browser console for any errors
4. Verify the AI status indicator shows "AI Assistant Ready"

## Configuration Options

### API Settings
- **Temperature**: Controls response creativity (0.7 recommended)
- **Max Tokens**: Maximum response length (1024 recommended)
- **Safety Settings**: Configure content filtering levels

### Crisis Detection
The system automatically detects crisis keywords and provides emergency contacts:
- Pakistan Emergency: 112
- Arooj: 0303-5229634
- Email: m.aroojabbasi@gmail.com

### Assessment Categories
The AI tracks:
- Mood patterns (anxious, sad, angry, happy, etc.)
- Concerns (work, family, relationships, etc.)
- Symptoms (sleep, appetite, concentration, etc.)

## Customization

### Adding New Quick Actions
Edit `js/ai-config.js` and add to the `quickActions` array:
```javascript
quickActions: [
    'I feel anxious',
    'I need help with depression',
    'I want to book a consultation',
    'What services do you offer?',
    'I need immediate help',
    'Tell me about therapy options',
    'Your new quick action here'
]
```

### Modifying Fallback Responses
Edit the `fallbackResponses` object in `js/ai-config.js`:
```javascript
fallbackResponses: {
    'anxiety': "Your custom anxiety response",
    'depression': "Your custom depression response",
    // ... other responses
}
```

### Updating System Prompts
Modify the `systemPrompts` object in `js/ai-config.js` to change how the AI behaves:
```javascript
systemPrompts: {
    main: `Your custom system prompt here...`,
    crisis: `Your crisis response prompt...`,
    assessment: `Your assessment prompt...`
}
```

## Troubleshooting

### Common Issues

1. **"AI Assistant Offline" Status**
   - Check if API key is correctly set
   - Verify internet connection
   - Check browser console for errors

2. **API Errors**
   - Ensure API key is valid and active
   - Check if you have sufficient API quota
   - Verify the API endpoint is correct

3. **Responses Not Appearing**
   - Check browser console for JavaScript errors
   - Ensure all JavaScript files are loaded correctly
   - Verify the chat input and send button are working

### Debug Mode
To enable debug logging, add this to the browser console:
```javascript
localStorage.setItem('ai-debug', 'true');
```

## Security Considerations

1. **API Key Protection**
   - Never commit API keys to version control
   - Consider using environment variables for production
   - Implement rate limiting for API calls

2. **Data Privacy**
   - Conversations are not stored on the server
   - All data remains in the user's browser
   - Consider adding privacy policy and data handling notices

3. **Crisis Handling**
   - Ensure emergency contacts are up to date
   - Test crisis detection regularly
   - Have a plan for handling false positives

## Production Deployment

1. **Environment Setup**
   - Use environment variables for API keys
   - Implement proper error handling
   - Add logging and monitoring

2. **Performance Optimization**
   - Implement response caching
   - Add loading states
   - Optimize API call frequency

3. **Legal Compliance**
   - Add disclaimers about AI limitations
   - Include privacy policy
   - Ensure compliance with healthcare regulations

## Support

For technical support or questions about the AI assistant:
- Check the browser console for error messages
- Review the configuration in `js/ai-config.js`
- Test with different API keys if issues persist

For mental health support:
- Contact Arooj directly at 0303-5229634
- Use WhatsApp for immediate assistance
- Visit the main website for more information

## License

This AI assistant is designed specifically for Arooj Abbasi's practice. Please ensure proper licensing and compliance with local regulations before use.
