<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="/api/photos/{{$photo}}" method="POST">
        @method('DELETE')
        Photo Id<input type="number" name="photoId"/>
        <input type="submit" value="wyślij">
    </form>
</body>
</html>