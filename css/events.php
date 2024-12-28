<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
    <link rel="stylesheet" href="events.css">
</head>
<body>
    <header>
        <h1>Upcoming Events</h1>
    </header>

    <main>
        <section id="events">
            <h2>Our Events</h2>
            <div class="event">
                <h3>Monday - Family Blessing Prayer</h3>
                <p>Join us for a special time of prayer focused on blessings for families.</p>
                <p><strong>Time:</strong> Evening</p>
                <p><strong>Location:</strong> Rhema Faith AG Church</p>
            </div>
            <div class="event">
                <h3>Tuesday to Friday - Carecell</h3>
                <p>Connect with fellow believers in small groups for worship, prayer, and fellowship.</p>
                <p><strong>Time:</strong> Evening</p>
                <p><strong>Location:</strong> Various Locations</p>
            </div>
            <div class="event">
                <h3>Friday - Choir Practice</h3>
                <p>A dedicated session for our choir members to prepare for Sunday worship.</p>
                <p><strong>Time:</strong> Evening</p>
                <p><strong>Location:</strong> Church Hall</p>
            </div>
            <div class="event">
                <h3>Saturday - Fasting Prayer</h3>
                <p>Join us for a time of fasting and prayer to seek God's presence.</p>
                <p><strong>Time:</strong> Morning</p>
                <p><strong>Location:</strong> Main Sanctuary</p>
            </div>
            <div class="event">
                <h3>Sunday Services</h3>
                <ul>
                    <li><strong>1st Service (Tamil):</strong> 7:30 AM</li>
                    <li><strong>2nd Service (Kannada):</strong> 10:30 AM</li>
                </ul>
                <p><strong>Location:</strong> Rhema Faith AG Church</p>
            </div>
        </section>

        <section id="prayer-request">
            <h2>Prayer Request</h2>
            <form action="SoupyHoneydewCopyrightinfringement/send_prayer_request.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="prayer">Prayer Request:</label>
                <textarea id="prayer" name="prayer" rows="5" required></textarea>

                <button type="submit" name="submit">Submit</button>
            </form>
        </section>

        <section id="schedule">
            <h2>Schedule a Meeting</h2>
            <div id="calendly-embed">
                <iframe 
                    src="https://calendly.com/your-calendly-link"
                    width="100%"
                    height="600"
                    frameborder="0"
                    scrolling="no">
                </iframe>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Rhema Faith AG Church. All rights reserved.</p>
    </footer>
</body>
</html>
