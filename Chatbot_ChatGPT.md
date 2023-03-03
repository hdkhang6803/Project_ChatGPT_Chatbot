# Chatbot with ChatGPT API

# OFFICIAL OUTLINE:

1. **API:**
    
    **1.1. What is API**
    
    **1.2. General Usage**
    
2. **Chatbots:**
    - **2.1. Definition:**
        
        software program that stimulate conversation with human user
        
    - **2.2. Classification:**
        - Rule-based: respond to specific keywords or phrases
        - AI-based: ML algo to analyze input and generate responses
    - **2.3. Usage:**
        - customer service: resolve issues and answer questions quickly
        - marketing and sales: product recommendations, handle online orders + payments, collect customer feedback
        - education and training: personalized training resources, language learning. Explanations, examples, interactive quiz, retain material
        - personal assist: scheduling appointment, make reservation, set reminders
        - Mental health: emotional and mental health resource
        - recipe recommendation: preference-based, dietary restrict, ingredients
        - news aggregator: summarize + update news
        - travel assist: find flights, hotels, attraction,…
        - personal finance: personal advice + common questions answers
        - job search: seek postings and personalized advice, optimize resume, prepare for interview
        - fitness: fitness advice, track progress sg workout
        - game recommendation
        - language translation
        - Legal chatbot: Create a chatbot that can provide legal advice and guidance to users.
        - Music recommendation chatbot: Build a chatbot that can suggest new music based on user preferences and listening history
        
    - **2.4. Pros and cons:**
        
        
        | Pros | Cons |
        | --- | --- |
        | Cost-effectiveness: operate 24/7, handle large amount of request | Unnaturally replicating human conversation: Struggle to understand and respond certain input ⇒ can’t handle complex or unpredictable scenarios |
        | Convenience: Immediate access to in4 ⇒ no waiting |  |
        | Scalability |  |
        
        ### 🔑 To get the most of chatbot:
        
        - design effect conversation flow:
            - use clear, concise language
            - provide multiple response options
            - use relevant, timely prompts
        - handle common challenges
            - have a strict rule sets and responses
            - have a system for tracking and analyzing user inputs
        - integrate into systems and processes
            - integrate into CRM systems or other database
            - automate tasks and processes
            - ensure chatbot’s interaction with human representatives and other systems
            - implement chatbot according to business goals and objectives
        
3. **ChatGPT:**
    - **3.1. Definition**
    - **3.2. Capabilities**
        - generate coherent and relevant responses to user inputs
        - integrate with a variety of chatbot platforms and frameworks such as, Facebook Messenger, Slack, and Telegram,…
        - offer many advanced features to further enhance the capabilities of chatbot such as fine-tuned, name entity recognition, sentiment analysis
    - **3.3. About ChatGPT API**
    - **3.4. How to use ChatGPT API Key**
4. **Building chatbot using chatGPT API:**
    - **4.1. Choose chatbot platform:**
        - consider the chatbot’s goals, types of inputs and responses
        - consider target audience and distribution channels (chatbot for e-commerce ⇒ platform integrated with e-com/payment systems)
        - research and evaluate potential chatbot platforms. Consider:
            - features and capabilities
            - level of integration with others sys and apps
            - level of customization and control available
            - cost and pricing
            - level of support and documentation provided
    - **4.2. Integrate chat GPT with platform**
        - install chat GPT package
            
            ✅ Requirements:
            
            - ≥ Python 3.6
            - PyTorch library
            - Obtain API Key
            
            ✅ Install Chat GPT package by open terminal and enter:
            
            ```basic
            pip install chat-gpt
            ```
            
        - configure API key
        - integrate chat GPT with platform’s API / SDK.
        
        ⇒ Read specifically in the platform’s documentation about integrate natural language processing tool
        
    - **4.3. Create chatbot scripts and training data**
        - Create chatbot scripts:
            - define the goals of chatbot ⇒ determine types of inputs and responses
            - create a series of prompts and responses to define conversation flow and chatbot’s content
        - Create training data:
            - collect many user inputs and responses relevant to the chatbot’s objectives:
                - manually create large datasets: write out series of inputs and responses / use chatbot platform to simulate conversation
                - use existing data sources like customer service logs / online forums: extract inputs and responses and organize into dataset
        
        📍 **Caution**: 
        
        - Pay attention to the quality and relevance of the training data
        - often review and update script and training data
    - **4.4. Test and improve**
        - use chat GPT API to train the chatbot on the training data
        - **Test chatbot:**
            - Identify test cases
            - Set up test environment (hardware, software, data)
            - Run tests and collect results
            - Evaluate results of the test cases and compare to expected results
            - Identify issues and bugs
        - **Debug chatbot:**
            - Review code and identify potential issues or bugs
            - Use debugging tools and techniques (print statements/breakpoints) ⇒ identify root cause
            - Fix the issue/bug by modifying code
        - adjust and retrain if needed until reach desired level
        
5. **Other movement towards the created chatbot:**
    - **5.1. Incorporating Natural Language Processing and ML Techniques**
        
        ✅ ********Purpose:******** make chatbot understand and respond to wide range of inputs more accurate and relevant.
        
        - **Define the chatbot’s goals and needed NLP/ML techniques**
        - **Research and evaluate NLP/ML techniques:**
            - reviewing academic literature
            - testing different techniques
            - consulting with experts
            
            ⇒ define the NLP/ML techniques used
            
        - **Integrate the techniques into chatbot:**
            - modify scripts and training data to incorporate the techniques
            - configure and optimize the chatbot’s model
            - adjust and retrain if needed until reach desired level
        
    - **5.2. Using Pre-Trained Models and Fine-Tuning for specific tasks**
        
        ✅ **Purpose**: speed up the development process and improve performance
        
        - Identify chatbot’s goals and types of pre-trained models
        - Research and evaluate relevant pre-trained models and tasks
            - reviewing academic literature
            - testing different techniques
            - consulting with experts
        - Download and install the models and tasks: from online respositories or purchase them from vendors
        - Fine-tune the models and tasks for the specific chatbot tasks
    - **5.3. Adding custom functionality and integrations to chatbots:**
        
        ✅ ******************Purpose:****************** enhance chatbot’s capabilities and allow additional value to user
        
        - Identify goals and types of custom functionality
        - Research and evaluate relevant functionality and integrations
        - Integrate into the chatbot:
            - modify scripts and training data
            - configure necessary APIs or integrations
        - Test and evaluate performance
        - Adjust scripts and data then retest until reach desired level
        
        **✅ Example:**
        
        - **Payment processing:** allowed to facilitate transactions and handle payments ⇒ E-commerce
        - **Data integration:** allowed to access and use data from these sources. (weather API integrated chatbot can give up-to-date weather in4)
        - **Social media integration:** allowed to interact with users on media platforms and access user data ⇒ Marketing / customer service
        - **Custom analytics:** allowed to track and analyze user interactions and behaviors, provide insights and recommendations consequently ⇒ Healthcare, finance (data-driven industries)
        - Custom visualization: allowed to generate and display charts, graphs, … ⇒ Finance, Business
        
    
    > For section 4 and 5, we could present how we apply the instructions in our progress building the chatbot.
    > 
    
    ---
    

# BOOK’S RAW SUMMARY

# Section 1. Chatbots:

## ✅ **Definition**:

software program that stimulate conversation with human user

## **✅ Classification:**

- Rule-based: respond to specific keywords or phrases
- AI-based: ML algo to analyze input and generate responses

## ✅ Usage:

- customer service: resolve issues and answer questions quickly
- marketing and sales: product recommendations, handle online orders + payments, collect customer feedback
- education and training: personalized training resources, language learning. Explanations, examples, interactive quiz, retain material
- personal assist: scheduling appointment, make reservation, set reminders
- Mental health: emotional and mental health resource
- recipe recommendation: preference-based, dietary restrict, ingredients
- news aggregator: summarize + update news
- travel assist: find flights, hotels, attraction,…
- personal finance: personal advice + common questions answers
- job search: seek postings and personalized advice, optimize resume, prepare for interview
- fitness: fitness advice, track progress sg workout
- game recommendation
- language translation
- Legal chatbot: Create a chatbot that can provide legal advice and guidance to users.
- Music recommendation chatbot: Build a chatbot that can suggest new music based on user preferences and listening history

## ✅ Pros and cons:

| Pros | Cons |
| --- | --- |
| Cost-effectiveness: operate 24/7, handle large amount of request | Unnaturally replicating human conversation: Struggle to understand and respond certain input ⇒ can’t handle complex or unpredictable scenarios |
| Convenience: Immediate access to in4 ⇒ no waiting |  |
| Scalability |  |

### 🔑 To get the most of chatbot:

- design effect conversation flow:
    - use clear, concise language
    - provide multiple response options
    - use relevant, timely prompts
- handle common challenges
    - have a strict rule sets and responses
    - have a system for tracking and analyzing user inputs
- integrate into systems and processes
    - integrate into CRM systems or other database
    - automate tasks and processes
    - ensure chatbot’s interaction with human representatives and other systems
    - implement chatbot according to business goals and objectives

---

# Section 2. ChatGPT

## ✅ Capabilities:

- generate coherent and relevant responses to user inputs
- integrate with a variety of chatbot platforms and frameworks such as, Facebook Messenger, Slack, and Telegram,…
- offer many advanced features to further enhance the capabilities of chatbot such as fine-tuned, name entity recognition, sentiment analysis

## I. **Set up ChatGPT chatbot:**

### I.1. Installing and Configuring chat GPT:

1.1. Requirements:

- ≥ Python 3.6
- PyTorch library
- Obtain API Key

1.2. Install Chat GPT package by open terminal and enter:

```basic
pip install chat-gpt
```

1.3. Configure the API key within the chatbot platform console.

1.4 Create chatbot script and training data

- Create chatbot scripts:
    - define the goals of chatbot ⇒ determine types of inputs and responses
    - create a series of prompts and responses to define conversation flow and chatbot’s content
- Create training data:
    - collect many user inputs and responses relevant to the chatbot’s objectives

### I.2. Choose chatbot platform and Integrating Chat GPT:

**2.1. Narrow down choices:**

- consider the chatbot’s goals, types of inputs and responses
- consider target audience and distribution channels (chatbot for e-commerce ⇒ platform integrated with e-com/payment systems)
- research and evaluate potential chatbot platforms. Consider:
    - features and capabilities
    - level of integration with others sys and apps
    - level of customization and control available
    - cost and pricing
    - level of support and documentation provided

**2.2. Integrate chat GPT with platform”**

- install chat GPT package
- configure API key
- integrate chat GPT with platform’s API / SDK.

⇒ Read specifically in the platform’s documentation about integrate natural language processing tool

2.3. Create chatbot scripts and training data

2.4. Test and improve:

- use chat GPT API to train the chatbot on the training data
- test performance by giving many user inputs ⇒ evaluate responses
- adjust and retrain if needed until reach desired level

## II. Building a Chatbot with ChatGPT:

### II.1. Create Chatbot scripts and training data:

- Create chatbot scripts:
    - define the goals of chatbot ⇒ determine types of inputs and responses
    - create a series of prompts and responses to define conversation flow and chatbot’s content
- Create training data:
    - collect many user inputs and responses relevant to the chatbot’s objectives:
        - manually create large datasets: write out series of inputs and responses / use chatbot platform to simulate conversation
        - use existing data sources like customer service logs / online forums: extract inputs and responses and organize into dataset

📍 **Caution**: 

- Pay attention to the quality and relevance of the training data
- often review and update script and training data

### II.2. Use ChatGPT to generate Responses and improve the chatbot’s performance:

After creating the scripts and training data:

- Install and configure the ChatGPT package and obtain API key
- Train the chat bot on the training data using the Chat GPT API
- Test chatbot’s performance by providing inputs and evaluating the responses
- Adjust and retrain if needed until reach desired level

### II.3. Test and Debug the chatbot:

**3.1. Test chatbot:**

- Identify test cases
- Set up test environment (hardware, software, data)
- Run tests and collect results
- Evaluate results of the test cases and compare to expected results
- Identify issues and bugs

**3.2. Debug chatbot:**

- Review code and identify potential issues or bugs
- Use debugging tools and techniques (print statements/breakpoints) ⇒ identify root cause
- Fix the issue/bug by modifying code
- Retest

## III. Advanced Techniques for building chatbots with chat GPT:

### III.1. Incorporating Natural Language Processing and ML Techniques

✅ **Purpose:** make chatbot understand and respond to wide range of inputs more accurate and relevant.

**1.1. Define the chatbot’s goals and needed NLP/ML techniques**

**1.2. Research and evaluate NLP/ML techniques:**

- reviewing academic literature
- testing different techniques
- consulting with experts

⇒ define the NLP/ML techniques used

**1.3. Integrate the techniques into chatbot:**

- modify scripts and training data to incorporate the techniques
- configure and optimize the chatbot’s model
- adjust and retrain if needed until reach desired level

### III.2. Using Pre-Trained Models and Fine-Tuning for specific tasks

✅ **Purpose**: speed up the development process and improve performance

2.1. Identify chatbot’s goals and types of pre-trained models

2.2. Research and evaluate relevant pre-trained models and tasks

- reviewing academic literature
- testing different techniques
- consulting with experts

2.3. Download and install the models and tasks: from online respositories or purchase them from vendors

2.4. Fine-tune the models and tasks for the specific chatbot tasks

### III.3. Adding custom functionality and integrations to chatbots:

✅ **Purpose:** enhance chatbot’s capabilities and allow additional value to user

3.1. Identify goals and types of custom functionality

3.2. Research and evaluate relevant functionality and integrations

3.3. Integrate into the chatbot:

- modify scripts and training data
- configure necessary APIs or integrations

3.4. Test and evaluate performance

3.5. Adjust scripts and data then retest until reach desired level

**✅ Example:**

- **Payment processing:** allowed to facilitate transactions and handle payments ⇒ E-commerce
- **Data integration:** allowed to access and use data from these sources. (weather API integrated chatbot can give up-to-date weather in4)
- **Social media integration:** allowed to interact with users on media platforms and access user data ⇒ Marketing / customer service
- **Custom analytics:** allowed to track and analyze user interactions and behaviors, provide insights and recommendations consequently ⇒ Healthcare, finance (data-driven industries)
- Custom visualization: allowed to generate and display charts, graphs, … ⇒ Finance, Business

## IV. Best practices for building chatbots with chat GPT

### IV.1. Tips for designing an effective chatbot conversation flow

1.1. Identify goals and types of conversations/interactions

1.2. Research and evaluate different conversation flows, interaction patterns

- reviewing academic literature
- testing different conversation flows and interaction patterns
- consulting with experts

1.3. Design script and training data

- creating specific responses and actions in different scenarios
- organizing script and training data in logical and coherent way

1.4. Testing and considering user’s experience with the flow

- natural language processing
- personalized responses
- error handling

⇒ create a seamless and engaging user experience

### IV.2. Handling chatbot challenges

✅ Deal with uncertainty:

1. Identify uncertainty’s source in script / training data:
    - Review the chatbot’s goals
    - identify types of ambiguous inputs and scenarios
2. Design script and training data to address uncertainty
    - create specific responses, actions in uncertain scenarios
    - incorporate natural language processing techniques
3. Test and evaluate:
    - identify test cases to evaluate
    - set up test environment (hardware, software and data)
    - run cases → collect results
    - evaluate results of the test cases → compare to expected results
    - identify issues / bugs during the testing process
4. adjust and retest until reach desired level

✅ Other methods:

- Integrate error handling tools
- Leverage natural language processing
- Review and update scripts, training data regularly