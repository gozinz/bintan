const express = require('express');
const router = express.Router();

// Simulated database (for demonstration purposes)
let bookings = [];

// POST route to create a booking
router.post('/', (req, res) => {
    const newBooking = req.body; // Assuming the request body contains the booking details
    if (!newBooking) {
        return res.status(400).json({ message: 'Booking details are required.' });
    }
    bookings.push(newBooking);
    return res.status(201).json(newBooking);
});

// GET route to retrieve all bookings
router.get('/', (req, res) => {
    return res.status(200).json(bookings);
});

module.exports = router;