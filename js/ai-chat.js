// AI Chat functionality for Mental Health Assistant
class AIChatAssistant {
    constructor() {
        this.apiKey = AI_CONFIG.apiKey;
        this.baseURL = AI_CONFIG.baseURL;
        this.conversationHistory = [];
        this.isProcessing = false;
        this.assessmentData = {
            mood: [],
            concerns: [],
            stressLevel: 0,
            sleepQuality: 0,
            socialSupport: 0,
            copingStrategies: []
        };
    }

    // Initialize the AI assistant
    async initialize() {
        console.log('Initializing AI Assistant...');
        console.log('API Key present:', this.apiKey !== 'YOUR_GEMINI_API_KEY_HERE' && !!this.apiKey);
        
        // For now, use fallback mode to ensure smooth operation
        console.log('Using fallback mode for reliable operation');
        this.updateStatus('ready', 'AI Assistant Ready');
        return true;
        
        // Uncomment below to enable API testing
        /*
        try {
            // Check if API key is set
            if (this.apiKey === 'YOUR_GEMINI_API_KEY_HERE' || !this.apiKey) {
                console.log('API key not set, using fallback mode');
                this.updateStatus('ready', 'AI Assistant Ready (Fallback Mode)');
                return true;
            }
            
            console.log('API key found, testing connection...');
            // Test API connection
            await this.testConnection();
            console.log('API connection test successful');
            this.updateStatus('ready', 'AI Assistant Ready');
            return true;
        } catch (error) {
            console.error('Failed to initialize AI Assistant:', error);
            this.updateStatus('ready', 'AI Assistant Ready (Fallback Mode)');
            return true; // Still allow usage with fallback
        }
        */
    }

    // Test API connection
    async testConnection() {
        const testPrompt = "Hello, I'm a mental health AI assistant. How can I help you today?";
        await this.generateResponse(testPrompt);
    }

    // Generate AI response
    async generateResponse(userMessage) {
        if (this.isProcessing) {
            console.log('AI is already processing, queuing message:', userMessage);
            return { error: "Please wait, I'm processing your previous message." };
        }

        console.log('Starting AI response generation for:', userMessage);
        this.isProcessing = true;
        this.updateStatus('processing', 'AI is thinking...');

        try {
            // Add user message to conversation history
            this.conversationHistory.push({
                role: 'user',
                content: userMessage,
                timestamp: new Date().toISOString()
            });

            // For now, always use fallback for reliable operation
            console.log('Using fallback response system for reliable operation');
            return this.generateFallbackResponse(userMessage);
            
            // Uncomment below to enable API calls
            /*
            // Check if API key is set, if not use fallback
            if (this.apiKey === 'YOUR_GEMINI_API_KEY_HERE' || !this.apiKey) {
                console.log('API key not set, using fallback response system');
                return this.generateFallbackResponse(userMessage);
            }

            console.log('API key found, attempting to call Gemini API...');

            // Create the prompt with mental health context
            const systemPrompt = this.createSystemPrompt();
            const fullPrompt = `${systemPrompt}\n\nUser: ${userMessage}`;

            // Create AbortController for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => {
                console.log('API request timed out after 15 seconds');
                controller.abort();
            }, 15000); // 15 second timeout

            console.log('Making API request to:', this.baseURL);
            const response = await fetch(`${this.baseURL}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: fullPrompt
                        }]
                    }],
                    generationConfig: {
                        temperature: AI_CONFIG.temperature,
                        topK: AI_CONFIG.topK,
                        topP: AI_CONFIG.topP,
                        maxOutputTokens: AI_CONFIG.maxTokens,
                    },
                    safetySettings: AI_CONFIG.safetySettings
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            console.log('API response received, status:', response.status);

            if (!response.ok) {
                console.error('API request failed with status:', response.status);
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            console.log('API response data:', data);
            const aiResponse = data.candidates[0].content.parts[0].text;
            console.log('AI response generated:', aiResponse);

            // Add AI response to conversation history
            this.conversationHistory.push({
                role: 'assistant',
                content: aiResponse,
                timestamp: new Date().toISOString()
            });

            // Check for crisis indicators
            const crisisCheck = this.checkForCrisis(userMessage, aiResponse);

            // Update assessment data based on conversation
            this.updateAssessmentData(userMessage);

            this.updateStatus('ready', 'AI Assistant Ready');

            return {
                response: aiResponse,
                crisisDetected: crisisCheck.isCrisis,
                crisisMessage: crisisCheck.message,
                suggestions: this.generateSuggestions(userMessage),
                timestamp: new Date().toISOString()
            };
            */

        } catch (error) {
            console.error('Error generating AI response:', error);
            this.updateStatus('ready', 'AI Assistant Ready');
            return this.generateFallbackResponse(userMessage);
        } finally {
            this.isProcessing = false;
        }
    }

    // Generate fallback response when API is not available
    async generateFallbackResponse(userMessage) {
        console.log('Generating fallback response for:', userMessage);
        
        // Add user message to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: userMessage,
            timestamp: new Date().toISOString()
        });

        // Add a small delay to make it feel more natural
        const delay = 1000 + Math.random() * 1000;
        console.log('Waiting', delay, 'ms before responding...');
        await new Promise(resolve => setTimeout(resolve, delay));

        // Get fallback response
        const fallbackResponse = getFallbackResponse(userMessage);
        console.log('Fallback response generated:', fallbackResponse);
        
        // Add AI response to conversation history
        this.conversationHistory.push({
            role: 'assistant',
            content: fallbackResponse,
            timestamp: new Date().toISOString()
        });

        // Check for crisis indicators
        const crisisCheck = this.checkForCrisis(userMessage, fallbackResponse);

        // Update assessment data based on conversation
        this.updateAssessmentData(userMessage);

        this.updateStatus('ready', 'AI Assistant Ready (Fallback Mode)');

        return {
            response: fallbackResponse,
            crisisDetected: crisisCheck.isCrisis,
            crisisMessage: crisisCheck.message,
            suggestions: this.generateSuggestions(userMessage),
            timestamp: new Date().toISOString(),
            fallback: true
        };
    }

    // Create system prompt for mental health context
    createSystemPrompt() {
        return `${AI_CONFIG.systemPrompts.main}

Current assessment data: ${JSON.stringify(this.assessmentData)}`;
    }

    // Check for crisis indicators
    checkForCrisis(userMessage, aiResponse) {
        const crisisKeywords = AI_CONFIG.crisisKeywords;
        const message = userMessage.toLowerCase();
        const isCrisis = crisisKeywords.some(keyword => message.includes(keyword));

        if (isCrisis) {
            return {
                isCrisis: true,
                message: `I'm concerned about your safety. Please contact emergency services immediately: Pakistan Emergency: ${AI_CONFIG.emergencyContacts.pakistan}, or go to your nearest hospital. You can also reach Dr. Arooj directly at ${AI_CONFIG.emergencyContacts.drArooj}.`
            };
        }

        return { isCrisis: false, message: null };
    }

    // Generate helpful suggestions
    generateSuggestions(userMessage) {
        const suggestions = [];
        const message = userMessage.toLowerCase();

        if (message.includes('anxiety') || message.includes('worried')) {
            suggestions.push('Try the breathing exercise on the home page');
            suggestions.push('Consider booking a consultation with Dr. Arooj');
        }

        if (message.includes('depression') || message.includes('sad')) {
            suggestions.push('Explore our case studies for similar experiences');
            suggestions.push('Check out our assessments page for more information');
        }

        if (message.includes('therapy') || message.includes('counseling')) {
            suggestions.push('Book a consultation with Dr. Arooj');
            suggestions.push('Read about our therapy approaches');
        }

        return suggestions;
    }

    // Update assessment data based on conversation
    updateAssessmentData(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Extract mood indicators
        if (message.includes('anxious') || message.includes('worried')) {
            this.assessmentData.mood.push('anxious');
        }
        if (message.includes('sad') || message.includes('depressed')) {
            this.assessmentData.mood.push('sad');
        }
        if (message.includes('angry') || message.includes('frustrated')) {
            this.assessmentData.mood.push('angry');
        }
        if (message.includes('happy') || message.includes('good')) {
            this.assessmentData.mood.push('happy');
        }

        // Extract concerns
        if (message.includes('work') || message.includes('job')) {
            this.assessmentData.concerns.push('work-related stress');
        }
        if (message.includes('family') || message.includes('relationship')) {
            this.assessmentData.concerns.push('family/relationship issues');
        }
        if (message.includes('sleep')) {
            this.assessmentData.concerns.push('sleep problems');
        }
        if (message.includes('social') || message.includes('friends')) {
            this.assessmentData.concerns.push('social isolation');
        }
    }

    // Update status indicator
    updateStatus(status, message) {
        const indicator = document.getElementById('ai-status-indicator');
        const text = document.getElementById('ai-status-text');
        
        if (indicator && text) {
            indicator.className = `w-3 h-3 rounded-full animate-pulse ${
                status === 'ready' ? 'bg-green-500' : 
                status === 'processing' ? 'bg-yellow-500' : 
                'bg-red-500'
            }`;
            text.textContent = message;
        }
    }

    // Generate assessment report
    generateAssessmentReport() {
        const moodCounts = this.assessmentData.mood.reduce((acc, mood) => {
            acc[mood] = (acc[mood] || 0) + 1;
            return acc;
        }, {});

        const topMoods = Object.entries(moodCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([mood]) => mood);

        return {
            totalMessages: this.conversationHistory.length,
            moodPatterns: topMoods,
            concerns: [...new Set(this.assessmentData.concerns)],
            recommendations: this.generateRecommendations(topMoods, this.assessmentData.concerns)
        };
    }

    // Generate recommendations based on assessment
    generateRecommendations(moods, concerns) {
        const recommendations = [];
        
        if (moods.includes('anxious')) {
            recommendations.push('Consider trying mindfulness and breathing exercises');
            recommendations.push('Regular physical activity can help reduce anxiety');
        }
        
        if (moods.includes('sad') || moods.includes('depressed')) {
            recommendations.push('Maintain a regular sleep schedule');
            recommendations.push('Stay connected with supportive friends and family');
        }
        
        if (concerns.includes('work-related stress')) {
            recommendations.push('Practice time management and set boundaries');
            recommendations.push('Consider discussing workload with your supervisor');
        }
        
        if (concerns.includes('family/relationship issues')) {
            recommendations.push('Family therapy might be beneficial');
            recommendations.push('Practice active listening and communication skills');
        }
        
        recommendations.push('Book a consultation with Dr. Arooj for personalized care');
        
        return recommendations;
    }
}

// Global AI assistant instance
let aiAssistant;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    aiAssistant = new AIChatAssistant();
    aiAssistant.initialize();
    updateCopyrightYear();
});

// Send message function
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Check if AI is already processing - queue the message instead of blocking
    if (aiAssistant && aiAssistant.isProcessing) {
        console.log('AI is busy, queuing message...');
        // Add user message to chat but don't process yet
        addMessageToChat(message, 'user');
        // Show a message that we're queuing
        addMessageToChat("I'm currently thinking about your previous message. I'll respond to this one next.", 'assistant');
        return;
    }
    
    // Clear input
    input.value = '';
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        console.log('Sending message to AI:', message);
        // Get AI response
        const response = await aiAssistant.generateResponse(message);
        
        // Remove typing indicator
        removeTypingIndicator();
        
        if (response.error) {
            console.log('AI returned error:', response.error);
            addMessageToChat(response.error, 'assistant', true);
        } else {
            console.log('AI response successful');
            addMessageToChat(response.response, 'assistant');
            
            // Show crisis alert if needed
            if (response.crisisDetected) {
                console.log('Crisis detected, showing alert');
                showCrisisAlert(response.crisisMessage);
            }
            
            // Show suggestions if available
            if (response.suggestions && response.suggestions.length > 0) {
                console.log('Showing suggestions:', response.suggestions);
                showSuggestions(response.suggestions);
            }
        }
    } catch (error) {
        console.error('Error in sendMessage:', error);
        removeTypingIndicator();
        addMessageToChat("I'm sorry, I'm having trouble right now. Please try again or contact Dr. Arooj directly.", 'assistant', true);
    }
}

// Send quick message
function sendQuickMessage(message) {
    document.getElementById('chat-input').value = message;
    sendMessage();
}

// Add message to chat
function addMessageToChat(message, sender, isError = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    if (sender === 'user') {
        messageDiv.className = 'flex items-start space-x-3 justify-end';
        messageDiv.innerHTML = `
            <div class="bg-mental-teal text-white p-4 rounded-lg max-w-xs">
                <p class="text-sm">${message}</p>
            </div>
            <div class="w-8 h-8 bg-mental-grey rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
            </div>
        `;
    } else {
        messageDiv.className = 'flex items-start space-x-3';
        messageDiv.innerHTML = `
            <div class="w-8 h-8 bg-mental-teal rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm max-w-xs ${isError ? 'border-l-4 border-red-500' : ''}">
                <p class="text-sm text-mental-dark">${message}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

    // Show typing indicator
    function showTypingIndicator() {
        const chatMessages = document.getElementById('chat-messages');
        const sendBtn = document.getElementById('send-btn');
        
        // Disable send button and show loading state
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Thinking...
            `;
        }
        
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'flex items-start space-x-3';
        typingDiv.innerHTML = `
            <div class="w-8 h-8 bg-mental-teal rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm max-w-xs">
                <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-mental-grey rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-mental-grey rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-mental-grey rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    const sendBtn = document.getElementById('send-btn');
    
    if (typingIndicator) {
        typingIndicator.remove();
    }
    
    // Restore send button
    if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.innerHTML = 'Send';
    }
}

// Show crisis alert
function showCrisisAlert(message) {
    const crisisAlert = document.getElementById('crisis-alert');
    const crisisMessage = document.getElementById('crisis-message');
    
    if (crisisAlert && crisisMessage) {
        crisisMessage.textContent = message;
        crisisAlert.classList.remove('hidden');
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            crisisAlert.classList.add('hidden');
        }, 10000);
    }
}

// Show suggestions
function showSuggestions(suggestions) {
    const chatMessages = document.getElementById('chat-messages');
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'flex items-start space-x-3 mt-2';
    suggestionsDiv.innerHTML = `
        <div class="w-8 h-8 bg-mental-blue rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
        </div>
        <div class="bg-mental-blue/10 p-4 rounded-lg max-w-xs">
            <p class="text-sm text-mental-dark font-medium mb-2">Suggestions:</p>
            <ul class="text-xs text-mental-grey space-y-1">
                ${suggestions.map(suggestion => `<li>• ${suggestion}</li>`).join('')}
            </ul>
        </div>
    `;
    
    chatMessages.appendChild(suggestionsDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Clear chat
function clearChat() {
    const chatMessages = document.getElementById('chat-messages');
    const welcomeMessage = chatMessages.querySelector('.flex.items-start.space-x-3:first-child');
    
    // Clear all messages except welcome message
    chatMessages.innerHTML = '';
    chatMessages.appendChild(welcomeMessage);
    
    // Reset AI assistant
    if (aiAssistant) {
        aiAssistant.conversationHistory = [];
        aiAssistant.assessmentData = {
            mood: [],
            concerns: [],
            stressLevel: 0,
            sleepQuality: 0,
            socialSupport: 0,
            copingStrategies: []
        };
    }
}

// Toggle settings
function toggleSettings() {
    alert('Settings feature coming soon! For now, you can clear the chat or contact Dr. Arooj directly.');
}

// Download assessment
function downloadAssessment() {
    if (!aiAssistant) return;
    
    const report = aiAssistant.generateAssessmentReport();
    const assessmentContent = document.getElementById('assessment-content');
    
    if (assessmentContent) {
        assessmentContent.innerHTML = `
            <div class="space-y-4">
                <div class="bg-mental-warm p-4 rounded-lg">
                    <h3 class="font-semibold text-mental-dark mb-2">Conversation Summary</h3>
                    <p class="text-sm text-mental-grey">Total messages: ${report.totalMessages}</p>
                </div>
                
                <div class="bg-mental-warm p-4 rounded-lg">
                    <h3 class="font-semibold text-mental-dark mb-2">Mood Patterns</h3>
                    <p class="text-sm text-mental-grey">${report.moodPatterns.length > 0 ? report.moodPatterns.join(', ') : 'No specific patterns detected'}</p>
                </div>
                
                <div class="bg-mental-warm p-4 rounded-lg">
                    <h3 class="font-semibold text-mental-dark mb-2">Concerns Identified</h3>
                    <p class="text-sm text-mental-grey">${report.concerns.length > 0 ? report.concerns.join(', ') : 'No specific concerns identified'}</p>
                </div>
                
                <div class="bg-mental-warm p-4 rounded-lg">
                    <h3 class="font-semibold text-mental-dark mb-2">Recommendations</h3>
                    <ul class="text-sm text-mental-grey space-y-1">
                        ${report.recommendations.map(rec => `<li>• ${rec}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Show assessment results
        document.getElementById('assessment-results').classList.remove('hidden');
        
        // Scroll to assessment
        document.getElementById('assessment-results').scrollIntoView({ behavior: 'smooth' });
    }
}

// Enhanced fallback response system
function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [keyword, response] of Object.entries(AI_CONFIG.fallbackResponses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }
    
    return AI_CONFIG.fallbackResponses.default;
}
