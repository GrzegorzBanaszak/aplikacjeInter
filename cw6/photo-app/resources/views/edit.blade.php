<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Update form</h1>
    <form action="/api/photos/{{$photo}}" method="POST">
        @method('PUT')
        name<input type="text" name="name" />
        <input type="submit" value="wyślij">
    </form>
    <h1>Delete form</h1>
    <form action="/api/photos/{{$photo}}" method="POST">
        @method('DELETE')
        <input type="submit" value="Usuń">
    </form>
</body>

</html>