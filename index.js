import OpenAI from "openai";
    
const frenchFlag = document.getElementById("french")
const spanishFlag = document.getElementById("spanish")
const japanFlag = document.getElementById("japan")
const sendBtn = document.getElementById("send-message-btn")
const textInput = document.getElementById("text-input")
const textContainerEl = document.getElementById("text-container")
let chosenLang = 'french'


frenchFlag.addEventListener('click', function() {
        chosenLang = 'french'
})

spanishFlag.addEventListener('click', function() {
        chosenLang = 'spanish'
})

japanFlag.addEventListener('click', function() {
        chosenLang = 'japanese'
})

sendBtn.addEventListener('click', async function() {
        const text = textInput.value
        textInput.value = ''
        const response = await createAIResponse(text, chosenLang)
        textContainerEl.style.height = '150px'
        textContainerEl.innerHTML += `<h2 class="user-text">${text}</h2>
                    <h2 class="system-text">${response}</h2>`
})

async function createAIResponse(text, language) {
    const messages = 
    [
     {
        role: 'system',
        content: `You are a polyglot language instructor. You must say no more than what the user inputted, but translated to ${language}.`
     },
     {
        role: 'user',
        content: text
     } 
    ]
    
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0
        })
        
        console.log(response)
        return response.choices[0].message.content
    } catch (err) {
        console.log('Error:', err)
        textContainerEl.textContent = 'Unable to access AI. Please refresh and try again'
    }

}

// {id: 'chatcmpl-C4YHP3elOMKLfE9pgsKLCNNyeL2vj', object: 'chat.completion', created: 1755201119, model: 'gpt-3.5-turbo-0125', choices: [{index: 0, message: {role: 'assistant', content: 'Je joue au rugby tous les jours.', refusal: null, annotations: []}, logprobs: null, finish_reason: 'stop'}], usage: {prompt_tokens: 42, completion_tokens: 9, total_tokens: 51, prompt_tokens_details: {cached_tokens: 0, audio_tokens: 0}, completion_tokens_details: {reasoning_tokens: 0, audio_tokens: 0, accepted_prediction_tokens: 0, rejected_prediction_tokens: 0}}, service_tier: 'default', system_fingerprint: null}

