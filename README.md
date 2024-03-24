# S24_The_World

## What is The World

The World," aims to provide everyone with the opportunity to become a photographer and allow users worldwide to explore, purchase and use their favorite images. At the core of the platform is the use of advanced artificial intelligence technology, as well as blockchain-based smart contracts and predictive machine technology, to ensure that interactions and value exchanges between photographers and buyers are both efficient and secure. More than a simple online photo marketplace, the project represents a new, decentralized art exchange and business model

## Group Members:

### Kaiyang Chang (2281469043)
- Role: Write smart contracts primarily designed for facilitating transactions between buyers and photographers for the purchase of photographs, and capable of connecting with an oracle to transmit the photographs to an AI model.

### Yixuan Shen (Yixuan-Shen) | Hanzhen Qin (RyanLIL-XwX)
- Role: Developing a website and researching how to enable direct interaction between our website, "The World," and smart contracts. Aim to seamlessly integrate the functionality of smart contracts into our website, allowing them to run directly on the platform.

### Joe Wang (wangy78)
- Role: Focused on the AI part, using CNN and other classifiers to determine if the object matches what it claims to be and also determine the quality of the picture.

## Three main section in our project:
### Smart Contract
- Two smart contracts are needed: the **Seller Contract** enables photographers to upload their work, set prices, and receive revenue, while the **Platform Contract** facilitates transactions by transferring image links and prices between photographers and buyers. Additionally, it ensures transparency and efficiency by verifying photo quality and returning revenue to the seller accordingly.
### The world website
- Introducing a revolutionary online platform tailored for seamless transactions between photographers and buyers, integrating effortlessly with buyers' Metamask accounts. Our innovative system incorporates advanced AI technology to streamline the process, automatically extracting photo links and conducting evaluations in real-time. Through this streamlined interface, buyers can swiftly identify and purchase high-quality images that meet their specific needs. Additionally, the platform receives feedback from the AI model to ensure that selected photos meet the buyer's criteria in terms of quality and suitability for their intended use.
### Mechine learning model
- **Preparing data**:
Prepare a dataset comprising images paired with clear descriptions or labels. Preprocess the images for algorithm input by resizing, normalization, and applying data augmentation for enhanced diversity. Extract pertinent features from both images and descriptions: leverage Convolutional Neural Networks (CNNs) to extract high-level image features, while employing natural language processing (NLP) techniques to extract textual features.
- **Implementation**:
For classification tasks, start with logistic regression or decision trees for simplicity. Transition to KNN for more complexity. For advanced tasks, utilize PyTorch to implement a neural network with CNN layers for image classification. Split data into train, validation, and test sets. Employ cross-entropy loss and Adam optimizer for training. Evaluate models individually and ensemble results using techniques like voting or averaging. Assess performance using metrics like accuracy, precision, recall, and F1-score. Mainly using scikit-learn and PyTorch libraries for implementation.

## Architecture / High-level component diagram
![alt text](https://github.com/AI-and-Blockchain/S23_Crime_Canary/blob/main/images/story.png)

## Sequence Diagram
![alt text]()