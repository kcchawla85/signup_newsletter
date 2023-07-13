# Newsletter Signup Web Application

This repository contains a web application built using Express.js, Node.js, HTML, and CSS. The application allows users to sign up for a newsletter by providing their first name, last name, and email address. The user data is then added to the Mailchimp database for future communication.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine using the following command:

   ```
   git clone git@github.com:kcchawla85/signup_newsletter.git
   ```

2. Change into the project directory:

   ```
   cd newsletter-signup
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MAILCHIMP_API_KEY=your-mailchimp-api-key
   MAILCHIMP_LIST_ID=your-mailchimp-list-id
   ```

   Replace `your-mailchimp-api-key` with your actual Mailchimp API key and `your-mailchimp-list-id` with the ID of your Mailchimp list where the user data will be stored.

## Usage

1. Start the application by running the following command:

   ```
   npm start
   ```

   This will start the Express server and make the application available at `http://localhost:3000`.

2. Open your web browser and navigate to `http://localhost:3000` to access the signup page.

3. Fill in the signup form with your first name, last name, and email address.

4. Click the "Sign Up" button to submit the form.

   Upon successful submission, the application will add the user's data to the Mailchimp database using the Mailchimp API.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Mailchimp](https://mailchimp.com/)

## Contact

If you have any questions or need further assistance, please feel free to contact the project maintainers:

- Kunal Chawla (kcchawla85@gmail.com)
