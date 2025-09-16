// AI Configuration for Mental Health Assistant
const AI_CONFIG = {
    // API Configuration
    apiKey: 'AIzaSyASakHFQbNofGsejxFbSWmAUs6GboWYxQk', // Replace with your actual Gemini API key
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // Response Settings
    maxTokens: 1024,
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    
    // Safety Settings
    safetySettings: [
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
    ],
    
    // Crisis Detection Keywords
    crisisKeywords: [
        'suicide', 'kill myself', 'end my life', 'not worth living',
        'hurt myself', 'self harm', 'cutting', 'overdose',
        'emergency', 'crisis', 'urgent help', 'can\'t go on',
        'want to die', 'better off dead', 'no point living'
    ],
    
    // Emergency Contacts
    emergencyContacts: {
        pakistan: '112',
        drArooj: '0303-5229634',
        email: 'm.aroojabbasi@gmail.com'
    },
    
    // Assessment Categories
    assessmentCategories: {
        mood: ['anxious', 'sad', 'angry', 'happy', 'confused', 'overwhelmed'],
        concerns: ['work', 'family', 'relationships', 'health', 'finances', 'future'],
        symptoms: ['sleep', 'appetite', 'concentration', 'energy', 'motivation']
    },
    
    // Fallback Responses
    fallbackResponses: {
        'anxiety': "I understand you're feeling anxious. Try taking slow, deep breaths and focus on the present moment. Consider booking a consultation with Arooj for personalized anxiety management strategies.",
        'depression': "I hear that you're struggling with depression. It's important to remember that you're not alone. Please consider reaching out to Arooj for professional support and guidance.",
        'stress': "Stress can be overwhelming. Try breaking tasks into smaller steps and practice self-care. Arooj can help you develop effective stress management techniques.",
        'therapy': "Arooj offers various therapy approaches including CBT, DBT, and ACT. You can book a consultation to discuss which approach might work best for you.",
        'help': "I'm here to help! You can ask me about mental health topics, or I can connect you with Arooj for professional support. What would you like to know?",
        'worried': "It sounds like you're feeling worried. That's completely understandable. Sometimes talking about our concerns can help. Would you like to share more about what's on your mind?",
        'sad': "I'm sorry to hear you're feeling sad. It's okay to feel this way, and you don't have to go through it alone. Arooj specializes in helping people work through difficult emotions.",
        'angry': "I can sense you're feeling angry or frustrated. These are valid emotions. It might help to take a moment to breathe and consider what's really bothering you. Arooj can help you process these feelings.",
        'confused': "It's okay to feel confused about your mental health. Many people feel this way. Arooj can help clarify things and provide guidance on what might be helpful for you.",
        'overwhelmed': "Feeling overwhelmed is more common than you might think. Try to focus on just one thing at a time. Arooj can help you develop strategies to manage overwhelming feelings.",
        'sleep': "Sleep issues can really affect our mental health. Try maintaining a regular sleep schedule and creating a calming bedtime routine. Arooj can help address underlying causes of sleep problems.",
        'family': "Family relationships can be complex and challenging. It's important to have support when dealing with family issues. Arooj specializes in family therapy and can help you navigate these relationships.",
        'work': "Work-related stress is very common. It's important to set boundaries and practice self-care. Arooj can help you develop strategies to manage work stress and maintain work-life balance.",
        'book': "I'd be happy to help you book a consultation with Arooj. You can reach her directly at 0303-5229634 or use WhatsApp for immediate assistance. She offers various therapy approaches and assessments.",
        'services': "Arooj offers a range of mental health services including clinical assessments, psychotherapy (CBT, DBT, ACT), crisis intervention, family therapy, and career counseling. Would you like to know more about any specific service?",
        'default': "Thank you for sharing with me. I'm here to listen and provide support. For personalized care and professional guidance, I'd recommend booking a consultation with Arooj. You can reach her at 0303-5229634 or through WhatsApp."
    },
    
    // Quick Actions
    quickActions: [
        'I feel anxious',
        'I need help with depression',
        'I want to book a consultation',
        'What services do you offer?',
        'I need immediate help',
        'Tell me about therapy options'
    ],
    
    // System Prompts
    systemPrompts: {
        main: `You are a compassionate AI mental health assistant working with Arooj Abbasi, a licensed clinical psychologist. Your role is to:

1. Provide supportive, evidence-based information about mental health
2. Offer general self-help suggestions and coping strategies
3. Help users understand mental health concepts
4. Encourage professional help when appropriate
5. Maintain a warm, non-judgmental, and professional tone

IMPORTANT GUIDELINES:
- Always remind users that you are not a replacement for professional therapy
- For crisis situations, immediately direct users to emergency services
- Be supportive but never diagnose or provide specific treatment advice
- Encourage users to book consultations with Arooj for personalized care
- Keep responses concise but helpful (under 200 words)
- Use Arooj's contact information: WhatsApp: 0303-5229634, Email: m.aroojabbasi@gmail.com`,
        
        crisis: `URGENT: This user may be in crisis. Provide immediate support and direct them to emergency services. Be compassionate but urgent in your response.`,
        
        assessment: `Provide a brief mental health assessment based on the conversation. Focus on patterns, concerns, and general recommendations. Always recommend professional consultation.`
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_CONFIG;
}
