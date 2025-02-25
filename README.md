# ChatBot_Summative

## Financial Chatbot

Project Definition & Domain Alignment

Chatbot Purpose

The chatbot is designed to serve as a financial assistant, providing users with insights, recommendations, and real-time responses related to financial queries.

It leverages natural language processing (NLP) and machine learning to understand user inputs and generate contextually relevant answers. 

The chatbot is particularly focused on assisting individuals with financial planning, investment strategies, budgeting, and market analysis.

Domain Alignment

The chatbot is specifically aligned with the finance domain, catering to users who seek guidance on financial management, stock market trends, and personal budgeting. 

Given the growing reliance on digital financial services, a conversational AI system can provide accessible, on-demand support, reducing the need for human intervention in routine inquiries.


Justification & Necessity

The necessity of this chatbot arises from the increasing complexity of financial decision-making and the demand for real-time, accurate financial advice.

Traditional financial advisory services are often costly and inaccessible to a broad audience.

By leveraging AI-driven automation, this chatbot aims to bridge the gap, making financial guidance more inclusive and efficient.

Furthermore, the chatbot can enhance user experience by integrating with banking applications, tracking expenses, and offering predictive financial insights based on historical data. 

With the expansion of fintech solutions, such a chatbot ensures that users remain informed and make data-driven financial decisions.



## Dataset Overview
The chatbot is trained on a domain-specific financial dataset that includes financial queries and responses. The dataset consists of two columns:
- **Query**: User input containing financial questions.
- **Response**: AI-generated or expert-verified financial answers.

## Dataset Collection & Preprocessing

To ensure the chatbot provides high-quality responses, a domain-specific financial dataset is utilized. 

The dataset is curated from reputable financial sources, ensuring relevance and accuracy.

# Preprocessing Steps:

Data Cleaning: Removal of noise, duplicate entries, and handling of missing values to maintain dataset integrity.

Tokenization: Uses WordPiece tokenization for compatibility with transformer models such as BERT, ensuring efficient handling of subwords and financial jargon.

Normalization: Lowercasing text, removing special characters, and standardizing numerical values to maintain consistency.

Stopword Removal: Eliminates common but non-informative words to enhance model efficiency.

## Performance Metrics
The chatbot model was evaluated using multiple performance metrics:
- **Accuracy**: Measures the correctness of the chatbot's responses.
- **F1 Score**: Evaluates precision and recall balance.
- **Loss Function**: Tracks model convergence during training.

### Performance Results
| Metric   | Tuned Model |
|----------|--------- - -|

| Accuracy | 0.86 |

| F1 Score | 0.0.865 |

| Loss  | 0.67 |

## Steps to Run the Chatbot
### Prerequisites
- Python 3.8+
- Transformers Library
- PyTorch/TensorFlow
- FastAPI (for API deployment)
- React (optional for UI)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/chatbot.git
   cd chatbot
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
For the API and the react too.

3. Run the chatbot API:
   ```bash
   uvicorn main:app
   ```

   - Run the react via vite by using:
"npm run dev "

4. Access the chatbot via a UI or API request.

## Example Conversations


![image](https://github.com/user-attachments/assets/5531764e-94f8-4f72-b0d3-9a227a505f25)



### Example 1: Budgeting Advice
**User:** "How can I create a monthly budget?"

**Chatbot:** "To create a monthly budget, start by listing your income sources and fixed expenses. Allocate savings and discretionary spending. Use tools like Excel or budgeting apps to track expenses."

### Example 2: Investment Guidance
**User:** "What are good investment options for beginners?"

**Chatbot:** "For beginners, consider index funds, ETFs, or high-yield savings accounts. Diversify your portfolio and invest for the long term. Always research before making financial decisions."

## Conclusion
This financial chatbot provides users with real-time assistance, leveraging machine learning to generate relevant financial insights. Its integration with APIs ensures accessibility across different platforms, enhancing user experience and financial literacy.

