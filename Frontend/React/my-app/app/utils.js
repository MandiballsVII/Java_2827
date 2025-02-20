export default function getimageurl(person, size = 's') {
        return `https://i.imgur.com/${person.imageID}${size}.jpg`;
    }