# Nomadic-Nest Backend

Welcome to the backend of the **Nomadic-Nest** project—a travel recommendation system developed as part of a Software Engineering course. This backend is built using Node.js and Express.js, providing RESTful APIs to support the application's functionalities.

## 🗂️ Project Structure

The backend directory is organized as follows:

```
backend/
├── models/           # Defines Mongoose schemas and models
├── patterns/         # Contains design patterns or reusable logic
├── repositories/     # Handles data access and database operations
├── routes/           # Defines API endpoints and route handlers
├── services/         # Implements business logic and services
├── app.js            # Initializes the Express application
├── server.js         # Entry point to start the server
├── package.json      # Project metadata and dependencies
└── package-lock.json # Exact versions of installed dependencies
```

### Detailed Breakdown

- **models/**: Houses Mongoose schemas representing the application's data models, such as users, destinations, and bookings.

- **patterns/**: Contains reusable code patterns or utilities that promote DRY (Don't Repeat Yourself) principles.

- **repositories/**: Encapsulates database operations, providing an abstraction layer over direct database interactions.

- **routes/**: Defines the application's API endpoints, mapping HTTP requests to controller functions.

- **services/**: Contains the core business logic, processing data and orchestrating operations between controllers and repositories.

- **app.js**: Sets up the Express application, including middleware configurations and route integrations.

- **server.js**: Starts the server, listening on the specified port and initializing the application.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/m-monirr/Nomadic-Nest.git
   cd Nomadic-Nest/Nomadic-Nest-main/backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `backend/` directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/nomadic-nest
   ```

   Adjust the `MONGODB_URI` as per your MongoDB setup.

4. **Start the Server**

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:3000`.

## 📬 API Endpoints

The API endpoints are defined in the `routes/` directory. Here's a brief overview:

- **User Routes**: `/api/users`
- **Destination Routes**: `/api/destinations`
- **Booking Routes**: `/api/bookings`

Each route file handles specific HTTP methods (GET, POST, PUT, DELETE) corresponding to CRUD operations.

## 🧪 Testing

To run tests (if implemented):

```bash
npm test
```

Ensure that your MongoDB instance is running before executing tests.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **dotenv**: Loads environment variables from `.env` file

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.
