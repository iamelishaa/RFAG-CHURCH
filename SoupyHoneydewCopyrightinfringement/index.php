<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prayer Request</title>
</head>
<body>
    <h2>Prayer Request Form</h2>
    <form action="send_prayer_request.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br>

        <label for="prayer">Prayer Request:</label>
        <textarea name="prayer" id="prayer" required></textarea><br>

        <button type="submit" name="submit">Submit</button>
    </form>
</body>
</html>
