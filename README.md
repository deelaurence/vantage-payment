# Payment Processing App

This project is a payment processing application built with React, TypeScript, and Tailwind CSS. The app allows users to make payments by navigating to a specific URL, passing the required parameters (such as token, amount, and description), and handling the payment through Paystack. It also utilizes React Context for managing global state and a custom Store class for handling application variables.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [How it works](#how-it-works)
4. [Usage](#usage)
5. [Key files](#key-files)

## Features
* Initiates payment process via URL parameters.
* Tailwind CSS for modern, responsive design.
* Global state management with React Context.
* Global variables stored in a custom Store class.
* Success and error toasts for user feedback.
* Integration with Paystack API.

## Getting Started

### Prerequisites
To run this project, ensure you have the following installed on your machine:

- Node.js
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/deelaurence/resume-vantage-payment.git
cd payment-processing-app
```

### How it works

http://localhost:5173/?token=abc123token&amount=1000&description=premium

This URL initiates the payment process with the following parameters:

- **token**: Your authentication token issued from the server.
- **amount**: The amount to be paid.
- **description**: Description of the payment, such as "premium" for premium services.

## Usage

Once the app is running, navigate to the provided URL, replacing the values of `token`, `amount`, and `description` as necessary. The application will handle the payment initiation using Paystack.

## Key Files:

- **src/store/Store.ts**: Contains a class with global variables like `paymentMethods`.
- **src/context/PaymentContext.tsx**: Provides and manages the global payment context using React Context API.
- **src/components/Toast.tsx**: Displays success or error messages when payments are processed.
- **src/pages/Receipt.tsx**: Displays payment details based on the URL query parameters.


